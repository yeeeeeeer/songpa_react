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
    var array=['g@naver.com', '010-898-8989'];
    let arrays=array.map((item) => <p>{item}</p>)
    return ( 
        arrays
        // <p>
        //     <ul>
        //         <li>g@naver.com</li>
        //         <li>010-232-3232</li>
        //     </ul>
        // </p>
    );
}

export default Name2;

