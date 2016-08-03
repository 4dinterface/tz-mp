const employee = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      console.log("add reducer", action);
      return {
        name:{
          first: action.data.firstName,
          last: action.data.lastName,
        },
        age: action.data.age
      }      
      
    case 'CHANGE_EMPLOYEE':
      
      return action.data //TODO НУЖНА ЛОГИКА ИЗМЕНЕНИЯ
    
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
        return employee(item)
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