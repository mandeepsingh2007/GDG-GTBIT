import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* SEO Meta Tags */}
        <title>GDG GTBIT - Empowering Developers</title>
        <meta
          name="description"
          content="Join GDG GTBIT and explore tech innovations, network with fellow developers, and learn through exciting sessions and workshops."
        />
        <meta
          name="keywords"
          content="GDG, GTBIT, Developer Group, Tech Events, Workshops, Networking, Programming, Google Developer Group, GTBIT Community, Developer Meetups, Tech Community, Learn Programming, Google Technologies"
        />
        <meta name="author" content="GDG GTBIT Team" />

        <meta
          property="og:title"
          content="GDG GTBIT - Empowering Developers"
        />
        <meta
          property="og:description"
          content="Join GDG GTBIT and explore tech innovations, network with fellow developers, and learn through exciting sessions and workshops."
        />
        <meta
          property="og:image"
          content="/Logos/gdgLogo.png"
        />
        <meta
          property="og:url"
          content="https://gdggtbit.in/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gdg_gtbit" />
        <meta
          name="twitter:title"
          content="GDG GTBIT - Empowering Developers"
        />
        <meta
          name="twitter:description"
          content="Connect, learn, and grow with GDG GTBIT. Explore tech advancements and become part of a vibrant developer community."
        />
        <meta name="twitter:image" content="/Logos/gdgLogo.png" />

        {/* Favicon */}
        <link rel="icon" href="/Logos/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logos/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Logos/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Logos/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4285F4" />  {/* Google Blue */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
