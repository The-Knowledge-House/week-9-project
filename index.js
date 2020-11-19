
import dotenv from 'dotenv';
dotenv.config();
import {search} from './api';
import { appendMovies, clearMovies, setMessage } from './ui';


(()=>{
const handelSearchButtonClick = ()=>{
    const searchTerm = document.getElementById('search-pane-input').Value;
 clearMovies();

setMessage('searching , please wait....')
    search(searchTerm)
 .then((response)=>{
     if(response.Response === 'True'){
        appendMovies(response.search);
       setMessage();
     }else{

setMessage('could not find any matches , please refine your search term')
     }
  

 }).catch((error)=>{
setMessage('SOMTHING WENT WRONG TRY AGAIN')

 })
}


window.addEventListener('load', ()=>{
    document.getElementById('search-pane-button')
    .addEventListener('click',handelSearchButtonClick);
});
})();