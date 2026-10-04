# Open IPTV Federation

A federated live television platform focused on authorized sources, transparent community submission, and efficient global discovery.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`

## Architecture

- Modern Next.js frontend
- Server-rendered metadata and SEO pages
- Lightweight content policy and moderation workflows
- Public federation pages for channels, communities, policies, and operator tools
- No centralized media hosting by default; sources remain external to the broadcaster or community

## Production notes

- Do not commit real secrets, API credentials or production environment values.
- Use environment variables for admin access and external provider configuration.
- All integrations should use official, authorized media sources only.
