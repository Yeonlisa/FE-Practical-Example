// JS-Cookie 라이브러리를 활용한 팝업 창 만들기

// 각 요소들 가져오기
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.banner .btnClose');
const btnConcealWindowToday = document.querySelector('.banner .btnConcealWindowToday');

// 페이지 최초 접속시 팝업 창 띄우기 -> 주의! -> 쿠키 유무에 따라 노출/비노출 되게끔 처리
const popupCookie =  Cookies.get('popupCookie');
console.log(popupCookie);

// popupCookie 값 유무에 따라 없으면 -> showPopup() 호출해서 팝업 창 띄우기
if(popupCookie == undefined) 
	showPopup();

// 팝업 창 띄우기
function showPopup() {
	popup.style.display = 'block';
}

// [닫기] 버튼 클릭시
btnClose.addEventListener('click', function() {
	// 할 일 처리
    popup.style.display = 'block';
});