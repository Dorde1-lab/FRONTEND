
namespace PEra
{
   internal class Program
   {
    static void Main(string[]args){





console.WriteLine($"Pera i zika {mara}")


string firstName = "Mara";
string lastName = "Pera";
int age = 23;

console.WriteLine("What's your name?");
firstName = console.ReadLine();

console.WriteLine("vase prezime je ?");
lastName = console.ReadLine();

console.WriteLine("koliko imas godina");
int age = int.Parse(console.ReadLine());





// ............................ metode


console.WriteLine("Koliko imas godina?");
string godiste = console.ReadLine;

int age = int.Parse(godiste);
int ageinput = Convert.ToInt(godiste);

// ......................toDouble

console.WriteLine("What is a value of Pi number?");
double numberPi = Convert.ToInt(console.ReadLine());
 console.WriteLine(numberPi);
    }
   }    
}





// .............. for loop example

for (int i = 1; i < 10, i++){
   console.WriteLine($"The value of i:{i}");
}

// ........... beskonacna for petlja

for (; ;){
   console.WriteLine("We will go on forver unless you enger X");
   string userInput = console.ReadLine();

   if(userInput == "x" || userInput == "X")
   break;  //  ne pisu se zagrade jer je samo jedna naredba nakon if
}

Console.WriteLine("We are outside of the loop");



// .................. WHILE


int counter = 0;

while(counter < 10) {
    console.WriteLine($"The value is: {counter}");
    counter++
}

// .......... infinite while loop


string userInput = string.Empty;

while( userInput != X || userInput != x) {
   console.WriteLine("This will go on forever unless you enter X");
   userInput = console.ReadLine();
}
console,WriteLine("We are outside of the loop");



// ........... do.. while


int counter = 0;

do 
{
   console.WriteLine($"The value of counter is {counter}");
   counter++;

}  while (counter < 10);




// ........... exercices


Console.WriteLine("Unesite neki broj");
int  number = int.Parse(console.ReadLine());

int i = 1;

while(i < number){

   if(i % 3 == 0 || i % 7 == 0){
      continue;
   }
   Console.WriteLine(i);

    if( i == 100){
      Console.WriteLine("the limit is reached");
      break;
      }
   i++ 
}

// ....... arrays
// ................... fixed array

int[] someArray -  new int[55];

console.WriteLine("The array elements are:");

for( int i = 0; i < someArray.lenght; i++){
   console.WriteLine(someArray[i]);
}


// ........... non fixed array


string[] someArray = new string[]
{
   "milica", "marija", "mira"
};



foreach (string student in studentsArray)

   console.WriteLine(student);


// ... napraviti niz duzine 5, od input vrednosti;


int[] numberArray = new int[5]
int sum = 0;

for( int i = 0; i < numberArray.lenght; i++){
   numberArray[i] = int.Parse(console.ReadLine());
   sum += numberArray[i];
}
console.WriteLine(sum);





string[] nameArray = new string[20];

int counter = 0;

while(true){
   console.WriteLine("Please enter a name:");
   string name = console.ReadLine();

   nameArray[counter] = name;

   counter++;
   
   console.WriteLine("Do you want to enter another name?");

   if(console.ReadLine() == "N")
      break;
}
console.WriteLine("Names stored");

foreach (string fullName in nameArray)
{
   console.WriteLine(fullName);
}









namespace PEra
{
   internal class Program
   {
    static void Main(string[]args){

   string message = printMyName("djordje");            //  poziv metode
   console.WriteLine(message);
   // moze se i ovako pozvati
   console.WriteLine(printMyName("djordje"));
    }

   static string printMyName(string name) {
      
      string message = $"My name is {name}";
      return message;
      
   }

// pozivanje druge metode

   string fName = "djordje";
   console.WriteLine(fullName(fName, "Labudovic"))

   static void fullName(string firstName, string lastName) {

     return $" Your name is {firstName} {lastName}"

   }
   }
}





//  working with strings 


string name =  "Marko";
string grad = "mostar";

string name1 = "hello"  + name;
string name2 = string.Format("Hello {0} and i am from {1}", name, grad);
string name3 = $"Hello {name}";




//  string formating 


string currency = string.Format("{0:C}", 125.45);
console.WriteLine("Currency formatting: " + currency);

// formatting percent
string percent = string.Format("{0:P}", 0.87);
console.WriteLine("Percentage formatting: " + percent);

//  formatting number
string customFormat = string.Format("{0:0##-###-###}", 060111343);

// formatting alignment
string customAlignment = string.Format("| {0,10} | {1,10} |", "Id", "Order");
string customAlignment2 = string.Format("| {0,10} | {1,10} |", "1", "Narudzba1");




//  Escaping strings


//         \\ - ove crte prepoznaje kao navodnike 


 string a = "Your file is located at: C:\\Users\\Public"; 
 string b = "In C# we use \\n to go into a new line";
 string b = "We will have \"fair\" elections";

//  laksi i jednostavnij nacin da se izbegnu \\ Kada se ovo stavi @ on prepoznaje u stringu onako kako je napisano

string aa = @"Your file is located at: C:\Users\Public";
string bb = @"We will have ""fair"" elections";
string cc = @"In C# we use \n to go into a new line";



//  Manipulacije


string ourString = "         We are learning C#.      We are the best."

string lowerCase = ourString.ToLower();
string upperCase = ourString.ToUpper();


//  lenght of the string

int ourStringLength = ourString.lenght;
console.WriteLine($"Length of our string is {ourStringLength}");

//  Metoda split('') - pravi niz

string[] splitted = ourString.Split('.');   // Kada stigne do tacke, prekida. mi zadajemo na osnovu cega 

foreach (string part in splitted)
        console.WriteLine(part);


//  Metoda koja sece prazan prostor - Trim();
string trimmedString = ourString.Trim();   
console.WriteLine(trimmedString);


//  Metoda Join()   -  spajanje elementa u jedan string
string part1 = "Pera";
string part2 = "Petar";
string part3 = "Marko";

string[] academy = new string[] {
   part1, part2, part3
};

string joinedContent = string.Join(',', academy);


//  Metoda indexOf

int indexOfwordFUN = ourString.indexOf("FUN");  //  izbacice da je rec FUN u tom stringu na 
// odredjenoj poziciji. npr 32.



// Metoda contains - vraca bool

if(ourString.contains("FUN")){

   console.WriteLine("There is a word FUN in our original string.");
}

//  Metoda substring 

string funPartOfString = ourString.Substring(indexOfwordFUN, ourString.lenght - indexOfwordFUN);
console.WriteLine(funPartOfString);
// ispisace sve nakon mesta na kom senalazi indexOfWordFUn.




            Student[] Students = new Student[5];        // Ovde pravimo niz objekata klase Student. Zato je Student[] !!!    niz od 5 objekata!!!!

            for (int i = 0; i < Students.Length; i++)
            {

                Console.WriteLine("Enter student's full name:");
                string nameInput = Console.ReadLine();

                Console.WriteLine("Enter student's academy name:");
                string academyInput = Console.ReadLine();

                Console.WriteLine("Enter student's group name:");
                string groupInput = Console.ReadLine();


                Student objStudent = new Student(nameInput, academyInput, groupInput);  //  konstruktor


                Students[i] = objStudent;
            }


            Console.WriteLine("Search a name you want:");
            string namesearched = Console.ReadLine().ToLower();


            bool trueOrFalse = false;

            foreach(Student item in Students)    // Student je objekat kao tip podatka
            {
                if(item.Name.ToLower() == namesearched)
                {
                    Console.WriteLine($"{item.Name} {item.Academy} {item.Group}");
                    trueOrFalse = true;
                }
            }
            if(trueOrFalse == false)
            {
                Console.WriteLine("There is no user with that name.");
            }