import React from 'react';
import Layout from '../components/layout/components/layout';
import Hero from '../components/pages/home/components/hero';
import WhyMe from '../components/pages/home/components/whyMe';
import Services from '../components/pages/home/components/services';
import Reviews from '../components/pages/home/components/reviews';
import Prices from '../components/pages/home/components/prices';
import Contact from '../components/pages/home/components/contact';

const Home = () => (
  <Layout>
    <Hero />
    <WhyMe />
    <Services />
    <Reviews />
    <Prices />
    <Contact />
  </Layout>
);

export default Home;
