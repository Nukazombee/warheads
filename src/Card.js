export default function Card (props) {
  return (
    <div className="carddiv">
      <div className="sellBtn">
        SELL
      </div>
      <div className="image_div">
        <img className="charimage" src={props.image}></img>
      </div>
      <div className="infodiv">
        <p>{props.name}</p>
        <p>Clan: {props.clan}</p>
        <p>Race: {props.race}</p>
        <p>ATK: {props.atk}</p>
        <p>DEF: {props.def}</p>
      </div>
      
    </div>
  )
}