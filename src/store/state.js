let defaultCity = '上海'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){
  console.log(e)
}

export default {
    city:defaultCity   //state存放的是公用的数据
}