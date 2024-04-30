//react lib 을 모두 쓰겠다는 뜻
import React from 'react';

const Map1 = () => {

    // var array = [1, 2, 3, 4, 5];
    var array = ['kim', 'ye', 'rin'];

    // jsx(javascript extend(자바스크립트 확장버전)) : 자바스크립트 + html tab이 혼합
    // 자바스크립트: {}    html: <div> <ul>
    var result = array.map(element => <li>{element}</li>);

    return (
        <div>
            <ul>
                {result}

            </ul>
        </div>
    );
}

export default Map1;