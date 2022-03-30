window.onload = () => {
    // panel-faq-container
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');

    // panel-faq-answer
    let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');

    // 반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
    for(let i = 0; i < panelFaqContainer.length; i++) {
        panelFaqContainer[i].addEventListener('click', () => {
            // 클릭시 처리 할 일: FAQ 제목 클릭시 본문이 보이게끔 한다 -> active 클래스 추가
            panelFaqAnswer[i].classList.add('active');
        });
    }
}