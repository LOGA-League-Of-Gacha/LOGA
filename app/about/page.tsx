"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
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
            About League of Gacha
          </h2>

          <div className="space-y-6 text-lol-light">
            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                What is League of Gacha?
              </h3>
              <p className="leading-relaxed">
                League of Gacha is an interactive web application that allows
                League of Legends esports fans to create their dream team
                rosters by randomly selecting professional players from major
                leagues including LCK, LPL, LEC, and international tournaments
                like Worlds and MSI.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">Features</h3>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>
                  <strong className="text-white">
                    Random Player Selection:
                  </strong>{" "}
                  Summon random professional players for each position (TOP,
                  JUNGLE, MID, ADC, SUPPORT)
                </li>
                <li>
                  <strong className="text-white">
                    Championship Recognition:
                  </strong>{" "}
                  Automatically detects when you assemble a championship-winning
                  roster
                </li>
                <li>
                  <strong className="text-white">Community Sharing:</strong>{" "}
                  Share your dream rosters with the community and see what
                  others have created
                </li>
                <li>
                  <strong className="text-white">Statistics Tracking:</strong>{" "}
                  Track your weekly win/loss record and most-picked players by
                  position
                </li>
                <li>
                  <strong className="text-white">Player Database:</strong>{" "}
                  Extensive database of professional players from 2013-2024
                  across all major regions
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">
                Player Data Coverage
              </h3>
              <p className="leading-relaxed mb-3">
                Our database includes players from the following leagues and
                tournaments:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>LCK (League of Legends Champions Korea)</li>
                <li>LPL (League of Legends Pro League - China)</li>
                <li>LEC (League of Legends European Championship)</li>
                <li>
                  LCS (League of Legends Championship Series - North America)
                </li>
                <li>World Championship (Worlds)</li>
                <li>Mid-Season Invitational (MSI)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">How to Use</h3>
              <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                <li>
                  Click on a position card or use "Select One Player" to summon
                  a random player
                </li>
                <li>
                  Review the player and either confirm or reroll for a different
                  player
                </li>
                <li>Build your complete 5-player roster</li>
                <li>Record victories or defeats to track your statistics</li>
                <li>
                  Share your roster with the community or check your stats on My
                  Page
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">Technology</h3>
              <p className="leading-relaxed">
                League of Gacha is built with modern web technologies including
                Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer
                Motion for smooth animations. Community features are powered by
                Firebase Firestore for real-time data synchronization.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">Disclaimer</h3>
              <p className="leading-relaxed">
                League of Gacha is an unofficial fan-made project and is not
                affiliated with, endorsed by, or connected to Riot Games, Inc.
                All League of Legends esports team names, player names, and
                related content are the property of their respective owners.
                This website is created purely for entertainment and educational
                purposes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
              <p className="leading-relaxed">
                For questions, feedback, or suggestions, please contact us
                through the Community page or visit our GitHub repository.
              </p>
            </section>

            <section className="pt-4 border-t border-lol-gold/20">
              <p className="text-sm text-lol-light/70">
                Last Updated: January 2025
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
