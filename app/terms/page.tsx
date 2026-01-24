"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
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
            Terms of Service
          </h2>

          <div className="space-y-6 text-lol-light">
            <section>
              <p className="text-sm text-lol-light/70 mb-4">
                Last Updated: January 16, 2025
              </p>
              <p className="leading-relaxed">
                Please read these Terms of Service ("Terms", "Terms of Service")
                carefully before using the League of Gacha website (the
                "Service") operated by us ("us", "we", or "our").
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                1. Acceptance of Terms
              </h3>
              <p className="leading-relaxed">
                By accessing and using this Service, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this Service.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                2. Use License
              </h3>
              <div className="space-y-3 leading-relaxed">
                <p>
                  Permission is granted to temporarily use the Service for
                  personal, non-commercial purposes. This is the grant of a
                  license, not a transfer of title, and under this license you
                  may not:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempt to reverse engineer any software contained on the
                    League of Gacha website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transfer the materials to another person or "mirror" the
                    materials on any other server
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                3. User Content and Conduct
              </h3>
              <div className="space-y-3 leading-relaxed">
                <p>When using our community features, you agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Provide accurate information when setting your display name
                  </li>
                  <li>Not post offensive, abusive, or inappropriate content</li>
                  <li>Not spam or harass other users</li>
                  <li>Not impersonate other users or entities</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to exploit or harm the Service</li>
                </ul>
                <p>
                  We reserve the right to remove any content that violates these
                  terms or is otherwise objectionable at our sole discretion.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                4. Intellectual Property
              </h3>
              <div className="space-y-3 leading-relaxed">
                <p>
                  <strong className="text-white">
                    League of Legends Content:
                  </strong>{" "}
                  League of Legends, all League of Legends champion and item
                  images, and all associated esports team names and logos are
                  property of Riot Games, Inc. This is an unofficial fan-made
                  project and is not affiliated with or endorsed by Riot Games.
                </p>
                <p>
                  <strong className="text-white">Player Data:</strong> All
                  professional player information and statistics are publicly
                  available information compiled for educational and
                  entertainment purposes.
                </p>
                <p>
                  <strong className="text-white">Website Code:</strong> The
                  source code and design of this website are protected by
                  copyright and may not be reproduced without permission.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                5. Disclaimer
              </h3>
              <div className="space-y-3 leading-relaxed">
                <p>
                  The materials on League of Gacha's website are provided on an
                  'as is' basis. League of Gacha makes no warranties, expressed
                  or implied, and hereby disclaims and negates all other
                  warranties including, without limitation, implied warranties
                  or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other
                  violation of rights.
                </p>
                <p>
                  Further, League of Gacha does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its website or
                  otherwise relating to such materials or on any sites linked to
                  this site.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                6. Limitations
              </h3>
              <p className="leading-relaxed">
                In no event shall League of Gacha or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on League of Gacha's
                website, even if League of Gacha or a League of Gacha authorized
                representative has been notified orally or in writing of the
                possibility of such damage.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                7. Accuracy of Materials
              </h3>
              <p className="leading-relaxed">
                The materials appearing on League of Gacha's website could
                include technical, typographical, or photographic errors. League
                of Gacha does not warrant that any of the materials on its
                website are accurate, complete or current. League of Gacha may
                make changes to the materials contained on its website at any
                time without notice. However, League of Gacha does not make any
                commitment to update the materials.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">8. Links</h3>
              <p className="leading-relaxed">
                League of Gacha has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by League of Gacha of the site. Use of any such
                linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                9. Service Modifications
              </h3>
              <p className="leading-relaxed">
                We reserve the right to modify or discontinue, temporarily or
                permanently, the Service (or any part thereof) with or without
                notice. We shall not be liable to you or to any third party for
                any modification, suspension, or discontinuance of the Service.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                10. Termination
              </h3>
              <p className="leading-relaxed">
                We may terminate or suspend access to our Service immediately,
                without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach the Terms. All
                provisions of the Terms which by their nature should survive
                termination shall survive termination, including, without
                limitation, ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                11. Governing Law
              </h3>
              <p className="leading-relaxed">
                These Terms shall be governed and construed in accordance with
                the laws of your country of residence, without regard to its
                conflict of law provisions. Our failure to enforce any right or
                provision of these Terms will not be considered a waiver of
                those rights.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                12. Changes to Terms
              </h3>
              <p className="leading-relaxed">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will try to provide at least 30 days' notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion. By continuing to access or
                use our Service after those revisions become effective, you
                agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                13. Contact Us
              </h3>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us
                through the Community page or by visiting our GitHub repository.
              </p>
            </section>

            <section className="pt-6 border-t border-lol-gold/20">
              <p className="text-sm text-lol-light/70">
                By using League of Gacha, you acknowledge that you have read and
                understood these Terms of Service and agree to be bound by them.
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
