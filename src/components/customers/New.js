import React from "react"
import CustomersForm from "./Form"
import axios from "../../config/axios";

class CustomersNew extends React.Component{
    
    handleCustomerSubmit=(customer)=>{
    axios.post("/customers",customer,{headers:{"x-auth":localStorage.getItem("token")}})
    .then(response=>{
        console.log("sucess",response.data)
       this.props.history.push('/customers')
    })

    }

    render(){
        return(<div>
    <p> add Customers  </p>
    <CustomersForm handleCustomerSubmit={this.handleCustomerSubmit}/>


        </div>)
    }
}
export default CustomersNew