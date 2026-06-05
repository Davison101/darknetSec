# Computer Repair Services Platform

A premium, world-class computer repair platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

### Homepage Sections
- ⚡ **Hero Section** - Compelling headline with CTA buttons and animated statistics
- 🔧 **Services Overview** - Interactive service cards with hover effects
- 📊 **Live Statistics** - Real-time repair statistics dashboard
- 🎯 **Problem Diagnosis Wizard** - AI-powered issue diagnosis with solutions
- ⭐ **Customer Reviews** - Auto-rotating testimonials with ratings
- 📅 **Booking System** - Quick repair booking in under 60 seconds
- 💬 **Contact Integration** - Instant validation and confirmation

### Customer Dashboard
- Track repairs in real-time
- View technician notes
- Download invoices
- Access repair history
- Warranty information

### Design Highlights
- Premium, modern UI with glassmorphism
- Smooth animations with Framer Motion
- Responsive mobile-first design
- Accessibility-first approach
- Dark mode aesthetic with vibrant accents

## Tech Stack

### Frontend
- **Framework**: Next.js 16.2
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10.16
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand
- **Notifications**: React Hot Toast

### Backend (Future)
- FastAPI
- PostgreSQL
- WebSockets for real-time updates

### Deployment
- Vercel for frontend
- Docker for containerization

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Progress.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ServiceCard.tsx
│   │   └── RepairTracker.tsx
│   └── sections/              # Page sections
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── LiveStatisticsSection.tsx
│       ├── ProblemDiagnosisSection.tsx
│       ├── ReviewsSection.tsx
│       ├── BookingSection.tsx
│       └── Footer.tsx
├── pages/
│   ├── index.tsx              # Homepage
│   ├── dashboard.tsx          # Customer dashboard
│   ├── _app.tsx               # App wrapper
│   ├── _document.tsx          # HTML document
│   └── 404.tsx                # Custom 404 page
├── hooks/
│   └── useAnimation.ts        # Animation utilities
├── lib/
│   └── utils.ts               # Utility functions
├── types/
│   └── index.ts               # TypeScript types
└── styles/
    └── globals.css            # Global styles
```

## Key Features

### 1. Hero Section
- Animated gradient background
- Premium typography hierarchy
- Quick statistics preview
- Smooth scroll navigation

### 2. Services Overview
- 6 core repair services
- Interactive hover effects
- Pricing and duration info
- Icon-based design

### 3. Live Statistics
- Real-time updating counters
- Auto-refreshing data
- Animated number transitions
- Professional cards

### 4. Diagnosis Wizard
- Issue-based diagnosis
- Possible causes listing
- Estimated repair times
- Service recommendations

### 5. Booking System
- Multi-step form validation
- Real-time error feedback
- Date/time selection
- Instant confirmation

### 6. Customer Dashboard
- Repair progress tracking
- Multi-stage timeline
- Technician notes
- Invoice downloads
- Review submissions

## Performance Optimizations

- ✅ Image optimization with Next.js
- ✅ Code splitting and lazy loading
- ✅ CSS-in-JS with Tailwind
- ✅ Font optimization with Google Fonts
- ✅ SEO optimizations with meta tags
- ✅ Smooth scrolling and animations

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Color contrast compliance
- ✅ Screen reader support

## Mobile Responsive

All sections are fully responsive with:
- Mobile-first design
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: { ... },
  accent: { ... },
  dark: { ... }
}
```

### Typography
Update font families in `_document.tsx`:
```tsx
<link href="https://fonts.googleapis.com/css2?family=..." />
```

### Content
Update service data in `ServicesSection.tsx`:
```ts
const SERVICES = [...]
```

## API Integration (Future)

```typescript
// Example API calls
const bookRepair = async (data: BookingFormData) => {
  const response = await fetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(data)
  });
  return response.json();
};
```

## Success Metrics

Track these KPIs:
- 📊 Booking conversion rate
- ⏱️ Average booking completion time
- ⭐ Customer satisfaction score
- ✅ Repair completion rate
- 🔄 Return customer percentage

## MVP Deliverables

### Phase 1 ✅
- Homepage with all sections
- Service pages
- Booking system
- Contact integration

### Phase 2 (Next)
- Customer Dashboard with real updates
- Notification system
- Email integration

### Phase 3 (Future)
- AI Repair Assistant
- Analytics Dashboard
- Technician Portal

## License

This project is proprietary and confidential.

## Support

For issues or questions, contact support@repairservices.com

---

**Created with ❤️ for premium computer repair services.**
