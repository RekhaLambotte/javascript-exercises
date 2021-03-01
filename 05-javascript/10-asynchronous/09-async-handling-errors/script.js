/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// async function promise(){  
//     let prom = await window.lib.getPosts()
//     console.log(prom)
// }

// document.querySelector("#run").addEventListener("click",function(){
//     promise()
// })



(() => {
    // your code here
    async function one(){
        try{
            let prom = await window.lib.getPersons()
            console.log(prom)
        }catch(error){
            console.error(error)
        }
        finally{
            console.error("hello")
        }    
    }
    
    document.querySelector("#run").addEventListener("click",function(){
        one()
    })
})();
