import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Ayoola Aina - Core Banking Platform Lead & Digital Transformation Expert',
  description = 'Professional portfolio of Ayoola Aina, showcasing expertise in core banking systems, digital transformation, and financial technology integration.',
  image = '/Portfolio/images/profile.jpg',
  url = 'https://ayoolaaina.com',
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="keywords" content="Core Banking, Digital Transformation, Fintech, Software Engineering, IT Professional" />
      <meta name="author" content="Ayoola Aina" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 