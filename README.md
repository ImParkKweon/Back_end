# Backend API Server

## 📌 Overview
이 저장소는 **Node.js 기반 백엔드 API 서버 리포지토리**입니다.  
REST API 서버의 기본 구조부터 데이터베이스 연동, 컨테이너화 및 CI/CD 구성까지 포함된 코드입니다.

---

## 🧩 Project Architecture

```
Client (API 요청)
        ↓
   Node.js Server (Express)
        ↓
 Database (USER.sql / db.js)
        ↓
Docker / Jenkins (배포 자동화)
```

---

## 📂 Repository Structure

```
.
├── main.js              # API 서버 진입점
├── db.js                # 데이터베이스 설정
├── package.json         # 의존성 및 스크립트
├── dockerfile           # Docker 이미지 빌드 설정
├── jenkinsfile          # Jenkins CI/CD 파이프라인 설정
├── USER.sql             # 데이터베이스 테이블 스키마 예제
├── node_modules/        # 설치된 라이브러리
└── .DS_Store            # 불필요 파일 (gitignore 대상)
```

---

## ⚙️ Prerequisites
- Node.js (v14 이상 권장)
- MySQL 또는 SQL 기반 데이터베이스
- Docker (선택)
- Jenkins 또는 기타 CI/CD 도구 (선택)

---

## 🚀 Quick Start

### 1️⃣ Dependencies 설치
```bash
npm install
```

---

### 2️⃣ 서버 실행
```bash
npm start
```

서버 실행 후 API는 로컬 환경에서 접근할 수 있습니다.
(포트 번호는 `main.js` 설정에 따라 다를 수 있습니다.)

---

## 📦 Docker 이미지 빌드
```bash
docker build -t backend-api-server .
```

---

## 🔄 CI/CD (Jenkins)
- `jenkinsfile`을 기반으로 Jenkins 파이프라인을 구성하여
  빌드 및 배포 자동화를 구현할 수 있습니다.

---

## ✅ Key Features
- Node.js + Express 기반 REST API 서버
- SQL 데이터베이스 연동 구조
- Docker 컨테이너 이미지 구성
- Jenkins 기반 CI/CD 파이프라인 정의
- 백엔드 서버 기본 아키텍처 이해

---

