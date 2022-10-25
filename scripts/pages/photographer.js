
function openSelectMenu() {
    const cursor = document.querySelector('#cursor');
    const selector = document.querySelector('#selectlist');
    selector.classList.toggle('active')
    cursor.classList.toggle('rotate')
}

selectFilter();

function selectFilter() {
    const list = document.querySelectorAll('#selectlist p');
    const cursorI = '<i id="cursor" class="fas fa-angle-down"></i>'
    
    list.forEach((el,index)=>{

        if(index === 0) {
            el.classList.remove('border')
            el.innerHTML += cursorI;
        }else {
            el.classList.add('border')
        }
        
        el.onclick = function (e){
            
            let target = e.target;
            let elements = document.querySelector(`#selectlist`).children
            if(target !== elements[0]) {
             
                elements[0]
 
            }
            
        }
    })
}








async function fetchData() {
    let res = await fetch("../../data/photographers.json")
    return await res.json();
}

function getId(){
        let link = new URL(window.location.href);
        let search_params = new URLSearchParams(link.search);
        if(!search_params.has('id'))  return console.error('ne posséde pas de parametre');

    return search_params.get('id');
}


async function getMedia(id) {
    let data = await fetchData().then(async (e)=> e.media);

    const photographerMedia = data.filter(function (el) {
        return el.photographerId.toString() === getId();
    });

    const media =
        [{
            "photographerId" : data.photographerId,
            "id": data.id,
            "date" : data.date,
            "image" : data.image,
            "likes" : data.likes,
            "price" : data.price,
            "title" : data.title
        }]

    return ({media: [...photographerMedia]})
}

const photographerHeader = `
         <section class="text-content">
             <h1>Mimi Keel</h1>
             <h2>London, Uk</h2>
             <p>Voir le beau dans le quotidien</p>
        </section>
       <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
       <div class="Image" aria-label=""></div>
`

