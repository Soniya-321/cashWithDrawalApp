// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, amountToBeWithDraw} = props
  const {value, id} = denominationsList

  const withDraw = () => {
    amountToBeWithDraw(value)
  }

  return (
    <li className="list-container">
      <button className="button" onClick={withDraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
