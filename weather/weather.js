const request = require("request");

var getweather = (latitude,longitude,callback) =>{
request({
  url :`https://api.darksky.net/forecast/996fcb7612b68845feb8934b541b4b3b/${latitude},${longitude}`
  ,json : true
},(error,response,body)=>{
  //console.log(JSON.stringify(error,undefined,2));
      if(!error && response.statusCode === 200)
          callback(undefined,body.currently.temperature);
       else
        {
           callback("unable  to fetch the weather");
         }
    });
};

module.exports = {
  getweather
 };
