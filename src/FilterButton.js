
function FilterButton(props) {
  return (
    <img src={props.image} onClick={props.clicked}></img>
  );
}

export default FilterButton;