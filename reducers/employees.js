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
      console.log("add reducer 1", action,state);
      return {
        emloyees:[
          ...state.employees,
          employee(undefined, action)
        ]
      }      
    case 'CHANGE_EMPLOYEE':
      return state.map(t =>
        todo(t, action)
      )
    case 'REMOVE_EMPLOYEE':
      return state //TODO НУЖНА ЛОГИКА УДАЛЕНИЯ    
      
    case 'INIT_EMPLOYEE':
      console.log("init",action.initData);
      return {
        employees:action.initData        
      }
      
    default:
      return state
  }
}

export default employees
