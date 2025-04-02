import React from 'react';

const Privacy = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <span className="bg-purple-200 text-purple-800 px-6 py-2 rounded-full text-sm sm:text-base lg:text-lg font-semibold">
          TERMS & CONDITIONS
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-4 leading-tight">
          Privacy Policies <br />
          <span className="text-gray-700 font-semibold text-lg sm:text-xl lg:text-2xl">
            Privacy Policy for NIACE - Online Courses
          </span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-10 space-y-6 text-gray-700 text-sm sm:text-base lg:text-lg">
        {/* Introduction */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Introduction</h3>
          <p>
            At <strong>NIACE</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you enroll in our courses.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Information We Collect</h3>
          <ul className="list-disc list-inside">
            <li><strong>Personal Information:</strong> Name, email address, contact details.</li>
            <li><strong>Educational Information:</strong> Courses enrolled, progress, grades.</li>
            <li><strong>Payment Information:</strong> Payment method details for course enrollment.</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">How We Use Your Information</h3>
          <ul className="list-disc list-inside">
            <li>Provide and manage courses.</li>
            <li>Communicate about course updates.</li>
            <li>Process payments securely.</li>
            <li>Analyze trends to enhance services.</li>
          </ul>
        </div>

        {/* Your Choices */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Your Choices</h3>
          <ul className="list-disc list-inside">
            <li>Access and update your personal information.</li>
            <li>Opt out of promotional emails.</li>
            <li>Request data deletion or account closure.</li>
          </ul>
        </div>

        {/* Security */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
          <p>We implement reasonable security measures to protect your information.</p>
        </div>

        {/* Children's Privacy */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Children's Privacy</h3>
          <p>Our Services are not intended for children under 13. We do not knowingly collect their data.</p>
        </div>

        {/* Policy Updates */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Policy Updates</h3>
          <p>We may update this Privacy Policy periodically and notify users of major changes.</p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
          <p>If you have any concerns, contact us at <strong>nims23178@gmail.com</strong>.</p>
        </div>

        {/* Acknowledgment */}
        <p className="mt-4 font-semibold text-gray-900">
          By using NIACE’s Services, you acknowledge and agree to this Privacy Policy.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
