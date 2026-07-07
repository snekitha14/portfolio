# Snekitha Babu — Portfolio

A personal portfolio site for Snekitha Babu, an aspiring software developer and IT graduate.

## Structure & Languages

This project is split into one file per language, so each part of the stack lives in its own segment:

| File | Language | Purpose |
|---|---|---|
| `index.html` | **HTML** | Page structure and content — nav, hero, about, skills, projects, certifications, contact |
| `style.css` | **CSS** | All visual styling — layout, colors, the cosmic starfield background, hover animations, responsive breakpoints |
| `script.js` | **JavaScript** | Animates the technical skill bars into view as you scroll, using the Intersection Observer API |

## Sections

1. **Hero** — name, role, quick stats, and a photo slot (replace the placeholder `<div>` in `index.html` with an `<img>` tag once a headshot is available)
2. **001 — About** — career objective, education, soft skills, languages
3. **002 — Skills** — Python, C++, HTML5, CSS3, MySQL
4. **003 — Projects** — AI-Powered Coffee Shop Management System
5. **004 — Certifications** — IBM SkillsBuild and Coursera credentials
6. **005 — Contact** — email, LinkedIn, phone, and a message link

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
