var imageview = ["home1.jpeg", "home2.jpeg", "home3.jpeg", "home4.jpeg", "home5.jpeg"]

let i = 0;

let img = document.getElementById('shownumber')

// Next button
document.getElementsByClassName('viewbtn')[0].addEventListener('click', () => {
    
    i++;

    if (i >= imageview.length) {
        i = 0;  // loop back
    }

    img.src = `/image/${imageview[i]}`

})

// Prev button
document.getElementsByClassName('viewbtn')[1].addEventListener('click', () => {
   
    i--;

    if (i < 0) {
        i = imageview.length - 1; // last image pe jao
    }

    img.src = `/image/${imageview[i]}`

})

setInterval(() => {
    i++;

    if (i >= imageview.length) {
        i = 0;
    }

    img.src = `/image/${imageview[i]}`


}, 9000)

