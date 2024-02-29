# [Dalpha] 2024 frontend 직군 과제 테스트

## 1. ⚙️ 환경 설정

### fork and git clone

1. dalphakr organization의 `frontend-assignment` 저장소를 fork해 개인 계정으로 복사해옵니다.

   ![prev_fork_image](/public/images/prev_fork.png)
   ![fork_image](/public/images/fork.png)
   ![clone_image](/public/images/clone.png)

---

2. 위에서 복사한 주소로 로컬에 clone 해옵니다.

```bash
  $ git clone 복사한 주소
  # e.g - git clone https://github.com/{username}/frontend-assignment.git
```

- 🚨 혹시 `fatal: Authentication failed`이 뜨며 클론이 되지 않는다면, 깃헙 `Profile > Settings > Developer Settings > Personal access tokens`에서 개인 토큰을 발급받고 클로닝을 재시도해보시길 바랍니다. password 입력창이 뜨면, 발급받은 토큰을 복사해서 붙여넣으면 됩니다.

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

- 과제

## 3. 📮 과제 제출

- 과제 작성이 끝나면, 개인 원격 저장소에 푸시 후 풀 리퀘스트를 통해 최종 제출해주시면 됩니다.
- `Pull requests` 탭 > `New pull request` > `Create pull request` 를 통해 PR을 작성, 제출해주세요.

### 주의사항

- base repository는 `dalphakr/frontend-assignment`로, base 브랜치는 `main`으로 제출해주세요!
- head repository는 `{username}/frontend-assignment`로, base 브랜치는 수행한 과제가 담겨있는 브랜치로 설정해주시면 됩니다.

  ![open_pr_image](/public/images/open_pr.png)

- PR 제목은 `[feat] implement assignment (FE)`로 작성해주세요.
- 최종 제출 여부를 확인하기 위해 우측 `labels`에서 submission 태그를 선택해 제출 완료가 되었음을 알려주세요.
- 또한 리뷰어로는 `jin-su-choi`, `hitkoo`, `lerrybe`를 지정해주세요.

  ![create_pr_image](/public/images/create_pr.png)

- PR description에는 작성하고 싶은 내용을 자유롭게 기재해주시면 되는데, 기능 구현과 관련된 아래 체크리스트를 꼭 기재해주시고, 구현이 완료된 내용에는 완료 표시해주세요.
  - [ ] 필요한
  - [ ] 필수
  - [ ] 구현사항들, 2번 완성되면 추가

### 제출 확인

- 아래 사진처럼 submission 태그와 함께 PR이 등록되었다면 제출 완료입니다.

  ![submit_pr_image](/public/images/submit_pr.png)
