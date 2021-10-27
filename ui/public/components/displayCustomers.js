// display
'use strict'

const e = React.createElement

class DisplayCustomers extends React.Component {
	constructor(props) {
		super(props)
	}
	onClick() {
		$('#container').className = 'home'
	}
	render() {
		const { list } = this.props
		return (
			<div className="after_show">
				<h2>Waiting List</h2>
				<table>
					<thead>
						<tr>
							<th>Serial No.</th>
							<th>Name</th>
							<th>Phone Number</th>
							<th>TimeStamp</th>
						</tr>
					</thead>
					<tbody id="tbody">
						{list.map((ele,index) => {
							return (
								<tr key={ele.id}>
									<td>{index+1}</td>
									<td>{ele.name}</td>
									<td>{ele.number}</td>
									<td>{ele.created}</td>
								</tr>
							)
						})}
					</tbody>
				</table>

				<div className="text-right">
					<p>
						<a
							onClick={this.onClick.bind(
								this
							)}
							href="#"
							className="btn product_home"
						>
							Go Homepage
						</a>
					</p>
				</div>
			</div>
		)
	}
}
const domContainer = document.querySelector(
	'#displayCustomers'
)
// ReactDOM.render(e(DisplayCustomers), domContainer)
