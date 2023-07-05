//     festivalTitle: "", //축제 이름
//     festivalAreaIns: "", //축제 장소
//     festivalDate: "", //축제 날짜
//     festivalMainIns: "", //축제 설명
//     festivalTag: "", //축제 해시태그
//     festivalSite: "", //축제 사이트

//카드 이미지 hover했을 때 나올 카드 내용
//서울

const festivalSeoul = [
  {
    festivalTitle: "석촌호수 벚꽃축제", //축제 이름
    festivalAreaIns: "장소 : 서울 송파구 석촌호수", //축제 장소
    festivalDate: "기간 : 23.04.05. (수) ~ 23.04.09. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : 아름다운 봄, 벚꽃이야기 호수벚꽃축제'는\n4월 5일 석촌호수 동호 중앙무대에서 개막식 공연과 함께 축제의 시작을 알리며,\n 이후로는 청년 버스킹 및 문화예술단체 등이 준비한 각종 공연이 진행됩니다.\n", //축제 설명
    festivalTag: "#석촌호수 #벚꾳 #도심여행 #피크닉", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=c3c8b79f-14e4-4f19-8f9b-e9b3826ee4ea&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=1908132&qvt=0&query=%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98%20%EB%B2%9A%EA%BD%83%EC%B6%95%EC%A0%9C", //축제 사이트
  },
  {
    festivalTitle: "궁중문화축전", //축제 이름
    festivalAreaIns: "경복궁, 창덕궁, 창경궁, 덕수궁, 경희궁, 종묘, 사직단", //축제 장소
    festivalDate: "기간 : 23.04.29. (토) ~ 23.05.07. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : ‘궁중문화축전’은 대한민국의 대표 문화유산인 경복궁, 창덕궁, 덕수궁, 창경궁, 경희궁 5대궁과 종묘, 사직단을 배경으로 펼쳐지는 국내 최대 문화유산 축제이다.", //축제 설명
    festivalTag: "#경복궁 #광화문 #도심여행 #문화유산", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=1bb9ef3a-65ba-44c2-87f9-9ce04a8ee02f&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=3515656&qvt=0&query=%EA%B6%81%EC%A4%91%EB%AC%B8%ED%99%94%EC%B6%95%EC%A0%84", //축제 사이트
  },
  {
    festivalTitle: "서울릴랙스위크", //축제 이름
    festivalAreaIns: "장소 : 서울무역전시컨벤션센터(SETEC) 컨벤션홀", //축제 장소
    festivalDate: "기간 : 23.03.01. (수) ~ 23.04.30. (일)", //축제 날짜
    festivalMainIns:
      "축제 소개 : 서울릴랙스위크는 누구나 방문하여 몸과 마음을 돌볼 수 있는 '마음이 쉬는 곳'으로 구성되어 있는 서울 도시 축제이자, 멘탈 힐링 축제이다.", //축제 설명
    festivalTag: "#힐링축제 #휴식 #스트레스완화 #위로 #강남", //축제 해시태그
    festivalSite:
      "https://korean.visitkorea.or.kr/detail/fes_detail.do?cotid=07fd5131-66e8-4be9-b111-546570827ba1&big_category=undefined&mid_category=undefined&big_area=undefined&referrer=https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bk00&pkid=110&os=24775060&qvt=0&query=%EC%84%9C%EC%9A%B8%EB%A6%B4%EB%9E%99%EC%8A%A4%EC%9C%84%ED%81%AC", //축제 사이트
  },
  {
    festivalTitle: "한강 벚꽃축제",
    festivalAreaIns: "장소: 서울특별시 용산구 한강진로",
    festivalDate: "기간: 23.04.08. (토) ~ 23.04.10. (월)",
    festivalMainIns:
      "Celebrate spring with stunning cherry blossoms along the Han River at the annual Han River Cherry Blossom Festival, held from April 8 to 10 in Yongsan-gu, Seoul.",
    festivalTag: "#한강 #벚꽃 #축제 #봄나들이 #인생샷",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "서울국제빈티지페어",
    festivalAreaIns: "장소: 서울특별시 용산구 한강대로 23길 55",
    festivalDate: "기간: 23.05.06. (토) ~ 23.05.07. (일)",
    festivalMainIns:
      "Discover unique vintage finds and retro treasures at the Seoul International Vintage Fair, held on May 6-7 in Yongsan-gu, Seoul.",
    festivalTag: "#서울국제빈티지페어 #빈티지 #레트로 #유니크한물건 #감성",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalBusan = [
  {
    festivalTitle: "부산 국제영화제",
    festivalAreaIns: "장소 : 부산 해운대구 우동 1467",
    festivalDate: "기간 : 23.10.06. (금) ~ 23.10.15. (일)",
    festivalMainIns:
      "Asia's largest film festival, Busan International Film Festival",
    festivalTag: "#영화제 #부산 #국제이벤트",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "해운대 청년수련축제",
    festivalAreaIns: "장소 : 부산광역시 해운대구 재송동 339-3",
    festivalDate: "기간 : 23.08.01. (화) ~ 23.08.05. (토)",
    festivalMainIns: "Youth Training Festival at Haeundae Beach in Busan",
    festivalTag: "#수련 #축제 #해운대",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "부산 국제불빛축제",
    festivalAreaIns: "장소 : 부산 수영구 광안해변로 219",
    festivalDate: "기간 : 23.11.01. (수) ~ 23.11.11. (토)",
    festivalMainIns: "Busan International Fireworks Festival",
    festivalTag: "#불꽃놀이 #축제 #부산 #해운대",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "해운대 바닷가국제트라이애슬론",
    festivalAreaIns: "장소 : 부산 수영구 광안해변로 219",
    festivalDate: "기간 : 23.06.xx. (일정 미정)",
    festivalMainIns: "Haeundae Beach International Triathlon",
    festivalTag: "#트라이애슬론 #해운대 #스포츠",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "부산 국제모터쇼",
    festivalAreaIns: "장소 : 부산 해운대구 APEC로 55",
    festivalDate: "기간 : 23.05.25. (목) ~ 23.06.03. (토)",
    festivalMainIns: "Busan International Motor Show",
    festivalTag: "#모터쇼 #부산 #국제이벤트",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalDaegu = [
  {
    festivalTitle: "대구 국제 단편영화제",
    festivalAreaIns: "장소 : 대구시 중구 동성로 일원",
    festivalDate: "기간 : 23.04.21. (금) ~ 23.04.25. (화)",
    festivalMainIns:
      "Film Festival introducing a variety of short films from around the world, showcasing the creativity and artistry of filmmakers.",
    festivalTag: "#영화제 #단편영화 #영화 #아시아 #문화",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대구 어린이 대축제",
    festivalAreaIns: "장소 : 대구 국립대구박물관",
    festivalDate: "기간 : 23.05.05. (금) ~ 23.05.07. (일)",
    festivalMainIns:
      "Children's festival featuring interactive exhibitions, performances, and educational activities for young visitors.",
    festivalTag: "#어린이 #축제 #교육 #체험 #가족",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대구 서문시장 먹거리 축제",
    festivalAreaIns: "장소 : 대구시 중구 서문시장 일원",
    festivalDate: "기간 : 23.05.12. (금) ~ 23.05.14. (일)",
    festivalMainIns:
      "Food festival featuring local street vendors selling a variety of traditional Korean snacks and dishes.",
    festivalTag: "#먹거리 #축제 #서문시장 #한식 #음식",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대구 국제 무용제",
    festivalAreaIns: "장소 : 대구시 중구 대구예술시장",
    festivalDate: "기간 : 23.06.10. (토) ~ 23.06.18. (일)",
    festivalMainIns:
      "International dance festival featuring a range of dance styles and performances from renowned dance companies and choreographers around the world.",
    festivalTag: "#무용 #축제 #댄스 #국제 #예술",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대구 국제 달빛마당영화제",
    festivalAreaIns: "장소 : 대구시 중구 달성공원",
    festivalDate: "기간 : 23.09.01. (금) ~ 23.09.09. (토)",
    festivalMainIns:
      "Outdoor film festival featuring a variety of international films screened under the moonlight in a beautiful park setting.",
    festivalTag: "#영화제 #달빛마당 #야외영화 #국제 #문화",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalIncheon = [
  {
    festivalTitle: "인천국제음악제",
    festivalAreaIns: "장소: 인천대학교 중앙캠퍼스 일원",
    festivalDate: "기간: 23.08.11. (금) ~ 23.08.13. (일)",
    festivalMainIns:
      "Introducing Incheon International Music Festival - A celebration of diverse music and cultures featuring performances by talented artists from around the world. Come and enjoy the harmony of music!",
    festivalTag: "#음악제 #국제음악제 #다양한공연 #인천 #문화축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },

  {
    festivalTitle: "인천국제공항문화축제",
    festivalAreaIns: "장소: 인천국제공항",
    festivalDate: "기간: 23.09.01. (금) ~ 23.09.10. (일)",
    festivalMainIns:
      "Introducing Incheon International Airport Culture Festival - A unique festival that takes place inside one of Korea's busiest airports, featuring a variety of cultural performances, exhibitions, and activities. Come and experience the excitement of the airport!",
    festivalTag: "#공항축제 #문화체험 #국제공항 #인천 #이색축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },

  {
    festivalTitle: "인천마실축제",
    festivalAreaIns: "장소: 인천 중구 차이나타운 일원",
    festivalDate: "기간: 23.10.06. (금) ~ 23.10.09. (월)",
    festivalMainIns:
      "Introducing Incheon Makgeolli Festival - A celebration of Korea's traditional rice wine, featuring a variety of makgeolli tastings, food pairings, and cultural performances. Come and enjoy the unique flavors of Korea!",
    festivalTag: "#마실축제 #막걸리 #음주 #인천 #먹거리축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },

  {
    festivalTitle: "인천세계도시농업박람회",
    festivalAreaIns: "장소: 인천 아시아드야구장",
    festivalDate: "기간: 23.10.12. (목) ~ 23.10.15. (일)",
    festivalMainIns:
      "Introducing Incheon Urban Agriculture Expo - A global exhibition showcasing the latest trends in urban farming and sustainable agriculture. Come and learn about the future of food and agriculture!",
    festivalTag: "#도시농업박람회 #농업 #지속가능성 #인천 #세계박람회",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "인천 차이나타운 축제",
    festivalAreaIns: "장소: 인천 중구 신포로27번길",
    festivalDate: "기간: 10.01.(토) ~ 10.03.(월, 추석연휴)",
    festivalMainIns:
      "축제 소개: 인천 차이나타운 축제는 추석 연휴 기간 중 개최되며,\n 다양한 문화행사와 음식, 상품 등이 있는 중국 문화 축제입니다.",
    festivalTag: "#추석연휴 #인천 #차이나타운 #중국문화 #먹거리축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalGwangju = [
  {
    festivalTitle: "광주 비엔날레",
    festivalAreaIns: "장소: 광주시 남구 양림동 1145-2",
    festivalDate: "기간: 23.09.02. (토) ~ 23.11.06. (월)",
    festivalMainIns:
      "Introducing Gwangju Biennale - A world-renowned contemporary art festival featuring works from international artists. Don't miss this opportunity to experience the cutting-edge of art!",
    festivalTag: "#비엔날레 #현대미술 #국제축제 #광주 #문화축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },

  {
    festivalTitle: "광주세계수영대회",
    festivalAreaIns: "장소: 광주아시아문화전당",
    festivalDate: "기간: 23.07.07. (금) ~ 23.07.16. (일)",
    festivalMainIns:
      "Introducing Gwangju World Swimming Championships - The world's top swimmers will gather in Gwangju to compete in this exciting event. Don't miss your chance to witness world records being broken!",
    festivalTag: "#수영대회 #세계최고선수 #광주 #스포츠축제 #국제대회",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },

  {
    festivalTitle: "광주월드비어페스티벌",
    festivalAreaIns: "장소: 광주시 서구 치평동 142",
    festivalDate: "기간: 23.05.12. (금) ~ 23.05.14. (일)",
    festivalMainIns:
      "Introducing Gwangju World Beer Festival - A celebration of beer and good times! Come enjoy a variety of brews from around the world and experience the lively atmosphere of this festival.",
    festivalTag: "#맥주축제 #국제맥주 #광주 #음주문화 #축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },

  {
    festivalTitle: "광주무예축제",
    festivalAreaIns: "장소: 광주시 동구 서남로 1",
    festivalDate: "기간: 23.09.29. (금) ~ 23.10.01. (일)",
    festivalMainIns:
      "Introducing Gwangju Martial Arts Festival - A showcase of martial arts from around the world! Come witness amazing feats of strength and agility and experience the excitement of this festival.",
    festivalTag: "#무예축제 #격투기 #국제축제 #광주 #스포츠",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "광주전남 대학생 영화제",
    festivalAreaIns: "장소: 광주광역시 동구 동명동 111",
    festivalDate: "기간: 22.11.08.(화) ~ 22.11.14.(월)",
    festivalMainIns:
      "Film festival for university students in Gwangju and Jeonnam province.",
    festivalTag: "#영화제 #학생영화제 #광주 #전라남도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalDaejeon = [
  {
    festivalTitle: "대전국제음악제",
    festivalAreaIns: "장소: 대전시 유성구 대덕대로 480 (대전문화예술단지)",
    festivalDate: "기간: 2023.09.15. (금) ~ 23.09.24. (일)",
    festivalMainIns:
      "The Daejeon International Music Festival brings together renowned musicians from around the world to showcase a variety of music genres, from classical to contemporary. The festival offers a unique opportunity to experience the beauty and diversity of music, and to appreciate the talents of musicians from diverse cultural backgrounds.",
    festivalTag: "#음악제 #클래식음악 #콘서트 #대전 #문화예술",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대전국제청소년영화제",
    festivalAreaIns:
      "장소: 대전광역시 서구 둔산동 1004-1 (한국예술종합학교 대전캠퍼스)",
    festivalDate: "기간: 23.07.12. (수) ~ 23.07.16. (일)",
    festivalMainIns:
      "The Daejeon International Youth Film Festival celebrates young filmmakers and the art of cinema. The festival showcases a range of films made by young directors from around the world, offering a unique opportunity to explore different perspectives and cultures through the lens of youth.",
    festivalTag: "#영화제 #청소년 #영화 #다양한문화 #국제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대전장터한마당",
    festivalAreaIns: "장소: 대전광역시 중구 대흥동 1-1 (대전 중앙로)",
    festivalDate: "기간: 23.09.22. (금) ~ 23.09.24. (일)",
    festivalMainIns:
      "대전장터한마당 is a traditional market festival that takes place in the heart of Daejeon. The festival showcases local produce, crafts, and food, offering visitors a unique opportunity to experience the rich cultural heritage of the city.",
    festivalTag: "#장터 #축제 #문화 #대전 #한국전통",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대전광역시 희망축제",
    festivalAreaIns: "장소: 대전광역시 유성구 봉명동 613 (대전체육관)",
    festivalDate: "기간: 23.05.27. (토) ~ 23.05.28. (일)",
    festivalMainIns:
      "The Daejeon Hope Festival is a charity event that aims to raise awareness and support for people in need. The festival features a range of activities and performances, and all proceeds go to local charities.",
    festivalTag: "#희망 #축제 #선물 #나눔 #대전",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "대전국제영화제",
    festivalAreaIns: "장소: 대전광역시 유성구 대학로 291 (대덕대학교)",
    festivalDate: "기간: 23.04.28. (금) ~ 23.05.02. (화)",
    festivalMainIns:
      "Introducing Daejeon International Film Festival - A celebration of cinema and culture featuring screenings of diverse films from around the world. Don't miss out!",
    festivalTag: "#영화제 #다양한작품 #문화축제 #대전 #국제영화제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalUlsan = [
  {
    festivalTitle: "울산 바다소리축제",
    festivalAreaIns: "장소: 울산 남구 대현항",
    festivalDate: "기간: 23.05.13. (토) ~ 23.05.15. (월)",
    festivalMainIns:
      "Listen to the sound of the sea and enjoy various seafood dishes at Ulsan's largest seafood festival.",
    festivalTag: "#바다소리축제 #울산 #해물축제 #음식축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "울산 불빛축제",
    festivalAreaIns: "장소: 울산광역시 남구",
    festivalDate: "기간: 23.10.07. (금) ~ 23.10.09. (일)",
    festivalMainIns:
      "Experience the beautiful autumn night with the fantastic light shows and exhibitions in Ulsan city.",
    festivalTag: "#울산불빛축제 #불빛축제 #울산 #가을축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "울산 국제모터쇼",
    festivalAreaIns: "장소: 울산 중구 신복로 60",
    festivalDate: "기간: 23.04.20. (목) ~ 23.04.24. (월)",
    festivalMainIns:
      "Experience the latest trends in the automotive industry and test-drive various cars at Ulsan International Motor Show.",
    festivalTag: "#모터쇼 #울산 #자동차축제 #테스트드라이브",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "울산 천하제일북부제전",
    festivalAreaIns: "장소: 울산 동구 방어진초등학교 앞 일원",
    festivalDate: "기간: 23.08.16. (수) ~ 23.08.20. (일)",
    festivalMainIns:
      "Experience the traditional martial arts and cultural performances from all over the country at Ulsan's largest traditional festival.",
    festivalTag: "#천하제일북부제전 #울산 #무예축제 #문화축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "울산 대천제",
    festivalAreaIns: "장소: 울산 남구 대송로",
    festivalDate: "기간: 23.07.20. (목) ~ 23.07.23. (일)",
    festivalMainIns:
      "Enjoy the hot summer nights with the exciting performances and fireworks at Ulsan Daecheonje Festival.",
    festivalTag: "#대천제 #울산 #축제 #불꽃놀이",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalSejong = [
  {
    festivalTitle: "세종 불빛 축제",
    festivalAreaIns: "장소: 세종특별자치시",
    festivalDate: "기간: 23.01.07. (토) ~ 23.01.09. (월)",
    festivalMainIns:
      "Experience the spectacular light installations and performances in the winter night.",
    festivalTag: "#불빛축제 #세종시 #겨울축제 #조명아트",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "세종 문화예술축제",
    festivalAreaIns: "장소: 세종특별자치시 조치원읍",
    festivalDate: "기간: 23.04.15. (토) ~ 23.04.23. (일)",
    festivalMainIns:
      "Experience various cultural activities and performances in the city of Sejong.",
    festivalTag: "#문화예술축제 #세종시 #봄축제 #문화축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "세종 가을 축제",
    festivalAreaIns: "장소: 세종특별자치시",
    festivalDate: "기간: 23.10.01. (토) ~ 23.10.09. (일)",
    festivalMainIns:
      "Enjoy the autumn season with colorful leaves and various activities.",
    festivalTag: "#가을축제 #세종시 #놀이터축제 #체험활동",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "세종 체험 농업 축제",
    festivalAreaIns: "장소: 세종특별자치시 전의면",
    festivalDate: "기간: 23.10.21. (금) ~ 23.10.23. (일)",
    festivalMainIns:
      "Experience the farming culture and enjoy the fresh harvest in the countryside of Sejong.",
    festivalTag: "#체험농업 #세종시 #가을축제 #전통농업",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "세종 와인축제",
    festivalAreaIns: "장소: 세종특별자치시",
    festivalDate: "기간: 23.11.04. (금) ~ 23.11.06. (일)",
    festivalMainIns:
      "Taste and enjoy various wines from all over the world in Sejong city.",
    festivalTag: "#와인축제 #세종시 #푸드트럭 #와인시음",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalGyeonggi = [
  {
    festivalTitle: "파주 유기농 연꽃축제",
    festivalAreaIns: "장소: 경기도 파주시 교하동 536",
    festivalDate: "기간: 23.07.23. (토) ~ 23.07.31. (일)",
    festivalMainIns: "Enjoy the beautiful lotus flowers in the organic farm.",
    festivalTag: "#연꽃축제 #유기농농업 #파주 #경기도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "수원 화성박람회",
    festivalAreaIns: "장소: 경기도 수원시 팔달구 화성로 1-15",
    festivalDate: "기간: 23.09.01. (목) ~ 23.09.10. (토)",
    festivalMainIns:
      "Experience the Korean traditional culture at the Suwon Hwaseong Fortress.",
    festivalTag: "#화성박람회 #한국전통문화 #수원 #경기도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "이천 대추축제",
    festivalAreaIns: "장소: 경기도 이천시 대월면 천서로 222",
    festivalDate: "기간: 23.09.23. (금) ~ 23.09.25. (일)",
    festivalMainIns:
      "Celebrate the harvest season with delicious jujubes in the traditional market.",
    festivalTag: "#대추축제 #이천 #경기도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "화성시 문화제",
    festivalAreaIns: "장소: 경기도 화성시",
    festivalDate: "기간: 23.10.01. (토) ~ 23.10.09. (일)",
    festivalMainIns:
      "Experience various cultural activities and performances in the city of Hwaseong.",
    festivalTag: "#화성시문화제 #문화축제 #화성 #경기도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "평택 돼지꿀잼축제",
    festivalAreaIns: "장소: 경기도 평택시 청북읍 꿀잼로 40",
    festivalDate: "기간: 23.10.29. (토) ~ 23.10.31. (월)",
    festivalMainIns:
      "Enjoy various pork dishes and activities with sweet honey flavor.",
    festivalTag: "#돼지꿀잼축제 #평택 #경기도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalGangwon = [
  {
    festivalTitle: "강원감자밭축제",
    festivalAreaIns: "장소: 강원도 인제군 북면 강원감자밭",
    festivalDate: "기간: 23.09.30. (토) ~ 23.10.02. (월)",
    festivalMainIns:
      "Enjoy the beautiful autumn scenery and taste delicious potatoes at the Gangwon Potato Field Festival in Inje-gun, Gangwon Province.",
    festivalTag: "#강원감자밭 #감자축제 #가을농촌체험 #맛축제 #가을여행",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "양구 청정수산물축제",
    festivalAreaIns: "장소: 강원도 양구군 양구읍",
    festivalDate: "기간: 23.08.04. (금) ~ 23.08.06. (일)",
    festivalMainIns:
      "The Yanggu Clean Seafood Festival offers a variety of fresh seafood dishes and fun activities in the scenic town of Yanggu, Gangwon Province.",
    festivalTag: "#청정수산물 #수산물축제 #양구 #여름축제 #가족여행",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "춘천닭갈비축제",
    festivalAreaIns: "장소: 강원도 춘천시 퇴계동",
    festivalDate: "기간: 23.09.30. (토) ~ 23.10.09. (월)",
    festivalMainIns:
      "Indulge in the spicy and savory flavors of Chuncheon Dakgalbi (stir-fried spicy chicken) at the Chuncheon Dakgalbi Festival in Chuncheon, Gangwon Province.",
    festivalTag: "#닭갈비 #춘천 #음식축제 #가을여행 #맛있는축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "태백산국제눈썰매대회",
    festivalAreaIns: "장소: 강원도 태백시 덕계리 눈썰매장",
    festivalDate: "기간: 23.01.05. (목) ~ 23.01.15. (일)",
    festivalMainIns:
      "Experience the thrill of sledding down Taebaeksan Mountain at the Taebaeksan International Snow Sledding Festival in Taebaek, Gangwon Province.",
    festivalTag: "#눈썰매 #태백산 #겨울축제 #스포츠 #눈놀이",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "강원도 화천 벚꽃축제",
    festivalAreaIns: "장소: 강원도 화천군 화천읍 철원로 59-14 철우회관",
    festivalDate: "기간: 23.04.16. (토) ~ 23.04.24. (일)",
    festivalMainIns: "Spring festival with beautiful cherry blossoms.",
    festivalTag: "#꽃축제 #봄축제 #화천 #강원도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalNorth_Chungcheong = [
  {
    festivalTitle: "제천국제음악영화제",
    festivalAreaIns: "장소 : 충청북도 제천시",
    festivalDate: "기간 : 23.08.04. (금) ~ 23.08.09. (수)",
    festivalMainIns: "Jecheon International Music & Film Festival",
    festivalTag: "#음악영화 #영화제 #제천 #국제이벤트",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "청춘물총축제",
    festivalAreaIns: "장소 : 충청북도 충주시 노은면",
    festivalDate: "기간 : 23.08.18. (금) ~ 23.08.20. (일)",
    festivalMainIns: "Youth Water Gun Festival",
    festivalTag: "#물총 #축제 #청춘 #충주",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "영동농산물직판장 축제",
    festivalAreaIns: "장소 : 충청북도 영동군",
    festivalDate: "기간 : 23.09.08. (금) ~ 23.09.10. (일)",
    festivalMainIns: "Yeongdong Agricultural Product Market Festival",
    festivalTag: "#농산물 #직판장 #축제 #영동",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "단양국제치악송년설음악제",
    festivalAreaIns: "장소 : 충청북도 단양군",
    festivalDate: "기간 : 23.02.xx. (일정 미정)",
    festivalMainIns: "Danyang International Winter Music Festival",
    festivalTag: "#칠악산 #음악제 #겨울 #단양",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "청풍호 벚꽃 축제",
    festivalAreaIns: "장소 :  충청북도 제천시 청풍면 청풍호로 2048",
    festivalDate: "기간 : 23.04.xx. (일정 미정)",
    festivalMainIns: "Jecheon International flower Festival",
    festivalTag: "#연인과 #벚꽃 #제천 #국제이벤트",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalSouth_Chungcheong = [
  {
    festivalTitle: "태안 청산축제",
    festivalAreaIns: "장소: 충청남도 태안군",
    festivalDate: "기간: 23.05.20. (토) ~ 23.05.22. (월)",
    festivalMainIns:
      "Enjoy nature and traditional culture at Taean Cheongsan Festival.",
    festivalTag: "#청산축제 #태안여행 #문화축제 #봄나들이",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "당진 천사랑축제",
    festivalAreaIns: "장소: 충청남도 당진시",
    festivalDate: "기간: 23.07.20. (목) ~ 23.07.23. (일)",
    festivalMainIns:
      "Experience the beauty of cosmos flowers at Dangjin Cheonsarang Festival.",
    festivalTag: "#천사랑축제 #당진여행 #꽃놀이 #가족축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "태안 대산갯벌 축제",
    festivalAreaIns: "장소: 충청남도 태안군",
    festivalDate: "기간: 23.09.22. (금) ~ 23.09.24. (일)",
    festivalMainIns:
      "Explore the wonders of the tidal flats at Taean Dae-san Gatbawi Festival.",
    festivalTag: "#대산갯벌축제 #태안여행 #자연축제 #가을나들이",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "공주 섬진강 문화축제",
    festivalAreaIns: "장소: 충청남도 공주시",
    festivalDate: "기간: 23.10.12. (목) ~ 23.10.15. (일)",
    festivalMainIns:
      "Experience traditional Korean culture and art at Gongju Seomjin River Cultural Festival.",
    festivalTag: "#섬진강문화축제 #공주여행 #한국전통문화 #가을축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "아산 천만송이 국화축제",
    festivalAreaIns: "장소: 충청남도 아산시",
    festivalDate: "기간: 23.11.03. (금) ~ 23.11.05. (일)",
    festivalMainIns:
      "Admire the beauty of millions of chrysanthemums at Asan Chrysanthemum Festival.",
    festivalTag: "#천만송이국화축제 #아산여행 #꽃구경 #가을나들이",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalNorth_Jeolla = [
  {
    festivalTitle: "전주한지문화축제",
    festivalAreaIns: "장소 : 전주한지문화관 일원",
    festivalDate: "기간 : 10.01.(화) ~ 10.03.(금)",
    festivalMainIns:
      "Celebrating the beauty of traditional Korean paper, the Jeonju Hanji Culture Festival offers a wide range of activities and exhibits for visitors to enjoy.",
    festivalTag: "#전주한지문화축제 #전주한지 #문화축제 #전통공예 #한지작업",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "익산 천만송이 국화축제",
    festivalAreaIns: "장소 : 익산 천일산국화원",
    festivalDate: "기간 : 10.01.(화) ~ 10.31.(목)",
    festivalMainIns:
      "With over ten million chrysanthemums on display, the Iksan Chrysanthemum Festival is a breathtaking sight to behold.",
    festivalTag:
      "#익산천만송이국화축제 #천일산국화원 #국화축제 #가을여행 #자연경관",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "전주 막걸리와 전통주축제",
    festivalAreaIns: "장소 : 전주한옥마을",
    festivalDate: "기간 : 10.09.(화) ~ 10.12.(금)",
    festivalMainIns:
      "Sample a variety of traditional Korean liquors, including makgeolli, at the Jeonju Makgeolli and Traditional Liquor Festival.",
    festivalTag: "#전주막걸리와전통주축제 #전주한옥마을 #막걸리 #전통주 #음주",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "김제 가을 축제",
    festivalAreaIns: "장소 : 김제시",
    festivalDate: "기간 : 10.11.(금) ~ 10.13.(일)",
    festivalMainIns:
      "Featuring a variety of cultural performances and experiences, the Gimje Autumn Festival is a great way to enjoy the season.",
    festivalTag: "#김제가을축제 #김제시 #가을축제 #문화축제 #축제놀이",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "남원축제",
    festivalAreaIns: "장소 : 전라북도 남원시",
    festivalDate: "기간 : 09.28.(토) ~ 10.06.(일)",
    festivalMainIns:
      "The Namwon Festival is a celebration of traditional Korean music and dance, with performances and events held throughout the city.",
    festivalTag: "#남원축제 #전통음악축제 #축제여행 #남원시 #문화축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalSouth_Jeolla = [
  {
    festivalTitle: "순천만국제수산식품축제",
    festivalAreaIns: "장소: 전라남도 순천시 순천만 논산리 994-1",
    festivalDate: "기간: 23.04.28.(금) ~ 23.05.01.(월)",
    festivalMainIns: "International seafood festival in Suncheon-man. ",
    festivalTag: "#수산물축제 #해산물 #전통시장 #해외방문객 #순천",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "무안초록우체국제화제",
    festivalAreaIns: "장소: 전라남도 무안군 삼향읍 청곡로 1622",
    festivalDate: "기간: 23.06.09.(금) ~ 23.06.11.(일)",
    festivalMainIns:
      "Green post office international flower exhibition in Mu-an",
    festivalTag: "#국제화제 #국화 #여름축제 #전통문화 #무안",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "완도굴뚝축제",
    festivalAreaIns: "장소: 전라남도 완도군 완도읍 금당리 1416-14",
    festivalDate: "기간: 23.05.05.(금) ~ 23.05.08.(월)",
    festivalMainIns: "Wando brick chimney festival",
    festivalTag: "#굴뚝축제 #해돋이 #야간불꽃놀이 #봄나들이 #완도",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },

  {
    festivalTitle: "장흥세계비자림축제",
    festivalAreaIns: "장소: 전라남도 장흥군 장흥읍 비자림로 600",
    festivalDate: "기간: 23.07.01.(토) ~ 23.07.03.(월)",
    festivalMainIns: "Jangheung World Bamboo Forest Festival",
    festivalTag: "#비자림축제 #대나무숲 #국제축제 #전통공연 #장흥",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "여수세계박람회",
    festivalAreaIns: "장소: 전라남도 여수시 공동 1로 141",
    festivalDate: "기간: 23.07.14.(금) ~ 23.11.05.(일)",
    festivalMainIns: "Expo in Yeosu",
    festivalTag: "#세계박람회 #해양경제 #푸드트럭 #해외방문객 #여수",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalNorth_Gyeongsang = [
  {
    festivalTitle: "안동국제탈춤축제",
    festivalAreaIns: "장소: 경상북도 안동시",
    festivalDate: "기간: 23.09.29. (금) ~ 23.10.08. (일)",
    festivalMainIns:
      "Introducing the Andong International Mask Dance Festival, which celebrates the culture of mask dances from all over the world.",
    festivalTag: "#축제 #안동 #문화축제 #한국전통문화 #국제축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "포항국제불빛축제",
    festivalAreaIns: "장소: 경상북도 포항시",
    festivalDate: "기간: 23.07.28. (금) ~ 23.08.06. (일)",
    festivalMainIns:
      "The Pohang International Fireworks Festival, where you can enjoy beautiful fireworks and various cultural events.",
    festivalTag: "#축제 #불꽃축제 #포항 #문화축제 #해변축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "경주월드문화유산축제",
    festivalAreaIns: "장소: 경상북도 경주시",
    festivalDate: "기간: 23.09.29. (금) ~ 23.10.09. (월)",
    festivalMainIns:
      "The Gyeongju World Culture Heritage Festival, where you can experience the cultural heritage of Korea and the world.",
    festivalTag: "#축제 #경주 #문화축제 #유네스코세계문화유산 #한국전통문화",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "무주반딧불축제",
    festivalAreaIns: "장소: 경상북도 무주군",
    festivalDate: "기간: 23.09.29. (금) ~ 23.10.09. (월)",
    festivalMainIns:
      "The Muju Sancheong Festival, where you can experience traditional Korean culture and natural beauty.",
    festivalTag: "#축제 #무주 #반딧불축제 #한국전통문화 #자연축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "영덕낙사제",
    festivalAreaIns: "장소: 경상북도 영덕군",
    festivalDate: "기간: 23.10.01. (일) ~ 23.10.09. (월)",
    festivalMainIns:
      "Introducing the Yeongdeok Naksansa Festival, where you can enjoy various cultural events and the beautiful scenery of Naksan Beach.",
    festivalTag: "#축제 #영덕 #문화축제 #해변축제 #자연축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalSouth_Gyeongsang = [
  {
    festivalTitle: "진해국제모조란축제",
    festivalAreaIns: "장소 : 경상남도 창원시 진해구 진해대로 1032",
    festivalDate: "기간 : 23.04.29. (토) ~ 23.05.08. (월)",
    festivalMainIns:
      "Colorful lanterns, exciting performances, and delicious food await you at the Jinhae International Military Band & Mozzarella Festival.",
    festivalTag: "#Jinhae #Mozzarella #MilitaryBand #CherryBlossom",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "어기야디어차",
    festivalAreaIns: "장소 : 경상남도 거제시 거제해안로 527",
    festivalDate: "기간 : 23.05.27. (토) ~ 23.05.30. (화)",
    festivalMainIns:
      "Savor the taste of the sea and enjoy the traditional fishing village atmosphere at the Geoje Eocheon Masil Festival.",
    festivalTag: "#Geoje #Eocheon #Seafood #FishingVillage",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "통영국제음악제",
    festivalAreaIns: "장소 : 경상남도 통영시 중앙로 50",
    festivalDate: "기간 : 23.04.05. (수) ~ 23.04.09. (일)",
    festivalMainIns:
      "Experience the beauty of art and nature at the Tongyeong International Flower Festival, where vibrant blooms and scenic landscapes come together.",
    festivalTag: "#Tongyeong #MusicFestival #ArtAndNature #Spring",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "진주남강유등축제",
    festivalAreaIns: "장소 : 경상남도 진주시 남강로 1007",
    festivalDate: "기간 : 23.05.12. (금) ~ 23.05.14. (일)",
    festivalMainIns:
      "See the beauty of the Namgang River come to life at the Jinju Namgang Yudeung Festival, with thousands of floating lanterns illuminating the night sky.",
    festivalTag: "#Jinju #NamgangRiver #LanternFestival #NightView",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "산청사과축제",
    festivalAreaIns: "장소 : 경상남도 산청군 시천면 법수로 315-36",
    festivalDate: "기간 : 23.10.07. (토) ~ 23.10.10. (화)",
    festivalMainIns:
      "Taste the sweetness of autumn at the Sanchung Apple Festival, featuring a variety of apple-themed activities and delicious treats.",
    festivalTag: "#Sanchung #AppleFestival #Autumn #Food",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];
const festivalJeju = [
  {
    festivalTitle: "제주 해녀축제",
    festivalAreaIns: "장소: 제주특별자치도 서귀포시",
    festivalDate: "기간: 23.04.28. (금) ~ 23.05.07. (일)",
    festivalMainIns:
      "Celebrating the culture of Jeju's female divers, the Jeju Haenyeo Festival features traditional performances, hands-on experiences, and fresh seafood.",
    festivalTag: "#해녀문화 #제주해녀축제 #제주여행 #먹거리축제 #제주바다",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "제주 벚꽃축제",
    festivalAreaIns: "장소: 제주시 한림공원",
    festivalDate: "기간: 23.03.24. (금) ~ 23.04.02. (일)",
    festivalMainIns:
      "Experience the beauty of spring in Jeju with the Jeju Cherry Blossom Festival, featuring a variety of events and activities amidst blooming cherry blossoms.",
    festivalTag: "#벚꽃축제 #봄여행 #제주도 #나들이 #데이트",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "제주 바다처럼 깊은 이야기, 제주 드라마제",
    festivalAreaIns: "장소: 제주 컨벤션센터",
    festivalDate: "기간: 23.08.23. (수) ~ 23.08.27. (일)",
    festivalMainIns:
      "Celebrate the beauty and culture of Jeju Island through film and television at the Jeju Drama Festival.",
    festivalTag: "#제주드라마제 #제주영화제 #제주여행 #문화축제 #한류",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "제주 불꽃축제",
    festivalAreaIns: "장소: 제주시 김녕과 한림 일원",
    festivalDate: "기간: 23.12.29. (금) ~ 23.12.31. (일)",
    festivalMainIns:
      "Ring in the new year with the spectacular fireworks display at the Jeju Fire Festival.",
    festivalTag: "#불꽃축제 #제주여행 #카운트다운 #신년축하불 #파이어웍스",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
  {
    festivalTitle: "제주 산방산 등반축제",
    festivalAreaIns: "장소: 제주시 구좌읍",
    festivalDate: "기간: 23.09.16. (토) ~ 23.09.17. (일)",
    festivalMainIns:
      "Hike the scenic Mt. Sanbang and enjoy cultural performances and local food at the Jeju Sanbangsan Climbing Festival.",
    festivalTag: "#산방산등반축제 #제주여행 #아웃도어 #자연체험 #문화축제",
    festivalSite:
      "https://www.mcst.go.kr/kor/s_culture/festival/festivalList.jsp",
  },
];

export const festivalDataList = {
  Seoul: festivalSeoul,
  Busan: festivalBusan,
  Daegu: festivalDaegu,
  Incheon: festivalIncheon,
  Gwangju: festivalGwangju,
  Daejeon: festivalDaejeon,
  Ulsan: festivalUlsan,
  Sejong: festivalSejong,
  Gyeonggi: festivalGyeonggi,
  Gangwon: festivalGangwon,
  North_Chungcheong: festivalNorth_Chungcheong,
  South_Chungcheong: festivalSouth_Chungcheong,
  North_Jeolla: festivalNorth_Jeolla,
  South_Jeolla: festivalSouth_Jeolla,
  North_Gyeongsang: festivalNorth_Gyeongsang,
  South_Gyeongsang: festivalSouth_Gyeongsang,
  Jeju: festivalJeju,
};
