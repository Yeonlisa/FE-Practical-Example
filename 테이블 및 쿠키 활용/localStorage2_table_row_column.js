// 테이블의 열과 줄을 동적으로 생성하여 삽입하기

window.onload = () => {

    // 버튼 가져오기
    const btnCrc = document.querySelector('.btnCrc');

    // 버튼 클릭 시 -> 할 일 처리
    btnCrc.addEventListener('click', () => {

        // 할 일 처리
        let hTbody = document.getElementById('htmlTbody');

        // JavaScript Table row and column.
        // Insert a row at the end of table
        const newRow0 = hTbody.insertRow();
    });
}