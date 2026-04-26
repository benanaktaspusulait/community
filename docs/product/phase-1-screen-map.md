# Faz 1 Screen Map

## Amac

Bu dokuman, Faz 1 product flow'larini ekran seviyesine indirger. Buradaki hedef detayli UI tasarimi yapmak degil; hangi ekranlarin pilot icin gerekli oldugunu, hangi ekranlarin sonraya kalabilecegini ve her ekranda hangi ana aksiyonlarin olmasi gerektigini netlestirmektir.

## Global Navigation

Faz 1 icin ana uygulama navigasyonu sade kalmalidir.

| Alan | Amac |
| --- | --- |
| Home | Kullanicinin community, location ve topic'e gore faydali akis gormesi |
| Search | Eski bilgi, thread, Altin Bilgi, ilan, medya ve link bulma |
| Create | Structured post, yardim istegi, ilan veya reklam baslatma |
| Library | Altin Bilgi, cozum kartlari, FAQ, kaynaklar, media/link archive |
| Profile | Kullanici profili, saved items, ayarlar |
| Admin | Sadece yetkili kullanicilara gorunen operasyon alani |

## Screen Priority

| Oncelik | Anlam |
| --- | --- |
| P0 | Pilotun calismasi icin sart |
| P1 | Pilotun guvenli ve ikna edici olmasi icin cok degerli |
| P2 | Faz 1 icinde tasarlanabilir ama ilk surumu bloke etmemeli |

## Visitor ve Join Screens

| Screen | Oncelik | Amac | Ana Aksiyonlar | Kritik State'ler |
| --- | --- | --- | --- | --- |
| Public Community Preview | P0 | Uye olmadan degeri gostermek | Join, Request to join, View sample content | Public, private, empty, invite-only |
| Public Thread Preview | P1 | Paylasilan solved thread veya kaynakla acquisition saglamak | Join to reply, Save after join, Open community | Content available, login required, removed |
| Public Resource Preview | P1 | Altin Bilgi veya cozum karti ile guven vermek | Join, Share, View related topics | Limited preview, full access after join |
| Invite Landing | P0 | Invite linkten gelen kullaniciyi dogru community/group'a tasimak | Continue, Login, Create account | Valid, expired, revoked, usage limit reached |
| Join Request | P0 | Private community katilim talebini almak | Submit request, answer entry questions | Pending, approved, rejected |
| Join Pending | P0 | Bekleyen kullanicinin durumunu anlatmak | View preview, cancel request | Pending, rejected, approved |

## Auth ve Onboarding Screens

| Screen | Oncelik | Amac | Ana Aksiyonlar | Kritik State'ler |
| --- | --- | --- | --- | --- |
| Login / Sign Up | P0 | Friction dusuk giris | Google, Apple, email | New user, returning user, blocked user |
| Create Profile | P0 | Minimum profil bilgisi almak | Display name, optional photo | Missing name, duplicate identity |
| Location Setup | P0 | Base location ve gorunurluk secmek | Select city/area, set visibility | No location, location hidden, invalid location |
| Topic Selection | P0 | Ilk feed relevance'i kurmak | Select groups, skip with default | No groups, recommended groups |
| Notification Preference | P1 | Spam hissini azaltmak | Choose topics, comment alerts | All off, topic-only, mentions only |
| Ad Preference | P0 | Reklam gorunurlugunu kullaniciya birakmak | Show ads, hide ads | Ads on, ads off |
| Welcome / First Value | P0 | Ilk oturumda faydayi gostermek | Open solved thread, open help request, search | Empty community, seeded content available |

## Member Screens

| Screen | Oncelik | Amac | Ana Aksiyonlar | Kritik State'ler |
| --- | --- | --- | --- | --- |
| Home Feed | P0 | Relevance odakli akis | Open item, filter by topic/location, create | Empty, ads off, no permission |
| Community Home | P0 | Ana community bilgisini gostermek | Join topic, view rules, search community | Member, visitor, pending |
| Location Community | P0 | Bolgesel icerigi ayirmak | Open feed, create local post, view groups | No local posts, not joined |
| Topic Group | P0 | Konu disiplinini korumak | View posts, create in topic, view rules | Joined, not joined, post approval on |
| Post Detail / Thread | P0 | Kalici tartisma ve cevap | Comment, reply, save, report, mark solved | Open, solved, locked, removed |
| Comment Composer | P0 | Duzgun cevap akisi | Add comment, attach link/image | Rate limited, approval required |
| Search Home | P0 | Eski bilgiye hizli giris | Search, recent searches, filters | No query, popular queries |
| Search Results | P0 | Sonuclari filtrelemek | Filter, sort, open result, create if none | No results, duplicate suggestions |
| Create Type Picker | P0 | Serbest post yerine dogru template secmek | Question, help request, listing, ad | Permission missing, topic required |
| Help Request Form | P0 | Ihtiyaci structured toplamak | Fill fields, preview, publish | Missing required fields, duplicate found |
| Listing Form | P0 | Ilanlari filtrelenebilir yapmak | Fill price/location/status, upload image | Missing price, invalid location |
| Question Form | P0 | Soruya topic ve lokasyon baglamak | Title, details, topic, location | Similar thread found |
| Status Update Modal | P0 | Ihtiyac veya ilanin sonucunu isaretlemek | Open, matched, solved, closed | Owner only, admin override |
| Saved Items | P1 | Faydayi geri donulebilir yapmak | Open saved, remove save | Empty saved |
| Media & Links Archive | P1 | Eski link, video, dosya ve gorsellere ulasmak | Filter by type/topic/date, open thread | No media, removed source |
| Library Home | P0 | Altin Bilgi ve FAQ'a erisim | Browse categories, search library | Empty, curated sections |
| Cozum Karti Detail | P0 | Checklist ve rehber sunmak | Save, share, suggest update, open sources | Outdated, pending update |
| Profile | P0 | Kullanici kimligi ve katkilar | View posts, edit profile, settings | Private profile, blocked |
| Settings | P0 | Hesap ve tercihleri yonetmek | Location, notifications, ads, account | Ads off, data request pending |
| Report Modal | P0 | Sikayeti kolay almak | Select reason, add note, submit | Already reported, blocked |
| Block Confirmation | P1 | Kullanici bazli rahatsizligi azaltmak | Confirm block, cancel | Already blocked |

## Advertiser / Provider Screens

| Screen | Oncelik | Amac | Ana Aksiyonlar | Kritik State'ler |
| --- | --- | --- | --- | --- |
| Reklam Ver Entry | P1 | Reklam akisini baslatmak | Choose ad type, continue | User not eligible, ads policy |
| Ad Create Form | P1 | Reklami structured almak | Title, description, image, link, dates | Missing fields, policy warning |
| Ad Targeting | P1 | Lokasyon ve topic hedeflemek | Select location, topic, service area | Too broad, no eligible audience |
| Ad Preview | P1 | Reklamin nasil gorunecegini gostermek | Submit for review, edit | Ads off note, mobile preview |
| Ad Status | P1 | Reklam vereni bekletmeden bilgilendirmek | View pending, edit rejected, pause | Pending, approved, rejected, paused |
| Basic Ad Report | P2 | Faydayi gostermek | View impressions, clicks, saves, helpful, reports | Low data, no delivery |

## Admin Screens

| Screen | Oncelik | Amac | Ana Aksiyonlar | Kritik State'ler |
| --- | --- | --- | --- | --- |
| Admin Home | P0 | Operasyon durumunu ozetlemek | Open queues, view alerts, quick actions | No pending work, high risk |
| Approval Queue | P0 | Tum onaylari tek yerde toplamak | Approve, reject, request edit, escalate | Empty, filtered, overdue |
| Approval Detail | P0 | Karar vermek icin context gostermek | View item, view user, decide | Missing context, already handled |
| Join Requests | P0 | Private community uyeliklerini yonetmek | Approve, reject, message reason | Bulk pending, duplicate user |
| Reports Queue | P0 | Sikayetleri islemek | Warn, mute, remove, no action | Multiple reports, high risk |
| Member Detail Admin | P0 | Uye history ve aksiyonlarini gormek | View reports, mute, remove from group | Scoped permission, platform escalation |
| Community Structure | P0 | Location ve topic yapisini gormek | Add/edit group, assign admin | Duplicate group, permission missing |
| Topic Group Settings | P0 | Konu kurallarini uygulamak | Edit rules, post approval, pinned items | Approval on/off, locked group |
| Role Management | P0 | Sub-admin ve moderator atamak | Assign role, revoke role | Scope required, owner protected |
| Invite Links | P0 | Migration'i baslatmak | Create link, revoke, copy, QR | Expired, limit reached |
| Altin Bilgi Manager | P0 | Kutuphaneyi curate etmek | Create card, edit, publish, archive | Draft, pending, published |
| Admin Picks | P1 | Haftalik degerli icerigi one cikarmak | Pick thread, write summary, publish | No picks, draft |
| Ad Approval | P1 | Reklam kalitesini korumak | Approve, reject, request edit | Sensitive category, reported advertiser |
| Migration Checklist | P1 | Adminin tasinma surecini tamamlamasi | Seed content, create invites, publish preview | Incomplete, ready |
| Audit Log | P1 | Admin kararlarini izlenebilir yapmak | Filter actions, open decision | No permission, retention limit |

## Platform Admin Screens

| Screen | Oncelik | Amac | Ana Aksiyonlar | Kritik State'ler |
| --- | --- | --- | --- | --- |
| Platform Admin Home | P1 | Tum pilotlari izlemek | View communities, risk alerts | No pilots, active pilots |
| Community Create / Approve | P1 | Ana community acilisini kontrollu tutmak | Create, approve, reject | Duplicate community |
| Community Admin Assignment | P1 | Ana adminleri yonetmek | Assign admin, revoke admin | Owner conflict |
| Platform Policy Settings | P2 | Genel policy'leri yonetmek | Edit ad policy, report thresholds | Requires rollout |
| Platform Ad Review | P2 | Yuksek riskli reklamlari incelemek | Approve, reject, escalate | Sensitive category |

## Required Cross-Screen States

Her kritik ekran icin su state'ler tasarimda dusunulmelidir:

| State | Neden Gerekli |
| --- | --- |
| Loading | Mobil deneyimde veri gecikmeleri normal |
| Empty | Yeni pilotta bos alanlar olacak |
| No permission | Scoped admin ve private community icin sart |
| Pending approval | Join, ad, resource ve hassas postlarda gerekir |
| Rejected | Kullaniciya neden ve sonraki adim anlatilmali |
| Removed | Moderasyon sonrasi eski linkler kirilmamali |
| Reported | Sikayet edilen icerik icin owner/admin davranisi net olmali |
| Ads off | Kullanici reklamlari kapattiysa reklam alanlari gizlenmeli |
| No results | Aramadan structured request'e gecis saglanmali |
| Duplicate found | Yeni post oncesi mevcut bilgiye yonlendirme |
| Expired invite | Migration linkleri icin kritik |
| Rate limited | Spam ve kotu kullanim icin gerekli |

## Faz 1 MVP Screen Set

Ilk tasarim sprintinde P0 ekranlar yeterlidir:

- Public Community Preview
- Invite Landing
- Join Request
- Login / Sign Up
- Profile, Location, Topic ve Ad Preference onboarding
- Home Feed
- Topic Group
- Search Home ve Search Results
- Post Detail / Thread
- Create Type Picker
- Help Request Form
- Listing Form
- Question Form
- Library Home
- Cozum Karti Detail
- Settings
- Report Modal
- Admin Home
- Approval Queue
- Join Requests
- Reports Queue
- Community Structure
- Invite Links
- Altin Bilgi Manager

## Tasarimda Ozellikle Korunacak Kararlar

- Ana ekran chat gibi davranmamalidir.
- Create akisi kullaniciyi dogru template'e zorlamalidir.
- Search sadece metin aramasi degil, eski community hafizasina giris kapisi olmalidir.
- Ad preference onboarding ve settings icinde net gorunmelidir.
- Reklam create akisi normal post create akisindan ayrilmalidir.
- Admin aksiyonlari scoped permission ile calismalidir.
- Sikayet ve block kullanici icin 1-2 tap ile ulasilabilir olmalidir.
- Library ve Altin Bilgi ana navigasyonda gorunur olmalidir.
- Media/link archive Library'nin altinda dogrudan erisilebilir olmalidir.

## Sonraki Adim

Bu ekran haritasindan sonra ilk cikarilacak artefact low-fidelity wireframe setidir.

Wireframe seti once su 5 kritik yolculugu gostermelidir:

1. Visitor preview'dan uye olur.
2. Kullanici eski bilgiyi arar ve bulur.
3. Kullanici `oda ariyorum` yardim istegi acar.
4. Kullanici reklam gormeyi kapatir, reklam veren reklam olusturur.
5. Admin join request, report ve Altin Bilgi onayini yonetir.

