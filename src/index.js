console.log('%c HI', 'color: firebrick')
//"dog-image-container"



document.addEventListener("DomContentLoaded", function () {
    fetchImages();
    fetchBreeds(); //for page loaded. 
    attachChangeListener();
});

let breeds; // something herer 1:10:00

function attachChangeListener(){
    const dropdown = document.querySelector("#breed-dropdown");
    dropdown.addEventListener("change", handleOnChange)
}

function handleOnChange(event){
    const letter = event.target.value

}

function fetchBreeds(){
    const breedUrl = "http://dog.ceo/api/breeds/list/all";
    fetch (breedUrl)
    .then((response) => response.json())
     .then (data => {
         breeds = data.message
        renderListItems(data.message)
     });

}

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" ;
    fetch (imgUrl)
    .then((response) => response.json()) // making a get requets from http to read data 
     .then (data => data.message.forEach(url => renderImage(url)));

    console.log("after fetch");


}

    function renderImage(url){
        const imag = document.createElement("img");
        img.src = url;
        img.className = "dog-image";
        img.height = 150;
        document.querySelector("#dog-image-container").append(img);
    }

// iterate over array of image urls
// for each url create an <imag/> elemtn 
// set the source attribute of the img = url
// append the imag to the page

/* CHALLENGE 2 */

function renderListItem(breedName){
    const li = document.createElement("li")
    li.innertText = breedName
    document.querySelector("#dog-breeds").append(li);
}



// other one 
function renderListItems(breeds){
    for (const breed in breeds){
        renderListItem(breed);
        for(const subBreed of breeds[breed]){
            const fullBreedName = `${subBreed} ${breed}`;
            renderListItem (fullBreedName);
        }
    }
}