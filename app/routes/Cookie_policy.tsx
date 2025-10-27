import type { Route } from "./+types/Cookie_policy";
import Banner from "~/components/Banner";
import BannerImg from "~/../assets/images/policies-bg.jpg";
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cookie Policy" },
    { name: "description", content: "Cookie Policy" },
  ];
}

const Cookie_policy = () => {
  const data = {
    bannerTitle: "Cookie Policy",
    bannerImg: BannerImg,
    description: `<h2>1. Introduction</h2>
  <p>This Cookie Policy explains how we (Aeroparts) use cookies and similar technologies when you visit <a href="https://aeroparts-solution-iota.vercel.app/" target="_blank">https://aeroparts-solution-iota.vercel.app/</a>.</p>

  <h2>2. What Are Cookies?</h2>
  <p>Cookies are small text files stored on your device by websites you visit. They help websites function properly and provide insights into user activity.</p>

  <h2>3. How We Use Cookies</h2>
  <ul>
    <li><strong>Essential cookies:</strong> Necessary for core website functionality.</li>
    <li><strong>Performance & analytics cookies:</strong> Help us understand how users interact with the site.</li>
    <li><strong>Functionality cookies:</strong> Remember user preferences and improve experience.</li>
    <li><strong>Marketing / tracking cookies:</strong> Used to deliver relevant advertisements or measure campaign performance.</li>
  </ul>

  <h2>4. Types of Cookies We Use</h2>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Category</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Strictly necessary</td>
        <td>Always active; essential for the website to function.</td>
      </tr>
      <tr>
        <td>Performance</td>
        <td>Collects data on how you use the site.</td>
      </tr>
      <tr>
        <td>Functional</td>
        <td>Remembers preferences and settings.</td>
      </tr>
      <tr>
        <td>Targeting / Advertising</td>
        <td>Used for personalized ads and tracking ad performance.</td>
      </tr>
    </tbody>
  </table>

  <h2>5. Third-Party Cookies</h2>
  <p>We may use third-party cookies (e.g., Google Analytics, advertising networks) to help us understand user behavior or serve relevant content.</p>

  <h2>6. Your Cookie Choices</h2>
  <p>You can manage cookies via your browser settings. Disabling cookies may affect how the website functions.</p>

  <h2>7. Consent</h2>
  <p>When you first visit our site, you will see a cookie banner asking for your consent to use non-essential cookies. You can change or withdraw your consent at any time.</p>

  <h2>8. Changes to This Cookie Policy</h2>
  <p>We may update this Cookie Policy from time to time. Please check this page for updates.</p>

  <h2>9. Contact Us</h2>
  <p>If you have questions about our use of cookies, contact us at:</p>

  <p>
    info@aeropartssolution.com <br>
    Aeroparts Solutions, Dubai Airport Freezone (DAFZA), Dubai, UAE <br>
    +971 50 219 3737 
  </p>
 `,
  };
  return (
    <>
      <Banner bgImgUrl={data.bannerImg} title={data.bannerTitle} />
      <section className="bg-white">
        <div className="container mx-auto py-20 lg:py-40">
          <div className="max-w-[86ch] space-y-6 text-lg text-[#494949] policyContent">
            {parse(DOMPurify.sanitize(data.description))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cookie_policy;
