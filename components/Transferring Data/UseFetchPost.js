export default function UseFetchPost(url, data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(url, data)
    var raw = data;

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}