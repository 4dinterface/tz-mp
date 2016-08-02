  import React from 'react';
import { connect } from 'react-redux'
//import {INIT_EMPLOYEE}  from "../actions";
  
// Manually bind, wherever you need to
class TableComponent extends React.Component {
  constructor(props) {
    super(props);        
    //this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
  }    

  handleChange(e, guid){
    e.preventDefault();
    this.props.onChange(guid);
  }    
    
  handleRemove(e, guid){
    e.preventDefault();  
    this.props.onRemove(guid);  
  }    
  
  render(){    
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
            //console.log(item);
        
            return <tr>
              <td>{item.name.first}</td>
              <td>{item.name.last}</td>
              <td>{item.age}</td>
            
              <td>
                <a href="" onClick={e=>this.handleChange(e, item.guid) }>edit </a>
                <a href="" onClick={e=>this.handleRemove(e, item.guid) }>remove</a>                
              </td>
                
            </tr>
          })}
        </tbody>
      </table>              
    );
            
  }
}                        
            
export default TableComponent;