import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;

  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="position-right">
            <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    // for every element .picker do something
    elm.addEventListener("change", function(e) {
      // add event listener on change, gets back the event as param

      const attribute = e.target.getAttribute("for"); // set attribute to be the value of the 'for' attribute of each .picker lement, eg. "lastname", "instagram", "linkedin", etc

      let values = {}; // new empty object
      console.log("this.value", this.value);
      console.log("this", this);
      console.log("e", e);
      console.log("elm", elm.value);

      values[attribute] = //create a key in values object with each attribute for's value
        this.value == "" || this.value == "null" //if value is empty or null - return null for that key
          ? null
          : this.value == "true" //if value is true - assign true to key
          ? true
          : this.value == "false" //if value is false - assign false to key
          ? false
          : this.value; //in all other cases assign the value

      render(Object.assign(window.variables, values));
    });
  });
};
