import references from "./references.js";

const {ColorRowEl,
    imageUploadInputEl,
    uploadButtonEl,
    previewImageEl,
    umbrellaImgEl,
    loaderIconEl} = references

//array of colors
const  arrOfColors= ['#2d2926','#707372','#003057','#d0006f','#00a3e0','#fed141','#e87722','#ef3340']

const createDivUtil = () => {
    const newDiv = document.createElement("div");
    newDiv.classList.add('color-div');   
     
    return function(color) {
        newDiv.style.backgroundColor = color;
        newDiv.setAttribute('id', color);
        ColorRowEl.appendChild(newDiv.cloneNode(true));
    };
  };


//Add event listeners
ColorRowEl.addEventListener('click', function(event) {
    if (event.target.matches('.color-div')) {
      const color = event.target.id;
      changeColor(color);
    }
  });


//mimic loading functionality
function loader(color){
    umbrellaImgEl.style.display='none'
    loaderIconEl.style.display='block'
    loaderIconEl.style.fill=color
    setTimeout(()=>{
        loaderIconEl.style.display='none'
        umbrellaImgEl.style.display='block'
    },3000)
}


//change colors
function changeColor(color) {
    loader(color)
    umbrellaImgEl.src=`../assets/${color.slice(1)}.png`
    uploadButtonEl.style.setProperty('--btn-color',color)
}


const createNewDiv = createDivUtil()
//create the multiple colors options
arrOfColors.forEach(color=>{
    createNewDiv(color)
})


//upload image
uploadButtonEl.addEventListener('click', function() {
    const file = imageUploadInputEl.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        const image = new Image();
        image.style.width='100%'
        image.src = reader.result;
        previewImageEl.innerHTML = '';
        loader(loaderIconEl.style.fill)
        previewImageEl.appendChild(image);
      };
      reader.readAsDataURL(file);
    } else {
        previewImageEl.innerHTML = 'No image selected';
    }
  });
