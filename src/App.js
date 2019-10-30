import React from 'react';
import {BrowserRouter,Route,Link,Switch} from "react-router-dom"
import CustomersList from "./components/customers/List"
import CustomersNew from "./components/customers/New"
import EmployeeNew from "./components/employees/new"
import DepartmentList from "./components/Department/List"
import EmployeeList from "./components/employees/List"
import CustomerShow from "./components/customers/show"
import CustomerEdit from "./components/customers/edit"
import EmployeeShow from './components/employees/show';
import TicketsList from "./components/tickets/list"
import TicketsNew from './components/tickets/new';

function App() {
  return (<BrowserRouter>
    <div>
    <h2> ticket master</h2>
    <br/>
    <Link to="/">  Home </Link>
    <Link to="/customers"> Customers  </Link>
    <Link to="/department"> Department</Link>
    <Link to="/employees" > Employee  </Link>
    <Link to="/tickets" > Tickets  </Link>
  
<Switch>
   <Route path="/customers" component={CustomersList}  exact={true}  />
   <Route path="/customers/new" component={CustomersNew} exact={true}   />
   <Route path="/customer/edit/:id" component={CustomerEdit}/>
   <Route path="/customer/:id" component={CustomerShow} />
    
    
    <Route path="/department" component={DepartmentList} />
    <Route path="/employees" component={EmployeeList} exact={true}/>
    <Route path="/employees/new" component={EmployeeNew}   />
    <Route path="/employees/:id" component={EmployeeShow}   />

    <Route path="/tickets" component={TicketsList} exact={true}/>
    <Route path="/tickets/new" component={TicketsNew} exact={true}/>

    </Switch>
        </div> </BrowserRouter> );
}

export default App
//react select  dropdown
