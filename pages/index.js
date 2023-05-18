import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React from "react";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>$FOMO Token</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        title=" FOMO Powers our Network">
        Daily FOMO provides solutions for token owners to engage their community and drive new investors, exclusively on the BNB Chain.
      </SectionTitle>
      <Benefits imgPos="left" data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        id="roadmap"
        title="Roadmap">
      </SectionTitle>
      <Video />
      <Testimonials />
      <SectionTitle id="faq" pretitle="FAQ" title="Frequently Asked Questions">
        {/*Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.*/}
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/*<PopupWidget />*/}
    </>
  );
}
