let nextTodoId = 0

export const ADD_EMPLOYEE = (data) => {
  return {
    type: 'ADD_EMPLOYEE',
    data
  }
}

export const CHANGE_EMPLOYEE = (filter) => {
  return {
    type: 'CHANGE_EMPLOYEE',
    filter
  }
}

export const REMOVE_EMPLOYEE = (id) => {
  return {
    type: 'REMOVE_EMPLOYEE',
    id
  }
}

export const INIT_EMPLOYEE = (data) => {  
  return {
    type: 'INIT_EMPLOYEE',
    initData:data
  }
}