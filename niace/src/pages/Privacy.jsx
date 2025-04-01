import React from 'react'

const Privacy = () => {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <span className="bg-purple-200 text-purple-800 px-6 py-2 rounded-full text-base lg:text-xl font-semibold">
              TERMS & CONDITIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              Privacy Policies <br />
              <span className="text-gray-700 font-semibold text-2xl lg:text-3xl">
                Privacy Policy for NIACE - Online Courses
              </span>
            </h2>
          </div>

          <div className="max-w-9xl mx-auto px-6 sm:px-10 lg:px-10 mt-10 text-gray-700 text-lg sm:text-2xl leading-relaxed space-y-7">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Introduction</h3>
              <p className= 'text-base sm:text-xl lg:text-2xl '>
                At <strong>NIACE</strong>,  we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you enroll in our courses, including Computer Training, Tally, Digital Marketing, Web Development, and other professional programs ("Services"). By accessing our Services, you agree to the policies outlined in this document.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h3>
              <ul className="list-disc list-inside text-base sm:text-xl  lg:text-2xl">
                <li><strong>Personal Information:</strong> Name, email address, contact details, and other identifying information.</li>
                <li><strong>Educational & Professional Information:</strong> Courses enrolled, progress, assignments, grades, and related data.</li>
                <li><strong>Payment Information:</strong> Payment method details for course enrollment and fee processing.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">How We Use Your Information</h3>
              <ul className="list-disc list-inside text-base sm:text-xl  lg:text-2xl">
                <li>Provide and manage NIACE’s courses and training programs.</li>
                <li>Communicating with you about course updates, offerings, and promotions.</li>
                <li>Processing payments and managing financial transactions.</li>
                <li>Analyzing user trends and preferences to enhance our Services.</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Information Sharing</h3>
              <ul className="list-disc list-inside text-base sm:text-xl  lg:text-2xl">
                <li>Accredited educational institutions for certification and enrollment verification.</li>
                <li>Service providers assisting with payment processing, analytics, and technical support.</li>
                <li>Legal authorities when required by law or to protect NIACE’s rights and users’ safety.</li>
              </ul>
            </div>

            {/* Your Choices */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Choices</h3>
              <ul className="list-disc list-inside text-base sm:text-xl  lg:text-2xl">
                <li>Access and update your personal information.</li>
                <li>Opt out of promotional emails and communications.</li>
                <li>Request data deletion or account closure (subject to applicable terms).</li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Security</h3>
              <p className='text-base sm:text-xl  lg:text-2xl'>We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Children's Privacy</h3>
              <p className='text-base sm:text-xl  lg:text-2xl'>Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
            </div>

            {/* Changes to this Policy */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Policy Updates</h3>
              <p className='text-base sm:text-xl  lg:text-2xl'>We may update this Privacy Policy periodically. We will notify you of significant changes through email or a prominent notice on our website.</p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className='text-base sm:text-xl  lg:text-2xl'>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at <strong>nims23178@gmail.com</strong>.</p>
            </div>

            {/* Acknowledgment */}
            <p className="mt-6 font-semibold text-gray-900 text-base sm:text-xl  lg:text-2xl">
              By using NIACE' Services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.
            </p>
          </div>
        </section>
  )
}

export default Privacy