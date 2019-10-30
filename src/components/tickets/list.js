import React from "react"
import {Link} from "react-router-dom"
import axios from "../../config/axios"
import {Button,Table} from "reactstrap"

class TicketList extends React.Component{
    constructor(){
        super()
        this.state={tickets:[]}
    }
    componentDidMount(){
        axios.get("/tickets",{headers:{"x-auth":localStorage.getItem("token")}})
        .then((response)=>{
            this.setState({tickets:response.data})
        })

    }
    handleRemove=(id)=>{
        axios.delete(`/tickets/${id}`,
        {headers:{"x-auth":localStorage.getItem("token")}})

        .then((response)=>{
            this.setState(prevState=>
            ( {
      tickets:prevState.tickets.filter(ticket=>ticket._id !== id)})
            
            )
    
    }
        )
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return ( <div>  
            <h2> adding tickets-{this.state.tickets.length}</h2> 
    <Table>  
         <thead>
           <tr>     
               <th>code</th>
               <th>customers</th>
               <th>department</th>
               <th>employees</th>
               <th>message</th>
               <th>priority</th>
           </tr>
         </thead>
                 <tbody> 
                     {this.state.tickets.map((ticket,index)=>{
                         return ( <tr key={Math.random()} >
                    
                        <td><Link to={`/tickets/${ticket._id}`}> {ticket.code} </Link></td>
                        
                        <td> {ticket.customerId.name} </td>
                        <td> {ticket.departmentId.name} </td>
                        <td> {ticket.employeesId.name} </td>
                        <td> {ticket.message} </td>
                        <td> {ticket.priority} </td>
                        <td>
                           <Button onClick={() => {
                            const confirmRemove=window.confirm("are you sure?")
                            if(confirmRemove){
                                console.log(this)
                                this.handleRemove(ticket._id)
                            }}} color="danger">
                        
                            remove</Button>  </td>

                         </tr> )
                     })}
                 </tbody>
    </Table>
    <Link to="/tickets/new">add ticket</Link>
        </div> )
    }
}
export default TicketList