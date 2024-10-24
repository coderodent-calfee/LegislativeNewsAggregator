const SERVER_PORT      = 3035;

export function makeGetRequest(path : string, params: URLSearchParams ){
    const requestOptions = {
        method: 'GET'
    };
//    const getUrl = `http://localhost:${SERVER_PORT}/${path}`;
    
//    const url = getUrl + ( params.size > 0)?`?${params.toString()}`:'';
    const url = `http://localhost:${SERVER_PORT}/${path}${( params.size > 0)?`?${params.toString()}`:''}`;
    console.log(`fetch url : ${url}`);
    fetch(url, requestOptions)
        .then((response) => {
            const data = response.json();
            return data;
        }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
}