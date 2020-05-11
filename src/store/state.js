let defaultCity="上海";
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
}catch(e){alert("出错了")}
export default {city:defaultCity}