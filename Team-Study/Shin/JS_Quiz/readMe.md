# 입력에 따른 별 생성

- 문제상황 : 사용자가 입력한 수에 따라 "\*"으로 이루어진 탑이 star 클래스의 자식으로 생성된다.  
  (Ex: 3을 입력시 아래와 같은 탑이 생성된다.)

  \*  
  \*\*  
  \*\*\*

  값이 바뀌면 기존의 "\*"들은 삭제되고 입력한 수에 따른 "\*"이 다시 생성된다.

  이때, 홀수번째 별은 붉은색 짝수번째 별은 푸른색으로 설정한다.

html은 다음과 같습니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>별 생성하기</title>
  </head>
  <body>
    <div class="container">
      <input type="number" min="0" class="count" />
    </div>
    <div class="star"></div>
  </body>
  <script></script>
</html>
```

- Tip 필요한 능력
  for 반복문, if 조건문, 입력 이벤트 리스너  
  javascript 컴포넌트 자식 지우기  
  javascript input 값 가져오기  
  javascript 요소 생성 및 추가하기  
  javascript 문자열 반복하기
