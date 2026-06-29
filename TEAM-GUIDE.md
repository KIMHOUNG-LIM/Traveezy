# Team Guide — File & Folder Usage

This project uses a **feature-based structure**. Each page has its own folder under `features/`, and shared things live in `shared/`, `components/`, and `assets/`. This guide tells you exactly which files to touch based on what you're working on.

---

## The One Rule

> **Only edit your own `features/<page>/` folder and your own page's HTML file.**
> **Anything in `shared/`, `components/`, or `assets/` is either agreed on by the team first, or only edited by whoever owns that shared piece.**

This is the whole point of this structure — it stops two people from editing the same global CSS file at the same time and breaking each other's work.

---

## File Ownership — By Page

| Page         | HTML file (structure/content) | CSS file (page-only styles)                | JS file (page-only behavior)              | Images folder                   |
| ------------ | ----------------------------- | ------------------------------------------ | ----------------------------------------- | ------------------------------- |
| Home         | `home.html`                 | `features/home/home.css`                 | `features/home/home.js`                 | `assets/images/home/`         |
| Destinations | `destinations.html`         | `features/destinations/destinations.css` | `features/destinations/destinations.js` | `assets/images/destinations/` |
| Food         | `food.html`                 | `features/food/food.css`                 | `features/food/food.js`                 | `assets/images/food/`         |
| Hotels       | `hotels.html`               | `features/hotels/hotels.css`             | `features/hotels/hotels.js`             | `assets/images/hotels/`       |
| About        | `about.html`                | `features/about-us/about-us.css`         | `features/about-us/about-us.js`         | `assets/images/about-us/`     |

**Rule of thumb:** *If it's only used on my page, it goes in my feature folder. If it's used everywhere, don't touch it — it's shared.*

---

## Shared Files — Team-Owned, Not Solo-Edited

| File / Folder                                           | Purpose                                                | Who touches it                                            |
| ------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| `shared/variables.css`                                | Site-wide colors, fonts, spacing variables             | Decide together**before** anyone starts their page  |
| `shared/global.css`                                   | Site-wide base styles (body, default typography, etc.) | Whole team / lead                                         |
| `shared/responsive.css`                               | Site-wide breakpoints                                  | Whole team / lead                                         |
| `shared/main.js`                                      | Global JS that runs on every page                      | Whole team / lead                                         |
| `shared/utils.js`                                     | Reusable helper functions                              | Anyone*adding* a helper — but tell the team first      |
| `components/navbar/`                                  | Shared navigation bar                                  | One owner builds/edits it; everyone else just includes it |
| `components/footer/`                                  | Shared footer                                          | One owner builds/edits it; everyone else just includes it |
| `components/email-subscription/`                      | Shared email signup block                              | One owner builds/edits it; everyone else just includes it |
| `assets/images/shared/`                               | Logo, icons, or images reused across pages             | Whoever sets up branding                                  |
| `assets/fonts/`                                       | Site-wide font files                                   | Set up once, at the start, by one person                  |
| `assets/icons/`, `assets/logo/`, `assets/videos/` | Site-wide icons/logo/video assets                      | Whoever owns branding/media                               |
| `services/bravo-api.js`                               | API calls      | Whoever is building subscribe email & newsletter to send customwr email to Bravo               |

If you think something should become shared (e.g. a color you used that other pages should also use), **don't just add it to your own CSS file** — flag it to the team and move it into `shared/variables.css` together.

---

## Step-by-Step: If You're Building One Page

Example: you're assigned the **Home** page.

1. Write your markup in `home.html`.
2. Confirm your `<head>` links these, in this order:

   - Bootstrap 5 CSS (CDN)
   - `shared/variables.css`
   - `shared/global.css`
   - `features/home/home.css` (your file — loads last so it can override if needed)
3. Drop any Home-only images into `assets/images/home/`.
4. Write any Home-only interactivity (sliders, toggles, form logic) in `features/home/home.js`.
5. Need the navbar or footer? **Include the existing markup — don't rebuild or edit it.** If something's broken in it, tell the component's owner.
6. Before your `</body>` tag, scripts should load in this order:

   - Bootstrap 5 JS bundle (CDN)
   - `shared/main.js`
   - `features/home/home.js` (yours — loads last)

Repeat the same steps for whichever page you're assigned — just swap `home` for your page name.

---

## Working with Git — Your Branch, Commits & Pushing

Each page has its own branch (e.g. `home`, `destinations`, `food`, `hotels`, `about`), already created for you. **Writing code is only half the job — you also need to commit and push it**, or nobody else can see your work.

### 1. Switch to your branch (once, at the start)

```bash
git checkout home          # swap "home" for your page name
```

Double-check you're on the right branch before you start typing code:

```bash
git branch                 # the one with a * next to it is your current branch
```

### 2. While you work — commit often, not just once at the end

After finishing a chunk of work (a section, a feature, a fix):

```bash
git add .
git commit -m "Add hero section to home page"
```

Write commit messages that describe **what** changed, not "update" or "fix stuff." Small, frequent commits are easier for everyone to review than one giant commit at the end.

### 3. Push your branch to the remote

```bash
git push origin home       # swap "home" for your branch name
```

First time pushing that branch, you may need:

```bash
git push -u origin home
```

(the `-u` just remembers the connection so next time you can simply run `git push`)

### 4. Before you start each new work session — pull first

Someone may have pushed updates to shared files (e.g. `shared/variables.css`, `components/navbar/`). Always pull before you continue, to avoid conflicts:

```bash
git checkout home
git pull origin home
```

### 5. When your page is done — open a Pull Request

Don't merge into `main` yourself. Push your branch, then open a Pull Request (PR) on GitHub/GitLab so the team lead can review before it merges into `main`.

### Git Rules — Quick Do's and Don'ts

- ✅ Commit small, working chunks — not one massive commit at the end
- ✅ Pull before you start working, especially if shared files might have changed
- ✅ Push at the end of every session — don't leave work sitting only on your laptop
- ✅ Open a PR when your page is ready for review
- 🚫 Don't work directly on `main`
- 🚫 Don't force-push (`git push -f`) unless you know exactly why you're doing it
- 🚫 Don't merge your own PR without a teammate/lead reviewing it first

---

## Quick Reference: Folder Map

```
├── home.html, destinations.html, food.html, hotels.html, about.html
│   → One HTML file per page. Edit only your own.
│
├── features/<your-page>/
│   → Your page's own .css and .js. This is your workspace.
│
├── components/
│   → Shared navbar, footer, email-subscription. One owner each. Everyone else: use, don't edit.
│
├── assets/
│   → images/<page>/   → your page's own images
│   → images/shared/   → logo, icons reused everywhere
│   → fonts/, icons/, logo/, videos/ → site-wide, set up once
│
├── services/
│   → API calls. Only touch if your page needs live data.
│
├── shared/
│   → global.css, variables.css, responsive.css, main.js, utils.js
│   → Site-wide. Team decision before editing.
│
└── README.md
```

---

## TL;DR

- ✅ Edit: your `<page>.html` + your `features/<page>/` folder + your `assets/images/<page>/` folder
- 🤝 Coordinate first: anything in `shared/`
- 🙋 Ask the owner: anything in `components/`
- 🚫 Don't: copy-paste another page's CSS into yours and modify it instead of using `shared/` — that's how styles get out of sync across the site
- 🌿 Work on your own branch (`git checkout <your-page>`), never directly on `main`
- 💾 Commit often with clear messages, pull before you start, push when you finish — code that isn't pushed doesn't exist for the rest of the team
