import "./choice.scss";

export default function Choice({choosedAnswer, choice}) {
  return (
    <button className={choice.choosed ? "choosed" : ""} onClick={choosedAnswer}>{choice.choice}</button>
  )
}
