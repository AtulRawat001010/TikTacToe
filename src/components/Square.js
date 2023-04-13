
export default function Square({value, onSquareClick}) {

  return (
    <div>
        <div className="square-btn" onClick={onSquareClick}>{value}</div>
    </div>
  )
}
