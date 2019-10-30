import React from "react"
import axios from "../../config/axios";
import DeapartmentForm from "./Form"
import {Button} from "reactstrap"

class DeapartmentList extends React.Component{
    constructor(){
        super()
        this.state={departments:[]}
    }
    handleSubmit=(formData)=>{
        axios.post("/department",
        formData,{headers:{"x-auth":localStorage.getItem("token")}})
        .then((response)=>{
            if(response.data.errors){
                alert(response.data.message)
            }else{
              const  department=response.data
                this.setState((prevState)=>{
                  return{  departments:[...prevState.departments,department]}})
            }
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    componentDidMount(){
        axios.get("/department",
        {headers
        :{"x-auth":localStorage.getItem("token")}})
        .then(response=>{
            this.setState({departments:response.data})
        })
    }
    handleRemove=(id)=>{
        axios.delete(`/department/${id}`,
        {headers:{"x-auth":localStorage.getItem("token")}})

        .then((response)=>{
            this.setState(prevState=>
            ( {
      departments:prevState.departments.filter(department=>department._id !== id)})
            
            )
    
    }
        )
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(<div>
            <DeapartmentForm handleSubmit={this.handleSubmit} />

    <h2> listing deparments: {this.state.departments.length}</h2>
    <ul>
{this.state.departments.map(department=>{
    return <li key={department._id}> {department.name} 
    <Button onClick={()=> {
    const confirmRemove=window.confirm("are you sure?")
    if(confirmRemove){
        this.handleRemove(department._id)
    }}
    } color="danger"> remove</Button>
    
    </li>
})}


    </ul>


        </div>)
    }
    }
export default DeapartmentList