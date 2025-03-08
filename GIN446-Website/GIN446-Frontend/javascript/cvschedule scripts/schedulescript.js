document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        {
            courseCode: 'GIN446',
            courseName: 'Web Programming',
            days: 'TR',
            startTime: '17:00',
            endTime: '18:15',
            instructor: 'Ing. Pascal Damien',
            background: 'linear-gradient(rgb(205, 24, 24), rgb(223, 65, 65), rgb(205, 24, 24))'
        },
        {
            courseCode: 'GIN321',
            courseName: 'Algorithmics',
            days: 'TR',
            startTime: '15:30',
            endTime: '16:45',
            instructor: 'Dr. Joseph Zalaket',
            background: 'linear-gradient(rgb(35, 117, 37), rgb(74, 142, 60), rgb(35, 115, 46))'
        },
        {
            courseCode: 'GEN301',
            courseName: 'Law for Engineers',
            days: 'TR',
            startTime: '12:30',
            endTime: '13:20',
            instructor: 'Mr. Fayçal Makki',
            background: 'linear-gradient(rgb(191, 121, 41), rgb(208, 139, 75), rgb(196, 110, 35))'
        },
        {
            courseCode: 'GEN250',
            courseName: 'Modern Physics',
            days: 'F',
            startTime: '08:00',
            endTime: '10:45',
            instructor: 'Mr. Chadi Massoud',
            background: 'linear-gradient(rgb(35, 113, 117), rgb(60, 137, 142), rgb(35, 112, 115))'
        },
        {
            courseCode: 'GEL445',
            courseName: 'Microprocessors',
            days: 'F',
            startTime: '12:30',
            endTime: '15:15',
            instructor: 'Dr. Hayssam Serhan',
            background: 'linear-gradient(rgb(109, 35, 117), rgb(138, 60, 142), rgb(115, 35, 112))'
        }
    ];

    generateSchedule(courses);
    generateSlides(courses);
});

function generateSlides(courses) {
    courses.forEach(course => {
        const div = document.createElement('div');
        const slider = document.getElementById('slider');

        div.classList.add('slide');
        div.id = course.courseCode;

        div.innerHTML = `
        <h2>${course.courseCode} ${course.courseName}</h2>
        <hr>
        <p>Meeting Times: ${course.days} ${course.startTime} - ${course.endTime}</p>
        <p>Instructor: ${course.instructor}</p>
        `
        slider.appendChild(div);
    });
}

function generateSchedule(courses) {
    const dayColumns = { "M": [], "T": [], "W": [], "R": [], "F": [] };
    let maxEndTimes = { "M": '08:00', "T": '08:00', "W": '08:00', "R": '08:00', "F": '08:00' };

    courses.forEach(course => {
        const courseDays = course.days.match(/(M|T|W|R|F)/g);
        courseDays.forEach(day => {
            dayColumns[day].push(course);
            if (course.endTime > maxEndTimes[day]) {
                maxEndTimes[day] = course.endTime;
            }
        });
    });

    for (const day in dayColumns) {
        dayColumns[day].sort((a, b) => {
            return a.startTime.localeCompare(b.startTime);
        });
    }

    for (const day in dayColumns) {
        let lastEndTime = '08:00';
        dayColumns[day].forEach(course => {
            const courseDuration = calculateDuration(course.startTime, course.endTime);
            const gapDuration = calculateDuration(lastEndTime, course.startTime);

            if (gapDuration > 0) {
                createGap(day, gapDuration);
            }
            if (courseDuration <= 75) {
                createCourseBar(day, course, courseDuration, course.startTime);
            }
            else {
                const defaultGap = 15;
                let gaps = (courseDuration / 75) - 1;
                const duration = courseDuration - (((courseDuration / 75) - 1) * defaultGap);
                const nbBars = duration / 75;
                for (let i = 0; i < nbBars; i++) {
                    createCourseBar(day, course, duration / nbBars, addMinutesToTime(course.startTime, 90 * i));
                }
            }
            lastEndTime = course.endTime;
        });

        adjustColumnHeight(day, maxEndTimes[day]);
    }
}

function calculateDuration(startTime, endTime) {
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    const totalStartMinutes = startHour * 60 + startMinute;
    const totalEndMinutes = endHour * 60 + endMinute;
    return (totalEndMinutes - totalStartMinutes);
}

function createCourseBar(day, course, duration, startTime) {
    const dayColumn = document.querySelector(`.day-column-${day}`);
    const courseBar = document.createElement('div');
    courseBar.classList.add('course-bar');
    courseBar.style.height = `${duration}px`;
    const topOffset = calculateTopOffset(startTime);
    courseBar.style.top = `${topOffset}px`;
    courseBar.style.background = course.background;
    courseBar.innerHTML = `${course.courseCode}<br>${startTime} - ${addMinutesToTime(startTime, duration)}`;
    courseBar.addEventListener('mouseenter', (event) => showCourseDetails(event, course));
    courseBar.addEventListener('mouseleave', hideCourseDetails);
    courseBar.addEventListener('click', (event) => goToSlider(event, course.courseCode));
    dayColumn.appendChild(courseBar);
}

function goToSlider(event, courseCode) {
    window.location.href = `#slider`;
    const code = `${courseCode}`;
    const courseSlide = document.getElementById(code);
    const slides = document.querySelectorAll('.slide');
    let found = false;
    slides.forEach((slide, index) => {
        if (courseSlide == slide) {
            found = true;
            updateSlider(index);
        }
        else {
            if (found == false) {
                updateSlider(index);
            }
        }
    });
}

function createGap(day, gapDuration) {
    const dayColumn = document.querySelector(`.day-column-${day}`);
    const gap = document.createElement('div');
    gap.classList.add('gap');
    gap.style.height = `${gapDuration}px`;
    dayColumn.appendChild(gap);
}

function adjustColumnHeight(day, maxEndTime) {
    const dayColumn = document.querySelector(`.day-column-${day}`);
    const totalEndMinutes = calculateTotalMinutes(maxEndTime);
    let newHeight = (totalEndMinutes - (7.6 * 60));
    while (!Number.isInteger(newHeight / 15)) {
        newHeight = newHeight - 1;
    }
    dayColumn.style.height = `${newHeight}px`;
}

function calculateTopOffset(startTime) {
    const totalStartMinutes = calculateTotalMinutes(startTime);
    return (totalStartMinutes - (8 * 60));
}

function calculateTotalMinutes(time) {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
}

// Show course details in the details box near the hovered course
function showCourseDetails(event, course) {
    const detailsBox = document.getElementById('courseDetails');
    detailsBox.innerHTML = `
        <strong>${course.courseCode} - ${course.courseName}</strong><br>
        Instructor: ${course.instructor}<br>
        Time: ${course.startTime} - ${course.endTime}
    `;

    const barRect = event.target.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    // Calculate positioning relative to the viewport
    const topPosition = barRect.top - bodyRect.top;  // Adjusted based on body offset
    const leftPosition = barRect.left - barRect.width * 1.3;  // A bit of padding from the bar

    detailsBox.style.left = `${leftPosition}px`;  // Position to the right of the course bar
    detailsBox.style.top = `${topPosition}px`;    // Align vertically with the course bar
    detailsBox.classList.add('show');
}

// Hide course details when not hovering
function hideCourseDetails() {
    const detailsBox = document.getElementById('courseDetails');
    detailsBox.classList.remove('show');
}

const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateSliderPosition() {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
function updateSlider(index) {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateSliderPosition();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
}

// Update the slider position on window resize
window.addEventListener('resize', updateSliderPosition);

//useful fct
function addMinutesToTime(time, minutesToAdd) {
    // Create a Date object with the current date and the given time
    let [hours, minutes] = time.split(':').map(Number); // Split time into hours and minutes
    let date = new Date(); // Create a new date (current date)

    // Set the time for the Date object
    date.setHours(hours);
    date.setMinutes(minutes);

    // Add the minutes to the time
    date.setMinutes(date.getMinutes() + minutesToAdd);

    // Format the new time back to HH:MM format
    let newHours = date.getHours().toString().padStart(2, '0');
    let newMinutes = date.getMinutes().toString().padStart(2, '0');

    return `${newHours}:${newMinutes}`;
}
