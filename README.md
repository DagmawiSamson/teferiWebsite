# Teferi Locksmith Website

A modern, animated locksmith website built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Smooth scroll animations with Framer Motion
- 🎨 Animated hero section with floating key icons
- 🃏 Service cards with hover effects (lift, glow, flip)
- 📱 Fully mobile-responsive design
- 🎯 Prominent call-to-action buttons with pulse animation
- 🏆 Trust indicators section (years in business, 24/7 badge)
- 💬 Testimonials carousel with smooth transitions
- 🎨 Professional blue/black color scheme with gold accents

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with floating keys
│   ├── Navbar.jsx        # Navigation bar
│   ├── Services.jsx      # Service cards with hover effects
│   ├── TrustIndicators.jsx # Trust badges and stats
│   ├── Testimonials.jsx  # Testimonials carousel
│   └── Footer.jsx        # Footer with CTA
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Customization

- Update phone numbers in components
- Modify colors in `tailwind.config.js`
- Add/remove services in `Services.jsx`
- Update testimonials in `Testimonials.jsx`

