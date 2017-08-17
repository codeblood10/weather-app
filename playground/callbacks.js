var getuser = (id,callback) => {
 var user = {
   id : id ,
   name :'ankit'
 };
setTimeout(()=>{callback(user)},3000);
};

getuser(31,(userobj) => {
  console.log(userobj);
});
