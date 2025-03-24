# Trimplate - Premium Barbershop Website

A modern, responsive barbershop website built with React, TypeScript, and Vite. Features an online booking system, service menu, barber profiles, and e-commerce functionality.

## Features

- **Interactive Booking System**: Schedule appointments with specific barbers for different services
- **Service Menu**: Browse services with prices, duration, and descriptions
- **Barber Profiles**: View barber information, specialties, and social media links
- **E-commerce**: Shop for hair care products with cart functionality
- **Responsive Design**: Fully responsive across all devices
- **Animations**: Smooth transitions and animations using Framer Motion
- **Accessibility**: ARIA compliant with keyboard navigation support
- **Analytics**: Data-attribute based tracking system for user interactions
- **Interactive Map**: Google Maps integration on the contact page
- **Typography System**: Comprehensive typography styles and elements
- **History Timeline**: Interactive timeline showing company milestones

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: Zustand for cart functionality
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router v6
- **UI Components**: Radix UI primitives
- **Analytics**: Custom implementation with Google Analytics 4
- **Maps**: Google Maps API integration

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

- `/components`: UI components organized by feature
  - `/cart`: Shopping cart related components
  - `/contact`: Contact page components
  - `/layout`: Layout components
  - `/navigation`: Navigation components
  - `/pages`: Page components (Home, About, History, Typography, etc.)
  - `/ui`: Reusable UI components
- `/lib`: Utility functions and hooks
  - `analytics.ts`: Analytics implementation
  - `cart.ts`: Cart state management
  - `seo.ts`: SEO utilities
  - `sound.ts`: Sound effects
  - `utils.ts`: General utilities
- `/data`: Static data for products and services
- `/hooks`: Custom React hooks
  - `useAnalytics.ts`: Analytics hooks
  - `useContactForm.ts`: Contact form handling
- `/routes`: Application routing configuration
- `/animations`: Animation configurations

## Pages

- **Home**: Main landing page with hero slider and service overview
- **About**: Information about the barbershop and team
- **History**: Timeline of company milestones and achievements
- **Typography**: Design system showcasing text styles and elements
- **Gallery**: Photo gallery of barbershop work and atmosphere
- **Shop**: E-commerce section for hair care products
- **Blog**: Articles and news related to barbering and grooming
- **Contact**: Contact information and form
- **Book Online**: Appointment scheduling system

## Analytics Implementation

The project uses a data-attribute based tracking system:

- `data-track`: Defines the action (e.g., "Click")
- `data-category`: Groups events (e.g., "Navigation", "CTA")
- `data-label`: Provides specific context
- `data-meta`: JSON-formatted additional metadata

Example:
```html
<button 
  data-track="Click" 
  data-category="Demo" 
  data-label="Basic Button"
>
  Track Me
</button>
```

### Analytics Hooks

The `useAnalytics` hook provides convenient methods for tracking:

```tsx
const { logVideoInteraction, logPageView, logUserAction } = useAnalytics();

// Track video interactions
logVideoInteraction("play", "About Barber Video");

// Track page views
logPageView("Contact Page");

// Track custom user actions
logUserAction("Submit", "Contact Form", { formData: "..." });
```

## Performance Optimizations

- Lazy-loaded routes and components (like Google Maps)
- Image optimization with proper loading attributes
- Memoized components to prevent unnecessary re-renders
- Optimized animations with Framer Motion

## License

MIT
