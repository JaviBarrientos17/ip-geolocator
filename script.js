const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f69db03794mshd5fbf967a063e29p1912a3jsne8e99e1ff1b9",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
    options
  )
    .then((response) => response.json())
    .catch(err => console.error(err));
};

const $ = selector => document.querySelector(selector);

const form = $("#form");
const input = $("#input");
const submit = $("#submit");
const results = $("#results");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {value} = input;
    if(!value) return;

    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-busy', 'true');

    const ipInfo = fetchIpInfo(value);

    if (ipInfo) {
        // TODO - See why does not render the IP information
        results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    submit.removeAttribute('disabled', '');
    submit.removeAttribute('aria-busy', 'true');
})