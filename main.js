let searchBox = document.getElementById('myInput');
let searchButton = document.getElementById('mySubmit');
let display = document.querySelector(".container");

searchButton.addEventListener('click', function(event){
display.innerHTML="";
var url =  "https://itunes.apple.com/search?term=";
var searchValue = searchBox.value;    
fetch(url+searchValue)
    .then(function (response){
      response.json().then(function(data){
          console.log(data);
          for (i in data.results){    
              var list = document.createElement("div");
              list.addEventListener('click',function(e){
                let x = document.getElementById("audio");
                let song=data.results[i].previewUrl;
                x.setAttribute("src",song); 
                x.play(); 
            });
            list.innerHTML = `
            <img src="${data.results[i].artworkUrl100}" alt="image">
            <p><span>Artist Name: ${data.results[i].artistName} </span></p>
            <p><span>Song Name: ${data.results[i].trackName}</span></p>`;
            display.appendChild(list);    
            }
        }
      )
    }
  );
});