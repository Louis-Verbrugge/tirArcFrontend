
import styles from "./SideImage.css"

function SideImage(props) {
  return (
    <div className="SideImage">
      
      <img src={props.image}></img>
      <h2>{props.title}</h2>


    </div>
  );
}

export default SideImage;
