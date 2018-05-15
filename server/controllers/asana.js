const axios = require("axios");
let asana = [];
let mySequence = [];
let id = 0;

axios
  .get("https://yoga-api.now.sh/api/poses")
  .then(response => {
    // console.log(response);
    asana = response.data;
  })
  .catch(console.log);

module.exports = {
  getAsana(req, res) {
    return res.status(200).send(asana);
  },

  getMySequence(req, res) {
    // console.log("you hit get '/api/mySequence' ");
    // console.log(mySequence);
    return res.status(200).send(mySequence);
  },
  postMySequence(req, res) {
    mySequence.push(req.body);
    // console.log(req.params);
    // console.log(req.body);
    // console.log(`sdgdg`, mySequence);
    res.status(200).send(mySequence);
  },
  updateMyPoseName(req, res) {
    console.log(req.params, req.body, mySequence);
    mySequence.forEach(
      element =>
        element.element.id === Number(req.params.id)
          ? Object.assign(element, req.body)
          : null
    );
    return res.status(200).send(mySequence);
  },
  deleteAsana(req, res) {
    const { id } = req.params;
    let index = mySequence.findIndex(element => element.element.id == id);
    mySequence.splice(index, 1);
    return res.status(200).send(mySequence);
  }
};
