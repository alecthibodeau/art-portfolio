/* Styles */
import '../../styles/privacy-policy.scss';

function PrivacyPolicyScreen(): JSX.Element {
  return (
    <div className="privacy-policy">
      <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use and protect the information you provide.</p>

      <p className="bold">Information We Collect</p>

      <p>When you use our contact form we may collect the following personal information:</p>

      <ul>
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your phone number</li>
        <li>The content of your message or question</li>
      </ul>

      <p className="bold">How We Use Your Information</p>

      <p>We use the information you provide solely to:</p>

      <ul>
        <li>Respond to your inquiries</li>
        <li>Improve our website's user experience</li>
      </ul>

      <p>We do not sell, rent or share your personal information with third parties for any purposes.</p>

      <p className="bold">Data Security</p>

      <p>We take reasonable steps to protect your information from unauthorized access, use or disclosure. However, please be aware that no method of transmission over the internet is completely secure.</p>

      <p className="bold">Changes to This Policy</p>

      <p>We may update this Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
    </div>
  );
}

export default PrivacyPolicyScreen;
