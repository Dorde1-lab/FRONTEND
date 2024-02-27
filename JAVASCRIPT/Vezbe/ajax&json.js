// JSON


const response = {
    "trainer": "Trainer name",
    "assistant": "Assistant name",
    "students": [
      "Bob",
      "Samantha",
      "Chris",
      "Jill",
      "Greg"
    ],
    "academy": "Code"
  };

const jsObject = JSON.parse(response);
console.log(jsObject);

let someObject = {
  trainer: "Trainer name",
  assistant: "Assistant name",
  students: ["Bob", "Samantha", "Chris", "Jill", "Greg"],
  academy: "Code",
};

const toJson = JSON.stringify(someObject);
console.log(toJson);
