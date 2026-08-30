import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Birthday Celebration Packages Vadodara | Friends Factory Cafe',
  description: 'Explore our 8 stunning birthday celebration packages in Vadodara. Rooftop setups, glass house celebrations, romantic decorations, cake & more. Book your perfect birthday venue!',
  keywords: 'birthday packages vadodara, birthday celebration packages, birthday party packages, birthday venue packages, rooftop birthday packages, glass house birthday, birthday setup vadodara',
  alternates: {
    canonical: '/packages',
  },
};

export default function Page() {
  return <FFCPackagesPage />;
}
