const BASEURL = 'https://arsene.azurewebsites.net/User';
export const apiGetUsers = () => {
    return  fetch(BASEURL)
        .then(res => res.json())
        .then(
            result => result,
            (error) => console.error(error)
        )
};
export const apiAddUser = (user) => {
    const request = {
        method:'POST',
        body: JSON.stringify(user),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    };
    return fetch(BASEURL, request).then(res => res.json())
        .then(
            result => result,
            (error) => console.error(error)
        )
};
