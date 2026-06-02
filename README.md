# Haoxiang Liu / Harrison - Personal GitHub Pages Site

This repository contains a static personal homepage for Haoxiang Liu / Harrison. It is designed for RA, PhD, internship, and engineering/research portfolio applications.

The site uses plain HTML, CSS, and Vanilla JavaScript. It does not require a backend or build step.

## Project Structure

```text
.
+-- index.html
+-- README.md
+-- assets/
|   +-- profile.jpg
|   +-- stm32-board.jpg
|   +-- stm32-pcb.jpg
|   +-- stm32-teaching.jpg
|   +-- speech-assistant-demo.jpg
|   +-- speech-architecture.jpg
|   +-- speech-awards.jpg
|   +-- openclaw-workflow.jpg
|   +-- openclaw-demo.jpg
|   +-- dv-world-overview.jpg
|   +-- dv-interact.jpg
+-- css/
|   +-- styles.css
+-- js/
    +-- main.js
```

## Preview Locally

You can open `index.html` directly in a browser.

For a local development server, run one of these commands from the repository root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Make sure the repository name is your GitHub Pages user-site name, for example:

```text
<github-username>.github.io
```

3. Open the repository settings on GitHub.
4. Go to **Pages**.
5. Select the main branch and root directory as the source.
6. Save the settings.

Your site will be available at:

```text
https://<github-username>.github.io
```

## Assets to Replace

Replace the image placeholders in `assets/` with real project images:

- `profile.jpg`
- `stm32-board.jpg`
- `stm32-pcb.jpg`
- `stm32-teaching.jpg`
- `speech-assistant-demo.jpg`
- `speech-architecture.jpg`
- `speech-awards.jpg`
- `openclaw-workflow.jpg`
- `openclaw-demo.jpg`
- `dv-world-overview.jpg`
- `dv-interact.jpg`

If an image is missing, the page will show a clean text placeholder instead of a broken image.

## Update Links

The following links currently use placeholders and should be replaced when available:

- Google Scholar
- GitHub
- LinkedIn
- DV-World paper
- DV-World code
- DV-World project page

Update these links directly in `index.html`.

## Update Content

Main content is stored in `index.html`. To update project descriptions, awards, skills, or contact information, edit the relevant section:

- `#about`
- `#skills`
- `#projects`
- `#research`
- `#awards`
- `#contact`

Styling is in `css/styles.css`, and small interactions such as mobile navigation, dark mode, active section highlighting, and image fallback handling are in `js/main.js`.
