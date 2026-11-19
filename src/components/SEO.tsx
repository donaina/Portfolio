import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Ayoola Aina — Software Engineer, Backend & Payments Systems',
  description = 'Software engineer building backend and payments systems: NIP middleware, Apache Fineract core banking platforms, and the reconciliation that keeps money movement in balance — in TypeScript and Go.',
  image = 'https://donaina.netlify.app/og-image.jpg',
  url = 'https://donaina.netlify.app/',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ayoola Aina" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="keywords" content="NestJS, Go, Apache Fineract, NIBSS, NIP, Core Banking, Payments, TypeScript, PostgreSQL, Playwright, Contract Testing, Reconciliation, Banking-as-a-Service" />
      <meta name="author" content="Ayoola Aina" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
