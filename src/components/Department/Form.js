
import React from "react"

class DeapartmentForm extends React.Component{ 
        state={
            name:""
        }
    
        submit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        console.log(formData)
        this.props.handleSubmit(formData)
        
      }
       handleChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
         }
     render(){
        return(<div>    
     <form onSubmit={this.submit}>
<label htmlFor="name">

    name 
    <input type="text" value={this.state.name} id="name" onChange={this.handleChange} name="name" />
</label>
<label>
    <input type="submit" />
</label>
    </form>
        </div>  )
    }
}
export default DeapartmentForm