import '../Styles/Card.css'

const Card = props => {
    return(
        <div className="card-container">{props.children}</div>
    )
}

export default Card;