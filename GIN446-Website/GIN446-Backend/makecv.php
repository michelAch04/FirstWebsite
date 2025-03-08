<?php
ob_start();
$servername = "sql205.infinityfree.com"; // Replace with your actual host
$username = "if0_37683606";
$password = "CJ8XU5NsJZOT";
$dbname = "if0_37683606_CV";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//to put in database
    // Capture and sanitize form data
    $firstname = $conn->real_escape_string($_POST['fname']);
    $lastname = $conn->real_escape_string($_POST['lname']);
    $prof = $conn->real_escape_string($_POST['profession']);
    $maj = $conn->real_escape_string($_POST['major']);
    $mail = $conn->real_escape_string($_POST['email']);
    $phonenb = $conn->real_escape_string($_POST['tel']);
    $lin = $conn->real_escape_string($_POST['linkedin']);
    $add = $conn->real_escape_string($_POST['address']);
    $summ = $conn->real_escape_string($_POST['sum']);

    // Convert dynamic fields to JSON
    $exp = json_encode($_POST['experience'] ?? []);
    $ed = json_encode($_POST['education'] ?? []);
    $sk = json_encode($_POST['skills'] ?? []);
    $lang = json_encode($_POST['languages'] ?? []);
    $cert = json_encode($_POST['certifications'] ?? []);

    // Insert data into USER_CV_INFO
    $sql = "INSERT INTO USER_CV_INFO (
                    fname, lname, profession, major, email, phone, linkedin, address, summary, 
                    experiences, education, skills, languages, certifications
                ) VALUES (
                    '$firstname', '$lastname', '$prof', '$maj', '$mail', '$phonenb', '$lin', '$add', '$summ', 
                    '$exp', '$ed', '$sk', '$lang', '$cert'
                )";

    if ($conn->query($sql) === TRUE) {
        $debug = "CV information saved successfully!";
    } else {
        $debug = "Error: " . $sql . "<br>" . $conn->error;
    }

    

//to display CV
    // --- Collect Header Information ---
    $fname = htmlspecialchars($_POST['fname'] ?? '');
    $lname = htmlspecialchars($_POST['lname'] ?? '');
    $profession = htmlspecialchars($_POST['profession'] ?? '');
    $major = htmlspecialchars($_POST['major'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $phone = htmlspecialchars($_POST['tel'] ?? '');
    $linkedin = htmlspecialchars($_POST['linkedin'] ?? '');
    $address = htmlspecialchars($_POST['address'] ?? '');

    // --- Generate the Header Section (Full width) ---
    $headerHTML = "<header>";
    $headerHTML .= "<h1>$fname $lname</h1>";
    $headerHTML .= "<p>$profession | $major</p>";
    $headerHTML .= "<p>Email: <a href='mailto:$email'>$email</a> | Phone: $phone</p>";
    $headerHTML .= "</header>";

    // --- Professional Summary ---
    $summary = htmlspecialchars($_POST['sum'] ?? '');
    $summaryHTML = "<section id='summary' class='fade-in'>";
    $summaryHTML .= "<h2>Professional Summary</h2>";
    $summaryHTML .= "<p>$summary</p>";
    $summaryHTML .= "</section>";

    // --- Work Experience Section ---
    $experienceHTML = "<section id='experience' class='fade-in'>";
    $experienceHTML .= "<h2>Work Experience</h2>";

    $expCount = 1;
    while (isset($_POST["job{$expCount}title"])) {
        $jobTitle = htmlspecialchars($_POST["job{$expCount}title"]);
        $company = htmlspecialchars($_POST["company{$expCount}"]);
        $jobStart = htmlspecialchars($_POST["job{$expCount}-sDate"]);
        $jobEnd = htmlspecialchars($_POST["job{$expCount}-eDate"]);

        $experienceHTML .= "<div class='job'>";
        $experienceHTML .= "<h3>$jobTitle</h3>";
        $experienceHTML .= "<p>$company | $jobStart - $jobEnd</p>";

        // --- Job descriptions ---
        $experienceHTML .= "<ul>";
        $descCount = 1;
        while (isset($_POST["job{$expCount}desc{$descCount}"])) {
            $jobDesc = htmlspecialchars($_POST["job{$expCount}desc{$descCount}"]);
            $experienceHTML .= "<li>$jobDesc</li>";
            $descCount++;
        }
        $experienceHTML .= "</ul>";
        $experienceHTML .= "</div>";

        $expCount++;
    }
    $experienceHTML .= "</section>";

    // --- Education Section ---
    $educationHTML = "<section id='education' class='fade-in'>";
    $educationHTML .= "<h2>Education</h2>";

    $edCount = 1;
    while (isset($_POST["degree{$edCount}"])) {
        $degree = htmlspecialchars($_POST["degree{$edCount}"]);
        $institution = htmlspecialchars($_POST["institution{$edCount}"]);
        $edStart = htmlspecialchars($_POST["ed{$edCount}-sDate"]);
        $edEnd = htmlspecialchars($_POST["ed{$edCount}-eDate"]);

        $educationHTML .= "<div class='education-card'>";
        $educationHTML .= "<h3><i class='icon'>🎓</i> $degree</h3>";
        $educationHTML .= "<p>$institution</p>";
        $educationHTML .= "<p>Date: $edStart - $edEnd</p>";
        $educationHTML .= "</div>";

        $edCount++;
    }
    $educationHTML .= "</section>";

    // --- Skills Section (Sidebar) ---
    $skillsHTML = "<div class='sidebar-section'>";
    $skillsHTML .= "<h2>Skills</h2>";

    $skillCount = 1;
    while (isset($_POST["skill{$skillCount}"])) {
        $skill = htmlspecialchars($_POST["skill{$skillCount}"]);
        $skillRange = htmlspecialchars($_POST["skill{$skillCount}Range"]);

        $skillsHTML .= "<div class='skill'>";
        $skillsHTML .= "<span>$skill</span>";
        $skillsHTML .= "<div class='progress-bar'>";
        $skillsHTML .= "<div class='progress' style='--progress-width: {$skillRange}%;'></div>";
        $skillsHTML .= "</div>";
        $skillsHTML .= "</div>";

        $skillCount++;
    }
    $skillsHTML .= "</div>";

    // --- Languages Section (Sidebar) ---
    $languagesHTML = "<div class='sidebar-section'>";
    $languagesHTML .= "<h2>Languages</h2>";

    $langCount = 1;
    while (isset($_POST["lang{$langCount}"])) {
        $language = htmlspecialchars($_POST["lang{$langCount}"]);
        $proficiency = htmlspecialchars($_POST["lang{$langCount}levels"]);

        $languagesHTML .= "<div class='language'>";
        $languagesHTML .= "<span>$language</span>";
        $languagesHTML .= "<div class='stars'>";

        // --- Convert proficiency to stars ---
        $stars = ["novice" => 1, "elementary" => 2, "intermediate" => 3, "advanced" => 4, "fluent" => 5];
        $filledStars = $stars[$proficiency];

        for ($i = 1; $i <= 5; $i++) {
            if ($i <= $filledStars) {
                $languagesHTML .= "<span class='star filled'>&#9733;</span>";
            } else {
                $languagesHTML .= "<span class='star'>&#9734;</span>";
            }
        }
        $languagesHTML .= "</div>";
        $languagesHTML .= "</div>";

        $langCount++;
    }
    $languagesHTML .= "</div>";

    // --- Certifications Section ---
    $certificationsHTML = "<section id='certifications' class='fade-in'>";
    $certificationsHTML .= "<h2>Certifications</h2>";

    $certCount = 1;
    while (isset($_POST["cert{$certCount}name"])) {
        $certName = htmlspecialchars($_POST["cert{$certCount}name"]);
        $certIssuer = htmlspecialchars($_POST["cert{$certCount}issuer"]);
        $certDate = htmlspecialchars($_POST["cert{$certCount}date"]);

        $certificationsHTML .= "<div class='certification-card'>";
        $certificationsHTML .= "<h3><i class='icon'>📜</i>$certName</h3>";
        $certificationsHTML .= "<p>Issued by: $certIssuer</p>";
        $certificationsHTML .= "<p>Date: $certDate</p>";
        $certificationsHTML .= "</div>";
        $certCount++;
    }
    $certificationsHTML .= "</section>";

    // --- Concatenate Content and Sidebar into the Final HTML ---
    $generatedHTML = "
        <main>
            $headerHTML
            <div class='container'>
                <div class='content'>
                    $summaryHTML
                    $experienceHTML
                    $educationHTML
                    $certificationsHTML
                </div>
                <div class='sidebar'>
                    $skillsHTML
                    $languagesHTML
                </div>
            </div>
        </main>";

    // --- Return the Response in JSON Format ---
    $response = array(
        'status' => 'success',
        'html' => $generatedHTML
    );

    header('Content-Type: application/json');
    echo json_encode($response);
    ob_end_flush(); // End buffering here for invalid request
    exit;
}

$conn->close();
