// JS 쿠키 사용자 정의 함수 및 전체 삭제 만들기

// 쿠키 읽기

// 쿠키 생성하기 -> 함수 표현식
const setCookie = function(cname, cvalue, cexpire) {

    event.preventDefault(); // submit, href 발생시 -> 이동 방지 및 새로 실행되는 것을 방지.

    // 넘어온 값 체크
    if(document.getElementById('cname').value != '') {
        cname = document.getElementById('cname').value;
        cvalue = document.getElementById('cvalue').value;
        cexpire = document.getElementById('cexpire').value;
    }

    // 만료일 생성 -> 현재에서 30일간으로 생성 -> setDate() 메서드 사용.
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + parseInt(cexpire)); // Number() 로 처리도 가능.

    // 날짜를 쿠키로 저장하기 위해서 -> UTC 방식으로 표기 -> toUTCString() 메서드 사용.
    console.log(expiration.toUTCString());

    // 쿠키 생성하기
    let cookies = '';
    cookies += `${cname} = ${cvalue};`;
    cookies += `expires = ${expiration.toUTCString()}`;

    // 쿠키 저장하기
    document.cookie = cookies;
    alert('쿠키를 생성하였습니다.');
}

// addEventListener
const form = document.getElementById('form');
form.addEventListener('submit', setCookie);