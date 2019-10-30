import React from "react"
import axios from "../../config/axios"
import CustomerForm from "./Form"



class CustomerEdit extends React.Component{
    constructor(){
        super()
        this.state={customer:{}}
    }

    handleCustomerSubmit=(customer)=>{
    axios.put(`/customers/${customer.id}`,customer,{
        headers:{
            "x-auth":localStorage.getItem("token")
    }
})
    .then(response=>{
        console.log("sucess",response.data)
    if(response.data.errors){
        window.alert(response.data.message)
    }else{
        this.props.history.push(`/customers/${response.data._id}`)
        console.log(response.data)
    }        
    })
    .catch(err=>{
        console.log(err)
    })

    }
    componentDidMount(){
        const id=this.props.match.params.id
axios.get(`/customers/${id}`,{headers:{"x-auth":localStorage.getItem("token")}})

.then(response=>{
    const customer=response.data
  this.setState({customer})
})



    }
    // {this.state.customer.name && <CustomerForm  customer={this.state.customer} handleCustomerSubmit={this.handleCustomerSubmit}/>}

    render(){
        return (<div>  
    
      <CustomerForm  customer={this.state.customer} handleCustomerSubmit={this.handleCustomerSubmit}/>


        </div> )
    }
}
export default CustomerEdit