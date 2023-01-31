function govern() 
{
    let mass = document.getElementById("govern")
    mass.innerHTML =
    `<div class="governMenu">
        <input id='big' type='number'><p onclick={govern1()}>< Масса<<p><input id='small' type='number'>
    </div>`
}
function govern1() 
{
    var big = document.getElementById("big").value
    var small = document.getElementById("small").value
    if (big <= 0 || small >= 1000 || big > small) 
    {
        alert("Введены неверные границы")
    } else 
    {
        try 
        {
            var el = document.getElementById("first")
            el.remove()
            file(big, small)
            let mass = document.getElementById("govern")
            mass.innerHTML =
            `<div class="footer_green"></div>
            <div class="footer_text_center">${big} < МАССА < ${small}</div>
            <div class="footer_red"></div>
            <div class="footer_text_center">
                <div>МАССА < ${big}</div>
                <div>МАССА > ${small}</div>
            </div>`
        } catch 
        {
            alert("Незагружены данные!!!")
        }
    }
}

function file(x = 200, y = 800) 
{
    let file = document.getElementById("file").files[0]
    let read = new FileReader()
    let d1 = document.createElement("div")
    d1.className = "main_abc_container"
    d1.id = "first"
    read.readAsText(file)
    read.onload = () =>
    {
        let res = JSON.parse(read.result)
        res.map((a, i) => 
        {
        let color = "container_border container_border_red"
        if ((x < a.volume) & (a.volume < y)) 
        {
            color = "container_border container_border_green"
        }
        let d2 = document.createElement("div")
        d2.className = "abc"
        d2.id = "second"
        d2.innerHTML =
        `<div class="abc__text abc__text-top">
            <div class="abc__text_mass">Масса</div>
            <div class=\"abc__text_num\">${a.volume}</div>
        </div>
        <div class="container">
            <div class=\"${color}\"></div>
            <div class="container_rez rezervuar">
                <div class = \"rezervuar_block\" style=\"height:${a.volume / 10}%;\"></div>
                <div class="rezervuar_line_position">
                    <div class="rezervuar_line"></div>
                    <div class="rezervuar_line"></div>
                    <div class="rezervuar_line"></div>
                </div>
        </div>
        <div class="container_border"></div>
        <div class="abc__text">
            <div class=\"abc__percent-square percent-square\">${a.volume / 10}%</div>
            <div class=\"abc__bottom-text\"> Уровень <br />керосина в резервуаре №${i + 1}</div>
        </div>`
        d1.append(d2)
        })
        mainContainer.append(d1)
    }
    read.onerror = () => 
    {
        console.log(read.error)
    }
}