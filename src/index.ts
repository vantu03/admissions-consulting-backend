import express from 'express';
import cors from 'cors';

const app = express( );

app.use(cors());
app.use(express.json());

export const termsOfService =`<p><strong>Effective Date:</strong> January 1, 2025</p><h3 class="font-semibold">1. Acceptance of Terms</h3><p>By accessing and using Quasar &amp; Co. services, you accept and agree to be bound by the terms and provision of this agreement.</p><h3 class="font-semibold">2. Services</h3><p>Quasar &amp; Co. provides college admissions consulting services. We do not guarantee admission to any institution.</p><h3 class="font-semibold">3. Payment Terms</h3><p>Payment for services is due as agreed upon in your service agreement. Refunds are subject to our refund policy.</p><h3 class="font-semibold">4. Limitation of Liability</h3><p>Quasar &amp; Co. shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services.</p><h3 class="font-semibold">5. Contact Information</h3><p>For questions about these Terms of Service, please contact us at support@quasarandco.com.</p>`;

export const privacyPolicy =`<p><strong>Effective Date:</strong> January 1, 2025</p><h3 class="font-semibold">1. Information We Collect</h3><p>We collect information you provide directly to us, such as when you create an account, request consultation services, or contact us for support.</p><h3 class="font-semibold">2. How We Use Your Information</h3><p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p><h3 class="font-semibold">3. Information Sharing</h3><p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p><h3 class="font-semibold">4. Data Security</h3><p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p><h3 class="font-semibold">5. Contact Us</h3><p>If you have any questions about this Privacy Policy, please contact us at support@quasarandco.com.</p>`;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/terms-of-service', (req, res) => {
  res.send({
    status: 'success',
    data: termsOfService
  });
});

app.get('/privacy-policy', (req, res) => {
  res.send(
    {
      status: 'success',
      data: privacyPolicy
    }
  );
});

app.get('/statistics', (req, res) => {
  res.send({
    status: 'success',
    data: [
      { 
        name: "Instagram", 
        value: 160000, 
        icon: 'LuInstagram',
        color: "#ff00a6" ,
        href: "https://www.instagram.com/quasarandco/"
      },
      { 
        name: "Telegram", 
        value: 10600, 
        icon: 'IoChatbubbleOutline',
        color: "#006eff",
        href: "https://t.me/quasarandco"
      },
      { 
        name: "LinkedIn", 
        value: 5000, 
        icon: 'LuLinkedin',
        color: "#0033ff",
        href: "https://www.linkedin.com/company/quasar-and-co/"
      },
      { 
        name: "TikTok", 
        value: 4000, 
        icon: 'LuMusic2',
        color: "#009dff" ,
        href: "https://www.tiktok.com/@quasarandco"
      },
      { 
        name: "YouTube", 
        value: 2500, 
        icon: 'LuYoutube',
        color: "#ff0008",
        href: "https://www.youtube.com/@quasarandco"
      },
    ]
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})