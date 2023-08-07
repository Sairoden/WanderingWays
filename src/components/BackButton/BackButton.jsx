// React
import { useNavigate } from "react-router-dom";

// Components
import { Button } from "../index";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={e => {
        e.preventDefault();
        navigate(-1);
      }}
      type="back"
    >
      &larr; Back
    </Button>
  );
}
