/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
     
    async function fet(){
        const response = await fetch("http://localhost:3000/heroes/")
        let rep = await response.json()
        
        console.log(rep)   
    }

    document.querySelector("#run").addEventListener("click", function(){
        fet()  
    })
})();
