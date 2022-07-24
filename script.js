const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f69db03794mshd5fbf967a063e29p1912a3jsne8e99e1ff1b9",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  fetch(
    "https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
