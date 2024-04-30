function Name1() {
    return (

        <div>
            <ul>
                <li>김예린</li>
                <li>2</li>
                <li>서울</li>
            </ul>
        </div>

    );
}

// export default Name1;

const Name2 = () => {
    var array = ['g@naver.com', '010-898-8989'];
    let arrays = array.map((item) => <p>{item}</p>)
    return (
        <div>{arrays}</div>
    );
}

export default Name2;

// // 문제. 2 ~ 10 짝수합, 홀수합 for, while, dowhile_1.js


// const For = () => {
//     var one = 0;
//     var two = 0;
//     for (var i = 2; i <= 10; i++) {
//         if (i % 2 == 0) {
//             two = two + i;
//         } else {
//             one = one + i;
//         }
//     }
//     return ('for문 짝수: ' + two + ' 홀수: ' + one);
// }
// // export default For;


// const While = () => {
//     var i = 1;
//     var one = 0;
//     var two = 0;
//     while (++i <= 10) {
//         if (i % 2 == 0) {
//             two = two + i;
//         } else {
//             one = one + i;
//         }
//     }
//     return ('while문 짝수: ' + two + ' 홀수: ' + one);
// }
// // export default While;


// const DoWhile = () => {
//     var i = 2;
//     var one = 0;
//     var two = 0;
//     do {
//         if (i % 2 == 0) {
//             two = two + i;
//         } else {
//             one = one + i;
//         }
//     } while (i++ < 10);

//     return ('dowhile문 짝수: ' + two + ' 홀수: ' + one);
// }
// export default DoWhile;