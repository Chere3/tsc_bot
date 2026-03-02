# tsc_bot 🤖

A modern Discord bot built with [Seyfert](https://github.com/tiramisulabs/seyfert) and [Bun](https://bun.sh) runtime for blazing-fast performance.

## Features

- ⚡ Built on Bun for fast startup and execution
- 🛠️ Uses Seyfert framework for clean Discord API interactions
- 📦 TypeScript-first with full type safety
- 🔥 Hot reload development mode

## Prerequisites

- [Bun](https://bun.sh) v1.0.0 or higher
- Discord Bot Token ([create one here](https://discord.com/developers/applications))

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/Chere3/tsc_bot.git
cd tsc_bot
bun install
```

### 2. Configure Environment

Copy the example environment file and add your credentials:

```bash
cp .env.example .env
```

Edit `.env` with your Discord bot token:

```env
DISCORD_TOKEN=your_bot_token_here
```

### 3. Run the Bot

**Development mode** (with hot reload):

```bash
bun run dev
```

**Production mode**:

```bash
bun run start
```

## Project Structure

```
tsc_bot/
├── src/
│   ├── index.ts          # Entry point
│   ├── commands/         # Slash commands
│   │   └── ping.ts
│   └── events/           # Discord event handlers
│       └── ready.ts
├── env.declaration.ts    # Environment type declarations
├── seyfert.config.js     # Seyfert configuration
├── package.json
└── tsconfig.json
```

## Available Commands

| Command | Description |
|---------|-------------|
| `/ping` | Check bot latency and responsiveness |

## Adding New Commands

Create a new file in `src/commands/`:

```typescript
import { Command } from 'seyfert';

export default new Command({
  name: 'hello',
  description: 'Say hello!',
  run: async (ctx) => {
    await ctx.reply({ content: 'Hello, world! 👋' });
  },
});
```

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start with hot reload |
| `bun run dev:debug` | Start with debug logging |
| `bun run start` | Production start |

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

## License

MIT © [Chere3](https://github.com/Chere3)

---

<p align="center">
  Made with 💜 using Seyfert + Bun
</p>
