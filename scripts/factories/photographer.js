function photographerFactory(data) {
    const { name, portrait, id,city,country,tagline,price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = `
                <article data-id="${id}">
                    <a href="../../photographer.html?id=${id}">
                        <img src="assets/photographers/${portrait}" alt="${name}">
                        <h2>${name}</h2>
                    </a>
                    <h3>${city} , ${country}</h3>
                    <p class="tag">${tagline}</p>
                    <p class="price">${price}€/jour</p>
                </article>`
        return (article);
    }
    return { name, picture, getUserCardDOM }
}


function photographerMediaFactory(data) {
    const { date, id, photographerId,image,likes,title,price } = data;

    const picture = `assets/photographers/${image}`;

    function getUserCardDOM() {
        // const article = `
        //         <article data-id="${id}">
        //             <a href="../../photographer.html?id=${id}">
        //                 <img src="assets/photographers/${portrait}" alt="${name}">
        //                 <h2>${name}</h2>
        //             </a>
        //             <h3>${city} , ${country}</h3>
        //             <p class="tag">${tagline}</p>
        //             <p class="price">${price}€/jour</p>
        //         </article>`
        return (article);
    }
    return { name, picture, getUserCardDOM }
}