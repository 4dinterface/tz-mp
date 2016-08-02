let nextTodoId = 0

export const ADD_EMPLOYEE = (data) => {
  return {
    type: 'ADD_EMPLOYEE',
    data
    	
  }
}

export const CHANGE_EMPLOYEE = (change) => {
  return {
    type: 'CHANGE_EMPLOYEE',
    filter
  }
}

export const REMOVE_EMPLOYEE = (guid) => {
  return {
    type: 'REMOVE_EMPLOYEE',
    guid
  }
}

export const INIT_EMPLOYEE = (data) => {  
  return {
    type: 'INIT_EMPLOYEE',
    data
  }
}