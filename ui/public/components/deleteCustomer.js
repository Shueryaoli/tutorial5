'use strict'
const e = React.createElement
class DeleteCustomer extends React.Component {
	constructor(props) {
		super(props)
	}
	onSubmit() {
		event.preventDefault()
		const number = $('#numberi')
		const form = this.getForm({
			number
		})
		
		const { number: id } = form.value

		
		const index = this.props.list.findIndex(
			(ele, index) => index === Number(id) - 1
		)
		
		form.clearVal()
		
		if (index == -1) return alert('error')
		this.props.parent.deleteList(index)
	}
	getForm(forms) {
		
		let clearVal = () => {
			for (let item in forms) {
				forms[item].value = ''
			}
		}
		
		const values = {}
		for (let item in forms) {
			values[item] = forms[item].value
		}
		
		return {
			clearVal,
			value: {
				...values
			}
		}
	}
	onClick() {
		$('#container').className = 'home'
	}
	render() {
		return (
			<div className="after_del">
				<h2>Remove Customers</h2>
				<form
					onSubmit={this.onSubmit.bind(this)}
					id="form_del"
				>
					<div className="form-group">
						<label>Serial NO.</label>
						<input
							type="text"
							required
							id="numberi"
							className="form-control"
						/>
					</div>
					<button className="btn btn-submit">
						Submit
					</button>
				</form>
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
	'#deleteCustomer'
)
// ReactDOM.render(e(DeleteCustomer), domContainer)
