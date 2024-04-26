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

