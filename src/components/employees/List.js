import React from "react"
import {Link} from "react-router-dom"
import axios from "../../config/axios"
import {Button,Table} from "reactstrap"
class EmployeeList extends React.Component{
    constructor(){
        super()
        this.state={employees:[]}
    }
    componentDidMount(){
        axios.get("/employees",{headers:{"x-auth":localStorage.getItem("token")}})
        .then((response)=>{
            this.setState({employees:response.data})
        })

    }
    handleRemove=(id)=>{
        axios.delete(`/employees/${id}`,
        {headers:{"x-auth":localStorage.getItem("token")}})

        .then((response)=>{
            this.setState(prevState=>
            ( {
      employees:prevState.employees.filter(employee=>employee._id !== id)})
            
            )
    
    }
        )
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return ( <div>  
            <h2> listing employees-{this.state.employees.length}</h2> 
    <Table>  
         <thead>
           <tr>     
               <th>id</th>
               <th>name</th>
               <th>email</th>
               <th>mobile</th>
               <th>department</th>
           </tr>
         </thead>
                 <tbody> 
                     {this.state.employees.map((employee,index)=>{
                         return ( <tr key={Math.random()} >
                        <td> {index+1} </td>
                        <td><Link to={`/employees/${employee._id}`}> {employee.name} </Link></td>
                        <td> {employee.email} </td>
                        <td> {employee.mobile} </td>
                        <td> {employee.departId.name} </td>
                        <td>
                           <Button onClick={() => {
                            const confirmRemove=window.confirm("are you sure?")
                            if(confirmRemove){
                                console.log(this)
                                this.handleRemove(employee._id)
                            }}} color="primary">
                        
                            remove</Button>  </td>

                         </tr> )
                     })}
                 </tbody>
    </Table>
    <Link to="/employees/new">add employee</Link>
        </div> )
    }
}
export default EmployeeList