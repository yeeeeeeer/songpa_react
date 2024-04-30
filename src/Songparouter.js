import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";



// <a href>
// 리액트는 링크없이 라우터로 사용-> 해당하는페이지 include(포함한다)


// ex3 만들기
// function Name arrow Name2
// export function Name 본인이름 나이 주소, arrtow Name2 이메일 번호
import App from "./App";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Ex4 from "./Ex4";
const routeComponents = [

    { path: "/App", component: App },
    { path: "/Ex1", component: Ex1 },
    { path: "/Ex2", component: Ex2 },
    { path: "/Ex3", component: Ex3 },
    { path: "/Ex4", component: Ex4 }

];


// react 현재 18버전. 밑에코드 자동입력됨
function Appstart() {
    return (
        <Router>
            <nav>
                <ul>
                    {routeComponents.map((route, index) => (
                        <li key={index}>
                            <Link to={route.path}>{route.path.replace("/", "")}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Routes>
                {routeComponents.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </Router>
    );
}

export default Appstart;