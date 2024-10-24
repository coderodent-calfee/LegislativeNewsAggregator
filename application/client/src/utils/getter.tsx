const SERVER_PORT      = 3035;

export function makeGetRequest(path : string, params: URLSearchParams ){
    const requestOptions = {
        method: 'GET'
    };

    const getUrl = `http://localhost:${SERVER_PORT}/${path}`;
    let url = getUrl; // + '?' + (params).toString();

    fetch(url, requestOptions)
        .then((response) => {
            return response.json();
        }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });

}