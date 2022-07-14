import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //extremely important step if you want to use wrapper with class created inside some other css file
  //this is style oly component: Shell around some acctually functional component
  return <div className={classes}>{props.children}</div>; //children is a reserved name
}
export default Card;
