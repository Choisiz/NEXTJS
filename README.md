# NEXTJS

next,js 학습하기 스타트

- data fetching
  1.ssr 서버가 그린다.
  2.csr 클라이언트가 그린다.기존 리액트와 동일
  3.ssg 정적인 사이트를 생성해 그려둔다. dev환경말고 빌드후 실행해보자
  빌드를 할때 이미 만들어짐
  쓰임새: 서버의 과부하를 줄임 ex)블로그 글
  getStaticProps,
  getStaticPaths
  4.isr 특정주기로 데이터를 가져오 다시 그림
  getStaticPorps realvalidate

결론: ssg+isr조합을 추천
