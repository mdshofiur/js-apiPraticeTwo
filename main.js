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
     meals.forEach(meal => {
           console.log(meal)

           const div = document.createElement('div');
           div.classList.add('col');
           div.innerHTML = `
           <div class="card h-100">
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