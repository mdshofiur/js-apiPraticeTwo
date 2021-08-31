const searchFood =  () => {
    const search_box = document.getElementById('search-input');
    const search_box_value = search_box.value;
    search_box.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search_box_value}`
    
     fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.meals))


}


const displaySearchResult = meals => {
    const search_result = document.getElementById('search_result');
    //search_result.innerHTML = '';
    search_result.textContent ='';

    
     meals.forEach(meal => {

           const div = document.createElement('div');
           div.classList.add('col');
           div.innerHTML = `
           <div onclick="mealDetiles('${meal.idMeal}')" class="card h-100">

            <img width="100px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            </div>
          </div>
           `
            search_result.appendChild(div);
     }) 
}

const mealDetiles = detiles => {
         const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detiles}`
         fetch(url)
         .then(res => res.json())
         .then(data => FinalMealDetiles(data.meals[0]))
}

const FinalMealDetiles = FinalDetiles   => {
          console.log(FinalDetiles)

          const mealsa_detlies = document.getElementById('meals-detlies');
          mealsa_detlies.textContent = '';
          const div = document.createElement('div');
          div.classList.add('card');
          div.innerHTML = `
          <img height="400px" src="${FinalDetiles.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${FinalDetiles.strMeal}</h5>
            <p class="card-text">${FinalDetiles.strInstructions.slice(0,100)}</p>
            <a href="${FinalDetiles.strYoutube}" class="btn btn-primary"  target="_blank" >Go On Video</a>
          </div>
        </div>  
          `
          mealsa_detlies .appendChild(div);
          
} 