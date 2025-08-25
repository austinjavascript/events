# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Austin JavaScript meetup events presentation system. It's a React + TypeScript + Vite application that uses Reveal.js to create slide presentations for monthly meetup events. The slides are organized by month and include splash screens, agendas, and closing slides.

## Commands

### Development
- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production (runs TypeScript compiler + Vite build)
- `pnpm lint` - Run ESLint to check code quality
- `pnpm preview` - Preview the production build locally

### Package Management
Uses pnpm (version 10.6.3+) as the package manager. Always use `pnpm` commands instead of npm/yarn.

## Architecture

### Presentation System
- Built on Reveal.js for creating slide presentations
- Main app (`App.tsx`) initializes Reveal.js with plugins (Highlight, Notes)
- Slides are React components imported and rendered within the Reveal.js deck
- Uses ref-based integration to manage Reveal.js lifecycle

### Slide Organization
- **Splash slide** (`src/slides/splash.tsx`) - Welcome screen with Discord QR code, shirt promotion, and sponsors
- **Monthly agenda slides** (`src/slides/agenda-YYYY-MM.tsx`) - Event agenda for specific months
- **Thanks slide** (`src/slides/thanks.tsx`) - Closing slide

### Key Components
- **Sponsors component** (`src/components/Sponsors.tsx`) - Displays event sponsors
- **QR Code integration** - Uses Shoelace's `SlQrCode` component for Discord and donation links

### Styling
- SCSS-based styling system in `src/styles/`
- Custom theme for Reveal.js presentations
- Responsive quadrant layout for splash screen

## Adding New Monthly Events

1. Create new agenda slide: `src/slides/agenda-YYYY-MM.tsx`
2. Import and add to slide deck in `App.tsx`
3. Follow existing pattern with emoji indicators for lightning talks (⚡️) and main talks (🎤)

## Technology Stack

- **React 19** with TypeScript
- **Vite** for build tooling and development server
- **Reveal.js** for presentation framework
- **Shoelace** web components (specifically QR codes)
- **SCSS** for styling
- **ESLint** with TypeScript and React plugins

## Development Notes

- Uses React Strict Mode - Reveal.js initialization includes double-initialization prevention
- Proper cleanup of Reveal.js instance in useEffect return function
- TypeScript configured with separate app and node configurations
- Hot module replacement enabled in development