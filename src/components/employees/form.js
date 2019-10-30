 
 import React from "react"
import axios from "../../config/axios";

 class EmployeeForm extends React.Component{
     constructor(){
         super()
         this.state={
             name:"",
             email:"",
             mobile:"",
             department:"",
             departments:[]
         }
     }
     componentDidMount(){
         axios.get(`/department`,{headers:{"x-auth":localStorage.getItem("token")}})
     .then(response=>{
         const departments=response.data
         this.setState({departments})
     })
        
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
             
             departId:this.state.department
            
         }
         this.props.handleEmployeeSubmit(formData)
     }
render(){

    return ( <div>  
       <form onSubmit={this.submit}>   
            <label>
                name
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>

            </label><br/>
            <label>
                email
                <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                
            </label><br/>
            <label>
                mobile
                <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile"/>

                
            </label><br/>
            <label>
                department
                
               <select  value={this.state.department} onChange={this.handleChange} name="department" > 
                <option value=""> select   </option>  
                {this.state.departments.map(department=>{
                    return <option  key={department._id}   value={department._id} > {department.name}  </option>
                })}
                      </select>
            </label><br/>
            <input type="submit"/>
            </form>
    </div> )
}
 }
  export default EmployeeForm