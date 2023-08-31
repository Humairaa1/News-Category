const handleCategory =async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    newsCategory = data.data.news_category;
    
    const tabContainer = document.getElementById('tab-container');

    newsCategory.slice(0,3).forEach( (category) => {
        // console.log(category);
        const div = document.createElement('div');

        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        `
        tabContainer.appendChild(div)
    });

    // console.log(newsCategory);
};

const handleLoadNews =async (categoryID) =>{
    // console.log(categoryID)
    const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${categoryID}`);
    const data = await res.json();
    // console.log(data.data)
    const cardData =data.data;
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent='';
    cardData.forEach(data =>{
        console.log(data);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl ">
            <figure><img src="${data?.image_url}" /></figure>

            <div class="card-body">

              <div class="flex">
                <h2 class="card-title mr-3">${data?.title.slice(0,40)}.....</h2>
              <button class="btn btn-secondary">${data?.rating?.badge}</button>
              </div>

              <p>${data?.details.slice(0,50)}......</p>

              <div class="card-actions justify-end">
                <button class="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        `
        cardContainer.appendChild(div);
    }); 
}
handleCategory();
handleLoadNews("01");