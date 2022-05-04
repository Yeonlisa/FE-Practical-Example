// 자바스크립트로 쿠키 (Cookie) 읽기, 생성하기, 삭제하기
// 기본적인 방법 -> document.cookie = "name=???; name2=???; expire=???; path=???";

// 쿠키 읽기
function getCookie() {

    // 로컬에 저장된 쿠키 뿌려주기
    const allCookies = document.cookie; // 하나의 문자열로 리턴 -> cookie1 = value; cookie2 = value; cookie3 = value;

    // if 조건문 -> 쿠키가 있으면
    if(allCookies != '') {
        alert('저장된 쿠기의 값은:' + allCookies + '\n(다시 방문해주셔서 환영합니다.)');
    } else {
        alert('저장된 쿠키가 없습니다. \n(첫 방문을 환영합니다.)');
    }
}

// 쿠키 생성하기
function setCookie() {
    
}