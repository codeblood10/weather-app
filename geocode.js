const request = require("request");


geocodeaddress = (a,callback) => {

 var enaddr = encodeURIComponent(a);

  request({
    url :`https://maps.googleapis.com/maps/api/geocode/json?address=${enaddr}`
    ,json : true
  },(error,response,body)=>{
    //console.log(JSON.stringify(error,undefined,2));
      if(error)
        {
          callback("unable to connect server");
        }
      else if (body.status === 'ZERO_RESULTS')
        callback('unable to fetch the address');
      else if (body.status == "OK")
      { callback(undefined,{
          address : body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude:body.results[0].geometry.location.lng
      });
      /*
     console.log(`address: ${body.results[0].formatted_address}`);
     console.log(`latitude:${body.results[0].geometry.location.lat}`);
     console.log(`longitude:${body.results[0].geometry.location.lng}`);
      */
     }
 });

};

module.exports = {
  geocodeaddress,
};
