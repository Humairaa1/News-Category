const handleCategory =async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    console.log(data.data.news_category);
}
handleCategory();