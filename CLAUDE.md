# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Journim is a travel planning application built with Next.js 15, TypeScript, and Tailwind CSS. It uses PostgreSQL with Prisma ORM and NextAuth.js for authentication.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Setup

The project uses PostgreSQL with Prisma. A Docker command is provided in README.md:

```bash
docker run --name journim-postgres -e POSTGRES_USER=journim -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=journimdb -p 5432:5432 -d postgres
```

After setting up the database, run:
- `npx prisma migrate dev` - Run database migrations
- `npx prisma generate` - Generate Prisma client
- `npx prisma studio` - Open database browser

## Architecture

### Authentication
- NextAuth.js with multiple providers (Google, GitHub, Credentials)
- Session management with JWT strategy
- User model with email/password and OAuth support
- Custom auth pages at `/auth/login` and `/auth/signup`

### Database Schema
- PostgreSQL with Prisma ORM
- User authentication tables (User, Account, Session, VerificationToken)
- User model includes created_at/updated_at timestamps

### UI Components
- Shadcn/ui components with "new-york" style
- Tailwind CSS with CSS variables
- Radix UI primitives for complex components
- Lucide React for icons

### Project Structure
- `app/` - Next.js 15 app directory with API routes
- `components/base/` - Custom application components
- `components/ui/` - Shadcn/ui components
- `lib/` - Utility functions and configurations
- `prisma/` - Database schema and migrations
- `providers/` - React context providers
- `types/` - TypeScript type definitions

### Key Features
- Trip planning functionality (`/plantrip`)
- Location-based components (India states/cities)
- Cuisine preferences
- Travel reviews and founders section
- Calendar integration

## Environment Variables Required

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - NextAuth secret key
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- `GITHUB_ID` - GitHub OAuth client ID
- `GITHUB_SECRET` - GitHub OAuth client secret