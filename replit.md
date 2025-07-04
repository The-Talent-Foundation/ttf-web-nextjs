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

## User Preferences

Preferred communication style: Simple, everyday language.