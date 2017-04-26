//increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
//add comments
export function addComment(postId, author, comment) {
  console.log('dispatching')
  return{
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, i){
  return{
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
