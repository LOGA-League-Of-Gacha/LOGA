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
          <h1 className="text-3xl font-bold text-lol-gold mb-6">
            About League of Gacha
          </h1>

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
              <h3 className="text-xl font-bold text-lol-gold mb-3">
                롤 가챠 게임이란? (한국어 가이드)
              </h3>
              <p className="leading-relaxed mb-4">
                리그 오브 가챠는 리그오브레전드 프로게이머들을 랜덤으로 뽑아
                나만의 드림팀을 만들 수 있는 무료 롤 가챠 게임입니다. 2013년부터
                2025년까지 LCK, LPL, 월즈 챔피언 200명 이상의 선수 데이터를
                포함하고 있으며, 페이커, 데프트, 루키 등 레전드 선수들을 뽑을 수
                있습니다.
              </p>
              <div className="bg-lol-dark/40 p-4 rounded-lg border border-lol-gold/20">
                <h4 className="text-lg font-semibold text-lol-gold mb-3">
                  자주 묻는 질문 (한국어)
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Q: 롤 가챠 게임은 어떻게 하나요?
                    </p>
                    <p className="text-lol-light leading-relaxed">
                      A: 탑, 정글, 미드, 원딜, 서포터 포지션 카드를 클릭하면
                      랜덤으로 프로게이머가 나옵니다. 마음에 안 들면 리롤하고,
                      좋으면 확정하세요. 5명을 모두 뽑으면 롤 드림팀이
                      완성됩니다!
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Q: 페이커나 월즈 우승팀도 나오나요?
                    </p>
                    <p className="text-lol-light leading-relaxed">
                      A: 네! 2013-2024년 모든 월즈 챔피언이 포함되어 있습니다.
                      T1 페이커, DRX 데프트 등 레전드 선수들을 뽑을 수 있고,
                      실제 우승 라인업을 맞추면 특별한 축하 애니메이션이
                      나옵니다.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Q: 롤 프로게이머 가챠 게임은 무료인가요?
                    </p>
                    <p className="text-lol-light leading-relaxed">
                      A: 완전 무료입니다! 무제한으로 선수를 뽑을 수 있고,
                      커뮤니티에 로스터를 공유하거나 통계를 기록하는 모든 기능이
                      무료로 제공됩니다.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Q: LCK, LPL 선수들이 모두 나오나요?
                    </p>
                    <p className="text-lol-light leading-relaxed">
                      A: LCK(한국), LPL(중국), LEC(유럽), LCS(북미) 모든 주요
                      리그의 선수들이 포함되어 있습니다. 월즈와 MSI 국제 대회
                      참가 선수들도 뽑을 수 있습니다.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Q: 누구에게 추천하나요?
                    </p>
                    <p className="text-lol-light leading-relaxed">
                      A: 18-35세 롤 e스포츠를 좋아하는 분들, 프로게이머 팬, 가챠
                      게임을 즐기시는 분들께 완벽합니다. 점심시간이나 퇴근 후
                      5분이면 드림팀을 만들 수 있어요!
                    </p>
                  </div>
                </div>
              </div>
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
              <h3 className="text-xl font-bold text-white mb-3">
                Frequently Asked Questions (FAQ)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-lol-gold mb-2">
                    What is League of Gacha game?
                  </h4>
                  <p className="leading-relaxed">
                    League of Gacha is a free online gacha-style game where you
                    randomly summon real League of Legends professional players
                    from 2013 to 2025 to build your dream esports team roster.
                    Perfect for LOL esports fans who want to create fantasy
                    teams with legendary players like Faker, Deft, and Rookie.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-lol-gold mb-2">
                    How do I play League of Gacha?
                  </h4>
                  <p className="leading-relaxed">
                    Simply click on a position card (TOP, JUNGLE, MID, ADC,
                    SUPPORT) to summon a random professional player. You can
                    reroll if you don't like the result, then confirm to add
                    them to your roster. Build a complete 5-player team and try
                    to create championship-winning lineups!
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-lol-gold mb-2">
                    Can I get World Championship winners in the game?
                  </h4>
                  <p className="leading-relaxed">
                    Yes! League of Gacha includes all Worlds championship
                    winners from 2013 to 2024. When you successfully assemble a
                    real championship-winning roster (same team, same year), the
                    game automatically recognizes it with a special celebration
                    animation.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-lol-gold mb-2">
                    Which regions are included?
                  </h4>
                  <p className="leading-relaxed">
                    The game features players from LCK (Korea), LPL (China), LEC
                    (Europe), LCS (North America), and international tournaments
                    including Worlds and MSI. You can build teams with players
                    from any region.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-lol-gold mb-2">
                    Who should play this game?
                  </h4>
                  <p className="leading-relaxed">
                    League of Gacha is perfect for League of Legends esports
                    fans aged 18-35 who enjoy gacha mechanics, fantasy team
                    building, and LOL competitive scene. Great for casual gaming
                    during breaks or after work, taking only 5 minutes to create
                    a roster.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-lol-gold mb-2">
                    Is League of Gacha free to play?
                  </h4>
                  <p className="leading-relaxed">
                    Yes, League of Gacha is completely free to play with no
                    hidden costs. You can summon unlimited players, share
                    rosters with the community, and track your statistics
                    without any payment.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-lol-gold mb-2">
                    Can I share my dream team with others?
                  </h4>
                  <p className="leading-relaxed">
                    Absolutely! After building your roster, you can share it
                    with the League of Gacha community. Other players can view
                    your team composition, and you can see the creative rosters
                    others have built.
                  </p>
                </div>
              </div>
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
                Last Updated: January 2026 - Latest player data includes 2025
                season
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
