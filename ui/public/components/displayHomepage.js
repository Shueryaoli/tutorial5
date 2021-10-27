// Homepage
'use strict'
const e = React.createElement

class DisplayHomepage extends React.Component {
	constructor(props) {
		super(props)
	}
	add_page() {
		
		if (this.props.list.length >= 25) {
			return alert('error')
		}
		$('#container').className = 'add'
	}
	del_page() {
		$('#container').className = 'del'
	}
	render() {
		const { amount } = this.props
		return (
			<div className="after_home">
				<h1>Home Page</h1>
				<div className="menus">
					<button
						onClick={this.add_page.bind(this)}
						className="btn product_add"
					>
						Add
					</button>
					<button
						onClick={this.del_page.bind(this)}
						className="btn product_del"
					>
						Remove
					</button>
					<div>
						<DisplayFreeSlots amount={amount} />
					</div>
				</div>
			</div>
		)
	}
}

const domContainer = document.querySelector(
	'#displayHomepage'
)
// ReactDOM.render(e(DisplayHomepage), domContainer)
