import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCPackageDetailPage from '@/components/ffc-package-detail-page';
import { packages } from '@/lib/ffc-config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all packages
export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

// Generate metadata for each package
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: 'Package Not Found | Friends Factory Cafe',
    };
  }

  return {
    title: `${pkg.name} | Birthday Celebration Package Vadodara | Friends Factory Cafe`,
    description: `Book ${pkg.name} for ₹${pkg.price}. ${pkg.shortDescription}. Perfect for ${pkg.perfectFor.slice(0, 3).join(', ')} in Vadodara. 3 hours private celebration with decorations, cake & more!`,
    keywords: `${pkg.name}, ${pkg.perfectFor.join(', ')}, birthday package vadodara, birthday celebration venue, rooftop birthday vadodara, glass house birthday`,
    openGraph: {
      title: `${pkg.name} | Friends Factory Cafe`,
      description: pkg.shortDescription,
      images: [pkg.thumbnail],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return <FFCPackageDetailPage package={pkg} />;
}
