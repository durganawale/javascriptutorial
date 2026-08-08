let n = 5
function suquarepattern(n){
    for (i=1; i<=5; i++){
        line=" "
        for (j=1; j<=5; j++){
            line= line + " *"

        }
        console.log(line)
    }
}
suquarepattern(n)


function tringlepattern(n){
    for (i=1;i<=n; i++){
        line=" "
        for (j=1;j<=i; j++){
            line= line + "*"
        
        }
         console.log(line)

    }
}

tringlepattern(n)

function reversetringle(n){
    for(i=n ; i>=1; i--){
        line= " "
    
    for(j=1 ; j<=i ; j++){
        line += "*"
    }
       console.log(line)
}
}
reversetringle(n)





function pyramid(n){
    for (i=1; i<=n; i++){
        line = " "
      for (j = 1; j<=n-i; j++){
        line += " "
      }  
      for (let k=1; k<=2*i-1; k++){
        line +="*"
      }
          console.log(line )

    }
}
pyramid(n)



function diamond(n) {

    // Upper half
    for (let i = 1; i <= n; i++) {
        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }

        console.log(line);
    }

    // Lower half
    for (let i = n - 1; i >= 1; i--) {
        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }

        console.log(line);
    }
}

diamond(5);


    function numberPyramid(n) {

    for (let i = 1; i <= n; i++) {
        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Numbers
        for (let k = 1; k <= i; k++) {
            line += k + " ";
        }

        console.log(line);
    }
}

numberPyramid(5);

function numberPyramid(n) {

    for (let i = 1; i <= n; i++) {
        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Same number repeatedly
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += i;
        }

        console.log(line);
    }
}

numberPyramid(5);



function hollowSquare(n) {

    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let j = 1; j <= n; j++) {

            // First row, last row, first column, last column
            if (i === 1 || i === n || j === 1 || j === n) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

hollowSquare(5);


function hourglass(n) {

    // Upper half
    for (let i = n; i >= 1; i--) {
        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }

        console.log(line);
    }

    // Lower half
    for (let i = 2; i <= n; i++) {
        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }

        console.log(line);
    }
}

hourglass(5);


function zigZag(n) {

    for (let i = 1; i <= 3; i++) {
        let line = "";

        for (let j = 1; j <= n; j++) {

            if (
                (i === 1 && j % 4 === 1) ||
                (i === 2 && j % 2 === 0) ||
                (i === 3 && j % 4 === 3)
            ) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

zigZag(9);