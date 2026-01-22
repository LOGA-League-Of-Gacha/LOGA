# 네이버 검색 최적화 가이드

이 문서는 League of Gacha 프로젝트를 네이버 검색에 최적화하는 방법을 설명합니다.

## ✅ 이미 완료된 네이버 SEO 최적화

### 1. 메타 태그 설정

- ✅ `naver-site-verification` 메타 태그 추가됨
- ✅ 페이지별 고유한 title과 description
- ✅ Open Graph 태그 (네이버 공유 최적화)
- ✅ 한글 키워드 최적화

### 2. Robots.txt 설정

- ✅ 네이버 검색로봇 (Yeti) 허용
- ✅ User-agent: Yeti, Allow: / 설정

### 3. Sitemap 제공

- ✅ XML Sitemap 자동 생성 (`/sitemap.xml`)
- ✅ 모든 주요 페이지 포함

### 4. RSS 피드

- ✅ RSS 2.0 형식으로 제공 (`/rss.xml`)
- ✅ 최신 콘텐츠 정보 포함

### 5. HTML 마크업

- ✅ 의미론적 HTML 사용 (H1, H2 태그)
- ✅ 이미지 alt 속성
- ✅ 표준 링크 사용 (자바스크립트 링크 아님)

## 🚀 네이버 웹마스터 도구 등록 방법

### 1단계: 사이트 등록

1. [네이버 서치어드바이저](https://searchadvisor.naver.com/) 접속
2. "사이트 등록" 클릭
3. 사이트 URL 입력: `https://league-of-gacha.pages.dev`

### 2단계: 소유 확인

이미 layout.tsx에 네이버 인증 메타 태그가 포함되어 있습니다:

```html
<meta
  name="naver-site-verification"
  content="f3039f0f5df4f43034c0f6719a3b67fd79584a68"
/>
```

**주의**: 이 값은 예시입니다. 실제 네이버 웹마스터 도구에서 발급받은 코드로 교체해야 합니다.

#### 소유 확인 방법:

1. 네이버 웹마스터 도구 > 사이트 등록 후 "HTML 태그" 선택
2. 제공되는 메타 태그 복사
3. `app/layout.tsx`의 verification 섹션에 붙여넣기
4. 배포 후 "소유확인" 버튼 클릭

### 3단계: Sitemap 제출

1. 네이버 웹마스터 도구 > 요청 > **사이트맵 제출**
2. URL 입력: `https://league-of-gacha.pages.dev/sitemap.xml`
3. "확인" 클릭

### 4단계: RSS 제출

1. 네이버 웹마스터 도구 > 요청 > **RSS 제출**
2. URL 입력: `https://league-of-gacha.pages.dev/rss.xml`
3. "확인" 클릭

## 📊 네이버 검색 노출 확인

### 검색 반영 확인 방법

배포 후 최대 1주일 이내에 검색에 반영됩니다.

1. **사이트명 검색**

   ```
   네이버 검색창에: League of Gacha
   ```

2. **site: 질의 활용**

   ```
   site:league-of-gacha.pages.dev
   ```

3. **웹마스터 도구 확인**
   - 검색 반영 현황 > 수집 현황
   - 콘텐츠 노출 및 클릭 리포트

## ⚠️ 네이버 검색 반영이 안 될 때 체크리스트

### 1. Robots.txt 확인

```
User-agent: Yeti
Allow: /
```

✅ 이미 설정됨

### 2. Meta 태그 확인

noindex가 없는지 확인:

```html
<!-- 이렇게 되어있으면 안됨 -->
<meta name="robots" content="noindex" />
```

✅ 프로젝트에 noindex 없음

### 3. 방화벽 설정

Cloudflare Pages에서 네이버 검색로봇 차단하지 않는지 확인

### 4. JavaScript 렌더링

Next.js는 서버 사이드 렌더링을 지원하므로 문제 없음 ✅

### 5. 중복 콘텐츠 확인

- 모든 페이지가 고유한 title 가짐 ✅
- canonical URL 설정됨 ✅

## 🎯 네이버 검색 최적화 팁

### 키워드 최적화

현재 프로젝트는 다음 키워드로 최적화되어 있습니다:

**한글 키워드:**

- 롤, 리그오브레전드, 가챠, 롤 가챠
- 프로게이머, LCK, LPL, 월즈
- 드림팀, 로스터, 롤 프로게이머

**영어 키워드:**

- League of Legends, LoL, Gacha
- Faker, T1, Gen.G, Pro Players

### 제목 작성 가이드

네이버는 제목을 매우 중요하게 평가합니다:

✅ **좋은 예:**

- "League of Gacha - 롤 프로게이머 드림팀 만들기"
- "Community - 로스터 공유 및 소통"

❌ **나쁜 예:**

- "Home" (너무 일반적)
- "Page 1" (의미 없음)

### 설명(Description) 작성 가이드

- 50-160자 사이
- 핵심 키워드 포함
- 자연스러운 문장

## 📈 성과 측정

### 네이버 웹마스터 도구 리포트

1. **수집 현황**: 크롤링된 페이지 수
2. **검색 반영 페이지**: 실제 색인된 페이지 수
3. **콘텐츠 노출**: 검색 결과 노출 횟수
4. **클릭수**: 실제 클릭 수
5. **CTR**: 클릭률

### 검색어 분석

네이버 웹마스터 도구에서 다음을 확인:

- 어떤 검색어로 유입되는지
- 검색 순위
- 노출 대비 클릭률

## 🔧 추가 최적화 항목 (선택사항)

### 1. 네이버 블로그 연동

네이버 블로그에 프로젝트 소개 글 작성 후 링크 연결

### 2. 네이버 지식iN

Q&A에서 자연스럽게 사이트 홍보 (스팸 주의)

### 3. 네이버 카페

롤 관련 카페에서 홍보 (관리자 허락 필요)

### 4. 네이버 포스트

고품질 콘텐츠 발행

## 📞 문제 발생 시

### 네이버 서치어드바이저 고객센터

- [도움말 센터](https://help.naver.com/alias/webmastertool/main.naver)
- 1:1 문의

### 자주 발생하는 문제

**Q: 사이트를 등록했는데 검색이 안됩니다.**
A: 최대 1주일 소요. 웹마스터 도구에서 수집 현황 확인

**Q: 일부 페이지만 검색됩니다.**
A: sitemap.xml 확인 및 재제출

**Q: 검색 순위가 낮습니다.**
A: 콘텐츠 품질 향상, 백링크 확보, 사용자 경험 개선

## 📝 체크리스트

배포 전 확인:

- [ ] 네이버 인증 메타 태그 업데이트 (실제 코드로)
- [ ] sitemap.xml 접근 가능 확인
- [ ] rss.xml 접근 가능 확인
- [ ] robots.txt 확인
- [ ] 모든 페이지 title 고유성 확인

배포 후 확인:

- [ ] 네이버 웹마스터 도구 사이트 등록
- [ ] 소유 확인 완료
- [ ] sitemap.xml 제출
- [ ] rss.xml 제출
- [ ] 1주일 후 검색 반영 확인
- [ ] 수집 현황 모니터링

---

**참고 자료:**

- [네이버 서치어드바이저 가이드](https://searchadvisor.naver.com/guide)
- [HTML 마크업 가이드](https://searchadvisor.naver.com/guide/markup-content)
- [RSS 및 사이트맵 가이드](https://searchadvisor.naver.com/guide/request-feed)
