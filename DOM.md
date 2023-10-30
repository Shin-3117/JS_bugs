# DOM Document Object Model

웹 페이지를 구조화된 객체로 제공하여 프로그래밍 언어가 페이지 구조에 접근할 수 있는 방법을 제공

문서의 요소들을 객체로 제공하여 다른 프로그래밍 언어에서 접근하고 조작할 수 있는 방법을 제공하는 API

## NODE

DOM의 기본 구성 단위, DOM tree의 각 부분은 Node라는 객체로 표현됨

- Document Node ⇒ HTML 문서 전체를 나타내는 노드
- Element Node ⇒ HTML 요소를 나타내는 노드
- Text Node ⇒ HTML 텍스트, Element Node 내의 텍스트 컨텐츠
- Attribure Node ⇒ HTML 요소의 속성을 나타내는 노드

### Element

- Node의 하위 유형
- Element는 DOM tree에서 HTML요소를 나타내는 특별한 유형의 Node
- HTML 테그들이 Element Node 생성

### NodeList

- DOM 매서드를 사용해 선택한 Node의 목록
- 배열과 유사 구조를 가지고, index로만 각 항목에 접근 가능, 다양한 배열 메스드 사용 가능
- querySelectorAll()에 의해 반환되는 NodeList는 DOM의 변경사황을 실시간으로 반영하지 않음