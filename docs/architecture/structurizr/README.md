# Structurizr Execution Guide

This document explains how to run Structurizr and generate C4 diagrams from the DSL files in this repository.

---

## Option A — Structurizr Lite (recommended for local preview)

Structurizr Lite is a self-contained web app that renders DSL files live in the browser. No Java required beyond Docker.

### Prerequisites
- Docker Desktop (or Docker Engine)

### Steps

1. **Start Structurizr Lite**
   ```bash
   docker run -it --rm \
     -p 8080:8080 \
     -v "$(pwd)/docs/architecture/structurizr/phase-1:/usr/local/structurizr" \
     structurizr/lite
   ```
2. **Open the browser**
   ```
   http://localhost:8080
   ```
   Structurizr Lite will pick up `workspace.dsl` from the mounted folder and render all views automatically.

3. **Live reload**: edit `workspace.dsl` and refresh the browser — changes appear immediately.

---

## Option B — Structurizr CLI (export to PNG/SVG)

Use the CLI when you need static image files for documentation or CI.

### Prerequisites
- **Java 11+** (OpenJDK recommended)
- Download the CLI JAR once:
  ```bash
  curl -L -o structurizr-cli.jar \
    https://github.com/structurizr/cli/releases/latest/download/structurizr-cli.jar
  ```

### Export diagrams
```bash
java -jar structurizr-cli.jar export \
     -workspace docs/architecture/structurizr/phase-1/workspace.dsl \
     -format png \
     -output docs/architecture/structurizr/phase-1
```

Supported formats: `png`, `svg`, `mermaid`, `plantuml`, `dot`, `json`.

---

## Option C — IDE plugins (fastest for authoring)

| IDE | Plugin |
| --- | --- |
| IntelliJ IDEA | *Structurizr* plugin (JetBrains Marketplace) — live DSL preview in a side panel |
| VS Code | *Structurizr DSL* extension — syntax highlighting + preview |

---

## Embedding diagrams in docs

After exporting with Option B, embed the PNGs like this:

```markdown
![System Context](docs/architecture/structurizr/phase-1/systemContext.png)
![Containers](docs/architecture/structurizr/phase-1/containers.png)
```

---

## Best Practices

- Keep `workspace.dsl` and generated images under version control.
- Define consistent colors and shapes in the `styles {}` block (see existing DSL for examples).
- Add new dynamic views for any new critical journeys and regenerate diagrams after each change.
- Run Option B in CI to catch DSL syntax errors early.
