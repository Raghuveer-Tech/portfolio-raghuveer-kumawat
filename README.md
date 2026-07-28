# Raghuveer Kumawat | Portfolio

A modern and responsive personal portfolio website built with React and Vite. This portfolio showcases my background, technical skills, projects, education, internship experience, certifications, and contact details in a clean and professional layout.

Live Demo: https://portfolio-raghuveer-kumawat.vercel.app/

## Overview

This project is designed as a one-page portfolio website that helps visitors quickly understand who I am, what I do, and how to connect with me. It includes multiple sections such as hero, about, skills, projects, resume, education, internship experience, certifications, and a contact form.

## Features

- Responsive and modern UI
- Hero section with introduction
- About section
- Skills and technologies section
- Projects showcase
- Resume section
- Education timeline
- Internship experience section
- Certifications section
- Contact form with email integration
- Smooth navigation experience

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Lucide React icons
- EmailJS for contact form functionality
- Oxlint for linting

## Project Structure

- src/components: Reusable UI sections such as Navbar, Hero, About, Projects, Contact, and Footer
- src/pages: Main landing page layout
- public: Static assets

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open your browser and visit:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

This portfolio is deployed on Vercel.

To deploy your own version:

1. Push the project to GitHub
2. Import the repository in Vercel
3. Set the build command to:
   ```bash
   npm run build
   ```
4. Set the output directory to:
   ```bash
   dist
   ```

## Contact

Feel free to connect through the contact section on the live website.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
