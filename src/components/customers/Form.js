import React from "react"

class CustomersForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // name:props.customer ? props.customer.name:"",
            // email:props.customer ? props.customer.email:"",
            // mobile:props.customer ? props.customer.mobile:""
            name:"",
            email:"",
            mobile:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    }
    
    submit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
           // id:this.props.customer._id
        }
       this.props.customer && (formData.id=this.props.customer._id)
        console.log(formData)
        this.props.handleCustomerSubmit(formData)
    }
    componentWillReceiveProps(nextProps){
        const {name,email,mobile}=nextProps.customer
        this.setState({name,email,mobile})

    }

render(){
    return(<div>
    <form onSubmit={this.submit}>
        <label>name 
            <input type="text"  value={this.state.name} onChange={this.handleChange} name="name"  />
        </label><br/>
        <label>email
            <input type="text"  value={this.state.email} onChange={this.handleChange} name="email" />
        </label><br/>
        <label>mobile
            <input type="text"  value={this.state.mobile} onChange={this.handleChange} name="mobile" />
        </label>
        <input type="submit"/>
    </form>



    </div>)
}

}
export default CustomersForm