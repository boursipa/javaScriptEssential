let content = document.getElementById("content");

function home() {
    let home_content = `
         <div class="home-container">
                  <h1>Welcome to Travel PAT</h1>
                  <p>TravelBloom is your ultimate travel guide, offering you the best destinations and experiences. Whether you're planning a trip or simply looking for inspiration, we've got you covered.</p>
                  <button class="book-now-button">BOOK NOW</button>
                  </div>
    `;
    content.innerHTML = home_content;
  }


  function aboutUs() {
    let aboutUs_content  = `
                  <div class="aboutUs-container">
                  <h1>ABOUT US</h1>
                  <p>We are a team of travel enthusiasts who believe that every destination is unique and deserves to be explored. Our mission is to provide you with the best travel experiences, whether you're planning a trip or simply looking for inspiration.</p>
                  <div class="contacts-container" id="contacts-container">
                   <h1>OUR TEAM</h1>
                   ${contact("John Doe", "I'm a travel enthusiast who loves exploring new places.", "Software Engineer")}
                   ${contact("Jane Smith", "I'm a software engineer who loves building innovative solutions.", "Project Manager")}
                   ${contact("Mike Johnson", "I'm a travel enthusiast who loves exploring new places.", "Marketing Specialist")}
                  </div>
                </div>
    `;
    content.innerHTML = aboutUs_content;
  }

  function contact(name, description, jobTitle ) {

    let contact_content = `
    <div class="contact-content">
    <p><b>${name}</b></p>
    <p>${description}</p>
    <p><button class="job-title-button">${jobTitle}</button></p>
    </div>
    `;

    return contact_content;
  }

  function contactUs() {
    let contactUs_content = `
                  <h1>Contact Us</h1>     `;


    content.innerHTML = contactUs_content;
  }


  home();