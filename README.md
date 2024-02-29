# [Dalpha] 2024 frontend 직군 과제 테스트

## 1. ⚙️ 환경 설정

### fork and git clone

1. dalphakr organization의 `frontend-assignment` 저장소를 fork해 개인 계정으로 복사해옵니다.
   ![image](https://private-user-images.githubusercontent.com/71599639/308795526-1029a965-c986-4c86-9275-e35b05d7ef02.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkxODE1MTcsIm5iZiI6MTcwOTE4MTIxNywicGF0aCI6Ii83MTU5OTYzOS8zMDg3OTU1MjYtMTAyOWE5NjUtYzk4Ni00Yzg2LTkyNzUtZTM1YjA1ZDdlZjAyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI5VDA0MzMzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZlZTI0Yjk2NTA1YmEzNGE0MTdmMjE0NTNiODFlMThmZGQyODUxN2U2ZjBhMjMzMjlkNDdlNDc4YmE2OWM2ZDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.qXdxG-hl7ilSHu1IqCVbQmueJA4ODZz11kcGODhQKvg)
   ![image](https://private-user-images.githubusercontent.com/71599639/308796499-0f8d8c52-dd89-49d2-96f4-39d9d3593d8f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkxODE4ODIsIm5iZiI6MTcwOTE4MTU4MiwicGF0aCI6Ii83MTU5OTYzOS8zMDg3OTY0OTktMGY4ZDhjNTItZGQ4OS00OWQyLTk2ZjQtMzlkOWQzNTkzZDhmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI5VDA0Mzk0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI5Y2FiNTliOWU4MjFkZjMwZjc5Y2QwZDA4MzVhNWEyODRmYzgxYWQzNzQyZDUzNDIzNzZiZjhhMTVlNjlhOWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.rRy4I526CXeGn6ieGUCLVlY3E1g-vva-_ZvfanXKe1o)
   ![image](https://private-user-images.githubusercontent.com/71599639/308797482-fd4ee95b-d91c-4a38-bb55-eed8301307cd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkxODIxNzYsIm5iZiI6MTcwOTE4MTg3NiwicGF0aCI6Ii83MTU5OTYzOS8zMDg3OTc0ODItZmQ0ZWU5NWItZDkxYy00YTM4LWJiNTUtZWVkODMwMTMwN2NkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI5VDA0NDQzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTViZjFjZWRkNzY5ZmE5YjYwODQ1Y2E2Yjk5YTM4YjVkOWExMmQ5MjdjODgyZDMxMTE5ZmE5NDUwNTUxZDQwZTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.U6AVj6SKppF0woEF53cAM3Es5Hp3-SbBrOkVy8LNw_E)

2. 위에서 복사한 주소로 로컬에 clone 해옵니다.

```bash
  $ git clone 복사한 주소
  # e.g - git clone https://github.com/{username}/frontend-assignment.git
```

- 혹시 fatal: Authentication failed이 뜨며 클론이 되지 않는다면, 깃헙 Profile > Settings > Developer Settings > Personal access tokens에서 개인 토큰을 발급받고 클로닝을 재시도해보시길 바랍니다. password 입력창이 뜨면, 발급받은 토큰을 복사해서 붙여넣으면 됩니다.

### Installation

```bash
  $ npm install
  # or
  $ yarn
```

### Getting started

```bash
  $ npm run dev
  # or
  $ yarn dev
```

## 2. 💻 과제 수행

## 3. 📮 과제 제출
