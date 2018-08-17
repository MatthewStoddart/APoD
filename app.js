// Apod url "https://api.nasa.gov/planetary/apod?api_key=Pf1VEatEAan8E7Z5KlsrXYRrqhYRlee1tkapvCzJ"

// Making a request to APoD API
const APoD = () => {
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=Pf1VEatEAan8E7Z5KlsrXYRrqhYRlee1tkapvCzJ"
    )
    .then(res => {
      // copyright
      const copyright = res.data.copyright;
      const copyrightOutput = `<p id="jsCopyright" >Author: ${copyright}</p>`;

      // date
      const date = res.data.date;
      const dateOutput = `<p id="jsDate" >Date: ${date}</p>`;

      // explanation
      const explanation = res.data.explanation;
      const explanationOutput = `<p>${explanation}</p>`;

      // HD Image
      const img = res.data.url;
      const imgOutput = `<img id="jsImage" src="${img}"></img>`;

      // title
      const title = res.data.title;
      const titleOutput = `<div id="jsTitle" >${title}</div>`;

      // output to app
      document.getElementById("title").innerHTML = titleOutput;
      document.getElementById("picture").innerHTML = imgOutput;
      document.getElementById("explanation").innerHTML = explanationOutput;
      document.getElementById("copyright").innerHTML = copyrightOutput;
      document.getElementById("date").innerHTML = dateOutput;
    })
    .catch(err => {
      console.log(err);
    });
};

APoD();
