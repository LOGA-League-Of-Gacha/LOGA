# 방문자 통계 설정 가이드

이 프로젝트는 방문자 수와 체류 시간을 추적하기 위해 Google Analytics 4를 사용합니다.

## Google Analytics 4 설정 방법

### 1. Google Analytics 계정 생성

1. [Google Analytics](https://analytics.google.com/) 접속
2. "측정 시작" 클릭
3. 계정 이름 입력 (예: "League of Gacha")
4. 속성 생성:
   - 속성 이름: "League of Gacha"
   - 시간대: 한국
   - 통화: KRW
5. 비즈니스 정보 입력
6. 데이터 스트림 생성:
   - 플랫폼: **웹** 선택
   - 웹사이트 URL: `https://league-of-gacha.pages.dev`
   - 스트림 이름: "League of Gacha Website"

### 2. 측정 ID 확인

데이터 스트림 생성 후 측정 ID가 표시됩니다 (형식: `G-XXXXXXXXXX`)

### 3. 환경 변수 설정

#### 로컬 개발 환경

`.env.local` 파일 생성:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Cloudflare Pages 환경

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) 접속
2. Pages 프로젝트 선택
3. **Settings** > **Environment variables** 이동
4. 변수 추가:
   - Variable name: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX` (본인의 측정 ID)
   - Environment: **Production** 및 **Preview** 선택
5. **Save** 클릭
6. 재배포 (새 커밋 푸시 또는 수동 재배포)

### 4. 배포 및 확인

```bash
git add .
git commit -m "Add Google Analytics"
git push
```

배포 후 30분 정도 지나면 Google Analytics에서 실시간 데이터 확인 가능합니다.

## Google Analytics에서 확인할 수 있는 데이터

### 기본 메트릭

1. **실시간 보고서**

   - Analytics > 보고서 > 실시간
   - 현재 사이트에 접속한 사용자 수

2. **방문자 수**

   - Analytics > 보고서 > 획득 > 트래픽 획득
   - 일별/주별/월별 방문자 수
   - 신규 vs 재방문 사용자

3. **체류 시간**

   - Analytics > 보고서 > 참여도 > 페이지 및 화면
   - 평균 참여 시간
   - 페이지별 체류 시간

4. **사용자 행동**
   - 페이지뷰
   - 세션 수
   - 이탈률
   - 전환율

### 커스텀 이벤트 추적

프로젝트에 다음 이벤트가 구현되어 있습니다:

```typescript
// lib/analytics.ts 사용 예시

// 가챠 뽑기 추적
import { trackGachaEvent } from "@/lib/analytics";
trackGachaEvent("legendary");

// 로스터 공유 추적
import { trackRosterShare } from "@/lib/analytics";
trackRosterShare();

// 선수 클릭 추적
import { trackPlayerClick } from "@/lib/analytics";
trackPlayerClick("Faker");
```

이벤트는 Analytics > 보고서 > 참여도 > 이벤트에서 확인할 수 있습니다.

## 대안: Cloudflare Web Analytics

Google Analytics 대신 개인정보 보호를 중시한다면 Cloudflare Web Analytics 사용 가능:

### 장점

- 쿠키 없이 작동 (GDPR 준수)
- 무료
- Cloudflare에 통합

### 설정 방법

1. Cloudflare Dashboard > 웹사이트 선택
2. **Analytics** > **Web Analytics** 이동
3. **Add a site** 클릭
4. 사이트 이름 입력
5. 제공되는 스크립트를 `layout.tsx`의 `<head>`에 추가

```tsx
<Script
  defer
  src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token": "your-token-here"}'
/>
```

### Cloudflare Analytics에서 확인 가능한 데이터

- 페이지뷰
- 방문자 수 (고유 방문자)
- 페이지별 통계
- 국가별 방문자
- 디바이스 유형
- 브라우저 통계

## 추천 대시보드 설정

### Google Analytics 4 대시보드

1. **홈 화면 커스터마이징**

   - Analytics > 홈
   - 카드 추가: 실시간 사용자, 일일 활성 사용자, 평균 참여 시간

2. **탐색 분석 생성**

   - Analytics > 탐색
   - 템플릿: 빈 탐색 또는 경로 탐색
   - 맞춤 보고서 생성

3. **알림 설정**
   - Analytics > 관리 > 맞춤 알림
   - 방문자 급증/급감 알림 설정

## 문제 해결

### 데이터가 수집되지 않는 경우

1. **측정 ID 확인**

   ```bash
   echo $NEXT_PUBLIC_GA_ID
   ```

2. **브라우저 콘솔 확인**

   - F12 > Console 탭
   - `gtag` 관련 에러 확인

3. **광고 차단기 비활성화**

   - 광고 차단기가 Google Analytics를 차단할 수 있음

4. **실시간 보고서 확인**

   - 본인이 사이트 접속 시 실시간 보고서에 표시되는지 확인

5. **환경 변수 확인**
   - Cloudflare Pages에서 환경 변수가 올바르게 설정되었는지 확인
   - 재배포 필요 (변수 추가 후)

### 디버그 모드

개발 중 데이터 수집 확인:

```tsx
// components/GoogleAnalytics.tsx에 추가
gtag("config", "${gaId}", {
  page_path: window.location.pathname,
  debug_mode: true, // 개발 중에만
});
```

## 추가 리소스

- [Google Analytics 4 공식 문서](https://support.google.com/analytics/answer/9304153)
- [Next.js Analytics 가이드](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [Cloudflare Web Analytics 문서](https://developers.cloudflare.com/analytics/web-analytics/)
