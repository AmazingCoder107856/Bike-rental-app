This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npx next dev
# or
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

You will need to put an .env-file in customer-webb root folder. In this file you need to add the following:
```
GOOGLE_ID="YOUR GOOGLE ID"
GOOGLE_SECRET="YOUR GOOGLE SECRET"

NEXTAUTH_SECRET="YOUR PERSONAL NEXTAUTH SECRET (can be anything)"
NEXTAUTH_URL="http://localhost:3000"

```
You need to acquire your google ID and Secret yourself and set up the URIs to:

Authorized JavaScript origins:
```
http://localhost:3000

```
and

Authorized redirect URIs:
```
http://localhost:3000/api/auth/callback/google

```

to be able to log in with your Google-account through Oauth.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
