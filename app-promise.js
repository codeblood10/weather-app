const  yargs  = require('yargs');
const  axios  = require("axios");
//https://api.darksky.net/forecast/996fcb7612b68845feb8934b541b4b3b/

const argv  = yargs.option({
   a :{
     demand: true,
     alias : "address",
     describe : "address to fetch weather for",
     string : true
   }
 })
   .help()
   .alias('help','h')
  .argv;
   console.log(argv);
 var enaddr  = encodeURIComponent(argv.address);
 var geocodeurl =  `https://maps.googleapis.com/maps/api/geocode/json?address=${enaddr}`;

  axios.get(geocodeurl).then((response)=>{
   if(response.data.status === "ZERO_RESULTS")
   {
    throw new Error('unable to find address');
   }
   var latitude = response.data.results[0].geometry.location.lat;
   var longitude = response.data.results[0].geometry.location.lng;
   var weatherurl = `https://api.darksky.net/forecast/996fcb7612b68845feb8934b541b4b3b/${latitude},${longitude}`;
   console.log(response.data.results[0].formatted_address);
   return axios.get(weatherurl);
 }).then((response)=>{
   var temp = response.data.currently.temperature;
   var aptemp = response.data.currently.apparentTemperature;
   console.log(`its currently ${temp} ,but it feels like ${aptemp}`);
 })
 .catch((e) => {
   if(e.code === "ENOTFOUND")
   console.log("GOT SOME ERROR MAN unable to connect to the api server");
  else
  {
    console.log(e.message);
  }
  });
