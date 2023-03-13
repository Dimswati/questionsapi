import "./choice.scss";

export default function Choice({choosedAnswer, choice: {choice, choosed}, styles}) {

  return (
    <button style={styles} onClick={choosedAnswer}>{choice}</button>
  )
}
