function openMenu() {
    document.getElementById("sidebar").style.left = "0";
}

function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";
}

document.getElementById('close2').addEventListener('click',()=>{
    document.getElementsByClassName('viewitmes')[0].style.display = "none"
})