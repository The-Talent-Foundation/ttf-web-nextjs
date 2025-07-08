# Technical Specifications - TTF-Web Next.js 15 Migration

## Architecture Overview

### Current State Analysis
- **Framework**: Vite + React 18 with wouter routing
- **Performance**: Enterprise-grade with 50+ Shadcn/ui components
- **Business Value**: $50,000+ professional application
- **Strengths**: Superior performance, clean architecture, proven reliability

### Target Architecture - Lean Excellence Strategy
- **Framework**: Next.js 15 with App Router + React 19
- **Database**: Supabase PostgreSQL with simple schema and easy multi-tenant path
- **CMS**: Strapi v5 with external database support
- **Hosting**: Digital Ocean App Platform with CI/CD
- **Design Philosophy**: Mobile-First Excellence with 95+ Lighthouse scores (aspiring for 99)

## MCP Tools Integration Framework

### 🛠️ MCP Development Environment Configuration

```typescript
// config/mcp-tools.ts
interface MCPToolEndpoints {
  context7: {
    endpoint: 'npx -y @upstash/context7-mcp@latest';
    features: ['library-docs', 'code-examples', 'api-reference'];
    phase: 1 | 2 | 3;
    critical: boolean;
  };
  lighthouse: {
    endpoint: 'npx lighthouse-mcp';
    features: ['performance-audit', 'accessibility-check', 'seo-validation'];
    phase: 1 | 2 | 3;
    critical: boolean;
  };
  browserUse: {
    endpoint: '/Users/adamkovacs/Documents/codebuild/mcp-servers/mcp-browser-use/.venv/bin/python -m mcp_browser_use.server';
    features: ['automated-testing', 'visual-validation', 'interaction-testing'];
    phase: 1 | 2 | 3;
    critical: boolean;
  };
  github: {
    endpoint: 'docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server';
    features: ['repo-management', 'pr-automation', 'issue-tracking'];
    phase: 2 | 3;
    critical: boolean;
  };
  supabase: {
    endpoint: 'npx -y @supabase/mcp-server-supabase@latest --read-only --features=docs,database,debug,development';
    features: ['database-management', 'schema-validation', 'performance-monitoring'];
    phase: 2 | 3;
    critical: boolean;
  };
  digitalocean: {
    endpoint: 'npx @digitalocean/mcp';
    features: ['deployment-automation', 'infrastructure-management', 'monitoring'];
    phase: 3;
    critical: boolean;
  };
}

const MCP_TOOL_MATRIX: MCPToolEndpoints = {
  context7: {
    endpoint: 'npx -y @upstash/context7-mcp@latest',
    features: ['library-docs', 'code-examples', 'api-reference'],
    phase: 1,
    critical: true
  },
  lighthouse: {
    endpoint: 'npx lighthouse-mcp',
    features: ['performance-audit', 'accessibility-check', 'seo-validation'],
    phase: 1,
    critical: true
  },
  browserUse: {
    endpoint: '/Users/adamkovacs/Documents/codebuild/mcp-servers/mcp-browser-use/.venv/bin/python -m mcp_browser_use.server',
    features: ['automated-testing', 'visual-validation', 'interaction-testing'],
    phase: 1,
    critical: true
  },
  github: {
    endpoint: 'docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN ghcr.io/github/github-mcp-server',
    features: ['repo-management', 'pr-automation', 'issue-tracking'],
    phase: 2,
    critical: true
  },
  supabase: {
    endpoint: 'npx -y @supabase/mcp-server-supabase@latest --read-only --features=docs,database,debug,development',
    features: ['database-management', 'schema-validation', 'performance-monitoring'],
    phase: 2,
    critical: true
  },
  digitalocean: {
    endpoint: 'npx @digitalocean/mcp',
    features: ['deployment-automation', 'infrastructure-management', 'monitoring'],
    phase: 3,
    critical: true
  }
};
```

### 🎯 MCP Integration Points in Architecture

```mermaid
graph TD
    A[Next.js 15 App] --> B[MCP Context7 Integration]
    A --> C[MCP Lighthouse Monitoring]
    A --> D[MCP Browser Testing]
    
    B --> E[Real-time Documentation]
    B --> F[Code Examples]
    B --> G[API References]
    
    C --> H[Performance Validation]
    C --> I[Accessibility Audits]
    C --> J[SEO Optimization]
    
    D --> K[Automated E2E Testing]
    D --> L[Visual Regression Testing]
    D --> M[User Journey Validation]
    
    N[Supabase Database] --> O[MCP Supabase Integration]
    O --> P[Schema Validation]
    O --> Q[Performance Monitoring]
    O --> R[Debug Assistance]
    
    S[Digital Ocean Platform] --> T[MCP DigitalOcean Integration]
    T --> U[Deployment Automation]
    T --> V[Infrastructure Management]
    T --> W[Monitoring & Alerts]
    
    X[GitHub Repository] --> Y[MCP GitHub Integration]
    Y --> Z[PR Automation]
    Y --> AA[Issue Management]
    Y --> BB[Code Review Enhancement]
```

### 📊 MCP-Enhanced Performance Gates

```typescript
// lib/mcp-performance.ts
interface MCPPerformanceGates {
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  browserUse: {
    loadTime: number;
    interactionTime: number;
    visualStability: number;
  };
  supabase: {
    queryTime: number;
    connectionPool: number;
    cacheHitRate: number;
  };
}

export const MCP_PERFORMANCE_THRESHOLDS: MCPPerformanceGates = {
  lighthouse: {
    performance: 95,
    accessibility: 98,
    bestPractices: 95,
    seo: 98
  },
  browserUse: {
    loadTime: 2000, // ms
    interactionTime: 100, // ms
    visualStability: 0.1 // CLS score
  },
  supabase: {
    queryTime: 100, // ms
    connectionPool: 80, // % utilization
    cacheHitRate: 90 // %
  }
};
```

### 🔧 MCP Environment Variables Configuration

```bash
# MCP Tools Configuration
MCP_CONTEXT7_ENABLED="true"
MCP_LIGHTHOUSE_ENABLED="true"
MCP_BROWSER_USE_ENABLED="true"
MCP_GITHUB_ENABLED="true"
MCP_SUPABASE_ENABLED="true"
MCP_DIGITALOCEAN_ENABLED="true"

# MCP Performance Thresholds
MCP_LIGHTHOUSE_MIN_PERFORMANCE="95"
MCP_LIGHTHOUSE_MIN_ACCESSIBILITY="98"
MCP_LIGHTHOUSE_MIN_SEO="98"
MCP_BROWSER_LOAD_TIME_MAX="2000"
MCP_SUPABASE_QUERY_TIME_MAX="100"

# MCP GitHub Integration
GITHUB_PERSONAL_ACCESS_TOKEN="your-github-token"
MCP_GITHUB_REPO="The-Talent-Foundation/ttf-web"
MCP_GITHUB_AUTO_PR="true"

# MCP Supabase Integration
MCP_SUPABASE_PROJECT_ID="your-project-id"
MCP_SUPABASE_MONITORING="true"
MCP_SUPABASE_DEBUG="development"

# MCP DigitalOcean Integration
DIGITALOCEAN_ACCESS_TOKEN="your-do-token"
MCP_DO_AUTO_DEPLOY="true"
MCP_DO_MONITORING="true"
```

## Database Architecture Specification

### Simple Schema Design with Multi-Tenant Path
```sql
-- Core Users table (single-tenant initially, multi-tenant ready)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Core Inquiries table (single-tenant initially, multi-tenant ready)
CREATE TABLE inquiries (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  title VARCHAR(255),
  message TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Simple indexes for performance
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at);
CREATE INDEX idx_inquiries_email ON inquiries(email);

-- Future multi-tenant migration path (commented for reference)
-- ALTER TABLE users ADD COLUMN tenant_id UUID REFERENCES tenants(id) DEFAULT NULL;
-- ALTER TABLE inquiries ADD COLUMN tenant_id UUID REFERENCES tenants(id) DEFAULT NULL;
```

### MCP Supabase Integration Commands

```bash
# Pre-Database Operations MCP Validation
npx claude-flow hook pre-task --mcp-validation true --tools "supabase" --fail-on-missing true

# Supabase Schema Validation with MCP
mcp_use_tool --server supabase --tool list_tables --args '{"project_id": "your-project-id", "schemas": ["public"]}'

# Supabase Performance Monitoring with MCP
mcp_use_tool --server supabase --tool get_advisors --args '{"project_id": "your-project-id", "type": "performance"}'

# Post-Database Operations MCP Verification
npx claude-flow hook post-task --task-id "database-setup" --analyze-performance true
```

### Environment Variables Configuration
```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database"
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Email Configuration
SENDGRID_API_KEY="your-sendgrid-api-key"
SENDGRID_FROM_EMAIL="hello@talent.foundation"

# Next.js Configuration
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-nextauth-secret"

# Strapi Configuration
STRAPI_API_URL="https://your-strapi-instance.com"
STRAPI_API_TOKEN="your-strapi-api-token"

# Analytics & Monitoring
GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"
SENTRY_DSN="your-sentry-dsn"

# Feature Flags
ENABLE_MULTI_TENANT="false"
ENABLE_AI_FEATURES="false"
```

## Next.js App Router Structure

### File System Routing
```
app/
├── layout.tsx                 # Root layout with providers
├── page.tsx                   # Home page
├── globals.css                # Global styles
├── loading.tsx               # Global loading UI
├── error.tsx                 # Global error boundary
├── not-found.tsx             # 404 page
├── sitemap.ts                # Dynamic sitemap generation
├── robots.ts                 # Robots.txt configuration
├── api/                      # API routes
│   ├── contact/
│   │   └── route.ts         # Contact form submission
│   └── inquiries/
│       └── route.ts         # Admin inquiries endpoint
├── about/
│   └── page.tsx             # About page
├── contact/
│   └── page.tsx             # Contact page
├── services/
│   ├── page.tsx             # Services overview
│   ├── layout.tsx           # Services layout
│   ├── accelerate/
│   │   └── page.tsx
│   ├── elevate/
│   │   └── page.tsx
│   ├── illuminate/
│   │   └── page.tsx
│   └── innovate/
│       └── page.tsx
├── who-we-serve/
│   └── page.tsx
└── components/              # Shared components
    ├── ui/                  # Shadcn/ui components
    ├── Layout.tsx           # Main layout component
    ├── Navigation.tsx       # Navigation component
    └── ScrollAnimations.tsx # Scroll animations
```

### MCP Context7 Integration for Component Development

```typescript
// lib/mcp-context7.ts
export async function getMCPDocumentation(libraryName: string) {
  // Use Context7 MCP to get real-time documentation
  const libId = await mcp_use_tool({
    server: 'context7',
    tool: 'resolve-library-id',
    args: { libraryName }
  });
  
  const docs = await mcp_use_tool({
    server: 'context7',
    tool: 'get-library-docs',
    args: { 
      context7CompatibleLibraryID: libId,
      topic: 'components',
      tokens: 10000
    }
  });
  
  return docs;
}

// Pre-Component Development MCP Commands
// npx claude-flow hook pre-task --mcp-validation true --tools "context7" --description "Component development with real-time docs"
```

### Component Migration Mapping
```typescript
// Current wouter routing
import { Switch, Route } from "wouter";

// Next.js App Router equivalent
// No routing component needed - file-based routing

// Layout component stays largely the same
// Update import paths and add metadata support
```

### API Routes Implementation
```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';
import { sendContactNotification } from '@/lib/email';

const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  companyName: z.string().optional(),
  title: z.string().optional(),
  message: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    
    // Insert inquiry into database
    const { data, error } = await supabase
      .from('inquiries')
      .insert([{
        full_name: validatedData.fullName,
        email: validatedData.email,
        company_name: validatedData.companyName,
        title: validatedData.title,
        message: validatedData.message,
        privacy_consent: validatedData.privacyConsent,
        tenant_id: null // Single tenant for now
      }])
      .select()
      .single();
    
    if (error) throw error;
    
    // Send email notification
    await sendContactNotification(validatedData);
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    );
  }
}
```

### MCP Browser Use Integration for API Testing

```bash
# Pre-API Development MCP Commands
npx claude-flow hook pre-task --mcp-validation true --tools "browser-use" --description "API endpoint testing"

# Browser Use MCP for automated API testing
mcp_use_tool --server mcp-browser-use --tool initialize_browser --args '{"headless": false, "task": "API endpoint validation"}'
mcp_use_tool --server mcp-browser-use --tool go_to_url --args '{"url": "http://localhost:3000/api/contact"}'

# Post-API Development MCP Verification
npx claude-flow hook post-task --task-id "api-development" --analyze-performance true
```

## Strapi v5 Integration

### Content Types Schema
```javascript
// api/page/content-types/page/schema.json
{
  "kind": "collectionType",
  "collectionName": "pages",
  "info": {
    "singularName": "page",
    "pluralName": "pages",
    "displayName": "Page",
    "description": "Website pages content"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {},
  "attributes": {
    "title": {
      "type": "string",
      "required": true
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "content": {
      "type": "richtext"
    },
    "meta_title": {
      "type": "string"
    },
    "meta_description": {
      "type": "text"
    },
    "og_image": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "seo_data": {
      "type": "json"
    }
  }
}

// api/service/content-types/service/schema.json
{
  "kind": "collectionType",
  "collectionName": "services",
  "info": {
    "singularName": "service",
    "pluralName": "services",
    "displayName": "Service",
    "description": "Services offered by TTF"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "name": {
      "type": "string",
      "required": true
    },
    "slug": {
      "type": "uid",
      "targetField": "name",
      "required": true
    },
    "description": {
      "type": "richtext"
    },
    "hero_section": {
      "type": "component",
      "repeatable": false,
      "component": "sections.hero"
    },
    "features": {
      "type": "component",
      "repeatable": true,
      "component": "content.feature"
    },
    "call_to_action": {
      "type": "component",
      "repeatable": false,
      "component": "sections.cta"
    }
  }
}
```

### Data Fetching Strategy
```typescript
// lib/strapi.ts
import { cache } from 'react';

export const getPageData = cache(async (slug: string) => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { 
        revalidate: 3600, // ISR: revalidate every hour
        tags: [`page-${slug}`] // For on-demand revalidation
      },
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch page data');
  }
  
  return response.json();
});

export const getServiceData = cache(async (slug: string) => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/services?filters[slug][$eq]=${slug}&populate=deep`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { 
        revalidate: 1800, // ISR: revalidate every 30 minutes
        tags: [`service-${slug}`]
      },
    }
  );
  
  return response.json();
});
```

## Digital Ocean App Platform Configuration

### App Spec Configuration
```yaml
# .do/app.yaml
name: ttf-web
services:
- name: web
  source_dir: /
  github:
    repo: your-username/ttf-web
    branch: main
    deploy_on_push: true
  run_command: npm start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  routes:
  - path: /
  envs:
  - key: NODE_ENV
    value: production
  - key: DATABASE_URL
    value: ${db.DATABASE_URL}
  - key: SUPABASE_URL
    type: SECRET
    value: your-supabase-url
  - key: SUPABASE_ANON_KEY
    type: SECRET
    value: your-supabase-anon-key
  - key: SENDGRID_API_KEY
    type: SECRET
    value: your-sendgrid-api-key

databases:
- name: ttf-postgres
  engine: PG
  version: "14"
  num_nodes: 1
  size: db-s-dev-database

workers:
- name: strapi-cms
  source_dir: /strapi
  github:
    repo: your-username/ttf-strapi
    branch: main
  run_command: npm run start
  build_command: npm run build
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: DATABASE_URL
    value: ${db.DATABASE_URL}
  - key: STRAPI_ADMIN_CLIENT_URL
    value: https://ttf-web-xxxxx.ondigitalocean.app
```

### MCP DigitalOcean Integration Commands

```bash
# Pre-Deployment MCP Validation
npx claude-flow hook pre-task --mcp-validation true --tools "digitalocean" --description "Deployment automation"

# DigitalOcean MCP for deployment management
mcp_use_tool --server digitalocean --tool list_apps --args '{"query": {"page": 1, "per_page": 10}}'
mcp_use_tool --server digitalocean --tool create_deployment --args '{"path": {"app_id": "ttf-web"}, "body": {"force_build": true}}'

# Post-Deployment MCP Verification
npx claude-flow hook post-task --task-id "deployment" --analyze-performance true
```

### GitHub Actions CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Digital Ocean

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run lint
    - run: npm run type-check
    - run: npm run test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to Digital Ocean
      uses: digitalocean/app_action@v1.1.5
      with:
        app_name: ttf-web
        token: ${{ secrets.DIGITALOCEAN_ACCESS_TOKEN }}
```

### MCP GitHub Integration for CI/CD Enhancement

```bash
# Pre-CI/CD Setup MCP Commands
npx claude-flow hook pre-task --mcp-validation true --tools "github" --description "CI/CD pipeline setup"

# GitHub MCP for automated repository management
mcp_use_tool --server github-mcp-server --tool create_pull_request --args '{"owner": "The-Talent-Foundation", "repo": "ttf-web", "title": "Next.js Migration", "head": "migration-branch", "base": "main"}'
mcp_use_tool --server github-mcp-server --tool get_pull_request_status --args '{"owner": "The-Talent-Foundation", "repo": "ttf-web", "pullNumber": 1}'

# Post-CI/CD Setup MCP Verification
npx claude-flow hook post-task --task-id "cicd-setup" --analyze-performance true
```

## SEO & Performance Implementation

### Metadata Configuration
```typescript
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | The Talent Foundation',
    default: 'The Talent Foundation - Strategic Talent Solutions',
  },
  description: 'Enterprise talent solutions that build sustainable internal capability. Expert hiring, talent strategy, and organizational development.',
  keywords: ['talent solutions', 'hiring', 'recruitment', 'talent strategy'],
  authors: [{ name: 'The Talent Foundation' }],
  creator: 'The Talent Foundation',
  publisher: 'The Talent Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://talent.foundation'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talent.foundation',
    title: 'The Talent Foundation - Strategic Talent Solutions',
    description: 'Enterprise talent solutions that build sustainable internal capability.',
    siteName: 'The Talent Foundation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Talent Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Talent Foundation - Strategic Talent Solutions',
    description: 'Enterprise talent solutions that build sustainable internal capability.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

### MCP Lighthouse Integration for SEO & Performance

```bash
# Pre-SEO Optimization MCP Commands
npx claude-flow hook pre-task --mcp-validation true --tools "lighthouse" --description "SEO and performance optimization"

# Lighthouse MCP for continuous performance monitoring
mcp_use_tool --server lighthouse --tool run_audit --args '{"url": "https://talent.foundation", "categories": ["performance", "accessibility", "best-practices", "seo"], "device": "mobile"}'
mcp_use_tool --server lighthouse --tool get_performance_score --args '{"url": "https://talent.foundation", "device": "desktop"}'

# Post-SEO Optimization MCP Verification
npx claude-flow hook post-task --task-id "seo-optimization" --analyze-performance true
```

### Structured Data Implementation
```typescript
// lib/structured-data.ts
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Talent Foundation',
    url: 'https://talent.foundation',
    logo: 'https://talent.foundation/logo.png',
    sameAs: [
      'https://linkedin.com/company/the-talent-foundation',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'customer service',
      email: 'hello@talent.foundation',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
  };
}

export function generateServiceSchema(service: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'The Talent Foundation',
    },
    areaServed: 'Worldwide',
    serviceType: 'Talent Solutions',
  };
}
```

## Monitoring & Analytics Configuration

### MCP-Enhanced Analytics Implementation
```typescript
// lib/mcp-analytics.ts
import { GoogleAnalytics } from '@next/third-parties/google';

export function initializeMCPAnalytics() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Google Analytics 4 with MCP enhancement
    gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_title: document.title,
      page_location: window.location.href,
      // MCP-enhanced tracking
      mcp_lighthouse_score: localStorage.getItem('mcp_lighthouse_score'),
      mcp_performance_grade: localStorage.getItem('mcp_performance_grade'),
    });
  }
}

export function trackMCPEvent(
  eventName: string,
  mcpTool: string,
  parameters?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      mcp_tool: mcpTool,
      mcp_timestamp: Date.now(),
    });
  }
}

// MCP-enhanced custom events for business metrics
export const mcpAnalyticsEvents = {
  contactFormSubmit: (formData: any) => trackMCPEvent('contact_form_submit', 'browser-use', {
    form_type: 'contact',
    company_provided: !!formData.companyName,
    mcp_validation_passed: true,
  }),
  servicePageView: (serviceName: string) => trackMCPEvent('service_view', 'lighthouse', {
    service_name: serviceName,
    mcp_performance_score: localStorage.getItem('mcp_lighthouse_score'),
  }),
  strategyCallClick: () => trackMCPEvent('strategy_call_click', 'browser-use', {
    conversion_type: 'high_intent',
    mcp_user_journey_validated: true,
  }),
};
```

### MCP-Enhanced Performance Monitoring
```typescript
// lib/mcp-performance.ts
export function measureMCPWebVitals(metric: any) {
  // Enhanced metrics with MCP data
  const mcpEnhancedMetric = {
    ...metric,
    mcp_lighthouse_score: localStorage.getItem('mcp_lighthouse_score'),
    mcp_browser_validation: localStorage.getItem('mcp_browser_validation'),
    mcp_timestamp: Date.now(),
  };
  
  const body = JSON.stringify(mcpEnhancedMetric);
  
  if ('sendBeacon' in navigator) {
    navigator.sendBeacon('/api/analytics/mcp-web-vitals', body);
  } else {
    fetch('/api/analytics/mcp-web-vitals', {
      method: 'POST',
      body,
      keepalive: true,
    });
  }
}

// MCP-enhanced Core Web Vitals tracking
export function initializeMCPPerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(measureMCPWebVitals);
      onFID(measureMCPWebVitals);
      onFCP(measureMCPWebVitals);
      onLCP(measureMCPWebVitals);
      onTTFB(measureMCPWebVitals);
    });
    
    // MCP Lighthouse continuous monitoring
    setInterval(async () => {
      try {
        const lighthouseScore = await mcp_use_tool({
          server: 'lighthouse',
          tool: 'get_performance_score',
          args: { url: window.location.href, device: 'mobile' }
        });
        localStorage.setItem('mcp_lighthouse_score', lighthouseScore.toString());
      } catch (error) {
        console.warn('MCP Lighthouse monitoring failed:', error);
      }
    }, 300000); // Every 5 minutes
  }
}
```

### MCP Performance Enforcement Commands

```bash
# Continuous MCP Performance Monitoring
npx claude-flow hook mcp-performance --lighthouse-min 95 --accessibility-min 98 --seo-min 98
npx claude-flow hook mcp-validation --browser-use-loadtime 2000 --supabase-query-time 100

# MCP Performance Gates for CI/CD
npx claude-flow hook performance-gate --fail-on-lighthouse-below 95 --fail-on-accessibility-below 98
npx claude-flow hook performance-gate --fail-on-browser-loadtime-above 2000 --fail-on-cls-above 0.1

# MCP Real-time Performance Alerts
npx claude-flow hook performance-alert --slack-webhook $SLACK_WEBHOOK --email-alerts true
```

## MCP Enforcement Framework

### Pre-Development MCP Validation
```bash
# Before any development work begins
npx claude-flow hook pre-task --mcp-validation true --tools "context7,lighthouse,browser-use" --fail-on-missing true

# Phase-specific MCP tool requirements
npx claude-flow hook phase-validation --phase 1 --required-tools "context7,lighthouse,browser-use" --enforcement strict
npx claude-flow hook phase-validation --phase 2 --required-tools "github,supabase" --enforcement strict
npx claude-flow hook phase-validation --phase 3 --required-tools "digitalocean" --enforcement strict
```

### Continuous MCP Monitoring
```bash
# Real-time MCP tool status monitoring
npx claude-flow hook mcp-status --required-tools all --fail-on-missing true --alert-on-degradation true

# MCP performance gate enforcement
npx claude-flow hook performance-gate --lighthouse-min 95 --browser-validation true --supabase-query-max 100
```

### Post-Development MCP Verification
```bash
# After development work completion
npx claude-flow hook post-task --task-id "development" --analyze-performance true --mcp-validation true

# Final MCP compliance check
npx claude-flow hook compliance-check --all-tools-validated true --performance-gates-passed true
```

This technical specification provides the detailed implementation guidance needed for each phase of the migration with comprehensive MCP integration. Each section includes MCP tool configuration, enforcement commands, and implementation strategies that maintain the enterprise-grade quality of your current application while adding the advanced MCP-enhanced features you require.