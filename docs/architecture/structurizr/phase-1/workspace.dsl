workspace "Community Platform — Phase 1" "Phase 1 architecture driven by product flows (C4 + dynamic views)." {

  !identifiers hierarchical

  model {
    /*
      People
    */
    person visitor "Visitor" "Arrives via invite/preview, signs up, becomes a member."
    person member "Member" "Searches, reads resources, creates threads, replies, reports."
    person creator "Creator (Advertiser/Provider)" "Creates ads and submits for approval."
    person moderator "Moderator / Admin" "Reviews approvals and reports; curates the library."
    person platformAdmin "Platform Admin" "Sets platform-wide policies (optional in Phase 1)."

    /*
      External systems (Phase 1 minimal)
    */
    softwareSystem emailSms "Email/SMS Provider" "Account verification and outbound notifications." "External"
    softwareSystem objectStorage "Object Storage" "Ad images / attachments (optional in Phase 1)." "External"

    /*
      The software system
    */
    softwareSystem communityPlatform "Community Platform" "Community memory + structured actions, not chat-first." {
      container client "Client (Web/Mobile)" "User-facing application." "Web / Mobile"
      container backend "Backend API" "Core API for content, search, moderation, ads, approvals, and RBAC." "HTTP/JSON"
      container database "Database" "Primary data store (source of truth + auditability)." "SQL"

      container search "Search Index (optional)" "Dedicated index for threads/resources (Phase 1 can start DB-backed keyword search)." "Search index"
      container notifications "Notifications" "Verification + decision notifications." "Email/SMS + in-app/push"

      /*
        Backend components (Phase 1)
      */
      backend {
        component auth "Auth & Onboarding" "Signup/login/verification and onboarding preferences." "Backend module"
        component rbac "RBAC" "Role assignments and scoped authorization checks." "Backend module"
        component content "Content" "Communities, groups, memberships, invites, threads, posts, lifecycle." "Backend module"
        component library "Library" "Resources (knowledge cards), publish lifecycle, provenance links." "Backend module"
        component searchModule "Search" "Query/filters and duplicate deflection for threads/resources." "Backend module"
        component moderation "Moderation" "Reports, queues, decisions, enforcement actions." "Backend module"
        component ads "Ads" "Ad drafts/submission, approval integration, status transitions." "Backend module"
        component approvals "Approvals" "Approval queue and decisions for join requests, ads, resources, sensitive posts, and group requests." "Backend module"
        component groupManagement "Group Management" "Handles group creation, special day groups, and invitation routing." "Backend module"
      }
    }

    /*
      Person -> system relationships
    */
    visitor -> communityPlatform "Joins via invite/preview and signs up"
    member -> communityPlatform "Searches, reads, creates threads, replies, reports"
    creator -> communityPlatform "Creates ads and submits for approval"
    moderator -> communityPlatform "Resolves reports, curates library, approves ads"
    platformAdmin -> communityPlatform "Defines platform-wide policies (optional)"

    /*
      Container relationships
    */
    client -> backend "Uses" "HTTPS/JSON"
    backend -> database "Reads/Writes" "SQL"
    backend -> search "Indexes/Queries (optional)" "HTTP/Index API"
    backend -> notifications "Publishes notification events" "Events/API"
    notifications -> emailSms "Delivers verification/notifications" "API"
    backend -> objectStorage "Stores/reads media (optional)" "S3 API"

    /*
      Component relationships (Backend API)
    */
    client -> auth "Authenticates and completes onboarding" "HTTPS/JSON"
    client -> content "Reads and writes threads/posts" "HTTPS/JSON"
    client -> library "Reads resources (and admin-only publishing)" "HTTPS/JSON"
    client -> searchModule "Searches threads/resources" "HTTPS/JSON"
    client -> moderation "Creates reports" "HTTPS/JSON"
    client -> ads "Creates/edits ads (creator)" "HTTPS/JSON"
    client -> approvals "Reviews/decides approvals (admin/mod)" "HTTPS/JSON"
    client -> groupManagement "Creates groups and sends invitations" "HTTPS/JSON"

    auth -> database "Stores identities, sessions, preferences" "SQL"
    rbac -> database "Stores role assignments" "SQL"
    content -> database "Stores communities/groups/threads/posts" "SQL"
    library -> database "Stores resources and provenance links" "SQL"
    moderation -> database "Stores reports and moderation decisions" "SQL"
    moderation -> groupManagement "Enforces group removal or viewer-mode limits" "Internal API"
    ads -> database "Stores ads and statuses" "SQL"
    approvals -> database "Stores approval items and decisions" "SQL"
    groupManagement -> database "Stores groups and invitations" "SQL"
    searchModule -> database "DB-backed keyword search (Phase 1 baseline)" "SQL"
    searchModule -> search "Queries index (when enabled)" "HTTP/Index API"
    content -> search "Indexes threads (when enabled)" "HTTP/Index API"
    library -> search "Indexes resources (when enabled)" "HTTP/Index API"

    auth -> notifications "Requests verification delivery" "Events/API"
    approvals -> notifications "Notifies creators of decisions" "Events/API"

    auth -> emailSms "Sends verification codes (if using email/SMS)" "API"
  }

  views {
    systemContext communityPlatform "context" {
      include *
      autolayout lr
      title "C4 — System Context (Phase 1)"
      description "Actors and external dependencies for Phase 1."
    }

    container communityPlatform "containers" {
      include visitor
      include member
      include creator
      include moderator
      include platformAdmin
      include client
      include backend
      include database
      include search
      include notifications
      include emailSms
      include objectStorage
      autolayout lr
      title "C4 — Containers (Phase 1)"
      description "Phase 1 containers with optional search index and external providers."
    }

    component backend "components" {
      include *
      autolayout lr
      title "C4 — Components (Backend API, Phase 1)"
      description "Phase 1 backend modules mapped to product flows and admin operations."
    }

    /*
      Dynamic views for critical Phase 1 journeys.
      These are not “perfect sequence diagrams”; they exist to validate boundaries and responsibilities.
    */

    dynamic communityPlatform "J1-join-onboarding-first-value" {
      title "Dynamic — J1 Join → Onboarding → First value"
      description "Visitor becomes a member; onboarding seeds relevance; home feed loads."
      visitor -> client "Open preview/invite and view preview cards"
      visitor -> client "Start join"
      client -> auth "Start signup/login"
      auth -> emailSms "Send verification (if required)"
      client -> auth "Submit verification code"
      client -> auth "Submit onboarding preferences"
      auth -> database "Persist profile/preferences"
      client -> content "Load home feed"
      content -> database "Read threads/resources for feed"
    }

    dynamic communityPlatform "J2-search-find-resolve" {
      title "Dynamic — J2 Search → Find → Resolve without posting"
      member -> client "Open search"
      client -> searchModule "Query with filters"
      searchModule -> database "Keyword search (baseline)"
      searchModule -> search "Query index (optional)"
      client -> content "Open thread detail"
      content -> database "Read thread + posts"
    }

    dynamic communityPlatform "J3-help-request-replies-close" {
      title "Dynamic — J3 Create help request → Replies → Close"
      member -> client "Create help request"
      client -> content "Create thread + first post"
      content -> database "Persist thread + post"
      member -> client "Reply to thread"
      client -> content "Add post"
      content -> database "Persist post"
      member -> client "Close thread (owner)"
      client -> content "Close thread"
      content -> database "Persist status change"
    }

    dynamic communityPlatform "J4-ads-off-create-approve" {
      title "Dynamic — J4 Ads off + Ad create + Admin approval"
      member -> client "Disable ads in settings"
      client -> auth "Update ad preference"
      auth -> database "Persist preference"

      creator -> client "Create ad"
      client -> ads "Save draft / submit"
      ads -> database "Persist ad"
      ads -> approvals "Create approval item (pending)"
      approvals -> database "Persist approval"

      moderator -> client "Review approval queue"
      client -> approvals "Approve/reject ad"
      approvals -> database "Persist decision"
      approvals -> notifications "Notify creator"
    }

    dynamic communityPlatform "J5-report-and-resolve" {
      title "Dynamic — J5 Report content -> Admin resolves"
      member -> client "Report a thread/post/resource/user"
      client -> moderation "Submit report"
      moderation -> database "Persist report"
      moderator -> client "Open reports queue"
      client -> moderation "Warn / set viewer mode / remove / dismiss"
      moderation -> groupManagement "Enforce group-level viewer-mode or removal"
      groupManagement -> database "Persist group membership state change"
      moderation -> database "Persist resolution and enforcement action"
    }

    dynamic communityPlatform "J6-special-day-groups" {
      title "Dynamic — J6 Special Day Groups and Invitations"
      description "Platform admin creates a special group (e.g. 23 April) and routes invitations to other group members."
      platformAdmin -> client "Create special day group"
      client -> groupManagement "Create group"
      groupManagement -> database "Persist group"
      platformAdmin -> client "Trigger cross-group invitations"
      client -> groupManagement "Initiate invite dispatch"
      groupManagement -> database "Lookup target members"
      groupManagement -> notifications "Publish invite events"
    }

    styles {
      element "Person" {
        shape person
        background "#0b3d91"
        color "#ffffff"
      }
      element "Software System" {
        background "#116466"
        color "#ffffff"
      }
      element "Container" {
        background "#2c3531"
        color "#ffffff"
      }
      element "Component" {
        background "#d1e8e2"
        color "#000000"
      }
      element "External" {
        background "#7d2e68"
        color "#ffffff"
        border solid
      }
    }
  }
}
