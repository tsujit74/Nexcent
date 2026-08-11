# Nexcent Landing Page

A responsive landing page recreated from the provided Figma design as part of an SDE-1 technical assignment.

## Live Demo

https://nexcent-phi-three.vercel.app/

## GitHub Repository

https://github.com/tsujit74/Nexcent

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Next.js App Router

## Features

* Pixel-accurate recreation of the provided Figma design
* Fully responsive design for desktop, tablet, and mobile
* Reusable and modular React components
* Structured JSON-based page content
* Reusable Button UI component
* Reusable feature and card components
* Dynamic rendering of repeated content using structured data
* Responsive header and footer
* Newsletter subscription UI
* Social media links with icon assets
* Optimized image rendering using Next.js Image
* Semantic and accessible HTML structure
* Custom favicon

## Project Structure

```text
.
├── app/
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Clients.tsx
│   │   ├── Community.tsx
│   │   ├── FeatureSection.tsx
│   │   ├── Statistics.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Blog.tsx
│   │   └── CTA.tsx
│   │
│   └── ui/
│       └── Button.tsx
│
├── data/
│   └── landing-page.json
│
├── public/
│   └── images/
│
├── types/
│   └── landingpage.ts
│
├── next.config.ts
├── package.json
└── README.md
```

## Architecture

The application separates **content, presentation, and reusable UI components**.

### Structured Data

The page content is maintained in:

```text
data/landing-page.json
```

The JSON contains the content for:

* Header
* Hero
* Client logos
* Community section
* Feature sections
* Statistics
* Testimonial
* Blog
* CTA
* Footer
* Social links
* Newsletter

This allows content to be updated without hardcoding page-specific content inside individual components.

### Reusable Components

The UI is divided into reusable, single-responsibility components.

Examples include:

* `Header`
* `Footer`
* `Hero`
* `Clients`
* `Community`
* `FeatureSection`
* `Statistics`
* `Testimonial`
* `Blog`
* `CTA`
* `Button`

Repeated content such as features, cards, navigation links, client logos, blog posts, and social links is rendered from structured data.

The `Button` component is reused across sections instead of duplicating button markup and styling.

## Responsive Design

The landing page is responsive across:

* Desktop
* Laptop
* Tablet
* Mobile

Layouts, spacing, typography, navigation, images, and content sections adapt according to the screen size.

## Getting Started

### Prerequisites

* Node.js 18 or later
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/tsujit74/Nexcent.git
```

Navigate to the project directory:

```bash
cd Nexcent
```

Install dependencies:

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

### Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Design Reference

The implementation is based on the Figma design provided as part of the SDE-1 technical assignment.

## Deployment

The application is deployed on Vercel.

**Live Application:**

https://nexcent-phi-three.vercel.app/

## Assignment

This project was developed as part of an SDE-1 technical assessment with a focus on:

* Clean architecture
* Reusable components
* Maintainable code
* Responsive design
* Structured content
* Modern React and Next.js practices
