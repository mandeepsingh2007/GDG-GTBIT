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
          content="/Logos/gdg-logo.png" 
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
        <meta name="twitter:image" content="/Logos/gdg-logo.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4285F4" />  {/* Google Blue */}
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
