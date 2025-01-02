function home() {
    let contenu = `
                  <h1>Welcome to Travel PAT</h1>
                  <p>TravelBloom is your ultimate travel guide, offering you the best destinations and experiences. Whether you're planning a trip or simply looking for inspiration, we've got you covered.</p>
                  <button class="book-now-button">BOOK NOW</button>
    `;
    document.getElementById("content").innerHTML = contenu;
  }


  function aboutUs() {
    let contenu = `
                  <h1>ABOUT US</h1>
                  
    `;
    document.getElementById("content").innerHTML = contenu;
  }

  function contactUs() {
    let contenu = `
                  <h1>Contact Us</h1>     `;    
    document.getElementById("content").innerHTML = contenu;
  }


  home();