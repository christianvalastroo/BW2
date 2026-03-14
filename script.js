window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    if (!href || href.startsWith("#") || this.target === "_blank") {
      return;
    }

    e.preventDefault();

    document.body.classList.remove("page-loaded");
    document.body.classList.add("page-exit");

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});


let formObj=document.querySelector(".hero form")
let locationInput=document.getElementById("location")
let searchBtn=document.querySelector(".airbnb-search button")
const noSearchModalObj = document.getElementById("noSearchModal")
const noFoundModalObj = document.getElementById("noFoundModal")
const layer=document.querySelector("#layer")

function locationSearch (userString) {

  let LowCaseString=userString.toLowerCase()
  
  if(LowCaseString.includes("genova")){
    window.location.href="indexAirbnb2.html"
  }else if (userString===""){
    layer.classList.add("show")

    noSearchModalObj.classList.add("showModal")

    const closeBtn=document.querySelector("#noSearchCloseBtnX")
    closeBtn.addEventListener("click", ()=>{
      layer.classList.remove("show")
      noSearchModalObj.classList.remove("showModal")
    })

  }else{
    layer.classList.add("show")

    noFoundModalObj.classList.add("showModal")

    const closeBtn=document.querySelector("#noFoundCloseBtnX")
    closeBtn.addEventListener("click", ()=>{
      layer.classList.remove("show")
      noFoundModalObj.classList.remove("showModal")
    })
  }

}

searchBtn.addEventListener("click", ()=>{
  locationSearch(locationInput.value)
})

/*------------*/
