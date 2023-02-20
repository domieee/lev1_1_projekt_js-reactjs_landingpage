const hello = (value) => {
    return (
        <article className='hello-num-content'>
            <p className="content_num">{value.num}</p>
            <p className="content_text">{value.text}</p>
        </article>
    );
}

export default hello;