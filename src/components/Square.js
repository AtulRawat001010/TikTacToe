
export default function Square({value, onSquareClick}) {

  return (
    <div>
        <div className="squareBtn" onClick={onSquareClick}>{value}</div>
    </div>
  )
}
