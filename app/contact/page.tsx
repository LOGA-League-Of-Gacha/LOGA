"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen hextech-bg hexagon-pattern">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-lol-dark-accent/60 border-2 border-lol-gold/30 rounded-lg p-8"
        >
          <h1 className="text-3xl font-bold text-lol-gold mb-6">Contact Us</h1>
          <p className="text-lol-light/80 text-sm mb-2">문의 / お問い合わせ</p>

          <div className="space-y-8 text-lol-light">
            <section>
              <p className="leading-relaxed">
                Have a question, suggestion, or found a bug? We&apos;d love to
                hear from you. You can reach the League of Gacha team through
                any of the channels below.
              </p>
              <p className="leading-relaxed mt-3 text-lol-light/80 text-sm">
                질문, 제안, 버그 제보 등 무엇이든 아래 채널을 통해 연락해
                주세요.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">
                How to Reach Us
              </h2>
              <div className="space-y-4">
                <div className="bg-lol-dark/40 p-5 rounded-lg border border-lol-gold/20">
                  <h3 className="text-lol-gold font-bold mb-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub Issues (Bug Reports &amp; Feature Requests)
                  </h3>
                  <p className="text-sm text-lol-light/80 mb-3">
                    For bug reports, feature requests, or technical issues,
                    please open a GitHub Issue. This is the fastest way to get
                    a response from our team.
                  </p>
                  <a
                    href="https://github.com/yongchane/LOG/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-lol-gold text-black font-bold rounded-lg hover:bg-lol-gold-dark transition-colors text-sm"
                  >
                    Open an Issue on GitHub →
                  </a>
                </div>

                <div className="bg-lol-dark/40 p-5 rounded-lg border border-lol-gold/20">
                  <h3 className="text-lol-gold font-bold mb-2 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    Community Page (General Discussion)
                  </h3>
                  <p className="text-sm text-lol-light/80 mb-3">
                    For general feedback, sharing your rosters, or community
                    discussion, visit our Community page.
                  </p>
                  <Link
                    href="/community"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-lol-blue text-white font-bold rounded-lg hover:bg-lol-blue-dark transition-colors text-sm"
                  >
                    Go to Community →
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 text-sm">
                <div className="bg-lol-dark/40 p-4 rounded-lg border border-lol-gold/20">
                  <p className="font-semibold text-white mb-1">
                    Q: How do I report inappropriate community content?
                  </p>
                  <p className="text-lol-light/80">
                    A: Please open a GitHub Issue with the subject
                    &quot;Content Report&quot; and include the details of the
                    content you&apos;d like reported. We review all reports
                    promptly.
                  </p>
                </div>
                <div className="bg-lol-dark/40 p-4 rounded-lg border border-lol-gold/20">
                  <p className="font-semibold text-white mb-1">
                    Q: Can I request a player to be added to the game?
                  </p>
                  <p className="text-lol-light/80">
                    A: Yes! Please open a GitHub Issue with the player&apos;s
                    name, team, region, and position. We regularly update our
                    player database.
                  </p>
                </div>
                <div className="bg-lol-dark/40 p-4 rounded-lg border border-lol-gold/20">
                  <p className="font-semibold text-white mb-1">
                    Q: I have a privacy-related concern. Who do I contact?
                  </p>
                  <p className="text-lol-light/80">
                    A: For privacy-related matters, please open a GitHub Issue
                    marked as &quot;Privacy Concern&quot;. We take all privacy
                    inquiries seriously and will respond within 7 business days.
                    You can also review our{" "}
                    <Link href="/privacy" className="text-lol-gold hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    for detailed information.
                  </p>
                </div>
                <div className="bg-lol-dark/40 p-4 rounded-lg border border-lol-gold/20">
                  <p className="font-semibold text-white mb-1">
                    Q: 한국어로 문의할 수 있나요? (Can I contact in Korean?)
                  </p>
                  <p className="text-lol-light/80">
                    A: 네, 한국어로 GitHub 이슈를 남겨주셔도 됩니다. 저희 팀이
                    한국어로 응답해 드립니다. (Yes, you can open a GitHub Issue
                    in Korean and our team will respond in Korean.)
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Response Times
              </h2>
              <div className="bg-lol-dark/40 p-4 rounded-lg border border-lol-gold/20 text-sm">
                <ul className="space-y-2 text-lol-light/80">
                  <li>
                    <span className="text-white font-semibold">
                      Bug Reports:
                    </span>{" "}
                    We aim to respond within 3 business days.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      Feature Requests:
                    </span>{" "}
                    Reviewed monthly and prioritized based on community
                    interest.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      Privacy Inquiries:
                    </span>{" "}
                    Responded to within 7 business days.
                  </li>
                  <li>
                    <span className="text-white font-semibold">
                      Content Reports:
                    </span>{" "}
                    Reviewed within 48 hours.
                  </li>
                </ul>
              </div>
            </section>

            <section className="pt-4 border-t border-lol-gold/20">
              <p className="text-sm text-lol-light/70">
                League of Gacha is a fan-made project maintained by volunteers.
                We appreciate your patience and feedback in helping us improve
                the service.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="mt-20 border-t border-lol-gold/30 bg-lol-dark-accent/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-lol-light text-sm">
          <p>
            Made with ⚡ by League of Legends fans | Data includes LCK, LPL,
            LEC, Worlds, and MSI (2013-2025)
          </p>
        </div>
      </footer>
    </div>
  );
}
