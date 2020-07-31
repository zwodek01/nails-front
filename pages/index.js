import React from 'react';
import Layout from '../components/layout/components/layout';
import Hero from '../components/pages/home/components/hero';
import WhyMe from '../components/pages/home/components/whyMe';
import Services from '../components/pages/home/components/services';

const Home = () => (
  <Layout>
    <Hero />
    <WhyMe />
    <Services />
  </Layout>
);

export default Home;
