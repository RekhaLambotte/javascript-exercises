/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/* if (i=1,i<=21,i++){
                console.log(i * i);
        } else{
                console.log("you ,umber is over 21");
        }
          */

(function() {

    document.getElementById("run").addEventListener("click", function() {
        // your code here

        for (n = 1;n < 21;n++) {
          x=n* n;

          alert("squarre is " + x);
        } 

    });

})();
