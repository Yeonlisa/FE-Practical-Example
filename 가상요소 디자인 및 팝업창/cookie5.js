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


// [닫기] 버튼 클릭시
btnClose.addEventListener('click', function() {
	concealPopup(0);
});

// [오늘 하루 창 닫기] 버튼 클릭시
btnConcealWindowToday.addEventListener('click', function() {
	concealPopup(1, 1);
} );

// 팝업 창 띄우기
function showPopup() {
	popup.style.display = 'block';
}

// 팝업 창 감추기
function concealPopup(number, expiration) {
	console.log(number + ", " + expiration);
	
	// [닫기] 버튼 클릭시 -> 0
	popup.style.display = 'none';
	
	// [오늘 하루 창 닫기] 버튼 클릭시 -> 1
	if(number === 1) {
		
		// popupCookie 값 체크
		if(Cookies.get('popupCookie') == undefined) {
			
			// 쿠키가 없는 경우 -> popupCookie 라는 이름의 쿠키를 추가.
			Cookies.set('popupCookie', 'yes', { expires: expiration, path: '/' });
			/*
				설명 :
					path값을 '/'로 주면 사이트내 모든 페이지에서 쿠키가 유효.
					만약, 어떤 특정 페이지에서만 유효하게 하려면 페이지 경로를 직접 작성.
			*/
		}
		
	}
}

// 한 개 쿠키 삭제
const oneDelCookie = function(cname) {
	event.preventDefault();
	
	// 할 일 처리
	cname = document.getElementById('cname');
	let cval = cname.value;
	console.log(cval);
	
	Cookies.remove(cval);
	cname.value = '';
	cname.focus();
	alert(`${ cval } 쿠키를 삭제하였습니다.`);
}

const form = document.getElementById('form');
form.addEventListener('submit', oneDelCookie);
