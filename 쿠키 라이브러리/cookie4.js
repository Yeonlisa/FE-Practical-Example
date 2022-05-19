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