# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite and hot module replacement
- `npm run build` - Build for production (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview the production build locally

## Architecture Overview

This is a React + TypeScript + Vite project set up as a blog application with modern tooling:

### Tech Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7 with HMR
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui components (New York style)
- **Icons**: Lucide React
- **Utilities**: clsx and tailwind-merge for conditional styling

### Project Structure
- `src/` - Main application source code
  - `components/ui/` - Reusable UI components following shadcn/ui patterns
  - `lib/utils.ts` - Utility functions (primarily the `cn` function for class merging)
  - `App.tsx` - Main application component
- `@/*` - Path alias pointing to `src/` directory

### Key Configuration
- **Path Aliases**: `@/*` maps to `src/*` for cleaner imports
- **UI Components**: Configured for shadcn/ui with Radix primitives
- **Styling**: Uses Tailwind CSS v4 with the new Vite plugin
- **TypeScript**: Split configuration with separate app and node configs

### Component Patterns
- UI components follow shadcn/ui patterns with variant-based styling using `class-variance-authority`
- Components use the `cn()` utility function for conditional class merging
- Button component supports `asChild` prop pattern for composition

### Blog Features
This application is a full-featured blog with:
- **Authentication**: Login/signup with Supabase Auth
- **CRUD Operations**: Create, read, update, delete blog posts
- **User Management**: User profiles and post ownership
- **Draft/Publish**: Posts can be saved as drafts or published
- **Responsive Design**: Mobile-first responsive layout

### Database Schema
- `profiles` table: User profiles linked to auth.users
- `posts` table: Blog posts with title, content, excerpt, slug, and published status
- Row Level Security (RLS) enabled for proper access control

### Environment Setup
Create a `.env.local` file with:
```
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Run the SQL schema in `supabase-schema.sql` in your Supabase dashboard to set up the database.