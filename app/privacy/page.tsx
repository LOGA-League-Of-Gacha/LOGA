"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen hextech-bg hexagon-pattern">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-lol-dark-accent/60 border-2 border-lol-gold/30 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-lol-gold mb-6">
            Privacy Policy
          </h2>

          <div className="space-y-6 text-lol-light">
            <section>
              <p className="text-sm text-lol-light/70 mb-4">
                Last Updated: January 16, 2025
              </p>
              <p className="leading-relaxed">
                League of Gacha ("we", "our", or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, and safeguard your information when you use our
                website.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                1. Information We Collect
              </h3>
              <div className="space-y-3 leading-relaxed">
                <div>
                  <h4 className="font-bold text-white mb-1">
                    1.1 Information You Provide
                  </h4>
                  <p>When you use our community features, you may provide:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>
                      Display name/username (for community posts and comments)
                    </li>
                    <li>
                      User-generated content (roster configurations, comments)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1">
                    1.2 Automatically Collected Information
                  </h4>
                  <p>
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>IP address (anonymized)</li>
                    <li>Usage data (pages visited, time spent)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1">
                    1.3 Local Storage
                  </h4>
                  <p>We use browser local storage to save:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Your username preferences</li>
                    <li>Weekly statistics (wins/losses, player picks)</li>
                    <li>User session information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                2. How We Use Your Information
              </h3>
              <p className="leading-relaxed mb-2">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
                <li>Provide and maintain our service</li>
                <li>
                  Enable community features (posting, commenting, sharing)
                </li>
                <li>Track your personal statistics (locally stored)</li>
                <li>Improve user experience and website functionality</li>
                <li>Analyze usage patterns to enhance our service</li>
                <li>Detect and prevent technical issues or abuse</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                3. Data Storage and Security
              </h3>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-white">Firebase Firestore:</strong>{" "}
                  Community posts, comments, and likes are stored in Google
                  Firebase Firestore, a secure cloud database service. Firebase
                  employs industry-standard security measures to protect your
                  data.
                </p>
                <p>
                  <strong className="text-white">Local Storage:</strong>{" "}
                  Personal statistics and preferences are stored locally in your
                  browser and are not transmitted to our servers. You can clear
                  this data at any time through your browser settings.
                </p>
                <p>
                  We implement reasonable security measures to protect your
                  information from unauthorized access, alteration, or
                  destruction. However, no method of transmission over the
                  Internet is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                4. Third-Party Services
              </h3>
              <p className="leading-relaxed mb-2">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
                <li>
                  <strong className="text-white">Google Firebase:</strong> For
                  database and hosting services. View Firebase's privacy policy
                  at{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lol-gold hover:underline"
                  >
                    firebase.google.com/support/privacy
                  </a>
                </li>
                <li>
                  <strong className="text-white">Google Analytics</strong> (if
                  applicable): For website analytics and usage tracking
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                5. Cookies and Tracking
              </h3>
              <p className="leading-relaxed">
                We use browser local storage instead of traditional cookies to
                store user preferences and session data. This data remains on
                your device and is not transmitted to third parties. You can
                clear this data at any time through your browser settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                6. Your Rights and Choices
              </h3>
              <p className="leading-relaxed mb-2">You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 leading-relaxed">
                <li>
                  Access and review your posted content in the community section
                </li>
                <li>Delete your locally stored statistics at any time</li>
                <li>Change your display name at any time</li>
                <li>Stop using our service at any time</li>
                <li>
                  Clear your browser's local storage to remove all local data
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                7. Children's Privacy
              </h3>
              <p className="leading-relaxed">
                Our service is not directed to children under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                8. Data Retention
              </h3>
              <p className="leading-relaxed">
                Community posts and comments are retained indefinitely unless
                you request deletion. Local statistics are stored in your
                browser until you manually clear them or they are automatically
                reset weekly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                9. International Users
              </h3>
              <p className="leading-relaxed">
                If you are accessing our service from outside the United States,
                please be aware that your information may be transferred to,
                stored, and processed in the United States where our servers are
                located. By using our service, you consent to this transfer.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                10. Changes to This Privacy Policy
              </h3>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                11. Contact Us
              </h3>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us through the Community page or by visiting our GitHub
                repository.
              </p>
            </section>

            <section className="pt-6 border-t border-lol-gold/20">
              <p className="text-sm text-lol-light/70">
                By using League of Gacha, you acknowledge that you have read and
                understood this Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-lol-gold/30 bg-lol-dark-accent/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-lol-light text-sm">
          <p>
            Made with ⚡ by League of Legends fans | Data includes LCK, LPL,
            LEC, Worlds, and MSI (2013-2024)
          </p>
        </div>
      </footer>
    </div>
  );
}
