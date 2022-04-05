// 브라우저 로컬 데이터에 저장하기

// 주요 메서드 2개
// 값 저장하기 -> localStorage.setItem('key',value);
// 값 가져오기 -> localStorage.getItem('key');
// 키(key)를 그대로 놓고 새로운 값을 저장하면 덮어쓰기가 되면서 기존 로컬 데이터 정보가 수정.

window.onload = () => {
	
	// Set Data 버튼
	const btnSLD = document.querySelector( '.btnSetLocalData' );
	console.log( btnSLD );
	
	// Input 텍스트 값
	const input = document.querySelector( 'input' );
	
	// Set Data 버튼 클릭 시
	btnSLD.addEventListener( 'click', () => {
		
		// 할 일 처리 --> 입력한 텍스트 값 가져오기
		const inputValue = input.value;
		console.log( inputValue );
		
		// localStorage에 저장하기
		localStorage.setItem( 'userid', inputValue );
		input.value = "";
		
	} );
	
	// Get Data 버튼 클릭 시
	const btnGLD = document.querySelector( '.btnGetLocalData' );
	console.log( btnGLD );
	
	btnGLD.addEventListener( 'click', () => {
		
		// 할 일 처리 --> 해당 키의 로컬 데이터가 있으면 가져오기
		const getData = localStorage.getItem( 'userid' );
		
		if( !getData )
			alert( '해당 키로 로컬에 저장된 데이터가 없네요~' );
		else
			input.value = getData;  // input 텍스트 박스에 삽입.
		
	} );
	
}