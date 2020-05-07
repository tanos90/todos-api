var express = require('express');
var app = express();
var parser = require('body-parser');
const http = require('http');
const { parse } = require('querystring');
var cors = require('cors');
app.use(cors());
app.use(parser.json());
app.post('/login', (req, res) => {
  console.log(req.body);

  const response = checkUserName(req.body.userLogin.username);
  console.log(response);
  res.json({ res: response });
});

checkUserName = (username) => {
  return username.indexOf('@') > -1;
};
// sortString = (value) => {
//   let separatedString = value.split(',');
//   let result = '';
//   let lengthOfValue = separatedString.length;
//   if (separatedString.length > 1) {
//     let temp = '';
//     for (let x = 0; x < lengthOfValue; x++) {
//       for (let i = 0; i <= lengthOfValue; i++) {
//         if (parseInt(separatedString[i]) > parseInt(separatedString[i + 1])) {
//           temp = separatedString[i];
//           separatedString[i] = separatedString[i + 1];
//           separatedString[i + 1] = temp;
//         }
//       }
//     }

//     result = separatedString.join(',');
//   } else {
//     result = value;
//   }
//   return result;
// };

app.listen(4202, () => {
  console.log('in');
});
