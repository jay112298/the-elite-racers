import React from 'react';
import { PolicyContainer, PolicyContent } from './PrivacyPolicy.st';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <PolicyContainer>
      <Navbar />
      <main>
        <h1>Privacy Policy</h1>
        <PolicyContent>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you submit a form, or communicate with us.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.</p>

          <h2>3. Information Sharing and Disclosure</h2>
          <p>We do not share personal information with companies, organizations, or individuals outside of our company except in the following cases: with your consent, for legal reasons, or to protect rights, property or safety.</p>

          <h2>4. Data Security</h2>
          <p>We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold.</p>

          <h2>5. Your Choices</h2>
          <p>You may update, correct, or delete your account information at any time by logging into your online account or by contacting us.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may change this privacy policy from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.</p>
        </PolicyContent>
      </main>
      <Footer />
    </PolicyContainer>
  );
};

export default PrivacyPolicy;