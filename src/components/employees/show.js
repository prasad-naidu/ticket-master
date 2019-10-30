import React from "react"
import axios from"../../config/axios"

export default class EmployeeShow extends React.Component{
constructor(){
    super()
    this.state={
        employee:{}
    }

}

componentDidMount(){
    const id=this.props.match.params.id
    axios.get(`/employees/${id}`,{headers:
        {"x-auth":localStorage.getItem("token")}})
        .then(response=>{
            return {employee:response.data}
        })
        .catch(err=>{
            
            console.log(err)
        })
}

render(){
    return( <div>   
        

{this.state.employee.name}


    </div>)

}


}