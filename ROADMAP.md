# Roadmap 🗺️

This document outlines the planned development phases for tsc_bot.

## Current Status

✅ **Phase 0: Foundation** (Complete)
- [x] Project scaffolding with Bun
- [x] Seyfert framework integration
- [x] Basic ping command
- [x] Ready event handler

---

## Quick Wins 🎯

Small improvements that can be done quickly:

- [ ] Add `.env.example` with documented variables
- [ ] Add more utility commands (uptime, info, avatar)
- [ ] Implement proper logging with timestamps
- [ ] Add command cooldowns
- [ ] Create error handler middleware

## Medium Effort 📦

Features requiring moderate development time:

- [ ] **Moderation Suite**
  - [ ] Kick/ban commands with audit logging
  - [ ] Timeout functionality
  - [ ] Warning system with database tracking

- [ ] **Server Management**
  - [ ] Role management commands
  - [ ] Channel info/stats
  - [ ] Server configuration storage

- [ ] **Developer Tools**
  - [ ] Eval command (owner-only)
  - [ ] Reload commands without restart
  - [ ] Debug information command

## Big Bets 🚀

Larger features that significantly expand functionality:

- [ ] **Database Integration**
  - [ ] SQLite/PostgreSQL support via Drizzle ORM
  - [ ] User/guild preferences storage
  - [ ] Command usage analytics

- [ ] **Web Dashboard**
  - [ ] Bot configuration UI
  - [ ] Stats and analytics display
  - [ ] Guild management interface

- [ ] **Advanced Features**
  - [ ] Custom prefix per server
  - [ ] Localization (i18n) support
  - [ ] Plugin system for extensibility

## Strategic Rewrites 🔄

Architectural improvements for long-term maintainability:

- [ ] Migrate to monorepo structure (bot + dashboard + shared)
- [ ] Implement dependency injection for better testability
- [ ] Add comprehensive test suite (unit + integration)
- [ ] Docker containerization for deployment
- [ ] CI/CD pipeline with GitHub Actions

---

## Version Milestones

| Version | Focus | Target |
|---------|-------|--------|
| v0.2.0 | Quick wins + utility commands | Q1 2026 |
| v0.3.0 | Moderation suite | Q2 2026 |
| v1.0.0 | Database + full feature set | Q3 2026 |

---

*Last updated: March 2026*
