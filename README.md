# JavaScript의 특이한 동작, 주의 사항들 정리한 저장소입니다.

<details>
<summary style="font-size:large">typeof null === 'object'</summary>
<div markdown="1">
typeof(null)이 null이 아닌 object반환
<hr>
자바스크립트를 처음 구현할 때, 
자바스크립트 값은 타입 태그와 값으로 표시되었습니다.

객체의 타입 태그는 0이었습니다. 
null은 Null pointer(대부분의 플랫폼에서 0x00)로 표시되었습니다.

그 결과 null은 타입 태그로 0을 가지며, 
따라서 typeof는 object를 반환합니다.

typeof null === “null” 제안이 있었지만, 기존 사이트 손상으로 거부되었습니다.
</div>
</details>