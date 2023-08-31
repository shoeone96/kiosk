# kiosk
### 의류 기부 플랫폼 옷깃의 키오스크 화면 및 서버 구성
- 기획 배경: 꾸준히 증가하는 의류 소비량과 폐의류량 추세에 맞춰 입지 않는 옷을 기부할 수 있는 시스템을 구축하고자 하였다.  
- 서비스 목표: 대학교 기숙사 내 의류 기부함 설치를 통해 기숙사 입/퇴소 시 발생하는 안 입는 의류들을 기부받아, 필요한 봉사, 지자체에 기부하거나 업사이클링 하고자 한다.  
- 키오스크의 역할: 수거함 화면으로 비치되어 대학교 학생 회원 등록을 통해 의류 기부 시 스탬프를 적립 받아 봉사 시간 등을 받을 수 있게 만들어준다.  
- 개발 목표: 이 서비스의 수요를 확인하기 위한 MVP 모델 개발을 목표로 하고 있다.  


### 기술스택:
- Front-End: React, Redux
- Back-End: Springboot, SpringSecurity, SpringDataJpa
- Database: RDS MySQL
- DevOps: AWS EC2 ubuntu, Docker, Nginx


### 서비스 아키텍처:
<img width="1547" alt="Kiosk_Architecture diagram" src="https://github.com/shoeone96/kiosk/assets/85065626/d57d6067-f7ad-4ce1-8995-7b6983823673">


