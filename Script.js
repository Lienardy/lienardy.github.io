const navLinks = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll("main section");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


const certificates = [
    {
        image: "images/certificates/html.jpg",
        title: "HTML",
        description: "Certification in HTML and fundamental web structure."
    },
    {
        image: "images/certificates/css.jpg",
        title: "CSS",
        description: "Certification in CSS and website styling."
    },
    {
        image: "images/certificates/javascript.jpg",
        title: "JavaScript",
        description: "Certification in JavaScript and basic programming logic."
    },
    {
        image: "images/certificates/python.jpg",
        title: "Python",
        description: "Certification in Python programming."
    },
    {
        image: "images/certificates/intro to programming.jpg",
        title: "Introduction to Programming",
        description: "Certification in fundamental programming concepts."
    },
    {
        image: "images/certificates/Ai Fundamentals.jpg",
        title: "AI Fundamentals",
        description: "Certification in Artificial Intelligence fundamentals."
    }
];

let certificateIndex = 0;

const certificateImage = document.getElementById("certificateImage");
const certificateNumber = document.getElementById("certificateNumber");
const certificateTitle = document.getElementById("certificateTitle");
const certificateDescription = document.getElementById("certificateDescription");
const prevCertificate = document.getElementById("prevCertificate");
const nextCertificate = document.getElementById("nextCertificate");

function showCertificate(index) {
    const certificate = certificates[index];

    certificateImage.src = certificate.image;
    certificateImage.alt = `${certificate.title} Certificate`;
    certificateNumber.textContent = `${index + 1} / ${certificates.length}`;
    certificateTitle.textContent = certificate.title;
    certificateDescription.textContent = certificate.description;
}

if (prevCertificate && nextCertificate) {
    prevCertificate.addEventListener("click", () => {
        certificateIndex--;

        if (certificateIndex < 0) {
            certificateIndex = certificates.length - 1;
        }

        showCertificate(certificateIndex);
    });

    nextCertificate.addEventListener("click", () => {
        certificateIndex++;

        if (certificateIndex >= certificates.length) {
            certificateIndex = 0;
        }

        showCertificate(certificateIndex);
    });
}


const organizationActivities = [
    {
        image: "organization/activity1.jpeg",
        title: "Student Union ISB",
        description: "All HOD SUISB 2025-2026"
    },
    {
        image: "organization/activity2.jpeg",
        title: "Student Union ISB",
        description: "All HOD SUISB 2026-2027"
    },
    {
        image: "organization/activity3.jpeg",
        title: "DPC Patria Berau",
        description: "Documentation of my activities in IKN with DPC Patria Berau."
    },
    {
        image: "organization/activity4.jpeg",
        title: "DPC Patria Berau",
        description: "Documentation of Porseni Patria 2025"
    },
    {
        image: "organization/activity5.png",
        title: "DPC Patria Berau",
        description: "Appreciation for my contributions as Treasurer of DPC Patria Berau."
    }
];

let organizationIndex = 0;

function showOrganization(index) {
    const activity = organizationActivities[index];

    const image = document.getElementById("organizationImage");
    const number = document.getElementById("organizationNumber");
    const title = document.getElementById("organizationTitle");
    const description = document.getElementById("organizationDescription");

    if (!image || !number || !title || !description) {
        return;
    }

    image.src = activity.image;
    image.alt = activity.title;
    number.textContent = `${index + 1} / ${organizationActivities.length}`;
    title.textContent = activity.title;
    description.textContent = activity.description;
}

function previousOrganization() {
    organizationIndex--;

    if (organizationIndex < 0) {
        organizationIndex = organizationActivities.length - 1;
    }

    showOrganization(organizationIndex);
}

function nextOrganization() {
    organizationIndex++;

    if (organizationIndex >= organizationActivities.length) {
        organizationIndex = 0;
    }

    showOrganization(organizationIndex);
}


const committeeActivities = [
    {
        image: "committee/activity1.jpeg",
        title: "Indonesia Tipitaka Chanting",
        description: "Documentation of my involvement in committee activities and event management."
    },
    {
        image: "committee/activity2.jpeg",
        title: "Bazzar Waisak",
        description: "Documentation of my involvement as Treasurer in Bazzar Waisak."
    },
    {
        image: "committee/activity3.jpeg",
        title: "Rise of Merah Putih",
        description: "Documentation of my involvement as Head of Committee in Rise of Merah Putih."
    },
    {
        image: "committee/activity4.jpeg",
        title: "SPARC",
        description: "Documentation of my involvement in the Event Division of SPARC."
    },
    {
        image: "committee/activity5.jpeg",
        title: "EPIC National",
        description: "Documentation of my involvement as Treasurer of EPIC National."
    }
];

let committeeIndex = 0;

function showCommittee(index) {
    const activity = committeeActivities[index];

    const image = document.getElementById("committeeImage");
    const number = document.getElementById("committeeNumber");
    const title = document.getElementById("committeeTitle");
    const description = document.getElementById("committeeDescription");
    const cards = document.querySelectorAll(".committee-card");

    if (!image || !number || !title || !description) {
        return;
    }

    image.src = activity.image;
    image.alt = activity.title;
    number.textContent = `${index + 1} / ${committeeActivities.length}`;
    title.textContent = activity.title;
    description.textContent = activity.description;

    cards.forEach(card => {
        card.classList.remove("active");
    });

    const selectedCard = document.querySelector(
        `.committee-card[data-index="${index}"]`
    );

    if (selectedCard) {
        selectedCard.classList.add("active");

        selectedCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function selectCommittee(index) {
    committeeIndex = index;
    showCommittee(committeeIndex);
}

function previousCommittee() {
    committeeIndex--;

    if (committeeIndex < 0) {
        committeeIndex = committeeActivities.length - 1;
    }

    showCommittee(committeeIndex);
}

function nextCommittee() {
    committeeIndex++;

    if (committeeIndex >= committeeActivities.length) {
        committeeIndex = 0;
    }

    showCommittee(committeeIndex);
}


document.addEventListener("DOMContentLoaded", () => {
    showCertificate(certificateIndex);
    showOrganization(organizationIndex);
    showCommittee(committeeIndex);
    selectCommittee(0);
});