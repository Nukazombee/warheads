import Card from './Card.js'

function Cards_block(props)
{
  return (
    <div className="odd_card_box">
      {props.cards.map(card => (

        <Card 
        key= {card.id}
        image={card.image}
        name= {card.name}    
        atk= {card.atk}
        def= {card.def}   
        clan= {card.clan} 
        race={card.race}  />
      ))}
      
     </div>
    
  )
}


export default Cards_block;