import TableComponent from '../components/Table';
import { connect } from 'react-redux';
import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import {ADD_EMPLOYEE}  from "../actions";
import {REMOVE_EMPLOYEE}  from "../actions";
  
//import {INIT_EMPLOYEE}  from "../actio";

class APPComponent extends React.Component {  
  constructor(props) {
    super(props);        
    this.state= {
      showDialog: false,
      currentEmployee:{
        name:{}
      }
    };
    
    this.handleAddEmployeeClick=this.handleAddEmployeeClick.bind(this);
    this.handleFormOk=this.handleFormOk.bind(this);    
    this.handleRemoveEmployee=this.handleRemoveEmployee.bind(this);
    this.handleChangeEmployee=this.handleChangeEmployee.bind(this);
  }
  
  handleAddEmployeeClick(){
    this.setState({
      showDialog:true,
      currentEmployee:{
        name:{}
      }
    })    
  }
    
  handleRemoveEmployee(guid){
    this.props.dispatch(REMOVE_EMPLOYEE(guid));          
  }
    
  handleChangeEmployee(guid){        
    this.setState({
      showDialog:true,
      currentEmployee: Object.assign({}, this.props.employees.find(item=>item.guid==guid))      
    })      
  }
  
  handleFormOk(formData){
    this.props.dispatch(ADD_EMPLOYEE(formData));    
    this.setState({
      showDialog:false
    })
  }
  
  render(){          
    return (
      <main className="container">    
        <EmployeeForm show={this.state.showDialog} data={this.state.currentEmployee} onOk={this.handleFormOk} />
      
        <div className="section">
          <TableComponent employees={this.props.employees} onRemove={this.handleRemoveEmployee} onChange={this.handleChangeEmployee}/>
        </div>        
        <div class="section">
          <a className="waves-effect waves-light btn" onClick={this.handleAddEmployeeClick}>Добавить</a>       
        </div>
      
      </main>
    );            
  }
}                                    

var MapStateToProps=(state)=>{      
      return {
        employees:state.employees
      }      
}      
          
var APP=connect(MapStateToProps)(APPComponent);
export default APP;