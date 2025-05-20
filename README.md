# YouTube Clone with Next.js and Shadcn UI

A YouTube interface clone built with Next.js 15, Shadcn UI, Tailwind CSS, and TypeScript.

## Tech Stack

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **Tailwind CSS 4**: Utility-first CSS framework
- **Shadcn UI**: Reusable component library based on Radix UI
- **TypeScript**: Static type-checking
- **next-themes**: Theme management

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   └── videos/         # Video routes
├── components/
│   ├── features/       # Feature-specific components
│   │   ├── home/       # Home page components
│   │   └── navigation/ # Navigation components
│   ├── providers/      # React Context providers
│   └── ui/             # Atomic UI components
├── lib/                # Utility functions
├── types/              # TypeScript types (todo)
└── api/                # API routes (todo)
```

## Components

### UI Components

The project uses Customized Shadcn in `src/components/ui/` and include:

- `button.tsx`: Button component with various styles
- `input.tsx`: Input field component
- `textarea.tsx`: Text area component

### Feature Components

Feature-specific components are organized in the `src/components/features/` directory:

#### Navigation Components

- `topbar.tsx`: The top navigation bar with logo, search, and user controls
- `sidebar.tsx`: Collapsible sidebar with navigation links

#### Home Components

- `categories.tsx`: Horizontal scrollable categories
- `videos.tsx`: Grid of video thumbnails
- `shorts.tsx`: YouTube Shorts section
- `thumbnail.tsx`: Video thumbnail component with metadata
- `short-thumbnail.tsx`: Shorts thumbnail component

## Providers

The application uses two main providers:

### 1. Theme Provider

Located at `src/components/providers/theme-provider.tsx`, it uses the `next-themes` library to manage theme preferences:

- Supports light/dark mode
- Respects system preferences
- Persistence of theme choice

Usage:

```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

### 2. Sidebar Provider

Located at `src/components/providers/sidebar-provider.tsx`, it manages the sidebar's open/closed state:

- Provides context for sidebar visibility state
- Handles toggling sidebar visibility
- Makes sidebar state available throughout the application

Usage:

```tsx
<SidebarProvider>
  <Sidebar />
  <main>{children}</main>
</SidebarProvider>
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- pnpm 9.0.0 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/youtube-shadcnui-clone.git
cd youtube-shadcnui-clone
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
pnpm build
pnpm start
```

### Development Commands

- `pnpm dev`: Start development server with Turbopack
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint
- `pnpm format`: Format code with Prettier
- `pnpm addC <component>`: Add Shadcn Component

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
