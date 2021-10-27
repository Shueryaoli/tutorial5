// add
'use strict'

const e = React.createElement

class AddCustomer extends React.Component {
	constructor(props) {
		super(props)
		
	}
	submit(event) {
		event.preventDefault()
		
		if (this.props.list.length >= 25) {
			return alert('error')
		}
		
		const name = $('#name')
		const number = $('#number')
		
		const form = this.getForm({
			name,
			number
		})
		
		form.clearVal()
		this.props.parent.setList(form.value)
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
	goHome() {
		$('#container').className = 'home'
	}
	render() {
		return (
			<div className="after_add">
				<form
					onSubmit={this.submit.bind(this)}
					id="form_add"
				>
					<h2>Add Customers</h2>
					<div className="form-group">
						<label>Name</label>
						<input
							type="text"
							required
							id="name"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label>Phone Number</label>
						<input
							type="text"
							required
							id="number"
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
							onClick={this.goHome.bind(this)}
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

const domContainer = document.querySelector('#addCustomer')
// ReactDOM.render(e(AddCustomer), domContainer)
