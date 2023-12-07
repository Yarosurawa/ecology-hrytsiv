const slides = {
    num:11,
    s1: document.getElementById('slide1'),
    s2: document.getElementById('slide2'),
    s3: document.getElementById('slide3'),
    s4: document.getElementById('slide4'),
    s5: document.getElementById('slide5'),
    s6: document.getElementById('slide6'),
    s7: document.getElementById('slide7'),
    s8: document.getElementById('slide8'),
    s9: document.getElementById('slide9'),
    s10: document.getElementById('slide10'),
    s11: document.getElementById('slide11'),
}

const fullCont = document.getElementById("full-container");
fullCont.style.transform = `translateY(0)`
var currentSlide = 1;

for (let i = 1; i < slides.num + 1; i++) {
    let slide = slides["s"+i]
    slide.style.top = `${i*100 - 100}vh`
    slide.onclick =()=>{
        fullCont.style.transform = `translateY(-${i*100}vh)`
        currentSlide += 1
    }   
}

document.addEventListener("keydown", (e)=>{
    switch (e.keyCode) {
        case 40:
            fullCont.style.transform = `translateY(-${currentSlide*100}vh)`
            currentSlide += 1
            break;
        case 38:
            fullCont.style.transform = `translateY(-${currentSlide*100 - 200}vh)`
            currentSlide -= 1
            break;
    }
})