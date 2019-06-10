import axios from 'axios';

export function getBooks(limit=10, start = 0, order = 'asc', list = ''){
    const request = axios
      .get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
      .then(res => {
          if(list) {
                return [...list, ...res.data]
          } else {
                return res.data;
          }
      })
      .catch(err => console.error(err));
    return{
        type: 'GET_BOOKS',
        payload: request
    }
}

export function getBookWithReviewer(id) {
    const request = axios.get(`/api/getBook?id=${id}`)
    return (dispatch) => {
        request.then(({data}) => {
            let book = data;
            axios.get(`/api/getReviewer?id=${book.ownerID}`).then(({data}) => {
                let response  = {
                    book,
                    reviewer: data
                }

                dispatch({
                    type:'GET_BOOK_WITH_REVIEWER',
                    payload: response
                })
            })
        })
    }
}

export function clearBookWithReviewer() {
    return {
        type:'CLEAR_BOOK_WITH_REVIEWER',
        payload: {
            book: {},
            reviewer: {}
        }
    }
}

export function clearNewBook() {
    return {
        type: 'CLEAR_NEW_BOOK',
        payload:{}
    }
}

export function getUserPosts(userID){
    const request =axios
      .get(`/api/user_posts?user=${userID}`)
      .then(res => res.data)
      .catch(err => console.error(err));
    return {
        type:'GET_USER_POSTS',
        payload: request
    }
}

export function loginUser({email, password}) {
    const request = axios
      .post('/api/login',{email, password})
      .then(response =>  response.data)
      .catch(err => console.error(err));

    return {
        type: 'USER_LOGIN',
        payload: request
    }
}

export function auth(){
    const request = axios
      .get("/api/auth")
      .then(response => response.data)
      .catch(err => console.error(err));
    
    return {
        type: 'USER_AUTH',
        payload: request
    }
}

export function AddBooks(book) {
    const request = axios
      .post('/api/book', book)
      .then(response => response.data)
      .catch(err => console.error(err));
    return {
        type: 'BOOK_ADD',
        payload: request
    }
}

export function getBook(id) {
    const request = axios
      .get(`/api/getBook?id=${id}`)
      .then(res => res.data )
      .catch(err => console.error(err));
    return {
        type: 'GET_BOOK',
        payload: request
    }
}

export function updateBook(data){
    const request = axios
      .post(`/api/book_update`,data)
      .then(res => res.data)
      .catch(err => console.error(err));
    return {
        type: 'UPDATE_BOOK',
        payload: request
    }
}

export function deleteBook(id) {
    const request = axios
      .delete(`/api/delete_book?id=${id}`)
      .then(res => res.data)
      .catch(err => console.error(err));
    return {
        type:'DELETE_BOOK',
        payload: request
    }
}

export function clearBook() {
    return {
        type: 'CLEAR_BOOK',
        payload:{
            book: null,
            updateBook:false,
            postDeleted: false
        }
    }
}

export function getUser() {
    const request = axios
      .get("/api/users")
      .then(res => res.data)
      .catch(err => console.error(err));
    return {
        type: 'GET_USERS',
        payload:request
    }
}

export function registerUser(user, userList) {
    const request = axios.post(`/api/register`, user)
    return (dispatch) => {
        request.then(({data}) => {
            let users = data.success? [...userList, data.user]: userList
            let response = {
                success: data.success,
                users
            }
            dispatch({
                type: 'USER_REGISTER',
                payload: response
            })
        })
    }
}