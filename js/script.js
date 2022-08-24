// filter array 
let filterarray =[];

// gallery card array
let galleryarray = [
    {
        id: 1,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "tiles ceramics papa",
        badges: "<span class=\"badge text-bg-warning\">Tiles</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 2,
        title: "Renovation Shower",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "shower showers",
        badges: "<span class=\"badge text-bg-primary\">Showers</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 3,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "bathroom",
        badges: "<span class=\"badge text-bg-dark\">Bathroom</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 4,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "garden",
        badges: "<span class=\"badge text-bg-success\">Garden</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 5,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "tiles",
        badges: "<span class=\"badge text-bg-warning\">Tiles</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 6,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "shower showers",
        badges: "<span class=\"badge text-bg-primary\">Showers</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 7,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "kitchen",
        badges: "<span class=\"badge text-bg-danger\">Kitchen</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 8,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "dinning room",
        badges: "<span class=\"badge text-bg-secondary\">Dinning Room</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 9,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "garden",
        badges: "<span class=\"badge text-bg-success\">Garden</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 10,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "bathroom",
        badges: "<span class=\"badge text-bg-dark\">Bathroom</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 11,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "kitchen",
        badges: "<span class=\"badge text-bg-danger\">Kitchen</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    },
    {
        id: 12,
        title: "Restaurant Renovation",
        img: "./assets/gallery/tiles/tiles_1/tiles_1_1.jpg",
        search: "dinning room",
        badges: "<span class=\"badge text-bg-secondary\">Dinning Room</span>",
        desc: "Nulla vel accumsan diam. Aenean ultricies sem ut tellus aliquet dictum. Nunc non tincidunt lacus. Sed augue velit.",
        modal: "#tiles-1"
    }
];

showgallery(galleryarray);

// create function to show card
function showgallery(curarra){
    document.getElementById("card").innerText = "";
    for(var i=0;i<curarra.length;i++){
        document.getElementById("card").innerHTML += `
            <div class="col-12 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img class="card-img-top gallery-front" src="${curarra[i].img}" alt="">
                    <div class="card-body">
                        <div class="badges text-end">
                            ${curarra[i].badges}
                        </div>
                        <h5 class="card-title">${curarra[i].title}</h5>
                        <p class="card-text text-justified">${curarra[i].desc}</p>
                        <a href="#" class="btn chechi-button" data-bs-toggle="modal" data-bs-target="${curarra[i].modal}">See more</a>
                    </div>
                </div>
            </div>
        `
    }
 }

 // For Live Searching Product

document.getElementById("search").addEventListener("keyup",function(){
    let text = document.getElementById("search").value;

    filterarray= galleryarray.filter(function(a){
        if(a.search.includes(text)){
            return a.search;
        }
   });
   
   if(this.value==""){
       showgallery(galleryarray);
   } else {
       if(filterarray == ""){
           document.getElementById("card").innerHTML = `
                <h3 class=\"text-danger mt-5 text-center\" id=\"not-found\">Not Found </h3>
                `
       } else {
           showgallery(filterarray);
       }
   }
});