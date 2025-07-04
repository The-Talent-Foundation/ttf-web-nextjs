# The Talent Foundation - Replit Project Documentation

## Overview

This is a full-stack web application for The Talent Foundation, a boutique talent enablement agency. The project is built with React + TypeScript frontend, Express.js backend, and PostgreSQL database. The application serves as a professional website showcasing talent enablement services with the IIEA framework (Illuminate, Innovate, Elevate, Accelerate).

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Schema**: Zod for validation
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for bundling

## Key Components

### Database Schema
- **Users table**: Basic user authentication structure
- **Inquiries table**: Contact form submissions with fields for name, email, company, title, message, and privacy consent

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/inquiries` - Retrieve all inquiries (admin)

### Core Pages
- **Home**: Hero section with pain points and CTA
- **Services**: IIEA framework explanation
- **Who We Serve**: Target client profiles
- **About**: Company philosophy and founder information
- **Contact**: Contact form and scheduling

### UI Design System
- **Colors**: TF Orange (#e84e36) and TF Blue (#02a7e1) as primary brand colors
- **Typography**: Inter font family with consistent sizing scale
- **Spacing**: 8px increment system for consistent spacing
- **Components**: Accordion, buttons, cards, forms using shadcn/ui

## Data Flow

1. **Client Interactions**: Users navigate through marketing pages and submit contact forms
2. **Form Submission**: Contact forms are validated using Zod schemas and stored in PostgreSQL
3. **Server Processing**: Express.js handles API requests and database operations
4. **Response Handling**: React Query manages server state and caching

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React-DOM)
- UI libraries (Radix UI, shadcn/ui components)
- Styling (Tailwind CSS, class-variance-authority)
- Routing (Wouter)
- Data fetching (TanStack React Query)
- Form handling (React Hook Form with Zod resolvers)

### Backend Dependencies
- Express.js framework
- Database (Drizzle ORM, @neondatabase/serverless)
- Validation (Zod)
- Development tools (tsx, esbuild)

### Database
- PostgreSQL (configured for Neon Database)
- Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development
- `npm run dev` - Starts development server with Vite HMR
- Frontend runs on Vite dev server
- Backend runs on Express with tsx

### Production Build
- `npm run build` - Builds frontend with Vite and bundles backend with esbuild
- Frontend assets compiled to `dist/public`
- Backend bundled to `dist/index.js`

### Production Deployment
- `npm start` - Runs production server
- Serves static files and API routes
- Requires PostgreSQL database connection via `DATABASE_URL`

## Changelog

- July 04, 2025. Initial setup
- Jan 2, 2025. Fixed color system - Updated CSS variables to use HSL component values without hsl() wrapper for proper Tailwind CSS integration. Added custom TF brand colors to tailwind.config.ts. Website now displays The Talent Foundation brand colors (TF Orange #e84e36 and TF Blue #02a7e1) properly across all pages.
- Jan 2, 2025. Implemented comprehensive scroll animation system - Added ScrollAnimations component with progress tracking, floating CTA, and reveal-on-scroll animations. Enhanced Illuminate page with modern hover-based progressive disclosure replacing flip cards. Added scroll progress indicators, section tracking, and micro-animations across all pages for improved user engagement and professional polish.
- Jan 2, 2025. Elevated homepage design coherence - Enhanced service pillar cards with colorful gradients, sophisticated hover effects, and clickable navigation matching services page quality. Upgraded "Why We Succeed" section with gradient icons, improved layout, and enhanced micro-interactions. Added auto-hiding navigation with smooth scroll-based transitions. Fixed footer spacing issues and improved scroll indicator visibility. Achieved consistent design language throughout site with professional polish and thoughtful UI/UX details.
- Jan 2, 2025. Refined premium design consistency - Enhanced accordion section with professional gradient icons and improved spacing. Added icon animations (spinning cog for Innovate, shrinking triangle for Accelerate). Fixed "Why We Succeed" cards spacing with equal height grid. Upgraded "Who We Help" cards with premium gradients, icons, and hover effects. Added horizontal separation to "Your Proven Enablement Partner" section. Refined footer spacing and removed duplicate "Contact Us" button. Achieved coherent premium playful elegance throughout entire homepage.
- Jan 3, 2025. Enhanced navigation design coherence - Replaced all blue active/hover states with TF Orange (#e84e36) throughout desktop and mobile navigation for brand consistency. Added colorful gradient backgrounds to service icons in navigation dropdown (matching Services page styling). Changed dropdown hover background from blue to orange tint. Navigation now aligns with site's orange-dominant design language and premium aesthetic.
- Jan 3, 2025. Standardized Services page design language - Applied homepage design patterns including gradient icons for accordion sections, enhanced card hover effects, improved visual hierarchy, and micro-interactions. Added clickable service links with proper styling, responsive separators for mobile view, and consistent spacing throughout. Services page now maintains design coherence with homepage aesthetic while preserving content structure.

## User Preferences

Preferred communication style: Simple, everyday language.