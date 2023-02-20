const Article = (item) => {
    return (
        <section className='article-container'>
            <img src={item.src} alt={item.alt} />
            <article className='article-content'>
                <h3 className="article-subheadings">{item.text}</h3>
                <p className="article-content">{item.content}</p>
            </article>
        </section>
    );
}

export default Article;