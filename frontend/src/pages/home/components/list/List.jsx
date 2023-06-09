import Card from "../card/Card"

export default function List(props){

    
    const cards = props.data.map(
        card =>
        <Card data={card} key={card.id} />
    )

    return(
        <>

            {cards}
        </>
    )
}