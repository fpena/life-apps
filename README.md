# Life Apps Monorepo

A monorepo containing multiple applications to help manage different aspects of your lifestyle.

## 🏗️ Project Structure

This project is organized as a monorepo using pnpm workspaces:

```
life-apps/
├── apps/
│   └── dashboard/          # Central dashboard app (Next.js)
├── package.json            # Root package.json with workspace scripts
└── pnpm-workspace.yaml     # pnpm workspace configuration
```

## 📦 Apps

### Dashboard

The central hub for accessing all lifestyle apps. Built with:
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Icon system

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher

### Installation

1. Install pnpm globally if you haven't already:
```bash
npm install -g pnpm
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Run the dashboard in development mode:
```bash
pnpm dev
```

The dashboard will be available at [http://localhost:3000](http://localhost:3000)

### Build

Build all apps for production:
```bash
pnpm build
```

### Start Production Server

Start the dashboard in production mode:
```bash
pnpm start
```

## 🎨 Tech Stack

- **Monorepo Management**: pnpm workspaces
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📝 Adding New Apps

To add a new app to the monorepo:

1. Create a new directory in `apps/`
2. Initialize your app in that directory
3. The app will automatically be part of the workspace
4. Add a link card in the dashboard to navigate to your new app

## 🤝 Contributing

Feel free to add new lifestyle apps to this monorepo!

## 📄 License

MIT