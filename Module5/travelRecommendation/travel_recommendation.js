let content = document.getElementById("content");

function home() {
    let home_content = `
         <div class="home-container">
                  <h1>EXPLORE DREAM DESTINATION</h1>
                  <p>Travel Pat is your ultimate travel guide, offering you the best destinations and experiences. Whether you're planning a trip or simply looking for inspiration, we've got you covered.</p>
                  <button class="button">BOOK NOW</button>
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
    <p class="job-title">${jobTitle}</p>
    </div>
    `;

    return contact_content;
  }

  function contactUs() {
    let contactUs_content = `
    <div class="contactUs-container">
                  <h1 style="margin-top:100px">Contact Us</h1>
                  <div style="width:300px; height:300px; margin-left:50px">
            <p>Name</p>
            <input class="radius5" style="width: 100%;" type="text" placeholder="Enter your name">
            <p>Email</p>
            <input class="radius5" style="width: 100%;" type="email" placeholder="Enter your email">
            <p>Message</p>
            <input class="radius5" style="width: 100%; height: 100px;text-align: start;" type="text" placeholder="Enter a message">
            <button class="button" class="radius" style="width: 100%;margin-top:20px;">Submit</button>
            </div>
        </div> 
        </div>    `;


    content.innerHTML = contactUs_content;
  }


  home();