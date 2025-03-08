document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const style = document.createElement('style');

    function adjustNavbarStyle() {
        // Clear any existing navbar content to ensure no duplicate elements or styles
        navbar.innerHTML = '';

        if (window.innerWidth < 768) {
            // Apply mobile styles
            style.textContent = `
            .navbar {
                background-color: #333;
                padding: 5px 10px;
                position: sticky;
                top: 0;
                z-index: 1000;
                height: 100%;
            }

            .navbar-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
            }

            .navbar-logo {
                color: #f5f5f5;
                text-decoration: none;
                font-size: 20px;
                padding: 5px;
                transition: transform 0.3 ease, width 0.3s ease, height 0.3s ease;
                display: inline-block;
                position: relative;
            }

            #nav-button a::after {
               content: "";
               position: absolute;
               width: 100%;
               height: 3.5px;
               background-color: #ff6347;
               left: 0;
               bottom: -27%; /* Position it slightly below the button text */
               transform: scaleX(0);
               transform-origin: right;
               transition: transform 0.3s ease-in-out;
            }

            #nav-button a:hover::after {
               transform: scaleX(1);
               transform-origin: left;
            }

            .menu-toggle {
                display: none;
                background-color: rgb(0, 0, 0, 0);
                border: none;
                color: #f5f5f5;
                padding: 8px 12px;
                font-size: 20px;
                cursor: pointer;
                position: relative;
                transition: transform 0.3s ease;
            }

            .menu-toggle::after {
               content: "";
               position: absolute;
               width: 100%;
               height: 3.5px;
               background-color: #ff6347;
               left: 0;
               bottom: -16.5%; /* Position it slightly below the button text */
               transform: scaleX(0);
               transform-origin: right;
               transition: transform 0.3s ease-in-out;
            }

            .menu-toggle:hover::after {
               transform: scaleX(1);
               transform-origin: left;
            }

            .menu-content {
                position: fixed;
                top: 0;
                right: -300px;
                height: 100%;
                width: 300px;
                background-color: #333;
                box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
                overflow-y: auto;
                transition: right 0.3s ease;
                z-index: 999;
                font-weight: bold;
            }

            .menu-content.show {
                right: 0;
            }

            .close-button {
                background: none;
                border: none;
                color: #fff;
                font-size: 24px;
                padding: 10px;
                cursor: pointer;
                position: absolute;
                top: 10px;
                right: 10px;
            }

            .navbar-menu {
                list-style: none;
                padding: 60px 20px 20px;
                margin: 0;
                display: flex;
                flex-direction: column;
            }

            .navbar-menu li {
                margin: 20px 0;
            }

            .navbar-menu #navback {
                position: fixed;
                bottom: 10%;
            }

            .navbar-menu a {
                    color: #f5f5f5;
                    text-decoration: none;
                    font-size: 18px;
                    display: block;
                    transition: transform 0.3s ease;
                    position: relative;
            }

            .navbar-menu a::after {
                    content: "";
                    position: absolute;
                    width: 95%;
                    height: 3px;
                    background-color: #ff6347;
                    left: 0;
                    bottom: -1%;
                    transform: scaleX(0);
                    transition: transform 0.3s ease-in-out;
                    transform-origin: right;
            }

            .navbar-menu a:hover::after {
                transform: scaleX(1);
                transform-origin: left;
            }

            .dropdown {
                position: relative;
            }

            .dropdown-button {
                background: none;
                border: none;
                color: #f5f5f5;
                cursor: pointer;
                font-size: 20px;
                text-align: left;
                width: 100%;
                transition: transform 0.2s ease, font-size 0.2s ease;
                font-weight: bold;
                margin-bottom: 30px;
                padding-inline-start: 0px;
                padding-inline-end: 0px;
                padding-block-end: 0px;
                padding-block-start: 0px;
            }

            .dropdown .dropdown-button:hover {
                transform: scale(1.1); /* Slightly enlarge the button on hover */
                font-size: 20px; /* Increase font size on hover for emphasis */
            }

            .dropdown:hover .dropdown-content {
                display: block;
            }

            .dropdown:hover .dropdown-button{
                margin-bottom: 0;
            }

            .dropdown-content {
                display: none;
                padding: 10px;
                margin-left: 5px;
                transition: font-size 0.3s ease;
            }

            .dropdown-content a {
                color: #f5f5f5;
                text-decoration: none;
                display: block;
                font-size: 17px; /* Default font size */
                padding: 3px;
                padding-right: 0px;
                transition: font-size 0.3s ease;
                transition: background-color 0.3s ease;
            }
            .dropdown-content a{
                margin-bottom: 5px;
            }

            .dropdown-content a:last-child{
                margin-bottom: -5px !important;
            }

            .dropdown-button:hover + .dropdown-content a {
                font-size: 16px; /* Make the content text smaller when the button is hovered */
            }

            #nav-button{
               border: none;
               background: none;
               font-family: system-ui;
               font-weight: bold;
               cursor: pointer;
            }

            @media (max-width: 11768px) {
                .menu-toggle {
                    display: block;
                }

                .menu-content {
                    width: 250px;
                }

                .navbar-menu {
                    display: block;
                }

                .navbar-menu li {
                    margin: 10px 0;
                    text-align: left;
                }
            }

            @media (max-width: 600px) {
                .menu-content {
                    right: -300px;
                    width: 200px;
                }
            }
            `;

            // Populate mobile navbar HTML structure
            navbar.innerHTML = `
                <div class="navbar-container">
                    <button type="button" id="nav-button" class="navbar-logo"><a href="/GIN446-Website/GIN446-Frontend/home.html" class="navbar-logo">Home</a></button>
                    <button class="menu-toggle" id="menu-button">☰</button>
                </div>
                <div class="menu-content" id="menu-content">
                    <button class="close-button" id="close-button">✖</button>
                    <ul class="navbar-menu">
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-button">Research</button>
                                <div class="dropdown-content">
                                    <a href="/GIN446-Website/GIN446-Frontend/webresearch/history.html">The WWW</a>
                                    <a href="/GIN446-Website/GIN446-Frontend/caresearch/cssres.html">CSS & Arabic</a>
                                    <a href="/GIN446-Website/GIN446-Frontend/moreresearch/research.html">Class Research</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-button">CV & Schedule</button>
                                <div class="dropdown-content">
                                    <a href="/GIN446-Website/GIN446-Frontend/cvschedule/cv.html">Professional CV</a>
                                    <a href="/GIN446-Website/GIN446-Frontend/cvschedule/schedule.html">My Schedule</a>
                                    <a href="/GIN446-Website/GIN446-Frontend/cvschedule/makecv.html">Make your CV</a>
                                </div>
                            </div>
                        </li>
                        <li><button class="dropdown-button"><a href="/GIN446-Website/GIN446-Frontend/jsevents/jsevents.html">JavaScript Events</a></button></li>
                        <li><button class="dropdown-button"><a href="/GIN446-Website/GIN446-Frontend/game/game.html">Wordle Game</a></button></li>
                                                <li><button class="dropdown-button"><a href="https://xosquared-c1ab2.firebaseapp.com/" target="_blank">XO²</a></button></li>
                        <li id="navback"><a href="/GIN446-Website/GIN446-Frontend/home.html">Back to Home</a></li>
                    </ul>
                </div>
            `;

            // Set up event listeners for mobile menu
            const menuButton = document.getElementById("menu-button");
            const closeButton = document.getElementById("close-button");

            menuButton?.addEventListener("click", function () {
                document.getElementById("menu-content").classList.add("show");
            });

            closeButton?.addEventListener("click", function () {
                document.getElementById("menu-content").classList.remove("show");
            });

        } else {
            // Apply desktop styles
            style.textContent = `
.navbar {
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar ul {
  list-style-type: none;
  background-color: #333;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  /* overflow la tkoun l nav bar bl 3ared*/
}

.navbar button {
  background: none;
  /* Removes background */
  border: none;
  /* Removes border */
  color: inherit;
  /* Inherits text color */
  font: inherit;
  /* Inherits font properties */
  padding: 0;
  /* Removes padding */
  cursor: pointer;
}

.navbar a,
.navbar button {
  color: white;
  text-decoration: none;
  padding: 15px;
  display: block;
  text-align: center;
}

.navbar li {
  float: left;
}

.dropdown {
  display: inline-block;
}

.dropdown button {
  color: white;
  cursor: pointer;
}

.dropdown a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
}

.dropdown .content {
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 50px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.651);
}

.dropdown:hover .content {
  display: block;
}


.navbar li a,
.navbar button {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease;
  position: relative;
}

/* Cool underline hover effect */
.navbar li a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #ff6347;
  left: 0;
  bottom: -1%;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
  transform-origin: right;
}

.navbar li a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
        `;

            // Populate desktop navbar HTML structure
            // Clear the navbar content first
            navbar.innerHTML = '';

            // Create the unordered list (ul)
            const ul = document.createElement('ul');

            // Create the Home link
            const homeLi = document.createElement('li');
            const homeLink = document.createElement('a');
            homeLink.href = '/GIN446-Website/GIN446-Frontend/home.html';
            homeLink.textContent = 'Home';
            homeLi.appendChild(homeLink);
            ul.appendChild(homeLi);

            // Create the Research dropdown
            const researchLi = document.createElement('li');
            const researchDiv = document.createElement('div');
            researchDiv.classList.add('dropdown');

            const researchButton = document.createElement('button');
            researchButton.textContent = 'Research';
            researchDiv.appendChild(researchButton);

            const researchContent = document.createElement('div');
            researchContent.classList.add('content');

            const researchLink1 = document.createElement('a');
            researchLink1.href = '/GIN446-Website/GIN446-Frontend/webresearch/history.html';
            researchLink1.textContent = 'World Wide Web';
            researchContent.appendChild(researchLink1);

            const researchLink2 = document.createElement('a');
            researchLink2.href = '/GIN446-Website/GIN446-Frontend/caresearch/cssres.html';
            researchLink2.textContent = 'CSS & Arabic';
            researchContent.appendChild(researchLink2);

            const researchLink3 = document.createElement('a');
            researchLink3.href = '/GIN446-Website/GIN446-Frontend/moreresearch/research.html';
            researchLink3.textContent = 'Class Researches';
            researchContent.appendChild(researchLink3);

            researchDiv.appendChild(researchContent);
            researchLi.appendChild(researchDiv);
            ul.appendChild(researchLi);

            // Create the CV & Schedule dropdown
            const cvsLi = document.createElement('li');
            const cvsDiv = document.createElement('div');
            cvsDiv.classList.add('dropdown');

            const cvsButton = document.createElement('button');
            cvsButton.textContent = 'CV & Schedule';
            cvsDiv.appendChild(cvsButton);

            const cvsContent = document.createElement('div');
            cvsContent.classList.add('content');

            const cvsLink1 = document.createElement('a');
            cvsLink1.href = '/GIN446-Website/GIN446-Frontend/cvschedule/cv.html';
            cvsLink1.textContent = 'Professional CV';
            cvsContent.appendChild(cvsLink1);

            const cvsLink2 = document.createElement('a');
            cvsLink2.href = '/GIN446-Website/GIN446-Frontend/cvschedule/schedule.html';
            cvsLink2.textContent = 'My Schedule';
            cvsContent.appendChild(cvsLink2);

            const cvsLink3 = document.createElement('a');
            cvsLink3.href = '/GIN446-Website/GIN446-Frontend/cvschedule/makecv.html';
            cvsLink3.textContent = 'Make your own CV';
            cvsContent.appendChild(cvsLink3);

            cvsDiv.appendChild(cvsContent);
            cvsLi.appendChild(cvsDiv);
            ul.appendChild(cvsLi);

            // Create the JS Events link
            const jsEventsLi = document.createElement('li');
            const jsEventsLink = document.createElement('a');
            jsEventsLink.href = '/GIN446-Website/GIN446-Frontend/jsevents/jsevents.html';
            jsEventsLink.textContent = 'JS Events';
            jsEventsLi.appendChild(jsEventsLink);
            ul.appendChild(jsEventsLi);

            // Create the Wordle Game link
            const wordleLi = document.createElement('li');
            const wordleLink = document.createElement('a');
            wordleLink.href = '/GIN446-Website/GIN446-Frontend/game/game.html';
            wordleLink.textContent = 'Wordle Game';
            wordleLi.appendChild(wordleLink);
            ul.appendChild(wordleLi);

            // Create the Wordle Game link
            const xoLi = document.createElement('li');
            const xoLink = document.createElement('a');
            xoLink.href = 'https://xosquared-c1ab2.firebaseapp.com/';
            xoLink.target = '_blank'
            xoLink.textContent = 'XO²';
            xoLi.appendChild(xoLink);
            ul.appendChild(xoLi);

            // Append the entire ul to the navbar
            navbar.appendChild(ul);
        }
        navbar.appendChild(style);
    }

    // Initial call to set the navbar style
    adjustNavbarStyle();

    // Listen for resize events and debounce calls
    window.addEventListener('resize', adjustNavbarStyle);








    //FOR THE FOOTER
    const footer = document.getElementById('footer');
    const footerstyle = document.createElement('style');

    footer.innerHTML = `        <p><strong>DISCLAIMER:</strong> This website is part of a university project and is intended for educational
            purposes only. The content and design do not represent a professional website, and any information presented
            here is part of a mock project created for academic evaluation</p>
        <p>Michel Achkouti - GIN446 - Holy Spirit University of Kaslik</p>`;

    footerstyle.textContent = `footer {
  background-color: #333;
  color: #f5f5f5;
  text-align: center;
  padding: 2rem 0.5rem;
  font-size: 0.9rem;
  margin-top: 20px;
}

footer p {
  margin: 2px 0;
}

footer strong{
  color: #ff6347;
}

footer p:not(:first-child){
  margin-top: 20px;
  font-weight: 600;
}
`;
    footer.appendChild(footerstyle);
});
