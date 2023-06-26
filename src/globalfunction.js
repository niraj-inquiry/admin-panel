import axios from "axios";

// export const baseurl="http://127.0.0.1:8000/"
 export const baseurl = "https://superactive-api.onrender.com/";
//  export const baseurl="http://10.5.50.213:8000/"
export const isEmpty = (value) => {
  if (value === undefined || value === null || value?.length === 0) {
    return true
  }
  else {
    return false
  }
}

export const fetchImage = async (imageUrl) => {

  const res = await fetch(imageUrl);
  const imageBlob = await res.blob();
  const imageObjectURL = URL.createObjectURL(imageBlob);
  return (imageObjectURL);
};

export const downloadUploadCV = async (docurl) => {
  let fileURL = `${baseurl}${docurl}`
  console.log("files", fileURL)
  let alink = document.createElement('a');
  alink.href = fileURL;
  alink.download = fileURL;
  alink.click();
}


export const API=axios.create({
  baseURL: baseurl,
});      


export const axiosInstance = axios.create({
  baseURL: baseurl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  function (error) {
    console.log("error", error)
    return Promise.reject(error);
  }
);


export const convertfirstletter = (string) => {

  let str = string?.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter?.toUpperCase();
  });
  return str
}