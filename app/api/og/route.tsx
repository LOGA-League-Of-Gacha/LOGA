import { ImageResponse } from "next/og";
import { getAllPlayers } from "@/data/players";
import { Position } from "@/types";
import { checkChampionship } from "@/data/championships";
import { Player } from "@/types";

const POSITIONS: Position[] = ["TOP", "JUNGLE", "MID", "ADC", "SUPPORT"];

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    // Disabled font loading to ensure stability
    // const fontData = await fetch(...);

    const { searchParams } = new URL(request.url);
    const rosterParam = searchParams.get("roster");

    if (!rosterParam) {
      return new ImageResponse(
        (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#091428",
              backgroundImage:
                "linear-gradient(to bottom right, #091428, #0a0a0c)",
              color: "#C8AA6E",
            }}
          >
            <div style={{ fontSize: 60, fontWeight: 700, marginBottom: 20 }}>
              LEAGUE OF GACHA
            </div>
            <div style={{ fontSize: 30, color: "#F0E6D2" }}>
              Create your own legendary roster
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
    }

    const playerIds = rosterParam.split(",");
    const allPlayers = getAllPlayers();
    const rosterPlayers: Partial<Record<Position, Player>> = {};

    POSITIONS.forEach((position, index) => {
      const playerId = playerIds[index];
      if (playerId && playerId !== "empty") {
        const player = allPlayers.find((p) => p.id === playerId);
        if (player) {
          rosterPlayers[position] = player;
        }
      }
    });

    const players = Object.values(rosterPlayers) as Player[];

    // Check for championship
    let championship = null;
    if (players.length === 5) {
      const playerNames = players.map((p) => p.name);
      const team = players[0].teamShort;
      const year = players[0].year;
      const sameTeamYear = players.every(
        (p) => p.teamShort === team && p.year === year
      );
      if (sameTeamYear) {
        championship = checkChampionship(playerNames, team, year);
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #010a13 0%, #0a1428 50%, #010a13 100%)",
            padding: "50px",
          }}
        >
          {/* Championship Badge (if exists) */}
          {championship && (
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: "bold",
                color: "#010a13",
                backgroundColor: "#c89b3c",
                marginBottom: 25,
                padding: "12px 30px",
                border: "4px solid #ffd700",
                borderRadius: 12,
                boxShadow: "0 0 30px rgba(200, 155, 60, 0.6)",
              }}
            >
              🏆 {String(championship)} CHAMPION
            </div>
          )}

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: "bold",
              background: "linear-gradient(135deg, #c89b3c 0%, #ffd700 50%, #c89b3c 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 45,
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            MY LEGENDARY ROSTER
          </div>

          {/* Cards Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
            }}
          >
            {POSITIONS.map((pos) => {
              const player = rosterPlayers[pos];

              return (
                <div
                  key={pos}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 190,
                    height: 300,
                    background: player
                      ? "linear-gradient(180deg, #1e2328 0%, #0a1428 100%)"
                      : "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                    border: player ? "5px solid #c89b3c" : "5px solid #5b5a56",
                    borderRadius: 16,
                    padding: 18,
                    boxShadow: player
                      ? "0 8px 24px rgba(200, 155, 60, 0.4), inset 0 1px 0 rgba(200, 155, 60, 0.2)"
                      : "0 8px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Position Badge */}
                  <div
                    style={{
                      display: "flex",
                      fontSize: 18,
                      fontWeight: "bold",
                      color: player ? "#0a1428" : "#f0e6d2",
                      background: player
                        ? "linear-gradient(135deg, #c89b3c 0%, #ffd700 100%)"
                        : "#5b5a56",
                      padding: "8px 14px",
                      borderRadius: 8,
                      marginBottom: 20,
                      justifyContent: "center",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      boxShadow: player
                        ? "0 4px 12px rgba(200, 155, 60, 0.4)"
                        : "0 2px 8px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {pos}
                  </div>

                  {player ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                      }}
                    >
                      {/* Player Name */}
                      <div
                        style={{
                          fontSize: 32,
                          fontWeight: "bold",
                          color: "#f0e6d2",
                          marginBottom: 14,
                          textAlign: "center",
                          textShadow: "0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(200, 155, 60, 0.3)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {player.name}
                      </div>

                      {/* Nationality */}
                      <div
                        style={{
                          fontSize: 20,
                          color: "#a09b8c",
                          marginBottom: 18,
                          textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
                        }}
                      >
                        {player.nationality}
                      </div>

                      {/* Team & Year */}
                      <div
                        style={{
                          display: "flex",
                          fontSize: 18,
                          color: "#c89b3c",
                          fontWeight: "bold",
                          textShadow: "0 2px 6px rgba(0, 0, 0, 0.7)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {player.teamShort} • {player.year}
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 72,
                        color: "#5b5a56",
                        opacity: 0.5,
                      }}
                    >
                      ?
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#c89b3c",
              marginTop: 45,
              fontWeight: "600",
              letterSpacing: "1px",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            leagueofgacha.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (e) {
    console.error(e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
