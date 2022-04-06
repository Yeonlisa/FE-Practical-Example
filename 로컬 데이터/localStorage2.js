// 로컬 스토리지(Local Storage) 데이터 값들 출력하기

window.onload = () => {

    // 버튼 가져오기
    const btnAllView = document.querySelector('.btnAllView');
    
    // 버튼 클릭 시 -> 할 일 처리
    btnAllView.addEventListener('click', () => {

        // 할 일 처리 -> 로컬 스토리지 데이터 값들을 가져와서 출력.
        const getData = localStorage.getItem('background-color');

        // 키(key)만 출력하기
        console.log(localStorage.key(0));
        console.log(localStorage.key(1));
        console.log(localStorage.key(2));
        console.log(localStorage.key(3));
        console.log(localStorage.key(4));

        // 키(key)가 몇 개인지? -> length
        console.log(localStorage.length);
    });
}