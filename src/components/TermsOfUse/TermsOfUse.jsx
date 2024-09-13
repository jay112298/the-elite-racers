import React from 'react';
import { TermsContainer, TermsContent } from './TermsOfUse.st'
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";

const TermsOfUse = () => {
  return (
    <TermsContainer>
      <Navbar />
      <main>
        <h1>Terms of Use</h1>
        <TermsContent>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h2>2. Use of Website</h2>
          <p>You agree to use the website for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>

          <h2>3. Intellectual Property</h2>
          <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights.</p>

          <h2>4. Disclaimer of Warranties</h2>
          <p>The website and the content are provided on an "as is" basis. We disclaim all warranties, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement.</p>

          <h2>5. Limitation of Liability</h2>
          <p>In no event will we be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with this site or any linked site or use thereof.</p>

          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Please check this page periodically for changes. Your continued use of this site following the posting of changes to these terms will mean you accept those changes.</p>
        </TermsContent>
      </main>
      <Footer />
    </TermsContainer>
  );
};

export default TermsOfUse;