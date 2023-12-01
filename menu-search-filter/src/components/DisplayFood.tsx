import { Fragment } from "react";
import "../App.css";

type Props = {
  name: string;
  description: string;
  id: number;
  searchSubstring: string;
};

export default function DisplayFood(props: Props) {
  const mystyle = {
    border: "1px grey",
    borderRadius: "5px",
    borderStyle: "solid",
    margin: "10px",
    padding: "10px",
  };

  function highlightSubstring(words: string, substring: string) {
    const re = new RegExp(substring, "gi");
    let splittedWords: any = words.split(re);
    let separatedWords = words.match(re);
    if (separatedWords) {
      for (let i = 0; i < splittedWords.length; i++) {
        splittedWords[i] = (
          <Fragment key={i}>
            {splittedWords[i]}
            <mark>{separatedWords![i]}</mark>
          </Fragment>
        );
      }
    }
    return <div>{splittedWords}</div>;
  }

  return (
    <div style={mystyle}>
      <h2>{highlightSubstring(props.name, props.searchSubstring)}</h2>
      {highlightSubstring(props.description, props.searchSubstring)}
    </div>
  );
}
