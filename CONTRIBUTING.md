# Contributing to tsc_bot

Thank you for your interest in contributing! This guide will help you get started.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.0.0 or higher
- A Discord account and bot token
- Git

### Local Development Setup

1. **Fork and clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tsc_bot.git
   cd tsc_bot
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your bot token
   ```

4. **Run in development mode**
   ```bash
   bun run dev
   ```

## 📁 Project Structure

```
tsc_bot/
├── src/
│   ├── index.ts          # Entry point, client setup
│   ├── commands/         # Slash commands (one file per command)
│   │   └── ping.ts       # Example command
│   └── events/           # Discord event handlers
│       └── ready.ts      # Bot ready event
├── env.declaration.ts    # Environment variable types
├── seyfert.config.js     # Seyfert framework config
├── package.json
└── tsconfig.json
```

## ➕ Adding Commands

Create a new file in `src/commands/`:

```typescript
import { Command, type CommandContext, Declare, Embed } from "seyfert";

@Declare({
    name: "your-command",
    description: "Command description",
})
export default class YourCommand extends Command {
    async run(ctx: CommandContext) {
        await ctx.editOrReply({ content: "Hello!" });
    }
}
```

## 🔧 Adding Events

Create a new file in `src/events/`:

```typescript
import { createEvent } from "seyfert";

export default createEvent({
    data: { name: "messageCreate" },
    run: async (message, client) => {
        // Handle event
    },
});
```

## 📝 Commit Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>
```

**Types:** `feat`, `fix`, `docs`, `refactor`, `style`, `test`, `chore`

**Examples:**
```
feat(commands): add avatar command
fix(ping): correct latency calculation
docs(readme): update installation steps
```

## 🧪 Testing

Before submitting:

1. **Start the bot locally**
   ```bash
   bun run dev
   ```

2. **Test your changes** in a Discord server

3. **Check TypeScript compilation**
   ```bash
   bun run build  # if available, or tsc --noEmit
   ```

## 📤 Pull Request Process

1. Create a feature branch from `master`:
   ```bash
   git checkout -b feat/your-feature
   ```

2. Make changes with clear commits

3. Push and open a Pull Request

4. Describe your changes and link any related issues

## 🎯 Good First Issues

Look for issues labeled:
- `good first issue` — Beginner-friendly
- `help wanted` — We need assistance

---

Thank you for contributing! 💜
