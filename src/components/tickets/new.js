import React from "react"
import axios from "../../config/axios";
import TicketsForm from "./forms";

class TicketsNew extends React.Component{
    
    handleTicketSubmit=(ticket)=>{
    axios.post("/tickets",ticket,{headers:{"x-auth":localStorage.getItem("token")}})
    .then(response=>{
        console.log("sucess",response.data)
       this.props.history.push('/tickets')
    })
    }
    render(){
        return(<div>
    <p> add Tickets  </p>
    <TicketsForm handleTicketSubmit={this.handleTicketSubmit}/>
        </div>
        )
    }
}
export default TicketsNew 