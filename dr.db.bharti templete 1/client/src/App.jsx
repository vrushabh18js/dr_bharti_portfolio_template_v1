import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import SPPUGovernance from './components/SPPUGovernance';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import AddAchievementModal from './components/AddAchievementModal';
import { fallbackData } from './data/initialData';
import { useScrollReveal } from './utils/useScrollReveal';

export default function App() {
  const [data, setData] = useState(fallbackData);
  const [activePhoto, setActivePhoto] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Initialize smooth scroll reveal across all sections
  useScrollReveal([data]);

  useEffect(() => {
    // Fetch data from Express API
    fetch('/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error('API request failed');
        return res.json();
      })
      .then((apiData) => {
        if (apiData && apiData.profile) {
          setData(apiData);
        }
      })
      .catch((err) => {
        console.info('Loaded with built-in portfolio data (Express API running independently).', err);
      });
  }, []);

  const handleAchievementAdded = (newAch) => {
    setData((prev) => ({
      ...prev,
      achievements: [newAch, ...(prev.achievements || [])]
    }));
  };

  return (
    <div className="portfolio-app">
      <Navbar profile={data.profile} />

      <main id="main-content">
        <Hero profile={data.profile} />
        <AboutMe
          profile={data.profile}
          corePrinciples={data.corePrinciples}
          areasOfExpertise={data.areasOfExpertise}
          metrics={data.metrics}
        />
        <SPPUGovernance sppuGovernance={data.sppuGovernance} />
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Achievements
          achievements={data.achievements}
          onSelectPhoto={(photo) => setActivePhoto(photo)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />
        <Publications
          publications={data.publications}
          books={data.booksAuthored}
          profile={data.profile}
        />
        <Testimonials testimonials={data.testimonials} />
        <Gallery
          photos={data.gallery || data.achievements}
          onSelectPhoto={(photo) => setActivePhoto(photo)}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />
        <Contact profile={data.profile} />
      </main>

      <Footer profile={data.profile} />

      {/* Lightbox Modal */}
      <LightboxModal activePhoto={activePhoto} onClose={() => setActivePhoto(null)} />

      {/* Add Achievement & Picture Modal */}
      <AddAchievementModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAchievementAdded={handleAchievementAdded}
      />
    </div>
  );
}
