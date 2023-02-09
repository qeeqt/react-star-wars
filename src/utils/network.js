 
 const SWAPI_ROOT = 'https://swapi.dev/api/';
 const SWAPI_PEOPLE ='people';
 
 export const getIpiResourse = (url) =>{
    fetch(url)
    .then(res =>res.json())
    .then(body => console.log(body))
    
}
getIpiResourse(SWAPI_ROOT+SWAPI_PEOPLE)
