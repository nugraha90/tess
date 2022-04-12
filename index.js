async function myFunc(){
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      console.log("HalloS")
      res()
    }, 3000)//millisecond
  })
}


 (async () => {
   while(true) await myFunc() 
  })()
