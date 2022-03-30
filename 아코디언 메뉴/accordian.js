window.onload = () => {
    // panel-faq-container
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');

    // panel-faq-answer
    let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');

    // btn-all-close
    const btnAllClose = document.getElementById('btn-all-close');

    // 반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
    for(let i = 0; i < panelFaqContainer.length; i++) {
        panelFaqContainer[i].addEventListener('click', () => {
            // 클릭시 처리 할 일: FAQ 제목 클릭시 본문이 보이게끔 한다 -> active 클래스 추가
            panelFaqAnswer[i].classList.add('active');
            // 토글효과 주고싶으면
            // panelFaqAnswer[i].classList.toggle('active');
        });
    }

    btnAllClose.addEventListener('click', () => {
        // 버튼 클릭시 처리 할 일: 보여지는 본문들이 사라지게끔 한다 -> active 클래스 제거
        for(let i = 0; i < panelFaqAnswer.length; i++) {
            panelFaqAnswer[i].classList.remove('active');
        }
    });
}