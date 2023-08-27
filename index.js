let searchInput = document.querySelector("#search-input")
let inputBox = document.querySelector(".input-box")
let cross = document.querySelector("#cross")
let search = document.querySelector("#search")

searchInput.addEventListener("click", function () {
        search.style.display = 'none';
        inputBox.style.display ='block'
        cross.style.display = 'block';
})
cross.addEventListener("click",function(){
        inputBox.style.display ='none'
        search.style.display = 'block';
        cross.style.display = 'none';
})
