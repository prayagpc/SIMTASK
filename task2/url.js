const urlForm = document.getElementById('urlForm');
const urlInput = document.getElementById('urlInput');
const shortURLInput = document.getElementById('shortURLInput');

urlForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = urlInput.value;
  shortenURL(url);
});

function shortenURL(url) {

  const accessToken = '99b31e6fc05d92e09df781033e6385edce5141e5';
  const endpoint = `https://api-ssl.bitly.com/v4/shorten`;

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      long_url: url
    })
  })
    .then(response => response.json())
    .then(data => {
      const shortenedURL = data.link;
      displayShortenedURL(shortenedURL);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function displayShortenedURL(shortenedURL) {
  shortURLInput.value = shortenedURL;
  document.getElementById('shortenedURL').style.display = 'block';
}



function copyToClipboard() {
  const shortURL = shortURLInput.value;

  navigator.clipboard
    .writeText(shortURL)
    .then(() => {
      const copyButton = document.querySelector('button');
      copyButton.innerText = 'Copied!';
      copyButton.classList.add('copy-success');
      copyMessage.style.display = 'block';

      setTimeout(() => {
        copyButton.innerText = 'Copy';
        copyButton.classList.remove('copy-success');
        copyMessage.style.display = 'none';
      }, 2500);
    })
    .catch((error) => {
      console.error('Copy failed:', error);
    });
}
