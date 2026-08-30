/**
 * CONTACT PAGE - FRIENDS FACTORY CAFE VADODARA
 * Contact Us for Birthday Celebrations
 */

import { Metadata } from "next";
import { siteConfig } from "@/lib/ffc-config";
import { FFCHeader, FFCFooter } from "@/components/ffc-layout";
import { FFCWhatsAppFloat } from "@/components/ffc-booking-form";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name} - Book Your Birthday Celebration`,
  description: `Contact Friends Factory Cafe Vadodara for birthday celebrations, party bookings & inquiries. Call ${siteConfig.phone} or visit us at Sevasi-Canal Rd, Gotri, Vadodara.`,
  keywords: [
    'contact friends factory cafe',
    'birthday celebration booking vadodara',
    'birthday party booking vadodara',
    'friends factory cafe contact',
    'birthday venue contact vadodara'
  ],
  alternates: {
    canonical: `${siteConfig.website}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Book your birthday celebration at Vadodara's #1 birthday venue. Contact us now!`,
    url: `${siteConfig.website}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📞 Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to plan the perfect birthday celebration? We&apos;re here to help make your special day unforgettable!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2 border-pink-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Link href={`tel:${siteConfig.phone}`} className="text-2xl font-bold text-pink-600 hover:text-purple-600 transition-colors">
                    {siteConfig.phone}
                  </Link>
                  <p className="text-gray-600 mt-2">Available 10 AM - 10 PM, All Days</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Link 
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to book a birthday celebration at Friends Factory Cafe.`}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </Link>
                  <p className="text-gray-600 mt-3">Fastest way to get a response! 💬</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Link href={`mailto:${siteConfig.email}`} className="text-lg font-semibold text-blue-600 hover:text-indigo-600 transition-colors">
                    {siteConfig.email}
                  </Link>
                  <p className="text-gray-600 mt-2">We reply within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Working Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">🕐 Open All Days</p>
                    <p className="text-gray-600">Celebration Slots:</p>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>☀️ Lunch: 12 PM - 3 PM</li>
                      <li>🌅 Evening: 4 PM - 7 PM</li>
                      <li>🌙 Dinner: 7 PM - 10 PM</li>
                      <li>✨ Midnight: 10 PM - 1 AM</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location & Map */}
            <div className="space-y-6">
              <Card className="border-2 border-purple-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 font-medium mb-4">
                    {siteConfig.address}
                  </p>
                  <Link 
                    href="https://maps.app.goo.gl/ftUJQCoq4u1QybEXA"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <MapPin className="h-5 w-5" />
                    Get Directions
                  </Link>
                </CardContent>
              </Card>

              {/* Google Map Embed */}
              <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169889754686!2d73.11954507596498!3d22.31244864196498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc99eb8a5a819%3A0x4148512e1c482154!2sFriends%20Factory%20Cafe!5e0!3m2!1sen!2sin!4v1706620800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Friends Factory Cafe Location"
                  />
                </div>
              </Card>

              {/* Social Media */}
              <Card className="border-2 border-pink-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-t-lg">
                  <CardTitle>Follow Us 📱</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <Link 
                      href={siteConfig.socialLinks.instagram}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="h-5 w-5" />
                      Instagram
                    </Link>
                    <Link 
                      href={siteConfig.socialLinks.facebook}
                      target="_blank"
                      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      Facebook
                    </Link>
                  </div>
                  <p className="text-gray-600 mt-4">
                    🎉 See our latest birthday celebrations & get inspired!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎂 Ready to Book Your Birthday Celebration?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let&apos;s create an unforgettable birthday experience together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Link>
                <Link 
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi! I want to book a birthday celebration at Friends Factory Cafe.`}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </main>
  );
}
