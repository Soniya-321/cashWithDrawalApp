// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}
  amountToBeWithDraw = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }
  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="profile-container">
            <h1 className="profile">S</h1>
            <h1 className="name">Sarah Willioms</h1>
          </div>
          <div className="balance-container">
            <p className="blnc-heading">Your Balance</p>
            <div className="">
              <p className="balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationsList={each}
                key={each.id}
                amountToBeWithDraw={this.amountToBeWithDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
