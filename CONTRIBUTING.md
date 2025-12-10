# Contributing to Awesome BYOC

Thank you for your interest in contributing! This is a community-curated list of BYOC (Bring Your Own Cloud) tools and resources.

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Adding a New Tool

### Requirements

Before submitting, ensure the tool:

- **Supports BYOC deployment** — The tool must offer a bring-your-own-cloud, self-hosted, or on-premises deployment option.
- **Is actively maintained** — No abandoned or unmaintained projects.
- **Has quality documentation** — Links should point to official, up-to-date sources.

### How to Add

1. Fork this repository.
2. Create a new Markdown file in `src/content/tools/` named `your-tool.md`.
3. Add the required frontmatter (see format below).
4. Update the README.md with an entry in the appropriate category.
5. Submit a pull request.

### Tool File Format

Create a file like `src/content/tools/your-tool.md`:

```markdown
---
name: Tool Name
description: Short one-line description ending with a period.
homepage: https://example.com/byoc-page
github: https://github.com/org/repo  # if open source
docs: https://docs.example.com
category: databases  # see categories below
tags:
  - relevant
  - keywords
license: open-source  # or 'commercial' or 'hybrid'
cloudSupport:
  - aws
  - gcp
  - azure
---
```

**Note:** The file name becomes the tool's URL slug (e.g., `my-tool.md` → `/tools/my-tool`).

### Categories

- `databases` — Databases and data platforms.
- `streaming` — Real-time data streaming platforms.
- `monitoring` — Monitoring and observability.
- `data-integration` — ETL and data movement tools.
- `dev-platforms` — Internal developer platforms.

### README Entry Format

Add an entry to the appropriate section in README.md following this format:

```markdown
- [Tool Name](https://link-to-byoc-docs) - Description explaining why this tool is useful for BYOC. ([Source Code](https://github.com/org/repo))
```

Guidelines for descriptions:
- Start with a capital letter.
- End with a period.
- Keep it concise (one sentence preferred).
- Explain *why* the tool is useful, not just *what* it is.
- Include `([Source Code](url))` only for open source projects.

## Updating Existing Entries

If you notice incorrect or outdated information:

1. Fork and edit the relevant file in `src/content/tools/`.
2. Update the corresponding README.md entry if needed.
3. Submit a PR with a brief description of what you fixed.

## Quality Standards

- **Accuracy** — All information must be accurate and up-to-date.
- **No promotion** — Descriptions should be factual, not promotional.
- **Proper formatting** — Follow the established format consistently.
- **Valid links** — All links must work and point to official sources.

## Development

To run the website locally:

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Questions?

Open an issue if you have questions about contributing.
