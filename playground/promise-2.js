const request = require("request");
var geocodeaddress = (address) => {
  var enaddr = encodeURIComponent(address);
 return new Promise ((resolve ,reject) => {
   request({
     url :`https://maps.googleapis.com/maps/api/geocode/json?address=${enaddr}`
     ,json : true
   },(error,response,body)=>{
     //console.log(JSON.stringify(error,undefined,2));
       if(error)
         {
           reject("unable to connect server");
         }
       else if (body.status === 'ZERO_RESULTS')
         reject('unable to fetch the address');
       else if (body.status == "OK")
       { resolve({
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
});
};

geocodeaddress('00000').then((location) => {
 console.log(JSON.stringify(location,undefined,2));
},(errormessage) => {
 console.log(errormessage);
});
