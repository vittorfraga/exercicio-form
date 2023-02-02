import "./style.css";
import bcImg from "../../assets/background.jpg";

const BackgroundImage = () => {
  return (
    <div className="bc-img">
      <img className="bc-img" src={bcImg} alt="Background" />
    </div>
  );
};

export default BackgroundImage;
