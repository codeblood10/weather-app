 var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
     if(typeof a === 'number' && typeof b === 'number')
     {
       resolve (a+b);
     }
    else{
    reject('arguement must be number');
  }

    },1500);

  });
 };
 asyncAdd(5,"7").then((res)=>{
   console.log("answer is:",res);
  return asyncAdd(res , 33);
  }
   ,//(ermsg)=>{ console.log(ermsg); }
).then((res)=>{
  console.log("answer should be 45:",res);
 }
  ,//(ermsg)=>{ console.log(ermsg); }
).catch((errormessage) => {
  console.log(errormessage);
});
/*
var somepromise  = new Promise((resolve , reject) => {
    setTimeout(() =>
      { //can either resolve or reject one time only
       resolve("hey it worked");
       resolve();
       reject("unable to fulfill the request");
    },2500);
});

somepromise.then((message) => {

  console.log("sucess:" , message); },
  (errormessage)  => {
    console.log("error:",errormessage);
    });
*/
