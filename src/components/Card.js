const Card = (props) => {
    return (
        <div className="card">
            <div className="card_top">
                <img src={props.image} />
                <p>{props.rating.toFixed(1)}</p>
            </div>
            <div className="card_bottom">
                <p className="card_title">{props.title}</p>
                <div className="card_info">
                    <p className="card_price">&#8377; {props.price}</p>
                    <p className="card_offer">{props.offer}% Off</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
