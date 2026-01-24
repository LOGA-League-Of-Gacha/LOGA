// Google Analytics 이벤트 추적 함수들

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// 페이지뷰 추적
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// 커스텀 이벤트 추적
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 가챠 이벤트 추적
export const trackGachaEvent = (rarity: string) => {
  event({
    action: "gacha_pull",
    category: "Engagement",
    label: rarity,
  });
};

// 로스터 공유 이벤트 추적
export const trackRosterShare = () => {
  event({
    action: "roster_share",
    category: "Engagement",
  });
};

// 선수 클릭 이벤트 추적
export const trackPlayerClick = (playerName: string) => {
  event({
    action: "player_click",
    category: "Engagement",
    label: playerName,
  });
};
