# JavaScript의 특이한 동작, 주의 사항들 정리한 저장소입니다.

<details>
<summary style="font-size:x-large">typeof null === 'object'</summary>
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

<details>
<summary style="font-size:x-large">undefined가 할당되는 경우</summary>
<div markdown="1">
<ol>
<li><p>undefined로 명시적으로 지정한 경우</p>
<code><pre>let a = undefined
console.log(a) // undefined</pre>pre></code>
</li>

<li><p>값을 대입하지 않은 변수</p>
<code><pre>
let b
console.log(b) // undefined
</pre></code>
</li>

<li><p>객체 내부의 존재하지 않는 프로퍼티에 접근</p>
<code><pre>
let c = {c1:1}
console.log(c.notHere) // undefined
</pre></code>
</li>

<li><p>return문이 없거나 호출되지 않는 함수의 실행 결과</p>
<code><pre>
let func = function(){};
let d = func()
console.log(d) // undefined
</pre></code>
</li>
</ol>
</div>
</details>

<details>
<summary style="font-size:x-large">실행 컨택스트 (execution context )</summary>
<div markdown="1">
<p>실행할 코드에 제공할 환경 정보들을 모아놓은 객체</p>
<hr>
<p>실행 컨텍스트가 활성화될 때, 
자바스크립트 엔진이 해당 컨택스트에 관련된 코드들을 실행하는 데 필요한
환경 정보들을 수집해서 실행 컨텍스트 객체에 저장</p>
<ol>
<li><p>VariableEnvironment</p>
</li>
<li><p>LexicalEnvironment</p>
</li>
<li><p>ThisBinding</p>
</li>
</ol>
</div>
</details>

## This
