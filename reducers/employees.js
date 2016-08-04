const employee = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        name:{
          first: action.data.firstName,
          last: action.data.lastName,
        },
        age: action.data.age
      }      
      
    case 'CHANGE_EMPLOYEE':
      console.log("CHANGE EMPLOYEE", action.data.guid!=state.guid, action.data.guid);  
      if(action.data.guid==state.guid){
        console.log(Object.assign({}, state, action.data )) ;
      }
      
      return action.data.guid!=state.guid? state:{
        guid:state.guid,
        age:action.data.age,
        email:state.email,
        name:{
          first: action.data.firstName,
          last: action.data.lastName         
        }
      }
    default:
      return state
  }
}

const employees = (state=[], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':       
      return[
          ...state,
          employee(undefined, action)
      ]            
    case 'CHANGE_EMPLOYEE':
      return state.map(item =>{
        return employee(item, action)
      })
      
    case 'REMOVE_EMPLOYEE':          
      var index=state.findIndex(item=>item.guid===action.guid);
      //console.log("удаляю ",action.guid)      
      return [          
          ...state.slice(0, index),
          ...state.slice(index+1)
      ]
      
    case 'INIT_EMPLOYEE':      
      return [
          ...action.data
      ]
      
    default:
      return state
  }
}

export default employees