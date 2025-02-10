# 프로젝트 소개
<br/>

  ![메인 이미지](https://i.imgur.com/E1qlFOr.jpeg)

  해당 프로젝트는 **포켓몬 도감**을 작성하고 실제로 직접 포획할 수 있도록 기획되었다.


  카드의 **추가 버튼**을 누르면 선택한 카드가 내 포켓몬 현황에 **업데이트**된다. 


  몬스터볼은 **6개**만 존재하므로 6마리를 초과하면 **6개를 초과했다는 알림창**이 뜬다. 

  중복된 포켓몬을 획득할 수 없으므로 **중복을 알리는 알림창**이 뜬다.


  포획한 포켓몬을 놓아주고 싶다면 **제거 버튼**을 눌러 놓아줄 수 있다.
  
  
  포켓몬을 자세히 알고 싶다면 카드를 눌러 **상세한 정보를 확인**할 수 있다.

  <br/>

  --- 

  # 프로젝트 정보
  <br/>

  ### 사용: 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> , 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">  , 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">  , 
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">  , 
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">  , 
<img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink">  , 
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

### 기한: `25.02.04 - 25.02.12`

---

# 프로젝트의 한계 

<br/>

- 시간 상의 문제로 **중복 포켓몬** 알림을 구현하지 못했다.
- **styled components가 정리되어 있지 않아** 컴포넌트 다양한 곳에서 정의되고 발견된다.
- 현재 **context API**를 사용해 리팩토링한 브랜치에서 **localStorage에 데이터가 받아지지 않는 오류**와 **리렌더링이 일어나지 않는 오류**가 있다.

<br/>

--- 

# 프로젝트의 수정 과정 (트러블 슈팅)

<br/>

+  [onSubmit 새로고침 해결하기](https://velog.io/@pna9904/onSubmit의-preventDefault-이후-input-초기화하기)

+  [빈 객체가 추가되는 오류](https://velog.io/@pna9904/onSubmit으로-빈-배열이-추가되는-문제)

