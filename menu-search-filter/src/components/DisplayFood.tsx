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

  function highlightSubstringNoRegEx(words: string, substring: string) {
    let wordsToLowerCase = words.toLowerCase();
    let substringToLowerCase = substring.toLowerCase();
    let searchLength = substring.length;
    let output: any = [];
    let startPos = 0;
    let foundIndex = 0;
    let i = 0;

    if (substring == "") return <div>{words}</div>;
    foundIndex = wordsToLowerCase.indexOf(substringToLowerCase, startPos);
    for (let i = 0; foundIndex != -1 && startPos < words.length; i++) {
      output.push(
        <Fragment key={i}>
          {words.substring(startPos, foundIndex)}
          <mark>{words.substring(foundIndex, foundIndex + searchLength)}</mark>
        </Fragment>
      );
      startPos = foundIndex + searchLength;
      foundIndex = wordsToLowerCase.indexOf(substringToLowerCase, startPos);
      i++;
    }
    output.push(<Fragment key={i}>{words.substring(startPos)}</Fragment>);

    return <div>{output}</div>;
  }

  return (
    <div style={mystyle}>
      <h2>{highlightSubstringNoRegEx(props.name, props.searchSubstring)}</h2>
      {highlightSubstringNoRegEx(props.description, props.searchSubstring)}
    </div>
  );
}
