 
 const SWAPI_ROOT = 'https://swapi.dev/api/';
 const SWAPI_PEOPLE ='people';
 
 export const getIpiResourse =  async (url) =>{
    
   try {
    const res = await fetch(url);

    if(!res.ok){
        console.error('could not fetch',res.status);
        return false;
    } 

     return await res.json();
    
   } catch (error) {
    console.error('could not fetch', error.message);
    return false;
   }
    
}
 //getIpiResourse(SWAPI_ROOT+SWAPI_PEOPLE)
 ///.then(body =>console.log(body))

(async() =>{
const body = await getIpiResourse(SWAPI_ROOT+SWAPI_PEOPLE)
 console.log(body);
})();

