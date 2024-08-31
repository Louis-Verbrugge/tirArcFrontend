
const pathApiAxios = (url) => {
    console.log("oooooooooooooooooofffffffffffffffffffffffffffffffffffffffffff")
    console.log(process.env.REACT_APP_API_URL + url);
    return process.env.REACT_APP_API_URL + url;
}

export default pathApiAxios;