window.onload = () => {
    const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
    console.log(panelFaqContainer); // NodeList 객체

    // 반복문 순회하면서 해당 FAQ 제목 클릭시 콜백 처리
    for(let i = 0; i < panelFaqContainer.length; i++) {
        panelFaqContainer[i].addEventListener('click', () => {
            // 클릭시 처리 할 일
            console.log('클릭'+ i);
        });
    }
}