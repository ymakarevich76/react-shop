function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price: { regularPrice: price },
        displayAssets: [{ full_background: full_background }],
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={full_background} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };
