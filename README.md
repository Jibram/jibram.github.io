# Jibram's Resume Website using Vite React

A modern frontend resume bootstrapped with [Vite](https://vitejs.dev/), featuring lightning-fast development and optimized builds.

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) – Fast build tool
- [React](https://reactjs.org/) – UI library
- [Prettier](https://prettier.io/) – Code formatter tool (optional)
- [GitHub Actions](https://github.com/features/actions) - Build and Deployment directly from GitHub

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Bun](https://bun.sh/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
bun install
```

### Running in Development

```bash
bun run dev
```

Open http://localhost:5173 to view the app.

If port 5173 is already occupied by another service, the output of the command should tell you what port it was automatically assigned to.

### Building for Production

```bash
bun run build
```

The production-ready files will be in the dist/ directory.

### Previewing Production Build

```bash
bun run preview
```

### BUILD and DEPLOY on GitHub Pages

For this project, I used GitHub Actions to set up a build and deploy pipeline. This means that GitHub Actions will run the build command and upload it as a GitHub Pages artifact. This artifact will then be deployed to GitHub pages. I am using the default `actions/deploy-pages@v4`. For build and deploy on GitHub pages, feel free to read the `.github/workflows/deploy.yml` file.

### Project Structure

```bash
├── public/           # Static files
├── src/              # Source code
│   ├── assets/       # Images used in components
│   ├── components/   # Reusable UI components
│   ├── contexts/     # Just started with a context for theme
│   ├── pages/        # Routing with BrowserRouter
│   ├── App.jsx/      # App entry point
│   └── main.jsx      # Vite entry point
├── .prettierrc.json  # Prettier configuration
├── CNAME             # Domain name
├── eslint.config.js  # ESLint configuration
├── index.html        # HTML template
├── package.json      # Project metadata and scripts
├── README            # This document you're reading
└── vite.config.json  # Without this, can't run

```
