# 🧪 React Playground

Flutter의 Bloc 아키텍처에 익숙한 개발자를 위한 React 입문 예제 프로젝트입니다.  
더미 데이터를 통해 사용자 목록을 보여주고, 상세 페이지에서 좋아요(❤️)를 토글할 수 있도록 구성되어 있습니다.

</br>


## ✅ 주요 기술 스택

</br>

- **React** (create-react-app 기반)
- **React Router v6** – 페이지 이동 구현
- **JavaScript (ES6+)**
- **Dummy API** – `Promise` 기반 가짜 API로 서버 시뮬레이션

</br>

## 🗂️ 디렉토리 구조

```
src/
├── api/               # 더미 API (fake server)
│   └── userApi.js
├── components/        # 공통 UI 컴포넌트
│   └── UserCard.js
├── pages/             # 각 라우팅되는 화면
│   ├── HomePage.js
│   ├── UsersPage.js
│   └── UserDetailPage.js
├── router/            # 라우터 설정
│   └── AppRouter.js
├── App.js             # 최상위 앱 컴포넌트
└── index.js           # 앱 렌더링 시작점
```

</br>

## 🧩 기능 요약

| 기능 | 설명 |
|------|------|
| 사용자 목록 조회 | \`/users\` 페이지에서 사용자 리스트 표시 |
| 사용자 상세 보기 | \`/users/:id\` 경로에서 사용자 정보 확인 |
| 좋아요 토글 | 상세 페이지에서 ❤️ / 🤍 토글 가능 (로컬 상태) |

</br>

## 🚀 실행 방법

1. 의존성 설치

```
npm install
```

2. 개발 서버 실행
```
npm start
```

</br>

## 📱 주요 화면

### 🔹 홈

- 경로: \`/\`
- 버튼을 눌러 사용자 목록으로 이동

### 🔹 사용자 목록

- 경로: \`/users\`
- 더미 데이터 기반 사용자 리스트 표시
- 각 사용자 카드를 클릭해 상세 페이지 이동

### 🔹 사용자 상세

- 경로: \`/users/:id\`
- 유저의 이름, 이메일, 좋아요 상태 출력
- 좋아요 버튼으로 상태 토글

</br>

## 🔄 Bloc 아키텍처와 비교

| Flutter Bloc 개념 | React 방식 |
|-------------------|------------|
| Bloc/Cubit        | \`useState\`, \`useEffect\` |
| emit(state)       | \`setState\` 또는 함수 기반 업데이트 |
| BlocBuilder       | 상태 변경 감지 후 리렌더링 |
| Repository        | \`api/userApi.js\`에서 Promise로 구현 |
| GoRouter          | \`react-router-dom\` |
