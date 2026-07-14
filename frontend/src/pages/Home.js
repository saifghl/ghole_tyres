import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';

export default function Home({ showToast }) {
  return (
    <>
      <Hero />
      <Services showToast={showToast} />
    </>
  );
}
