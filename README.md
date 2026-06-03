# Haoxiang Liu / Harrison - Academic Homepage

This repository contains a static GitHub Pages homepage for Haoxiang Liu / Harrison. The site is designed as a clean academic and engineering profile for RA, PhD, internship, and research collaboration applications.

It uses plain HTML, CSS, and Vanilla JavaScript. No backend or build step is required.

## Preview Locally

Open `index.html` directly in a browser, or start a simple local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Use a GitHub Pages user-site repository name such as:

```text
<github-username>.github.io
```

3. In GitHub repository settings, enable Pages from the main branch and root directory.

The site will be available at:

```text
https://<github-username>.github.io
```

## Files

```text
.
+-- index.html
+-- README.md
+-- assets/
|   +-- profile.jpg
+-- css/
|   +-- styles.css
+-- js/
    +-- main.js
```

## Update Content

Edit `index.html` to update:

- Profile information
- Research interests
- Selected projects
- Publication links
- Awards
- Contact links

Placeholder links currently use `#` and should be replaced when real Google Scholar, GitHub, LinkedIn, paper, code, or project links are available.

## Update Image

Replace `assets/profile.jpg` with a preferred academic portrait. If the image is missing, the page falls back to an initials avatar.
