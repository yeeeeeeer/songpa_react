// 문제. 2 ~ 10 짝수합, 홀수합 for, while, dowhile_1.js


const For = () => {
    var one = 0;
    var two = 0;
    for (var i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            two = two + i;
        } else {
            one = one + i;
        }
    }
    return ('for문 짝수: ' + two + ' 홀수: ' + one);
}
// export default For;


const While = () => {
    var i = 1;
    var one = 0;
    var two = 0;
    while (++i <= 10) {
        if (i % 2 == 0) {
            two = two + i;
        } else {
            one = one + i;
        }
    }
    return ('while문 짝수: ' + two + ' 홀수: ' + one);
}
// export default While;


const DoWhile = () => {
    var i = 2;
    var one = 0;
    var two = 0;
    do {
        if (i % 2 == 0) {
            two = two + i;
        } else {
            one = one + i;
        }
    } while (i++ < 10);

    return ('dowhile문 짝수: ' + two + ' 홀수: ' + one);
}
export default DoWhile;