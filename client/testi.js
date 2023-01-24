
(function () {
let parsedData = `Question 1: What is Metallurgy?
Options: [{ id: 0 | text: "The science and art of processing and adapting metals" | isCorrect: true },{ id: 1 | text: "The craft of metalworking" | isCorrect: false },{ id: 2 | text: "The engineering of metal components" | isCorrect: false },{ id: 3 | text: "The study of the physical and chemical behavior of metallic elements" | isCorrect: false }]

Question 2: What is a specialist practitioner of metallurgy known as?
Options: [{ id: 0 | text: "Metallurgist" | isCorrect: true },{ id: 1 | text: "Metalworker" | isCorrect: false },{ id: 2 | text: "Materials Scientist" | isCorrect: false },{ id: 3 | text: "Engineer" | isCorrect: false }]

Question 3: What is the purpose of Metallurgy?
Options: [{ id: 0 | text: "To produce metals" | isCorrect: true },{ id: 1 | text: "To craft metal components" | isCorrect: false },{ id: 2 | text: "To study the physical and chemical behavior of metallic elements" | isCorrect: false },{ id: 3 | text: "To engineer metal components for consumers and manufacturers" | isCorrect: false }]`
// const parsedDatat= parsedData.trim()
// let parsedDataArray = []
// console.log(parsedDataArray) 

// let match = parsedDatat.match(/Que: "([^"]+)"options: \[([^\]]+)\]/g);
//   console.log(match);

//   // a function to spilt the text so as to not slipt the options that has "," in it 

//   // function splitText(text) {
//   //   //console.log("this is the text ", text)
//   //   let objArr = text.split('},');
//   //   console.log("this is the split ", objArr)
//   //   let newArr = [];
//   //   objArr.forEach((str) => {
//   //     let newObj = {};
//   //     let propArr = str.split('| ');
//   //     console.log("this is the 2 split ", propArr)
//   //     propArr.forEach((prop) => {
//   //       let keyVal = prop.split(': ',);
//   //       console.log("this is the keyVal ", keyVal);
//   //       newObj[keyVal[0].trim()] = keyVal[1].trim();
//   //     });
//   //     newArr.push(newObj);
//   //   });
//   //   return newArr;
//   // }

//   // for (let i = 0; i < match.length; i++) {

//   //     let _question = match[i].match(/Que: \"([^\"]+)/)[1];
//   //     let options = match[i].match(/options: \[([^\]]+)/)[1];
//   //     let optionsArray = options.split('|');
//   //     console.log(optionsArray)
//   //     let optionsObject = optionsArray.map((opt) => {
//   //         let obj = {}
//   //         let id = opt.match(/id: ([0-9]+)/)[1];
//   //         obj["id"] = id;
//   //         let text = opt.match(/text: \"([^\"]+)/)[1];
//   //         obj["text"] = text;
//   //         let isCorrect = opt.match(/isCorrect: (true|false)/)[1];
//   //         obj["isCorrect"] = isCorrect;
//   //         return obj;
//   //     });
//   //     parsedDataArray.push({ _question, options: optionsObject });
//   // }
//   // console.log(parsedDataArray);


// function extractQuestions(text) {
//   let lines = text.split(/[\n]+/m);
//   //console.log(lines)
//   //console.log(lines.length)
//   let questions = [];
//   let question = {};
//   for (let i = 0; i < lines.length; i++) {
//     if (lines[i].includes("Question")) {
//       if (Object.keys(question).length !== 0) {
//         questions.push(question);
//         question = {};
//       }
//       question.question = lines[i].trim();
//       question.options = [];
//     } else if (lines[i].includes("Options")) {
//       //console.log("line includes options", lines[i])
//       //taking the index of the "option" text
//       let substring = lines[i].indexOf(":") + 3;
//       //console.log("substring",substring)
//       //using the index to substing the line[i] then triming
//       let _options = lines[i].substring(substring).trim()
//       //console.log("_options",_options)
//       let options= _options.split(/\S[.{]/ig)
//       //console.log(options)





//       console.log("this are the options",options)
//       for (let option of options) {
//         question.options.push(option);

//       }
//     }
//   }
//   if (Object.keys(question).length !== 0) {
//     questions.push(question);
//   }
//   return questions;
// }
// console.log(extractQuestions(parsedData))

function extractQuestions(text) {
  let lines = text.split('\n');
  let questions = [];
  let question = {};
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("Question")) {
      if (Object.keys(question).length !== 0) {
        questions.push(question);
        question = {};
      }
      question.question = lines[i].trim();
      question.options = [];
    } else if (lines[i].includes("Options")) {
      let options = lines[i].substring(lines[i].indexOf(":") + 1).trim();
      options = options.substring(1, options.length - 1).split("},{");
      for (let option of options) {
        let option_values = option.split("|");
        let id = option_values[0].substring(option_values[0].indexOf(":") + 1).trim();
        let text = option_values[1].substring(option_values[1].indexOf(":") + 1).trim();
        let _isCorrect = option_values[2].substring(option_values[2].indexOf(":") + 1).trim();
        let isCorrect = _isCorrect.replace(/[, }]/g, "");
        console.log(isCorrect)
        question.options.push({ id: id, text: text, isCorrect: isCorrect });
      }
    }
  }
  if (Object.keys(question).length !== 0) {
    questions.push(question);
  }
  return questions;
}
const arra = extractQuestions(parsedData)
console.log(arra)





})();
