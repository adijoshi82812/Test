// let request = require("request")
let axios = require('axios');

exports.myExternalAdapter = async () => {
//   let options = {
//     url: url,
//     json: true,
//   }

  return await axios.get("https://50f2207a-1fe5-4710-a7a1-a20dfb8abbb5.mock.pstmn.io/vaneckholding");

//   request(options, (error, response, body) => {
//     if (error || response.statusCode >= 400) {
//       let errorData = {
//         jobRunID: req.id,
//         status: "errored",
//         error: body,
//       }
//       return errorData;
//     } else {
//       let returnData = {
//         jobRunID: req.id,
//         data: body,
//       }
//       return returnData;
//     }
//   })
}


//@dev For Lambda Implementation
//on AWS v1
exports.handler = (req, res) => {
    this.myExternalAdapter(req, res);
}

//@dev For Lambda Implementation
//on AWS v2
exports.handlerv2 = async (event, callback) => {
    const response = await this.myExternalAdapter();
    
    callback(null, response.data);
}