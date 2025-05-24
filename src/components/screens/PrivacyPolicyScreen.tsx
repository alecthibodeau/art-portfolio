/* Styles */
import '../../styles/privacy-policy.scss';

function PrivacyPolicyScreen(): JSX.Element {
  return (
    <div className="privacy-policy">
      <p>Effective Date: May 21st, 2025</p>

      <p>We the administrators of this website value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use and protect the information you provide through our contact form.</p>

      <p className="bold">1. Information We Collect</p>

      <p>When you use our contact form we may collect the following personal information:</p>

      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your phone number</li>
        <li>The content of your message or question</li>
      </ul>

      <p className="bold">2. How We Use Your Information</p>

      <p>We use the information you provide solely to:</p>

      <ul>
        <li>Respond to your inquiries</li>
        <li>Improve our website's user experience</li>
      </ul>

      <p>We do not sell, rent or share your personal information with third parties for any purposes.</p>

      <p className="bold">3. Data Security</p>

      <p>We take reasonable steps to protect your information from unauthorized access, use or disclosure. However, please be aware that no method of transmission over the internet is completely secure.</p>

      <p className="bold">4. Changes to This Policy</p>

      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
    </div>
  );
}

export default PrivacyPolicyScreen;
