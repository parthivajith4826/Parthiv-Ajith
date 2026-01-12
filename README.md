# Python & Django Developer Portfolio

A modern, animated portfolio website built with **HTML, Tailwind CSS, and Vanilla JavaScript**.
Designed for performance and easy deployment on Vercel.

## 🚀 How to Deploy on Vercel

Since this is a **pure static site** (no build step required), deployment is extremely simple.

### Option 1: Drag & Drop (Easiest)

1.  Go to [vercel.com](https://vercel.com) and log in.
2.  Navigate to your Dashboard.
3.  Click **"Add New..."** -> **"Project"**.
4.  Drag the entire `portfolio` folder directly onto the Vercel import area.
5.  Click **Deploy**.
6.  Done! Vercel will give you a live URL instantly.

### Option 2: Deploy via Git (Recommended for updates)

1.  Push this code to a GitHub repository.
2.  Go to Vercel and **Import** that repository.
3.  **Framework Preset**: Select "Other" (or leave as None).
4.  **Root Directory**: Ensure it points to the root where `index.html` is located.
5.  Click **Deploy**.

## 🛠 Customization

-   **Update Projects**: Edit the HTML in the `<section id="projects">` area.
-   **Contact Form**: Create a form handling endpoint at [Formspree](https://formspree.io/) and paste the URL into the `<form action="...">` attribute in `index.html`.
-   **Colors**: You can adjust the `tailwind.config` script in `index.html` to change the `primary (Cyan)` or `secondary (Violet)` colors.

## 📁 Folder Structure

```
portfolio/
├── index.html      # Main website structure
├── styles.css      # Custom animations & styles
├── script.js       # Animations logic (GSAP)
└── assets/         # Images & Icons
```

## ⚡ Tech Stack

-   **Tailwind CSS** (via CDN): Utility-first styling.
-   **GSAP** (via CDN): High-performance animations.
-   **Google Fonts**: Inter & Outfit.
