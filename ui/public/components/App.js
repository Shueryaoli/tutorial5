'use strict'
Document.prototype.$ = document.querySelector
Document.prototype.$$ = document.querySelectorAll
Element.prototype.on = Element.prototype.addEventListener

//server graphql request url
const apiUrl = 'http://localhost:5000/graphql';


let $ = select => {
	return document.$(select)
}

let $$ = select => {
	return document.$$(select)
}

const e = React.createElement
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		};
		var that = this;
		fetch(apiUrl ,{
				body:JSON.stringify({"operationName":null,"variables":{},"query":"{waitList{id,name,number,created}}"}),
				method: 'POST',
				mode: 'cors', 
				headers: {
				  'content-type': 'application/json'
				},
				cache: 'no-cache',
			}
		).then(response => {
			response.json().then((result)=>{
				console.log(result);
				that.setState({list:result.data.waitList});
			});
			
		})

	}
	//{"operationName":null,"variables":{},"query":"mutation {\n  waitAdd(wait: {name: \"ok2\", number: \"147\"}) {\n    name\n  }\n}\n"}
	setList(val) {
		let that = this;
		fetch(apiUrl,{
				body:'{"operationName":null,"variables":{},"query":"mutation {waitAdd(wait: {name: \\"'+val.name+'\\", number: \\"'+val.number+'\\"}) {id,name,number,created}}"}',
				method: 'POST',
				mode: 'cors', 
				headers: {
				  'content-type': 'application/json'
				},
				cache: 'no-cache',
			}
		).then(response => {
			response.json().then((result)=>{
				that.state.list.push(result.data.waitAdd);
				that.setState({list:that.state.list});
				alert('Successfully Added')
			});
			
		})
	}
	
	deleteList(index) {
		let that = this;
		let id = this.state.list[index].id;
		fetch(apiUrl,{
				body:'{"operationName":null,"variables":{},"query":"mutation {waitDelete(id: '+id+')}"}',
				method: 'POST',
				mode: 'cors', 
				headers: {
				  'content-type': 'application/json'
				},
				cache: 'no-cache',
			}
		).then(response => {
			response.json().then((result)=>{
				that.state.list.splice(index, 1)
				that.setState({
					list: that.state.list
				})
				alert('Successfully Deleted')
			});
			
		})
	}
	render() {
		const { list } = this.state	
		return (
			<div>
				<div className="header">Hotel California Waitlist System</div>
				<div id="container" className="home">
					<DisplayHomepage
						amount={this.state.list.length}
						list={list}
					/>
					<AddCustomer
						parent={this}
						list={list}
					/>
					<DeleteCustomer
						parent={this}
						list={list}
					/>
					<DisplayCustomers list={list} />
				</div>
				<div className="footer">Hotel California Waitlist System</div>
			</div>
		)
	}
}
const domContainer = document.querySelector('#App')
ReactDOM.render(e(App), domContainer)
