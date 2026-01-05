# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🌙 Dark theme
- ♿ Accessible design

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Experience.tsx # Experience section
│   ├── Awards.tsx      # Awards section
│   ├── Freelance.tsx   # Freelance section
│   └── Footer.tsx      # Footer section
└── public/             # Static assets
```

## Customization

Update the content in each component file to match your information:
- Personal details in `components/About.tsx`
- Skills in `components/Skills.tsx`
- Projects in `components/Projects.tsx`
- Experience in `components/Experience.tsx`
- Awards and certifications in `components/Awards.tsx`

## Deployment

This project can be easily deployed on Vercel:

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy with one click

## License

This project is open source and available under the MIT License.



