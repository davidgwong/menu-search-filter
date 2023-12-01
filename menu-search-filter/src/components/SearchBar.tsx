import { SetStateAction } from "react";
import "../App.css";

type Props = {
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
};

export default function SearchBar(props: Props) {
  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    props.setText(e.target.value);
  }

  return (
    <div>
      Search: <input value={props.text} onChange={handleChange} />
    </div>
  );
}
