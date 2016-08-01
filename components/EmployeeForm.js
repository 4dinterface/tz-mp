import React from 'react';
import { connect } from 'react-redux'
//import {INIT_EMPLOYEE}  from "../actions";
  
// Manually bind, wherever you need to
class EmployeeForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }
  
  onValid(){
    var fields=this.refs.form.elements;
    //TODO - сделать
    /*if(!fields.firstName.checkValidity()){
      fields.firstName.setCustomValidity("Invalid field.");
      return false;
    }*/
    
    /*if(fields.lastName.valid){
      fields.lastName.setCustomValidity("Invalid field.");
      return false;
    }
    
    if(!fields.age.valid){
      fields.age.setCustomValidity("Invalid field.");
      return false;      
    }*/
    
    return true;
  }
  
  onAdd(){
    var fields=this.refs.form.elements;
    
    console.log("add");
    
    if(this.onValid()){     
      console.log("valid");      
      
      $(this.refs.modal).closeModal();
      this.props.onOk({
        firstName: fields.firstName.value,
        lastName: fields.lastName.value,
        age: fields.age.value
      });
    }
  }
  
  render(){
    return (
        <div ref="modal" className="modal modal-fixed-footer" >
          <div className="modal-content">      
            <div className="row">
              <form className="col s12" ref="form">         
                <div className="row">
                  <div className="input-field col s12">
                    <input name="firstName" id="first_name" type="text" required className="validate"/>
                    <label htmlFor="first_name">First Name</label>
                  </div>    
                </div>        
                <div className="row">
                  <div className="input-field col s12">
                    <input name="lastName" id="last_name" type="text" required className="validate"/>
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>      
                <div className="row">
                  <div className="input-field col s12">
                    <input name="age" id="age" type="number" min="0" max="150" required className="validate"/>
                    <label htmlFor="age">Age</label>
                  </div>
                </div>                            
              </form>
            </div>      
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action waves-effect waves-green btn-flat " onClick={this.onAdd}>Добавить</a>            
          </div>
        </div>
    );            
  }
  
  componentDidUpdate(prevProps, prevState){        
    if(this.props.show){
      $(this.refs.modal).openModal({
        complete:()=>this.props.onCancel && this.props.onCancel()
      });
    }
  }  
}                        
            
export default EmployeeForm;