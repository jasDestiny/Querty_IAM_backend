const axios=require("axios");
// let options={
//     method: "GET",
//     url: "www.google.com",
// };

// axios.request(options).then(function (response) {
//     console.log(response);
// }).catch(function (error) {
//     console.error(error);
// });

// axios.get('https://www.google.com/search?q=axios').then(function (response) {
//     console.log(response);
// });

axios.post('http://localhost:3030/users/addpermission', {
  userid:"jasboson@gmail.com",
  tokenval:"9f9895d5fd187fa7577ffbe883117610",
  adduser: "jasboson1@gmail.com",
  hyperlink:"www.facebook.com",
  request:"GET"
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });