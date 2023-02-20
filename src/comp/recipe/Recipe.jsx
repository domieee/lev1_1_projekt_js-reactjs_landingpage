const Recipe = (item) => {
    return (
            <article className="recipe">
                <img src={item.src} alt="" />
                <p>{item.name}</p>
                <p>{item.content}</p>
                <p>{item.price}</p>
            </article>
    )
}

export default Recipe;