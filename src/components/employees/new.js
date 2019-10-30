import React from "react"
import EmployeeForm from "./form"
import axios from "../../config/axios";

class EmployeeNew extends React.Component{
    
    handleEmployeeSubmit=(employee)=>{
    axios.post("/employees",employee,{headers:{"x-auth":localStorage.getItem("token")}})
    .then(response=>{
        console.log("sucess",response.data)
       this.props.history.push('/employees')
    })
    }
    render(){
        return(<div>
    <p> add Customers  </p>
    <EmployeeForm handleEmployeeSubmit={this.handleEmployeeSubmit}/>
        </div>
        )
    }
}
export default EmployeeNew 