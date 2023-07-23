  //BlACK&WHITE
  const toggle = document.getElementById("drkbtn");
  toggle.addEventListener('click', function(){
      this.classList.toggle('bi-moon');
    // colorchange
        toggle.onclick = function(){
            this.classList.toggle("dark-btn-on");
            document.body.classList.toggle("dark-theme");
        }
  });
  // Filter Image
  const filterItem = document.querySelector(".items");
  const filterImg = document.querySelectorAll(".image");
  window.onload = () =>{
    filterItem.onclick = (selectedItem)=>{
      if(selectedItem.target.classList.contains("item")){
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName = selectedItem.target.getAttribute("data-name");
        filterImg.forEach((image)=>{
         let filterImages = image.getAttribute("data-name");
         if((filterImages == filterName) || filterName == "all"){
          image.classList.remove("hide");
          image.classList.add("show");
         }else{
          image.classList.add("hide");
          image.classList.remove("show");
         }
        });l
      }
    }
    for(let index = 0; index < filterImg.length; index++){
      filterImg[index].setAttribute("onclick", "preview(this)");
    }
  }
  // Selection
  const previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  catagoryName = previewBox.querySelector(".title p"),
  CloseIcon = previewBox.querySelector(".icon");
  shadow = document.querySelector(".shadow");
  // fullscreen
  function preview(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    catagoryName.textContent = selectedImgCategory;
    previewImg.src = selectedPrevImg;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    CloseIcon.onclick = ()=>{
      previewBox.classList.remove("show");
      shadow.classList.remove("show");
      document.querySelector("body").style.overflow = "scroll";
    }
  }