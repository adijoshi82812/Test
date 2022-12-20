let request = require("request")

exports.myExternalAdapter = (req, res) => {
  const url = "https://50f2207a-1fe5-4710-a7a1-a20dfb8abbb5.mock.pstmn.io/vaneckholding"

  let options = {
    url: url,
    json: true,
  }

  request(options, (error, response, body) => {
    if (error || response.statusCode >= 400) {
      let errorData = {
        jobRunID: req.id,
        status: "errored",
        error: body,
      }
      res.status(response.statusCode).send(errorData);
    } else {
      let returnData = {
        jobRunID: req.id,
        data: body,
      }
      res.status(response.statusCode).send(returnData);
    }
  })
}


//@dev For Lambda Implementation
//on AWS v1
exports.handler = (req, res) => {
    this.myExternalAdapter(req, res);
}

//@dev For Lambda Implementation
//on AWS v2
exports.handlerv2 = (req, res) => {
    this.myExternalAdapter(req, res);
}