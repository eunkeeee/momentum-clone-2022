const quotes = [
  {
    quote: " 삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘존슨",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
  },
  {
    quote:
      "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
    author: "헬렌켈러",
  },
  {
    quote: "피할수 없으면 즐겨라 ",
    author: "누군가",
  },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    quote:
      "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
    author: "채근담",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다. ",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F.스콧 핏제랄드",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.",
    author: "L론허바드",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다,",
    author: "앙드레 말로",
  },
];
const quote = document.querySelector("#quote .quote");
const author = document.querySelector("#quote .author");

// quotes 11개 중 무작위로 뽑자 !!!
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote["quote"];
author.innerText = todaysQuote["author"];
