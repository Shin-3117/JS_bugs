# JavaScript의 동작, 주의 사항들 정리한 저장소입니다.

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
<pre><code>let a = undefined
console.log(a) // undefined
</code></pre>
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
<p>environmentRecord : 매개변수명, 변수의 식별자, 선언한 함수의 함수명 등 수집</p>
<p>outerEnvironmentReference : 직전 컨텍스트의 LexicalEnvironment 정보를 참조</p>
<p>실행 컨텍스트 활성화 될때, 초기 환경 정보들을 유지</p>
</li>
<li><p>LexicalEnvironment</p>
<p>environmentRecord : 매개변수명, 변수의 식별자, 선언한 함수의 함수명 등 수집</p>
<p>outerEnvironmentReference : 직전 컨텍스트의 LexicalEnvironment 정보를 참조</p>
<p>환경 정보들을 함수 실행 도중에 변경 사항을 즉시 반영</p>
</li>
<li><p>ThisBinding</p>
</li>
</ol>
</div>
</details>

## 호이스팅
environmentRecord의 수집 과정을 추상화한 개념

실행 컨텍스트가 관여하는 코드 집단의 최상단으로 '끌어올린다'고 해석
- 변수 선언과 값 할당이 동시에 이뤄진 문장은 '선언부'만 호이스팅
- 함수 선언문과 함수 표현식의 차이 발생
## This
자기 참조 변수, 호출되는 방식에 따라 달라짐
1. 함수로 호출 되었을 때 : 전역  a()
2. 매서드로 호출 되었을 때 : 호출한 객체 .a()
3. 생성자 함수(constructor(){}, new) 호출 되었을 때 : 생성될 인스턴스 new a()
4. 간접 호출 되었을 때 .bind(a)

명시적 this 바인딩이 없는 한 다음 규칙을 따릅니다.
- 전역공간에서의 this는 전역객체(브라우저에서는 window, Node.js에서는 global) 참조합니다
- 어떤 함수를 매서드로 호출한 경우 this는 메서드 호출 주체(메서드명 앞의 객체)를 참조합니다
    ```
    let func = function(x){
        console.log(this,x);   
    }
    func(1) // global{ ... } , 1

    const obj={
        method : func,
        arrowMethod : arrowFunc
    }
    obj.method(2) // { method: [Function: func] } 2
    ```
- **어떤 함수를 함수로 호출하는 경우 this는 전역객체를 참조합니다**
    ```
    const obj1 = {
        outer: function(){
            console.log(this) //{ outer: [Function: outer] }

            let innerFunc = function(){
                console.log(this)
            }
            innerFunc() // global

            const obj2 = {
                f:innerFunc 
            }
            obj2.f() //{ f: [Function: innerFunc] }
        }
    }
    obj1.outer()
    ```
- 콜백 함수 내부에서의 this는 해당 콜백 함수의 제어권을 넘겨받은 함수가 정의한 바에 따르며, **정의하지 않은 경우 전역객체 참조합니다**
- 생성자 함수에서의 this는 생성될 인스턴스를 참조합니다.

## 스코프

## 클로저

## 프로퍼티