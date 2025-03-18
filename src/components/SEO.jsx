import { Helmet } from "react-helmet";
import metadata from "../metadata";

const SEO = ({ page }) => {
  const pageData = metadata.pages[page];

  return (
    <Helmet>
      {/* Essential Metadata */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Page Title & Description */}
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />

      {/* Canonical URL (Avoids Duplicate Content Issues) */}
      <link rel="canonical" href={pageData.openGraph.url} />

      {/* Open Graph (Social Media) */}
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.description} />
      <meta property="og:image" content={pageData.openGraph.image} />
      <meta property="og:url" content={pageData.openGraph.url} />
      <meta property="og:type" content={pageData.openGraph.type} />
      <meta property="og:site_name" content={metadata.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content={pageData.twitter.card} />
      <meta name="twitter:title" content={pageData.title} />
      <meta name="twitter:description" content={pageData.description} />
      <meta name="twitter:image" content={pageData.openGraph.image} />

      {/* Robots Meta Tag (Control Search Indexing) */}
      <meta name="robots" content="index, follow" />

      {/* Author & Content Info (Useful for Blogs) */}
      {pageData.author && <meta name="author" content={pageData.author} />}
      {pageData.publishedDate && (
        <meta
          property="article:published_time"
          content={pageData.publishedDate}
        />
      )}
      {pageData.modifiedDate && (
        <meta
          property="article:modified_time"
          content={pageData.modifiedDate}
        />
      )}

      {/* Favicon & Theme Color */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000000" />

      {/* Schema Markup (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(pageData.schemaDetails)}
      </script>
    </Helmet>
  );
};

export default SEO;
