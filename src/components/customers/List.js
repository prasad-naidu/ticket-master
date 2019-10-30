import React from "react"
import axios  from "../../config/axios"
import {Link} from "react-router-dom"
import {Button,Table} from "reactstrap"
 


class CustomersList extends React.Component{
    constructor(){
        super()
        this.state={customers:[]}
    }
  componentDidMount(){
      axios.get("/customers",{headers:{"x-auth":localStorage.getItem("token")}})
      .then(response=>{
          this.setState({customers:response.data})
      })
  }
  handleRemove=(id)=>{
      axios.delete(`/customers/${id}`,{headers:{"x-auth":localStorage.getItem("token")}})
      .then((response)=>{ 
          console.log(response.data)
          this.setState(prevState=>{
              return{customers:prevState.customers.filter(customer=>customer._id!==id)}
          })
      })
  }
  
  render(){
        return(<div> 
             <h3> listing customers:{this.state.customers.length}</h3>
             <Link to="/customers/new">add customers</Link>
             <Table>
                 <thead>
                     <tr>
                         <th>id</th>
                         <th>name</th>
                         <th>email</th>
                         <th>mobile</th>
                         <th>actions</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.state.customers.map((customer,index)=>{
                         return (
                             <tr key={Math.random()}>                                 
                                 <td>{index+1}</td>
                                 <td><Link to={`/customers/${customer._id}`}> {customer.name}</Link></td>
                                 <td>{customer.email}</td>
                                 <td>{customer.mobile}</td>

                             <td> <Button onClick={()=>{
                                     const conformRemove=window.confirm("are you sure?")
                                     if(conformRemove){
                                         this.handleRemove(customer._id)
                                     }
                                 }} color="danger" >  remove </Button></td>
                             </tr>
                         )
                     })}
                 </tbody>
             </Table>
                </div>)
    }
}
export default CustomersList