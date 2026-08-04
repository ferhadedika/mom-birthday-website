# Happy Birthday, Mom

A single-page birthday website, built as a gift.

## Running it

You need [Node.js](https://nodejs.org) 20 or newer installed. Then, in this
folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000 to see it. The page updates live as you edit
files.

To build the production version:

```bash
npm run build
npm run start
```

## Editing the text

All the words on the site live in one file, `lib/content.ts`. Open it and
edit the strings directly, nothing else needs to change. It's organized by
section in the same order they appear on the page, letter, things admired,
timeline, and so on.

Two things worth doing before this goes live:

The `timeline` section currently uses placeholder labels like "The Start"
and "A New Arrival" instead of real years, since I didn't have your family's
actual dates. Swap in the real years.

The `memories` and `gallery` captions are written generically since I don't
know the specific stories behind your photos. Personalize them with the
real details.

The name "Mom" and the signature "Fer" are both set once at the top of
`lib/content.ts` in the `site` object, change them there and they update
everywhere.

## Adding photos

Drop photos into `public/images/`, using the filenames listed in
`public/images/README.md`. Every photo slot on the site currently shows an
elegant placeholder with a label, once a matching file is added, it swaps
in automatically. No code changes needed.

## Changing colors or fonts

The full palette and type scale live in `app/globals.css`, inside the
`@theme` block near the top. Each color is a named scale (petal, champagne,
honey, and so on) rather than one-off values, so changing a hex code there
updates it everywhere it's used.

Fonts are Fraunces (the display serif used in headings) and Karla (body
text), loaded from Google Fonts in `app/layout.tsx`. To use different
fonts, change the link tag there and the `--font-display` and `--font-body`
variables in `app/globals.css`.

## Deploying

This is a standard Next.js app, so it deploys cleanly to
[Vercel](https://vercel.com) (build command `npm run build`, output is
automatic) or any host that supports Node.js. No environment variables or
external services are required.

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion for
the animation and scroll effects.
