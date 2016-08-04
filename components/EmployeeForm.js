import React from 'react';
import { connect } from 'react-redux'
//import {INIT_EMPLOYEE}  from "../actions";
  
// Manually bind, wherever you need to
class EmployeeForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.state={
      name:{}        
    };
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
    
    if(this.onValid()){     
      $(this.refs.modal).closeModal();
      console.log(this.state);
      
      this.props.onOk({
        firstName: fields.firstName.value,
        lastName: fields.lastName.value,
        age: fields.age.value,
        guid: this.state.guid
      });
    }
  }
    
  onChange(e){
      //this.props.data.name.last=e.target.value;     
      /*this.setState({
        
      })*/
  }
    
  componentWillReceiveProps(props,newProp){    
    console.log(props);
    
    this.setState(props.data);
    //console.log("init form from prop", this.props.data.name.first);
  }
    
  
  render(){      
    return (
        <div ref="modal" className="modal modal-fixed-footer" >
          <div className="modal-content">      
            <div className="row">
              <form className="col s12" ref="form">         
                <div className="row">
                  <div className="input-field col s12">
                    <input name="firstName" 
                           id="first_name" 
                           type="text" 
                           className="validate" 
                           value={this.state.name.first} 
                           onChange={e=>this.setState({name:{first:e.target.value}})}/>   
      
                    <label htmlFor="first_name">First Name</label>
                  </div>    
                </div>        
                <div className="row">
                  <div className="input-field col s12">
                    <input name="lastName" 
                           id="last_name" 
                           type="text" 
                           className="validate" 
                           value={this.state.name.last}
                           onChange={e=>this.setState({name:{last:e.target.value}})}/>
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                </div>      
                <div className="row">
                  <div className="input-field col s12">
                    <input name="age" 
                           id="age" 
                           type="number" 
                           min="0" 
                           max="150" 
                           className="validate" 
                           value={this.state.age} 
                           onChange={e=>this.setState({age:e.target.value})}/>
                           
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
        dismissible: false,
        complete:()=>this.props.onCancel && this.props.onCancel()
      });
      Materialize.updateTextFields();
    }    
  }  
}                        
            
export default EmployeeForm;