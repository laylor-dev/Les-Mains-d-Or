/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Intro } from './components/sections/Intro';
import { Services } from './components/sections/Services';
import { Testimonial } from './components/sections/Testimonial';
import { Marquee } from './components/sections/Marquee';
import { Gallery } from './components/sections/Gallery';
import { Booking } from './components/sections/Booking';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-light">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Intro />
          <Services />
          <Gallery />
          <Testimonial />
          <Booking />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
