const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('add-todo')
      let todo = {
        id: action.id,
        text: action.text,
        completed: false
      };
      return [...state,todo]
    case 'TOGGLE_TODO':
      return state.map(t =>{
        if (t.id !== action.id) {
          return t
        }
        return {
          ...t,
          completed: !t.completed
        }
      })
    default:
      return state
  }
}

export default todos


