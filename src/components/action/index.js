/* ACTION
************/

export const ADD = 'ADD';
export const REMOVE = "REMOVE";
export const COMPLETED = "COMPLETED";



/* ACTION CREATER
*****************/

/* ADD TO-DO */
export const add = (text) =>{
  return {
    type: ADD,
    id: Date.now(),
    text: text
  }
}

/* REMOVE TO-DO */
export const remove = (id) =>{
  return {
    type: REMOVE,
    id: id
  }
}

/* MARK TO-DO AS COMPLETED*/
export const completed = (id) =>{
  return {
    type: COMPLETED,
    id: id
  }
}

