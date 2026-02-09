# Quiroz Auto Heroes - Premium Landing Page

A modern, fully responsive landing page for Quiroz Auto Heroes auto repair shop.

## Features

- **Premium Design**: Clean, trustworthy, enterprise-polished design
- **Fully Responsive**: Mobile-first approach with breakpoints for all devices
- **Scroll Animations**: Subtle fade-in-up animations that respect `prefers-reduced-motion`
- **Interactive Components**: Testimonials carousel, gallery hover effects
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- **Performance Optimized**: Fast load times, optimized animations

## Brand Colors

- Primary Navy: `#002865`
- Accent Blue: `#0460DD`
- Near-black: `#010101`
- Off-white: `#EFF5F6`

## Design System

### Layout
- Max content width: 1200px
- Section padding: 96px (desktop), 72px (tablet), 48px (mobile)
- Spacing scale: 8px units (8, 16, 24, 32, 48, 64, 96)

### Typography
- Font: Inter (via Google Fonts)
- H1: 48-56px desktop, 36-40px mobile
- H2: 32-36px desktop, 28px mobile
- Body: 16-18px, line-height 1.6

### Components
- Border radius: 12px for cards, 999px for buttons
- Button height: 48px
- Subtle shadow style throughout
- Two button styles: Primary (filled) and Secondary (outline)

## Sections

1. **Navbar** - Sticky navigation with blur effect on scroll
2. **Hero** - Main headline with CTAs and trust badges
3. **About Us** - Image collage with features list
4. **Services** - Grid of service cards (Battery, Engine, Brake, A/C, Fleet)
5. **Meet Our Mechanic** - Team intro with stats
6. **Testimonials** - Interactive carousel with 5-star reviews
7. **Gallery** - 6-image grid with hover effects
8. **Contact** - Contact cards and embedded Google Map
9. **Footer** - Business info, hours, and quick links

## Contact Information

- **Address**: 201 W North Ave, Unit 201, Villa Park, IL 60181
- **Phone**: (630) 276-0478
- **Email**: quirozautoheroes@gmail.com

## Opening Hours

- Monday - Friday: 7:30am - 5:30pm
- Saturday: 7:30am - 2:30pm
- Sunday: Closed

## Development

Navigate to the page at `/quiroz-auto-heroes` when running the development server.

## File Structure

```
app/quiroz-auto-heroes/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Mechanic.tsx
│   ├── Testimonials.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── layout.tsx
├── page.tsx
└── README.md
```

## Animations

All sections use intersection observer for scroll-triggered animations:
- Fade in with 16px upward translation
- 400ms duration with ease-out timing
- Respects `prefers-reduced-motion` setting
# quiroz-auto-heroes
