// free slots
'use strict'

const e = React.createElement

class DisplayFreeSlots extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { amount } = this.props
		return (
			<div>
				<div className="show-num">
					<span>Free Slots：</span>
					<span id="surplus">{25 - amount}</span>
				</div>
			</div>
		)
	}
}
const domContainer = document.querySelector(
	'#displayFreeSlots'
)
// ReactDOM.render(e(DisplayFreeSlots), domContainer)
