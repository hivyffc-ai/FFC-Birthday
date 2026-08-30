/**
 * MAIN PAGE - FRIENDS FACTORY CAFE VADODARA
 * Best Birthday Celebration Venue in Vadodara
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for Friends Factory Cafe - Birthday Focus
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Best Birthday Celebration in Vadodara | ${siteConfig.name} - #1 Birthday Venue`,
    description: `Best birthday celebration venue in Vadodara! 🎂 Premium rooftop birthday surprises, balloon decorations, midnight birthday parties, couple birthday celebrations & unforgettable birthday experiences. Book now!`,
    keywords: [
      'birthday celebration vadodara',
      'birthday surprise vadodara',
      'birthday party venues vadodara',
      'birthday party places vadodara',
      'birthday decoration vadodara',
      'birthday balloon decoration vadodara',
      'midnight birthday surprise vadodara',
      'birthday surprise for boyfriend vadodara',
      'birthday surprise for girlfriend vadodara',
      'birthday surprise for husband vadodara',
      'birthday surprise for wife vadodara',
      'rooftop birthday party vadodara',
      'private birthday celebration vadodara',
      'birthday packages vadodara',
      'best birthday venue vadodara',
      'friends factory cafe vadodara'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `Best Birthday Celebration Venue in Vadodara | ${siteConfig.name}`,
      description: 'Vadodara\'s #1 birthday celebration venue! Premium rooftop birthday surprises, decorations, cake & unforgettable birthday experiences.',
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}