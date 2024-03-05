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

### 개요
- 총 두 가지 과제를 작성해주시면 됩니다. 
- 과제의 최종 목표는 멀티 모달 검색 테스트 페이지를 개발하는 것입니다.
- 외부 패키지 사용을 적극 권장합니다.
- 제작할 페이지에 대한 디자인은 아래 링크에 나와 있습니다.
	- https://www.figma.com/file/mBlnlJOWqjaO8MHsVi3ckQ/Dalpha_frontend-assignment?type=design&node-id=0%3A1&mode=dev&t=C2K8S5tbIwXux673-1
   - Figma 계정이 없을 경우 회원가입을 해주세요.
- 페이지를 제작할 때 사용할 API는 아래 링크에 나와 있습니다.
	- https://documenter.getpostman.com/view/26588633/2sA2xcbauh
	- 해당 API는 실제로 동작하는 AI는 아니며, 예시 데이터를 반환합니다.
- flex box 사용을 권장합니다.

### 과제 1
- 텍스트 검색 테스트 페이지를 제작합니다.
- 첫 화면에서 검색어를 입력 후 검색하기 버튼을 클릭 시 검색창이 상단으로 이동하며, API 응답이 올 때까지 로딩 화면이 노출 됩니다.
- 검색에 성공할 경우 검색 결과를 Grid 형태로 노출합니다. 검색 결과 컨테이너는 display grid 속성을 사용해야 합니다.
- 검색에 실패할 경우 에러 화면을 노출합니다.
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/285b6b54-73f0-4bca-bf43-3ca86ba3bf38)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/70b4536a-28cc-4a18-944f-5aa33430776a)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/939cb95d-fccc-4829-80e2-9759d9d6c205)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/b249552d-96a8-4b3f-925e-0143bcc9d6ca)

### 과제 2
- 과제 1과 별도의 페이지에서 제작해야 합니다.
- 과제 1에서 제작한 컴포넌트를 재활용해야 합니다.
- 검색바에서 카메라 아이콘을 클릭 시 검색바가 확장되며 이미지 업로드가 가능한 형태로 변형됩니다.
- 이미지 업로드 검색바는 아래 기능을 제공해야 합니다.
	- 클릭해서 업로드
	- 드래그 앤 드롭해서 업로드
	- 링크를 입력해서 업로드
- 이미지 업로드 검색바는 아래와 같은 데이터 검증 기능이 있어야 합니다.
	- 이미지 파일이 아닌 파일을 업로드할 수 없어야 합니다.
	- 이미지 파일의 링크가 아닌 경우 경고 아이콘이 노출되어야 하며, 검색이 불가해야 합니다.
	- 이미지 파일 링크 예시
		- https://dalpha-internal-imagesearch.s3.ap-northeast-2.amazonaws.com/channel_id=46/y=2024/m=03/d=04/39518429771-1709587733786.jpg
  		- https://cf.product-image.s.zigzag.kr/original/d/2023/6/1/29610_202306011830180794_92780.jpeg?width=300&height=300&quality=80&format=webp
    		- https://gdimg.gmarket.co.kr/1450887760/still/400?ver=1619165460
- 검색 결과 화면에서 검색 결과의 이미지를 클릭 시 해당 이미지로 검색이 되는 기능을 구현해야 합니다.
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/bff4baf7-1c7e-4f06-b434-2fb0c51fadc0)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/6f4b74a6-9e9c-432a-bf3c-6f334b153634)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/97bcf73c-e1f2-493d-b00c-2dacdc3973d1)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/2bf62e80-3367-40df-bf3a-e38f41c4d9c7)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/7c910dd5-1582-4ece-bb64-d9a786f55b61)
![image](https://github.com/dalphakr/frontend-assignment/assets/113716298/47859417-d20b-42d1-a224-21c79448918d)

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
  - 과제 1
	  - [ ] 기본 UI 개발 (디자인에 대한 정확한 구현)
	  - [ ] API 요청 및 응답에 대한 구현
	  - [ ] 로딩 화면 및 자연스러운 컴포넌트 이동 및 변화 구현
  - 과제 2
	  - [ ] 이미지 업로드 컴포넌트에 대한 기본 기능 구현
	  - [ ] 이미지 업로드 컴포넌트에서 정확한 데이터 검증 구현
	  - [ ] 검색 결과 화면에서 검색 결과 이미지 클릭 시 해당 이미지로 검색되는 기능 구현
	  - [ ] 과제 1에서 제작한 컴포넌트의 재활용
	  - [ ] 기본 UI 개발 (디자인에 대한 정확한 구현)
	  - [ ] API 요청 및 응답에 대한 구현
	  - [ ] 로딩 화면 및 자연스러운 컴포넌트 이동 및 변화 구현

### 제출 확인

- 아래 사진처럼 submission 태그와 함께 PR이 등록되었다면 제출 완료입니다.

  ![submit_pr_image](/public/images/submit_pr.png)
