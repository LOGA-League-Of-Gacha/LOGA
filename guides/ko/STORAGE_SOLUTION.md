# LoL Roster Gacha - 공유 스토리지 솔루션

## 현재 상태

현재 앱은 **로컬 스토리지**를 사용하여 커뮤니티 로스터를 저장합니다. 이는 각 브라우저/디바이스마다 독립적인 데이터를 갖게 되어, 다른 사용자들이 공유한 로스터를 볼 수 없는 문제가 있습니다.

## 해결 방안

### 옵션 1: Firebase Realtime Database (추천)

#### 장점

- 실시간 동기화
- 무료 플랜으로 시작 가능
- 설정이 간단함
- 별도 백엔드 서버 불필요

#### 설정 방법

1. **Firebase 프로젝트 생성**

   - [Firebase Console](https://console.firebase.google.com/) 방문
   - 새 프로젝트 생성
   - Realtime Database 또는 Firestore 활성화

2. **Firebase SDK 설치**

   ```bash
   npm install firebase
   ```

3. **Firebase 설정 파일 생성** (`lib/firebase.ts`)

   ```typescript
   import { initializeApp } from "firebase/app";
   import { getDatabase } from "firebase/database";

   const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   };

   const app = initializeApp(firebaseConfig);
   export const database = getDatabase(app);
   ```

4. **환경 변수 설정** (`.env.local`)

   ```
   NEXT_PUBLIC_USE_FIREBASE=true
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **community-storage.ts를 community-storage-v2.ts로 교체**
   - 기존 파일을 백업하고 새 버전 사용

#### 비용

- 무료 플랜: 1GB 저장용량, 10GB/월 다운로드
- 소규모 프로젝트에 충분함

### 옵션 2: Supabase (오픈소스 대안)

#### 장점

- PostgreSQL 기반
- 무료 플랜 제공
- RESTful API
- 실시간 구독 지원

#### 설정 방법

1. [Supabase](https://supabase.com/) 프로젝트 생성
2. 테이블 생성 (rosters, comments)
3. SDK 설치: `npm install @supabase/supabase-js`
4. API 키 설정

### 옵션 3: 별도 백엔드 서버

#### 장점

- 완전한 제어
- 복잡한 비즈니스 로직 구현 가능

#### 단점

- 서버 유지보수 필요
- 호스팅 비용

#### 기술 스택 예시

- Node.js + Express + MongoDB
- Python + FastAPI + PostgreSQL
- Vercel Serverless Functions

## 권장 사항

**초기 단계**: Firebase를 사용하는 것을 추천합니다.

- 빠른 설정
- 무료로 시작 가능
- 확장 가능

**성장 단계**: 사용자가 많아지면 Supabase나 별도 백엔드로 전환을 고려하세요.

## 마이그레이션 가이드

현재 로컬 스토리지에서 Firebase로 마이그레이션하려면:

1. `lib/community-storage.ts`를 `lib/community-storage-v2.ts`로 교체
2. Firebase 설정 완료
3. 기존 로컬 데이터는 각 사용자의 브라우저에 남아있음
4. 새로운 공유는 자동으로 Firebase에 저장됨

## 구현된 기능

`community-storage-v2.ts`는 다음을 지원합니다:

- Firebase 사용 시 자동으로 클라우드 저장
- Firebase 미설정 시 로컬 스토리지로 Fallback
- 중복 좋아요 방지 (사용자 ID 기반)
- 실시간 동기화 준비

## 다음 단계

1. Firebase 프로젝트 생성
2. 환경 변수 설정
3. `community-storage.ts`를 `community-storage-v2.ts`로 교체
4. 앱 재시작 및 테스트
