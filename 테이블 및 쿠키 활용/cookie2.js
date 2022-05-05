// JS 쿠키 사용자 정의 함수 및 전체 삭제 만들기

// 쿠키 읽기

// 쿠키 생성하기 -> 함수 표현식
const setCookie = function(cname, cvalue, cexpire) {

    event.preventDefault(); // submit, href 발생시 -> 이동 방지 및 새로 실행되는 것을 방지.

    // 넘어온 값 체크
    cname = document.getElementById('cname').value;
}

// addEventListener
const form = document.getElementById('form');
form.addEventListener('submit', setCookie);