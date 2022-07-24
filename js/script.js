const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f69db03794mshd5fbf967a063e29p1912a3jsne8e99e1ff1b9",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchIpInfo = async (ip) => {
  try {
    const response = await fetch(
      `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`,
      options
    );
    return await response.json();
  } catch (err) {
    return console.error(err);
  }
};

const $ = (selector) => document.querySelector(selector);

const form = $("#form");
const input = $("#input");
const submit = $("#submit");
const results = $("#results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { value } = input;
  if (!value) return;
  submit.setAttribute("disabled", "");
  submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);
  if (ipInfo) {
    results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  submit.removeAttribute("disabled", "");
  submit.removeAttribute("aria-busy", "true");
});

function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}