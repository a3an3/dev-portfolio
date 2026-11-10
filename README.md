# Dev Portfolio

My personal portfolio site: who I am, where I've worked, selected projects, skills and a contact form.
Built with SvelteKit (Svelte 5) and TypeScript. The content comes from a Sanity CMS, see
[dev-portfolio-sanity-server](https://github.com/a3an3/dev-portfolio-sanity-server).

## Stack

- **SvelteKit / Svelte 5** with TypeScript, deployed on Vercel
- **Sanity** as headless CMS for work experience, projects and skills, queried with GROQ
- **SendGrid** for the contact form (`/api/send-mail`)
- **Devicon** for the skill icons

## How it works

- `src/routes/+page.server.ts` loads experience, projects and skills from Sanity on the server.
  The pages are prerendered at build time, so the browser never talks to the Sanity API directly.
- `src/routes/work/[slug]` renders one page per project from Sanity's portable text.
- `src/routes/api/send-mail/+server.ts` validates the contact form, escapes the input and
  sends it through SendGrid. This is the only part that runs at request time.

New content in Sanity shows up after the next deploy.

## Running locally

```bash
npm install
cp .env.example .env   # SendGrid key and receiving address for the contact form
npm run dev
```

| Variable | Purpose |
|---|---|
| `SENDGRID_API_KEY` | SendGrid API key |
| `CONTACT_EMAIL` | Receives contact form messages; must be a verified SendGrid sender |

## Project structure

| Path | Purpose |
|---|---|
| `src/lib/components/` | Header, footer, buttons and the page sections |
| `src/lib/utils/sanity.ts` | Sanity client and the mapping from portable text to render blocks |
| `src/lib/types/sanity.d.ts` | Types for the Sanity documents |
| `src/routes/` | Home page, project pages and the mail endpoint |
