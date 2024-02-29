

//  Filter 

// const pets =  array.filter((element) => element.startsWith("b"));




function students(){
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const student = data;
        myFunction(student)
    })
}

function myFunction(student){
    const grade = student.filter(function(element){
        if(element.averageGrade > 3){
            console.log("grade", grade);
        }
    } )
}