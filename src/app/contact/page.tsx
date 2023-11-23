import React from 'react';
import ContactUs from '../../components/ContactUs'; // Adjust the import path as necessary
import { siteMetadata } from '../../config/siteMetadata.js';


export const metadata = {
    title: siteMetadata.title, //title of the tab
    description: `The best way to reach us is by filling out the form below. This will send us an email and we will get back to you as soon as possible.`,
    icons: {
      icon: siteMetadata.favicon, // Path of the favicon of the page
    },
  };


const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactUs />
    </div>
  );
};

export default ContactPage;
