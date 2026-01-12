# Python & Django Developer Portfolio

A modern, animated portfolio website built with **HTML, Tailwind CSS, and Vanilla JavaScript**.
Designed for performance and easy deployment on Vercel.

## 🚀 Deployment via GitHub (Recommended)

Since you already have a GitHub account and Vercel connected, this is the best way to deploy.

1.  **Push to GitHub**:
    Open your terminal in this `portfolio` folder and run these commands one by one:

    ```bash
    git remote add origin https://github.com/parthivajith4826/Parthiv-Ajith.git
    git branch -M main
    git push -u origin main
    ```

2.  **Deploy on Vercel**:
    1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
    2.  Click **"Add New..."** -> **"Project"**.
    3.  Select **"Import"** next to your `Parthiv-Ajith` repository.
    4.  **Framework Preset**: Leave as "Other" (it detects HTML automatically).
    5.  **Build Command**: Leave empty.
    6.  **Output Directory**: Leave empty.
    7.  Click **"Deploy"**.

Your site will be live in seconds! ⚡

### 📝 Note on Environment Variables

This is a **static website** (HTML/CSS/JS only). You do **not** need a `.env` file or `requirements.txt`.

-   **Web3Forms Access Key**: It is safely included directly in the `index.html` form, which is standard for static frontend-only forms.
-   **No Backend**: No Python or Node.js server is required. Vercel handles the static hosting automatically.

## 🛠 Customization

-   **Update Projects**: Edit the HTML in the `<section id="projects">` area.
-   **Colors**: You can adjust the `tailwind.config` script in `index.html` to change the `primary (Cyan)` or `secondary (Violet)` colors.

## 📁 Folder Structure

```
portfolio/
├── index.html      # Main website structure
├── styles.css      # Custom animations & styles
├── script.js       # Animations logic (GSAP)
└── .gitignore      # Git configuration
```

## ⚡ Tech Stack

-   **HTML5**
-   **Tailwind CSS** (via CDN)
-   **GSAP** (via CDN)
