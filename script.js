const sliderImgs=document.querySelectorAll(".header-slider ul img");
const prev_btn=document.querySelector(".control-previous");
const next_btn=document.querySelector(".control-next");

let n=0;

const changeSlide=()=>{
    for (let i= 0; i < sliderImgs.length; i++) {
        sliderImgs[i].style.display="none";
    }
    sliderImgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click",(e)=>{
    if(n>0)
    {
        n--;
    }
    else{
        n=sliderImgs.length-1;
    }
    changeSlide();
})
next_btn.addEventListener("click",(e)=>{
    if(n<sliderImgs.length-1){
       n++;
    }
    else{
        n=0;
    }
    changeSlide();
})

const scrollContainer=document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+= evt.deltaY;
    })
}