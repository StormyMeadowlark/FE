import HEMAutomotiveInspection from "./assets/images/HEM-Automotive-Pre-Purchase-Vehicle-Inspection.webp"
import HEMAutomotiveBuilding from "./assets/images/HEM-Automotive-Front-of-Building.jpg"
import Logo from "./components/limeGreenAndBlackLogo.svg"
import HEMAutomotiveDesk from "./assets/images/HEM-Automotive-Front-Desk.jpg"

const metadata = {
  siteName: "HEM Automotive",
  siteUrl: "https://hemautomotive.com",
  defaultImage:
    HEMAutomotiveInspection,
  pages: {
    home: {
      title: "Quality Auto Repair in Topeka, KS | HEM Automotive",
      description:
        "Comprehensive maintenance and expert auto repair services in Topeka, KS. Honest service, professional diagnostics, and customer satisfaction.",
      schemaType: "AutoRepair",
      author: "HEM Automotive",
      publishedDate: "2025-03-18T12:00:00Z",
      modifiedDate: "2025-03-18T12:00:00Z",
      openGraph: {
        type: "website",
        image:
          HEMAutomotiveBuilding,
        url: "https://hemautomotive.com",
      },
      twitter: {
        card: "summary_large_image",
      },
      schemaDetails: {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        name: "HEM Automotive",
        url: "https://hemautomotive.com",
        logo: Logo,
        image:
          HEMAutomotiveBuilding,
        description:
          "Comprehensive maintenance and expert auto repair in Topeka, KS.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "315 SW 32nd Ter.",
          addressLocality: "Topeka",
          addressRegion: "KS",
          postalCode: "66611",
          addressCountry: "US",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          reviewCount: "32",
        },
      },
    },
    services: {
      title: "Auto Repair in Topeka, KS | HEM Automotive",
      description:
        "Find expert auto repair services including oil changes, brake repairs, diagnostics, and more in Topeka, KS.",
      schemaType: "Service",
      author: "HEM Automotive",
      publishedDate: "2025-03-18T12:00:00Z",
      modifiedDate: "2025-03-18T12:00:00Z",
      openGraph: {
        type: "article",
        image:
          HEMAutomotiveInspection,
        url: "https://hemautomotive.com/services",
      },
      twitter: {
        card: "summary_large_image",
      },
      schemaDetails: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Auto Repair Services",
        provider: {
          "@type": "LocalBusiness",
          name: "HEM Automotive",
        },
        serviceType: [
          "Oil Change",
          "Brake Repair",
          "Diagnostics",
          "Wheel Alignment",
        ],
        url: "https://hemautomotive.com/services",
        image: HEMAutomotiveInspection,
        description:
          "Get quality auto repair services at HEM Automotive, from oil changes to engine diagnostics & more.",
      },
    },
    contact: {
      title: "Contact HEM Automotive | Topeka, KS",
      description:
        "Need auto repairs? Contact HEM Automotive for expert diagnostics and service in Topeka, KS.",
      schemaType: "ContactPage",
      author: "HEM Automotive",
      publishedDate: "2025-03-18T12:00:00Z",
      modifiedDate: "2025-03-18T12:00:00Z",
      openGraph: {
        type: "website",
        image:
          HEMAutomotiveDesk,
        url: "https://hemautomotive.com/contact",
      },
      twitter: {
        card: "summary_large_image",
      },
      schemaDetails: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "HEM Automotive Contact",
        description:
          "Need auto repairs? Contact HEM Automotive for expert diagnostics and service in Topeka, KS.",
        url: "https://hemautomotive.com/contact",
        image:
          HEMAutomotiveDesk,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-785-730-2900",
          contactType: "customer service",
        },
      },
    },
  },
};

export default metadata;
