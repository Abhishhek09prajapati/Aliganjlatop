


fetch('https://opensheet.elk.sh/1w-Yn--2SpJBxab-Yotx2nNVB5yRsEpzkmzdcSLjKTns/Laptop')
    .then(res => res.json())
    .then(data => {
        document.getElementsByClassName('logo')[0].innerText = `${data[0].TopicsValues}`

        var servicsCardd = document.getElementById('servcis1')

        var mainlength = data.filter(e => e.imageServics).length

        for (let i = 0; i < mainlength; i++) {
            var div = document.createElement('div')
            var image = document.createElement('img')
            var span = document.createElement('span')
            image.classList = "serrvicsimage"
            div.classList = "servicsdata"

            image.src = `./image/${data[i].image}`
            span.innerText = `${data[i].Servics} - Price:${data[i].Price} Upto`

            div.appendChild(image)
            div.appendChild(span)
            servicsCardd.appendChild(div)
        }

        var slideimage = document.getElementById('sildeimg')
        var i = 0
        let columnLength = data.filter(e=>e.imageServics).length

        setInterval(imageview, 1500)

        function imageview() {
            if (i > columnLength-1) {
                i = 1
            }
            // console.log(i)
            slideimage.src = `./image/${data[i].imageServics}`
            i++
        }

        document.getElementsByClassName('whatsappimg')[0].src = `./image/whatsapp.png`;
        // window.open(`https://wa.me/${data[3].TopicsValues}`, "_blank")


    })

fetch('https://opensheet.elk.sh/1w-Yn--2SpJBxab-Yotx2nNVB5yRsEpzkmzdcSLjKTns/itmes')
    .then(res => res.json())
    .then(data => {

        const laptop = data.filter(k => k.catagories == "laptop")
        var laptopview = document.getElementsByClassName('laptopview')[0]
        laptop.forEach((items, i) => {
            var div = document.createElement('div')
            var img = document.createElement('img')
            var span = document.createElement('span')
            span.innerText = `${items.itmesname}`
            span.classList = "spanview"
            img.classList = "viewlaptop"



            img.src = `/image/${items.itmesimage1}`
            div.classList = "viewimg"

            div.prepend(img)
            div.appendChild(span)
            laptopview.appendChild(div)




            div.addEventListener('click', () => {
                document.getElementsByClassName('viewitmes')[0].style.display = "block";
                document.getElementById('viewh1').textContent = `${items.itmesname}`
                document.getElementById('mrpview').textContent = `${items.mrp} `
                document.getElementById('paragraph').textContent = `${items.dercription}`
                document.getElementById('mainrate').textContent = ` ${items.rate}`
                document.getElementById("viewimg").src = `/image/${items.itmesimage1}`

            })
        })
    })


fetch('https://opensheet.elk.sh/1w-Yn--2SpJBxab-Yotx2nNVB5yRsEpzkmzdcSLjKTns/itmes')
    .then(res => res.json())
    .then(data => {

        const laptop1 = data.filter(k => k.catagories == "other")
        // console.log(laptop1)


        var laptopview = document.getElementsByClassName('laptopview')[1]
        laptop1.forEach((items, i) => {
            var div = document.createElement('div')
            var img = document.createElement('img')

            var span = document.createElement('span')
            span.innerText = `${items.itmesname}`
            span.classList = "spanview"





            img.src = `/image/${items.itmesimage1}`
            div.classList = "viewimg"

            div.prepend(img)
            div.appendChild(span)
            laptopview.appendChild(div)

            
            div.addEventListener('click', () => {
                document.getElementsByClassName('viewitmes')[0].style.display = "block";
                document.getElementById('viewh1').textContent = `${items.itmesname}`
                document.getElementById('mrpview').textContent = `${items.mrp}`
                document.getElementById('paragraph').textContent = `${items.dercription}`
                document.getElementById('mainrate').textContent = `${items.rate}`
                document.getElementById("viewimg").src = `/image/${items.itmesimage1}`

            })
        })
    })



