document.addEventListener('DOMContentLoaded', function () {

    //TO HANDLE ADDDESC BUTTONS
    function handleAddDescButton(addDescBtn, descriptionDiv, index) {
        let inputCount = 1; // Start count from 1
        addDescBtn.addEventListener('click', function (event) {
            event.preventDefault();
            inputCount++;

            // Create a wrapper div for the input and remove button
            const inputWrapper = document.createElement('div');
            inputWrapper.style.display = 'flex';
            inputWrapper.style.alignItems = 'center';
            inputWrapper.style.marginBottom = '10px'; // Spacing between inputs

            // Create new input element
            const inp = document.createElement('input');
            inp.type = 'text';
            inp.classList.add('jobdesc');
            inp.name = `job${index + 1}desc` + inputCount;
            inp.id = `job${index + 1}desc` + inputCount; // Set the name dynamically
            inp.style.flexGrow = '1';  // Make the input take up most of the space

            // Create a remove button for each input
            const removeDescBtn = document.createElement('button');
            removeDescBtn.type = 'button';
            removeDescBtn.classList.add('removeOption-btn');
            removeDescBtn.innerHTML = '✖';
            removeDescBtn.style.marginLeft = '5px'; // Add space between input and button

            // Remove the input when the remove button is clicked
            removeDescBtn.addEventListener('click', function () {
                inputWrapper.remove();
                inputCount--;
                updateInputNames(descriptionDiv);
            });

            // Append the new input and remove button to the wrapper
            inputWrapper.appendChild(inp);
            inputWrapper.appendChild(removeDescBtn);

            // Append the wrapper to the job description div
            descriptionDiv.appendChild(inputWrapper);
        });
    }

    // Apply the function to existing addDesc buttons
    const addDescButtons = document.querySelectorAll('.addDesc-btn');
    const descriptionDivs = document.querySelectorAll('.jobdescription');

    addDescButtons.forEach((addDescBtn, index) => {
        const descriptionDiv = descriptionDivs[index];
        handleAddDescButton(addDescBtn, descriptionDiv, index);
    });

    // Function to update the names of the input fields after removing
    function updateInputNames(descriptionDiv) {
        const inputs = descriptionDiv.querySelectorAll('input.jobdesc');
        inputs.forEach((input, index) => {
            input.name = `job${count + 1}desc${index + 1}`; // Update names to be jobdesc2, jobdesc3, etc.
        });
    }

    function initializeNewAddDescButton(button, descriptionDiv, index) {
        handleAddDescButton(button, descriptionDiv, index);
    }









    //TO ADD AN EXPERIENCE DIV
    let count = 1;

    const addButton = document.getElementById('addExp');
    const cvBody = document.getElementById('cvbody');

    // Create the remove button but don't add it to the DOM yet
    const removeButton = document.createElement('button');
    removeButton.id = 'removeExp';
    removeButton.type = 'button';
    removeButton.innerHTML = '- Remove last experience';
    removeButton.style.display = 'none'; // Hide initially
    removeButton.addEventListener('click', function () {
        const experiences = cvBody.querySelectorAll('.experience');
        if (experiences.length > 1) {
            // Remove the last experience entry
            experiences[experiences.length - 1].remove();
            count--; // Decrement the count
            if (cvBody.querySelectorAll('.experience').length <= 1) {
                removeButton.style.display = 'none'; // Hide remove button if only one entry left
            }
        }
    });

    // Insert the remove button into the DOM right before the add button
    cvBody.insertBefore(removeButton, addButton);

    document.getElementById('addExp').addEventListener('click', function () {
        count++;
        const expDiv = document.createElement('div');
        expDiv.classList.add('experience');
        expDiv.innerHTML = `<h4>Experience ${count}: </h4> 
        <div>
                    <label for="job${count}title">Job title:</label>
                    <input type="text" id="job${count}title" name="job${count}title">
                </div>

                <div>
                    <label for="company${count}">Company name: </label>
                    <input type="text" id="company${count}" name="company${count}">
                </div>

                <div>
                    <label for="job${count}-sDate">From: </label>
                    <input type="month" id="job${count}-sDate" name="job${count}-sDate">

                    <label for="job${count}-eDate">To: </label>
                    <input type="month" id="job${count}-eDate" name="job${count}-eDate">
                </div>

                <div class="jobdescription">
                    <label for="job${count}desc1">Job description: </label>
                    <input type="text" class="job${count}desc" id="job${count}desc1" name="job${count}desc1">
                    <button class="addDesc-btn" type="button"><b>+</b></button>
                </div>`;

        cvBody.insertBefore(expDiv, removeButton);

        // Initialize the addDesc button for the newly added experience
        const newAddDescBtn = expDiv.querySelector('.addDesc-btn');
        const newDescriptionDiv = expDiv.querySelector('.jobdescription');
        initializeNewAddDescButton(newAddDescBtn, newDescriptionDiv, count - 1);

        // Show the remove button after adding a new experience
        removeButton.style.display = 'block';
    })










    //TO ADD AN EDUCATION DIV
    let edCount = 1
    const addEdButton = document.getElementById('addEd');

    // Create the remove button but don't add it to the DOM yet
    const removeEdButton = document.createElement('button');
    removeEdButton.id = 'removeEd';
    removeEdButton.type = 'button';
    removeEdButton.innerHTML = '- Remove last education';
    removeEdButton.style.display = 'none'; // Hide initially
    removeEdButton.addEventListener('click', function () {
        const educations = cvBody.querySelectorAll('.education');
        if (educations.length > 1) {
            // Remove the last experience entry
            educations[educations.length - 1].remove();
            edCount--; // Decrement the count
            if (cvBody.querySelectorAll('.education').length <= 1) {
                removeEdButton.style.display = 'none'; // Hide remove button if only one entry left
            }
        }
    });

    // Insert the remove button into the DOM right before the add button
    cvBody.insertBefore(removeEdButton, addEdButton);

    document.getElementById('addEd').addEventListener('click', function () {
        edCount++;
        const edDiv = document.createElement('div');
        edDiv.classList.add('education');
        edDiv.innerHTML = `<h4>Degree ${edCount}: </h4>              
                    <div>
                        <label for="degree${edCount}">Degree name: </label>
                        <input type="text" name="degree${edCount}" id="degree${edCount}">
                    </div>
    
                    <div>
                        <label for="institution${edCount}">Institution: </label>
                        <input type="text" name="institution${edCount}" id="institution${edCount}">
                    </div>
    
                    <div>
                        <label for="ed${edCount}-sDate">From: </label>
                        <input type="month" id="ed${edCount}-sDate" name="ed${count}-sDate">
    
                        <label for="ed${edCount}-eDate">To: </label>
                        <input type="month" id="ed${edCount}-eDate" name="ed${count}-eDate">
                    </div>`;

        document.querySelector('.education-container').appendChild(edDiv);
        // Show the remove button after adding a new experience
        removeEdButton.style.display = 'block';
    })









    //TO ADD A SKILL DIV
    let skillCount = 1;
    const addSkillButton = document.getElementById('addSkill');

    const removeSkillButton = document.createElement('button');
    removeSkillButton.id = 'removeSkill';
    removeSkillButton.type = 'button';
    removeSkillButton.innerHTML = '- Remove last skill';
    removeSkillButton.style.display = 'none'; // Hide initially
    removeSkillButton.addEventListener('click', function () {
        const skills = cvBody.querySelectorAll('.skill');
        if (skills.length > 1) {
            // Remove the last experience entry
            skills[skills.length - 1].remove();
            skillCount--; // Decrement the count
            if (cvBody.querySelectorAll('.skill').length <= 1) {
                removeSkillButton.style.display = 'none'; // Hide remove button if only one entry left
            }
        }
    });
    cvBody.insertBefore(removeSkillButton, addSkillButton);

    document.getElementById('addSkill').addEventListener('click', function () {
        skillCount++;
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.innerHTML = `<h4>Skill ${skillCount}</h4>  
        <div>
                    <label for="skill${skillCount}">Skill name: </label>
                    <input type="text" id="skill${skillCount}" name="skill${skillCount}">
                </div>

                <div>
                    <label for="skill${skillCount}Range">Skill range: </label>
                    <input type="range" id="skill${skillCount}Range" name="skill${skillCount}Range" class="skill-range">
                </div>`;

        document.querySelector('.skill-container').appendChild(skillDiv);
        removeSkillButton.style.display = 'block';
        initializeRangeInputs();
    })









    //for the range input
    function updateRangeBackground(rangeInput) {
        const min = rangeInput.min || 0;
        const max = rangeInput.max || 100;
        const value = rangeInput.value;

        // Calculate the background fill percentage
        const percentage = ((value - min) / (max - min)) * 100;
        rangeInput.style.background = `linear-gradient(to right, #de3315 ${percentage}%, #ddd ${percentage}%)`;
    }
    // Function to initialize range inputs
    function initializeRangeInputs() {
        const rangeInputs = document.querySelectorAll('.skill-range');
        rangeInputs.forEach((rangeInput) => {
            rangeInput.addEventListener('input', () => updateRangeBackground(rangeInput));
            updateRangeBackground(rangeInput); // Initialize on page load
        });
    }
    // Initialize existing range inputs on load
    initializeRangeInputs();









    //TO ADD A LANGUAGE DIV
    let langCount = 1;
    const addLangButton = document.getElementById('addLang');

    const removeLangButton = document.createElement('button');
    removeLangButton.id = 'removeLang';
    removeLangButton.type = 'button';
    removeLangButton.innerHTML = '- Remove last language';
    removeLangButton.style.display = 'none'; // Hide initially
    removeLangButton.addEventListener('click', function () {
        const langs = cvBody.querySelectorAll('.lang');
        if (langs.length > 1) {
            langs[langs.length - 1].remove();
            langCount--;
            if (cvBody.querySelectorAll('.lang').length <= 1) {
                removeLangButton.style.display = 'none'; // Hide remove button if only one entry left
            }
        }
    });

    cvBody.insertBefore(removeLangButton, addLangButton);

    document.getElementById('addLang').addEventListener('click', function () {
        langCount++;
        const langDiv = document.createElement('div');
        langDiv.classList.add('lang');
        langDiv.innerHTML = `<h4>Language ${langCount}:</h4>
                <div>
                    <label for="lang${langCount}">Name: </label>
                    <input type="text" id="lang${langCount}" name="lang${langCount}">
                </div>

                <div>
                    <label for="lang${langCount}levels">Proficiency: </label>
                    <select name="lang${langCount}levels" id="lang${langCount}levels">
                        <option value="novice">Novice</option>
                        <option value="elementary">Elementary</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="fluent">Fluent/Native</option>
                    </select>
                </div>`;

        document.querySelector('.lang-container').appendChild(langDiv);
        removeLangButton.style.display = 'block';
    })










    //TO ADD A CERTIFICATE DIV
    let certCount = 1;
    const addCertButton = document.getElementById('addCert');

    const removeCertButton = document.createElement('button');
    removeCertButton.id = 'removeCert';
    removeCertButton.type = 'button';
    removeCertButton.innerHTML = '- Remove last certification';
    removeCertButton.style.display = 'none'; // Hide initially
    removeCertButton.addEventListener('click', function () {
        const certs = cvBody.querySelectorAll('.cert');
        if (certs.length > 1) {
            certs[certs.length - 1].remove();
            certCount--;
            if (cvBody.querySelectorAll('.cert').length <= 1) {
                removeCertButton.style.display = 'none'; // Hide remove button if only one entry left
            }
        }
    });

    cvBody.insertBefore(removeCertButton, addCertButton);

    document.getElementById('addCert').addEventListener('click', function () {
        certCount++;
        const certDiv = document.createElement('div');
        certDiv.classList.add('cert');
        certDiv.innerHTML = `<h4>Certification ${certCount}:</h4>
                    <div>
                        <label for="cert${certCount}name">Name: </label>
                        <input type="text" id="cert${certCount}name" name="cert${certCount}name">
                    </div>

                    <div>
                        <label for="cert${certCount}issuer">Issued by: </label>
                        <input type="text" id="cert${certCount}issuer" name="cert${certCount}issuer">
                    </div>

                    <div>
                        <label for="cert${certCount}date">Date: </label>
                        <input type="month" id="cert${certCount}date" name="cert${certCount}date">
                    </div>`;

        document.querySelector('.cert-container').appendChild(certDiv);
        removeCertButton.style.display = 'block';
    })
});





//FOR THE FORM SUBMISSION
document.getElementById('cvform').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission

    // Gather all form data
    const formData = new FormData();

    // Add all form inputs to formData, including dynamically added ones
    const inputs = document.querySelectorAll('#cvform input, #cvform select, #cvform textarea');
    inputs.forEach(input => {
        formData.append(input.name, input.value);
    });

    fetch('/GIN446-Website/GIN446-Backend/makecv.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text()) // Always read as text
    .then(text => {
        try {
            const result = JSON.parse(text); // Parse manually
            console.log('Parsed JSON:', result);
    
            if (result.status === 'success') {
                // Handle success
                const newWindow = window.open('', '_blank');
                // Build the full HTML with a link to the external CSS file
                const completeHTML = `
            <html>
                <head>
                    <title>Your CV</title>
                    <link rel="stylesheet" href="/GIN446-Website/GIN446-Frontend/styles/cvschedulestyles/schedulestyle.css">
                    <link rel="stylesheet" href="/GIN446-Website/GIN446-Frontend/styles/cvschedulestyles/generatedcvstyle.css">
                </head>
                <body>
                    ${result.html}
                    <button id="downloadBtn" onclick="downloadPDF()">Download as PDF</button>
                </body>

                <!-- Include jsPDF library -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
                <!-- Include html2canvas library for capturing HTML content -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

                    <script>
                    async function downloadPDF() {
                    const { jsPDF } = window.jspdf;
                    const pdf = new jsPDF('p', 'mm', 'a4'); // Set PDF to A4 size

                     // Capture the CV content from the page
                     const cvContent = document.querySelector('main');

                     // Use html2canvas to render the CV content as a canvas
                     await html2canvas(cvContent, {
                            scale: 2,               // Higher scale for better resolution
                            useCORS: true,          // Use CORS for accurate rendering of styles
                            allowTaint: true,       // Allow tainted images (for external images)
                            windowWidth: cvContent.scrollWidth, // Set the width to match the element width
                     }).then((canvas) => {
                           const imgData = canvas.toDataURL('image/png');

                            // Calculate image dimensions to fit the PDF exactly
                            const pdfWidth = pdf.internal.pageSize.getWidth();
                            const pdfHeight = pdf.internal.pageSize.getHeight();
                            const imgWidth = pdfWidth;
                            const imgHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

                            let position = 0; // Start position

                            // Add the image of the CV content to the PDF
                            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

                            // If content overflows, add new pages
                            let heightLeft = imgHeight;
                            while (heightLeft > pdfHeight) {
                                 position = heightLeft - imgHeight;
                                 pdf.addPage();
                                 pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                                 heightLeft -= pdfHeight;
                            }
                        });

                    // Save the PDF
                    pdf.save("CV.pdf");
                }
                </script>
            </html>`;
                newWindow.document.open();
                newWindow.document.write(completeHTML);
                newWindow.document.close();
            } else {
                alert("Error: " + result.message);
            }
        } catch (err) {
            console.error('Failed to parse JSON:', text, err);
            throw new Error('Invalid JSON response');
        }
    })
    .catch(error => {
        console.error("Form submission error:", error);
        alert("Form submission failed!");
    });
    

});



document.getElementById("download-btn").addEventListener("click", function () {
    // Select all section elements
    var sections = document.querySelectorAll('section');

    // Temporarily disable animations for all sections
    sections.forEach(function (section) {
        section.classList.add('no-animation');
    });

    var element = document.getElementById("cv");

    var opt = {
        margin: 0.5,
        filename: 'file.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, scrollY: 0, logging: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().set(opt).from(element).save().then(() => {
        // Re-enable animations for sections after the PDF is generated
        sections.forEach(function (section) {
            section.classList.remove('no-animation');
        });
    });
});



