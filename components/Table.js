  import React from 'react';
import { connect } from 'react-redux'
//import {INIT_EMPLOYEE}  from "../actions";
  
// Manually bind, wherever you need to
class TableComponent extends React.Component {
  constructor(props) {
    super(props);        
    //this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
  }    
  
  render(){
    console.log(this.props);
    
    return (
      <table className="striped" >
        <thead>
          <tr>
              <th data-field="FirstName">First</th>
              <th data-field="LastName">Last Name</th>
              <th data-field="Age">Age</th>
              <th data-field="Actions">Actions</th>
          </tr>
        </thead>      
        <tbody>          
          {this.props.employees.map((item)=>{            
            return <tr>
              <td>{item.name.first}</td>
              <td>{item.name.last}</td>
              <td>{item.age}</td>
              <td></td>
            </tr>
          })}
        </tbody>
      </table>              
    );
            
  }
}                        
            
export default TableComponent;