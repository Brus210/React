//async y await

//await solo se puede usar dentro de una funcion que tenga async
const getImagen = async() => {

    try {
        const apiKey = 'SN2utbYVB7Sd8S07DXjrVmdwnfmAUZQS';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await resp.json();

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
    } catch (error) {
        //manejo del error
        console.error(error);
    }

    

}

getImagen();


