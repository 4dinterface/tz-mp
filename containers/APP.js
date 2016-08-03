import TableComponent from '../components/Table';
import { connect } from 'react-redux';
import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import {ADD_EMPLOYEE}  from "../actions";
import {REMOVE_EMPLOYEE}  from "../actions";
import {CHANGE_EMPLOYEE}  from "../actions";
  
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
      currentEmployee:{
        name:{}
      },
      showDialog:true,
      operation:"add"
    })    
  }
    
  handleRemoveEmployee(guid){
    this.props.dispatch(REMOVE_EMPLOYEE(guid));          
  }
    
  handleChangeEmployee(guid){    
    var data=Object.assign({}, this.props.employees.find(item=>item.guid==guid));
    console.log("render", data.name.first);
    
    this.setState({
      currentEmployee: data,
      showDialog:true,
      operation:"edit"
    })      
  }
  
  handleFormOk(formData){
    if(this.state.currentEmployee.guid){
      this.props.dispatch(CHANGE_EMPLOYEE(formData));  
    } else {      
      this.props.dispatch(ADD_EMPLOYEE(formData));
    }
    
    this.setState({
      showDialog:false
    })
  }
  
  getFilterEmployees(employees, filter){
    if(!filter) return employees;
    
    return this.props.employees.filter((item)=>{
      return item.name.first.indexOf(filter)>-1 || item.name.last.indexOf(filter)>-1
    });
  }
  
  render(){  
    return (
      <main className="container">    
        <EmployeeForm show={this.state.showDialog} data={this.state.currentEmployee} onOk={this.handleFormOk} />
        <div className="section">
          <div className="input-field col s12">
            <input name="filter" 
                   id="filter" 
                   type="text" 
                   className="validate" 
                   value={this.state.filter} 
                   onChange={e=>this.setState({filter:e.target.value})}/> 
          </div>
        </div>
        <div className="section">
          <TableComponent 
            employees={this.getFilterEmployees(this.props.employees, this.state.filter)} 
            onRemove={this.handleRemoveEmployee} 
            onChange={this.handleChangeEmployee}/>
        </div>        
        <div className="section">
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