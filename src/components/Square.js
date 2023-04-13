
export default function Square({value, onSquareClick}) {

  return (
    <div>
        <div className="btn-square" onClick={onSquareClick}>{value}</div>
    </div>
  )
}
