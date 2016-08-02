const employee = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      console.log("add reducer", action);
      return {
        firstName: action.data.firstName,
        lastName: action.data.lastName,
        age: action.data.age
      }      
      
    case 'CHANGE_EMPLOYEE':
      return state //TODO НУЖНА ЛОГИКА ИЗМЕНЕНИЯ
      
    default:
      return state
  }
}

const employees = (state=[], action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':       
      return {
        emloyees:[
          ...state,
          employee(undefined, action)
        ]
      }
      
    case 'CHANGE_EMPLOYEE':
      return state.map(t =>{
        //todo(t, action)
        return {};
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