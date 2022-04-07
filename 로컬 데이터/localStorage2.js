// 로컬 스토리지(Local Storage) 데이터 값들 출력하기

window.onload = () => {

    // 버튼 가져오기
    const btnAllView = document.querySelector('.btnAllView');
    
    // 버튼 클릭 시 -> 할 일 처리
    btnAllView.addEventListener('click', () => {

        // 할 일 처리 -> 로컬 스토리지 데이터 값들을 가져와서 출력.
        // const getData = localStorage.getItem('background-color');

        // 키(key)만 출력하기
        // console.log(localStorage.key(0));
        // console.log(localStorage.key(1));
        // console.log(localStorage.key(2));
        // console.log(localStorage.key(3));
        // console.log(localStorage.key(4));

        // 키(key)가 몇 개인지? -> length
        // console.log(localStorage.length);

        // -------------------------------------------
        // 배열 정보를 동적으로 테이블 생성하여 삽입하기 -> tbody
        let ar = new Array();
        let result = '';

        ar.push( { name: '홍길동', email: 'hong@hong.com', age: 25, pastime: '음악감상'});
        ar.push( { name: '이순신', email: 'lee@lee.com', age: 44, pastime: '걷기'});
        ar.push( { name: '강감찬', email: 'kang@kang.com', age: 37, pastime: '영화보기'});
        ar.push( { name: '김유신', email: 'kim@kim.com', age: 55, pastime: '야식먹기'});
        ar.push( { name: '광개토', email: 'kwang@kwang.com', age: 60, pastime: '독서'});
        // -------------------------------------------
        console.log(ar[0].name); // 홍길동
        console.log(ar[0].email); // hong@hong.com
        console.log(ar[0].age); // 25
        console.log(ar[0].pastime); // 음악감상

        // 반복문을 순회하면서 배열의 정보를 result 변수에 누적시켜 저장.
        for(let i in ar) {
            result += `<tr>`;
            result += `<td>${ar[i].name}</td>`;
            result += `<td>${ar[i].email}</td>`;
            result += `<td>${ar[i].age}</td>`;
            result += `<td>${ar[i].pastime}</td>`;
            result += `</tr>`;
        }
        // let hTbody = document.getElementById('htmlTbody');

        // Append
        $('#htmlTbody').empty();
        $('#htmlTbody').append(result);
    });
}