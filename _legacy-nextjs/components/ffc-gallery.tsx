'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ImageIcon, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// Birthday-focused gallery items with real images from /public/images/gallery
export const galleryItems: GalleryItem[] = [
  // Featured Birthday Images - Rooftop LoveFrame Package
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame.png', alt: 'Birthday rooftop LoveFrame celebration Vadodara', title: 'Rooftop Birthday', subtitle: 'LoveFrame Package', featured: true },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (1).png', alt: 'Birthday balloon decoration rooftop Vadodara', title: 'Birthday Balloons', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (2).png', alt: 'Romantic birthday setup Vadodara', title: 'Romantic Setup', featured: false },
  { type: 'video', src: '/images/gallery/1000330056.mp4', alt: 'Birthday celebration video Vadodara', title: 'Birthday Celebration', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (3).png', alt: 'Birthday surprise decoration Vadodara', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (4).png', alt: 'Birthday party setup Vadodara', title: 'Party Setup', featured: false },
  { type: 'video', src: '/images/gallery/1000330062.mp4', alt: 'Birthday party video Vadodara', title: 'Birthday Party Video', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (5).png', alt: 'Birthday candlelight dinner Vadodara', title: 'Birthday Dinner', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (6).png', alt: 'Birthday balloon arch Vadodara', title: 'Balloon Decoration', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (7).png', alt: 'Birthday rooftop venue Vadodara', title: 'Rooftop Venue', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (8).png', alt: 'Birthday surprise for girlfriend Vadodara', title: 'Girlfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (9).png', alt: 'Birthday surprise for boyfriend Vadodara', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/Rooftp LoveFrame (10).png', alt: 'Midnight birthday surprise Vadodara', title: 'Midnight Surprise', featured: false },
  
  // Creative Area Package Images
  { type: 'image', src: '/images/gallery/Creative Area Package A.png', alt: 'Creative birthday celebration Vadodara', title: 'Creative Birthday', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (1).png', alt: 'Birthday room decoration Vadodara', title: 'Room Decoration', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (2).png', alt: 'Birthday party places Vadodara', title: 'Party Place', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (3).png', alt: 'Birthday party venues Vadodara', title: 'Party Venue', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (4).png', alt: 'Birthday decorators Vadodara', title: 'Birthday Decor', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (5).png', alt: 'Birthday organisers Vadodara', title: 'Birthday Setup', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (6).png', alt: 'Birthday event planners Vadodara', title: 'Event Planning', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (7).png', alt: 'Private birthday celebration Vadodara', title: 'Private Party', featured: false },
  { type: 'image', src: '/images/gallery/Creative Area Package A (8).png', alt: 'Premium birthday celebration Vadodara', title: 'Premium Setup', featured: false },

  // Real celebration photos
  { type: 'image', src: '/images/gallery/IMG_20251107_193832872.jpg', alt: 'Birthday celebration for couples Vadodara', title: 'Couple Birthday', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251107_194250189.jpg', alt: 'Romantic birthday surprise Vadodara', title: 'Romantic Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251217_195512938.jpg', alt: 'Birthday surprise planners Vadodara', title: 'Surprise Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_200520773.jpg', alt: 'Best birthday surprise Vadodara', title: 'Best Surprise', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_200638051.jpg', alt: 'Unique birthday celebration Vadodara', title: 'Unique Celebration', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_202038910.jpg', alt: 'Birthday dinner date Vadodara', title: 'Dinner Date', featured: false },
  { type: 'image', src: '/images/gallery/IMG_20251218_202045580.jpg', alt: 'Birthday candlelight dinner Vadodara', title: 'Candlelight Setup', featured: false },
  
  // Additional celebration photos
  { type: 'image', src: '/images/gallery/IMG_3672.jpg', alt: 'Rooftop birthday party Vadodara', title: 'Rooftop Party', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3688.JPG', alt: 'Birthday photoshoot Vadodara', title: 'Birthday Photo', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3693.jpg', alt: 'Birthday packages Vadodara', title: 'Package Setup', featured: false },
  { type: 'image', src: '/images/gallery/IMG_3696.jpg', alt: 'Birthday surprise for friend Vadodara', title: 'Friend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/DSCN3032.JPG', alt: 'Budget birthday surprise Vadodara', title: 'Birthday Venue', featured: false },
  { type: 'image', src: '/images/gallery/737afdb2-d204-4d95-89a9-45de427dd14d.jpg', alt: 'Birthday celebration venue Vadodara', title: 'Celebration Venue', featured: false },
];

// Hero images for birthday pages
export const birthdayHeroImages = [
  '/images/gallery/Rooftp LoveFrame.png',
  '/images/gallery/Rooftp LoveFrame (1).png',
  '/images/gallery/Rooftp LoveFrame (2).png',
  '/images/gallery/Rooftp LoveFrame (3).png',
  '/images/gallery/Creative Area Package A.png',
  '/images/gallery/Creative Area Package A (1).png',
];

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems
    .filter(item => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'photos') return item.type === 'image';
      if (activeFilter === 'videos') return item.type === 'video';
      return true;
    })
    .slice(0, maxItems);

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic celebrations in Vadodara
          </p>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white' 
                : 'border-pink-300 text-pink-700 hover:bg-pink-50'}
            >
              All ({photoCount + videoCount})
            </Button>
            <Button 
              variant={activeFilter === 'photos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('photos')}
              className={activeFilter === 'photos' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white' 
                : 'border-pink-300 text-pink-700 hover:bg-pink-50'}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Photos ({photoCount})
            </Button>
            <Button 
              variant={activeFilter === 'videos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('videos')}
              className={activeFilter === 'videos' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white' 
                : 'border-pink-300 text-pink-700 hover:bg-pink-50'}
            >
              <Play className="h-4 w-4 mr-2" />
              Videos ({videoCount})
            </Button>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-pink-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
