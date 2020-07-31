import React from 'react';
import Layout from '../components/layout/components/layout';
import Hero from '../components/pages/home/components/hero';
import WhyMe from '../components/pages/home/components/whyMe';
import Services from '../components/pages/home/components/services';
import Reviews from '../components/pages/home/components/reviews';
import Prices from '../components/pages/home/components/prices';

const Home = () => (
  <Layout>
    <Hero />
    <WhyMe />
    <Services />
    <Reviews />
    <Prices />
  </Layout>
);

export default Home;
