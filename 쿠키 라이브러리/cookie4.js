// 라이브러리를 이용한 JS 쿠키 - js-cookie

// [1] js-cookie 기본적인 생성법 -> Cookies.set('쿠키명','쿠키값');
Cookies.set('userid', 'superman1004');

// [2] js-cookie 기본적인 생성법 + 만료일 지정 -> Cookies.set('쿠키명','쿠키값', {expires: 7});
Cookies.set('username', 'batman', {expires: 7});

// [3] js-cookie 생성 + 만료일 + 패스 -> Cookies.set('쿠키명','쿠키값', {expires: 7, path: '/'});
Cookies.set('cname', 'antman', {expires: 7, path:'/'});

// [4] js-cookie 읽기
const cookie_userid = Cookies.get('userid');
console.log(cookie_userid); // superman1004

// [5] js-cookie 모두 읽기
const allCookies = Cookies.get();
console.log(allCookies); // { 쿠키명: '쿠키값', 쿠키명2: '쿠키값2', ...} -> 이러한 식의 객체 형태로 모두 리턴
console.log(typeof allCookies); // object

// [6] js-cookie 삭제
// Cookies.remove('userid');
// const allCookies2 = Cookies.get();
// console.log(allCookies2);

// 쿠키 삭제 함수
const delCookie = function(cname) {
    event.preventDefault();

    cname = document.getElementById('cname');
    let cval = cname.value;
    console.log(cval);

    Cookies.remove(cval);
    cname.value = '';
    cname.focus();
    alert(`${cval} 쿠키를 삭제하였습니다.`);
}

const form = document.getElementById('form');
form.addEventListener('submit', delCookie);

// [6-1] 쿠키 생성시 옵션 지정과 함꼐 생성되었다면 삭제시에도 -> 똑같이 필요??
console.clear();
// Cookies.set('dogid', 'dog1004', {expires: 7, path: '/'});
// Cookies.remove('dogid');
// Cookies.remove('dogid', {path: '/'});

Cookies.set('catid', 'cat1004', {expires: 7, path: '/쿠키%20라이브러리/'});
// Cookies.remove('catid');
Cookies.remove('catid', {path: '/쿠키%20라이브러리/'});

// [7] js-cookie 전체 삭제 -> Not possible
// 보여지는 쿠키들에 대한 전체 삭제를 한다면?
console.clear();
console.log(Object.keys(Cookies.get())); // 쿠키 이름만 가져올 때

function allDelCookies() {
    Object.keys(Cookies.get()).forEach(function(cName) {
        // 할 일 처리
        let neededOptions = {
            // domain: "test.com"
            domain: "localhost"
        };
        Cookies.remove(cName, neededOptions);
    });
    alert('쿠키가 전체 삭제되었습니다.');
}

// [8] userGetCookie 함수 만들기 - 일반적인 For 반복문으로 순회하면서 처리
console.clear();
console.log(document.cookie); // userid=superman1004; username=batman; cname=antman

// 쿠키 읽기
const userGetCookie = function(cname) {
    
    let name = cname + '=';
    console.log(name); // userid=

    let allCookie = decodeURIComponent(document.cookie).split(';'); // ';' 한 칸 띄어쓰기 주의
    console.log(allCookie);

    // encodeURIComponent는 자바스크립트에서 string을 UTF-8로 인코딩해주는 함수.
    // decodeURIComponent는 encodeURIComponent로 escape된 문자열을 다시 원래의 문자열로 리턴해주는 함수.
    // 비슷한 메서드 -> encodeURI, decodeURI, escape, unescape

    let cval = [];
    for(let i = 0; i < allCookie.length; i++) {
        console.log(allCookie[i].trim().indexOf(name));
        // indexOf 메서드의 리턴값 -> 배열일 경우 -> 검색된 항목의 index 값.
        // 문자열일 경우 -> 검색된 문자열의 첫 글자의 index 값.
        // 검색 결과가 없을 경우 -> -1 리턴.

        // if 조건문 -> ["username=batman", "cname=antman", "userid=superman1004"]
        if(allCookie[i].trim().indexOf(name) == 0) {
            cval = allCookie[i].trim().split('=');
            console.log(cval); // ["userid", "superman1004"]
            console.log(cval[1]); // superman1004
            console.log(cval.length); // 2 -> 이것의 의미는? -> 배열의 0과 1 -> 0: 쿠키명, 1: 쿠키값 이라는 뜻.
        }
    }
    return (cval.length > 0) ? cval[1] : "nothing";
}
console.log('userGetCookie 함수로 리턴된 값은 = ' + userGetCookie('userid'));

// [8-1] userGetCookie 함수 만들기 연습 -> oneGetCookie
const oneGetCookie = function(cname) {
    let name = cname + '=';
    let allCookie = decodeURIComponent(document.cookie).split('; ');

    let cval = [];
    for(let i = 0; i < allCookie.length; i++) {
        if(allCookie[i].trim().indexOf(name) == 0) { // userid=superman1004
            cval = allCookie[i].trim().split('=');
        } 
    }
    return (cval.length > 0) ? cval[1] : "no result";
}
console.clear();
console.log('oneGetCookie 함수로 리턴되는 값은 = ' + oneGetCookie('userid'));