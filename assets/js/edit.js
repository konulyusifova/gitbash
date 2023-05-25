var photos = document.querySelector(".photos")
fetch('https://6469da9c03bb12ac2093f7d4.mockapi.io/Gym')
  .then(res => res.json())
  .then(json => {
    console.log(json);
    json.forEach(el => {
      photos.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4 mt-4">
        <div class="card">
        <div class="api-img">
            <img src="${el.image}" class="card-img-top">
            </div>
             <div class="img-text">
                <span>Course Available</span>
               </div>
            <div class="card-body js-btwn">
              <h5 class="card-title"><b>${el.name}</b></h5>
              <p class="card-text"><b>${el.price}</b></p>
            </div>
          </div>
        `
    });
  })