<button type="submit" value="submit">
          Submit
      </button>
const btn = document.querySelector('button');

function sendData(data) {
  console.log('Sending data');

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];


  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
  }


  const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // Define what happens on successful data submission
  XHR.addEventListener('load', (event) => {
    alert('Yeah! Data sent and response loaded.');
  });

  // Define what happens in case of error
  XHR.addEventListener('error', (event) => {
    alert('Oops! Something went wrong.');
  });


  XHR.open('POST', 'https://example.com/cors.php');


  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  
  XHR.send(urlEncodedData);
}

btn.addEventListener('click', () => {
  sendData({ test: 'ok' });
})
