let niz = [1, 2, 3, 4, 5];
let index = 0;

function validateNumber (niz){

    while ( index < niz.length){
        if ( isNaN(niz[index]) ) {

            console.log ("Neki od brojeva nije validan.");
        } else { switch(index){
            case 0:
                console.log (niz[0]);
                break;

        }         
        }

        }

     
    }

    validateNumber (niz)
