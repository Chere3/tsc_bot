# Security Policy

## 🔒 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| master  | ✅ Active development |

## 🛡️ Reporting a Vulnerability

If you discover a security vulnerability:

1. **Do NOT open a public issue**
2. Contact the repository owner privately
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact

### Response Timeline

- **Acknowledgment:** Within 48 hours
- **Resolution:** Based on severity
  - Critical: 24-48 hours
  - High: 1 week
  - Medium/Low: Next release

## 🔐 Security Best Practices

### Bot Token Security
- **Never commit tokens** — Use `.env` files
- **Regenerate tokens** if accidentally exposed
- **Use environment variables** in production

### Permissions
- Request **minimum required permissions**
- Use slash commands over message content
- Validate user permissions before sensitive actions

### Code Security
- Sanitize user inputs
- Avoid `eval()` without strict owner checks
- Use rate limiting for resource-intensive commands

## ⚠️ Known Considerations

- [ ] Implement proper permission checks for future moderation commands
- [ ] Add rate limiting for commands
- [ ] Input validation for user-provided data

---

*Last updated: March 2026*
