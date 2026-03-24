


fetch('https://opensheet.elk.sh/1w-Yn--2SpJBxab-Yotx2nNVB5yRsEpzkmzdcSLjKTns/Laptop')
    .then(res => res.json())
    .then(data => {
        document.getElementsByClassName('logo')[0].innerText = `${data[0].TopicsValues}`

        var servicsCardd = document.getElementById('servcis1')

        data.forEach(servicsCard => {

            var div = document.createElement('div')
            var image = document.createElement('img')
            var span = document.createElement('span')
            image.classList = "serrvicsimage"
            div.classList = "servicsdata"

            image.src = `./image/${servicsCard.imageServics}`
            span.innerText = `${servicsCard.Servics} - Price:${servicsCard.Price} Upto`

            div.appendChild(image)
            div.appendChild(span)
            servicsCardd.appendChild(div)
        });
        var slideimage = document.getElementById('sildeimg')
        var i = 1
        let columnLength = Object.keys(data[0]).length

        setInterval(imageview, 1500)

        function imageview() {
            if (i > columnLength) {
                i = 1
            }
            // console.log(i)
            slideimage.src = `./image/${data[i].image}`
            i++
        }

        document.getElementsByClassName('whatsappimg')[0].src = `./image/whatsapp.png`;
        // window.open(`https://wa.me/${data[3].TopicsValues}`, "_blank")


    })

fetch('https://opensheet.elk.sh/1w-Yn--2SpJBxab-Yotx2nNVB5yRsEpzkmzdcSLjKTns/itmes')
    .then(res => res.json())
    .then(data => {

        const laptop = data.filter(k=>  k.catagories == "laptop")
        var laptopview = document.getElementsByClassName('laptopview')[0]
        laptop.forEach((items,i) => {
            var div = document.createElement('div')
            var img = document.createElement('img')
            img.src = "./image/whatsapp.png"
            div.classList = "viewimg"
            div.innerHTML = "dfgrhytjhyjuyk"
            div.prepend(img)
            laptopview.appendChild(div)
            div.addEventListener('click',()=>{
                document.getElementsByClassName('viewitmes')[0].style.display = "block";
                document.getElementById('viewh1').textContent = `${items.itmesname}`
                document.getElementById('mrpview').textContent = `${items.mrp}`
                document.getElementById('paragraph').textContent = `${items.dercription}`
                
            })
        })
    })


fetch('https://opensheet.elk.sh/1w-Yn--2SpJBxab-Yotx2nNVB5yRsEpzkmzdcSLjKTns/itmes')
    .then(res => res.json())
    .then(data => {

        const laptop1 = data.filter(k=>  k.catagories == "other")
        console.log(laptop1)


        var laptopview = document.getElementsByClassName('laptopview')[1]
        laptop1.forEach((items,i) => {
            var div = document.createElement('div')
            var img = document.createElement('img')
            img.src = "./image/whatsapp.png"
            div.classList = "viewimg"
            div.innerHTML = "dfgrhytjhyjuyk"
            div.prepend(img)
            laptopview.appendChild(div)
            div.addEventListener('click',()=>{
                document.getElementsByClassName('viewitmes')[0].style.display = "block";
                document.getElementById('viewh1').textContent = `${items.itmesname}`
                document.getElementById('mrpview').textContent = `${items.mrp}`
                document.getElementById('paragraph').textContent = `${items.dercription}`
                
            })
        })
    })



