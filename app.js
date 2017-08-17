const  yargs  = require('yargs');
//https://api.darksky.net/forecast/996fcb7612b68845feb8934b541b4b3b/
const request = require("request");

const geocode =  require("./geocode");
const weather =  require("./weather/weather.js");
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
 geocode.geocodeaddress(argv.a  ,(errormessage,results) => {
   if (errormessage) {
     console.log(errormessage);
   }
   else
   {
      console.log(JSON.stringify(results,undefined,2));
      weather.getweather(results.latitude,results.longitude,(errormessage,wresults) => {
          if(errormessage)
          {
            console.log(errormessage);
          }
          else
          {
            console.log(JSON.stringify(wresults,undefined,2));
          }
      });
   }
  });
