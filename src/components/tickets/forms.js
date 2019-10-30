 
 import React from "react"
 import axios from "../../config/axios";
 
  class TicketsForm extends React.Component{
      constructor(){
          super()
          this.state={
              code:"",
            customers:[],
            customer:"",
            departments:[],
            department:"",
            employees:[],
            employee:"",
            message:"",
            priority:""
          
          }
      }
      componentDidMount(){
          axios.get(`/department`,{headers:{"x-auth":localStorage.getItem("token")}})
      .then(response=>{
          const departments=response.data
          this.setState({departments})
      })

      axios.get(`/customers`,{headers:{"x-auth":localStorage.getItem("token")}})
      .then(response=>{
          const customers=response.data
          this.setState({customers})
      })

      axios.get(`/employees`,{headers:{"x-auth":localStorage.getItem("token")}})
      .then(response=>{
          const employees=response.data
          this.setState({employees})
      })
         
      }
      handleChange=(e)=>{
          this.setState({[e.target.name]:e.target.value})
      }
      submit=(e)=>{
          e.preventDefault()
          const formData={
            code:this.state.code,
            customerId:this.state.customer,
            departmentId:this.state.department,
            employeesId:this.state.employee,
            message:this.state.message,
            priority:this.state.priority

             
          }
          console.log(formData)
          this.props.handleTicketSubmit(formData)

      }
 render(){
 
     return ( <div>  
        <form onSubmit={this.submit}>   
             <label>
                 code
                 <input type="text" value={this.state.code} onChange={this.handleChange} name="code"/>
 
             </label><br/>
             <label>
                 customers
                 
                <select  value={this.state.customer} onChange={this.handleChange} name="customer" > 
                 <option value=""> select   </option>  
                 {this.state.customers.map(customer=>{
                     return <option  key={customer._id}   value={customer._id} > {customer.name}  </option>
                 })}
                       </select>
             </label><br/>

             <label>
                 departments
                 
                <select  value={this.state.department} onChange={this.handleChange} name="department" > 
                 <option value=""> select   </option>  
                 {this.state.departments.map(department=>{
                     return <option  key={department._id}   value={department._id} > {department.name}  </option>
                 })}
                       </select>
             </label><br/>
        
             <label>
                 employees
                 
                <select  value={this.state.employee} onChange={this.handleChange} name="employee" > 
                 <option value=""> select   </option>  
                 {this.state.employees.map(employee=>{
                     return <option  key={employee._id}   value={employee._id} > {employee.name}  </option>
                 })}
                       </select>
             </label><br/>
             <label>
                 message
                 <input type="text" value={this.state.message} onChange={this.handleChange} name="message"/>
 
             </label><br/>
             <label>
                 priority
                 <input type="text" value={this.state.priority} onChange={this.handleChange} name="priority"/>
 
             </label><br/>
             <input type="submit"/>
             </form>
     </div> )
 }
  }
   export default TicketsForm