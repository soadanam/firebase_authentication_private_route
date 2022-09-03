import { useNavigate } from "react-router-dom";

function Redirect() {
    let navigate = useNavigate();
    function handleClick() {
      navigate(-1)
    }
    return (
      <div>
        <button onClick={handleClick}>go home</button>
      </div>
    );
  }