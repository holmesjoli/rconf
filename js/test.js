let cityx = "Los Angeles";
let agex = 39.6;

cities = {"Los Angeles": 
            {age: 35.9},
            "San Francisco": 
            {age: 38.8}};

updateCity function(name) {

  document.getElementById("city-text").textContent = cities[name];
  document.getElementById("age-text").textContent = cities[name].age;  
  
}
