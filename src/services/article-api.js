import tokenService from './tokenService'
const BASE_URL = '/api/articles/'

export function articleSearch(formData){
    return fetch(`${BASE_URL}search/${formData.query}`, {
        method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
            body: JSON.stringify(formData)
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function create(formData){
    console.log('this is the api create function')
    console.log(formData)
    return fetch (BASE_URL, {
        method: "POST",
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
            body: JSON.stringify(formData)
    }, {mode: 'cors'})
    .then(res => res.json())
}

export function getTopNews () {
  console.log('this is the services folder')
  return fetch (`${BASE_URL}topnews`, {
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
    }, {mode: 'cors'}
  ) 
  .then (res => res.json())
}

export function getArticle(articleId){
  return fetch (`${BASE_URL}${articleId}`, {
    headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
}, {mode: 'cors'})
.then((res => res.json()))
}

export function addComment(idandFormData){
  return fetch (`${BASE_URL}${idandFormData.article._id}/addcomment`, {
    method: "PUT",
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(idandFormData)
}, {mode: 'cors'})
.then(res => res.json())
}