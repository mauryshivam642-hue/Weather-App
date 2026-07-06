async function Search(){
    let a = document.getElementById('city').value
   // console.log(a);
      const key = '9f58c0e5af8c5947d0a1ff3bfc0c9e43'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${key}&units=metric`;
      let res = await fetch(url)
      let data = await res.json();
      console.log(data);
      document.querySelector('.box h3').innerHTML=`temp - ${data.main.temp}`
      document.querySelector('.box h4').innerHTML=`${data.name}`
}





