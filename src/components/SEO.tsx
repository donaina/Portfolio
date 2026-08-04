import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Ayoola Aina — Payments & Core Banking Engineer',
  description = 'Payments & core banking engineer building NIP middleware, Apache Fineract platforms, and the systems that keep money movement in balance.',
  image = '/og-image.png',
  url = 'https://ayoolaaina.com',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="keywords" content="NestJS, Apache Fineract, NIBSS, NIP, Core Banking, Payments, TypeScript, Reconciliation, Banking-as-a-Service" />
      <meta name="author" content="Ayoola Aina" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
