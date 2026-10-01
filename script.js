/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("mobile-active");

}


/* =========================================
   FOLKLORE STORIES
========================================= */

const stories = {

    sea: {

        title: "The Whisper of the Sea",

        text:
        "For generations, the sea surrounding Labuan has carried stories between villages, families and travellers. Fishermen returning from the waters would bring tales of strange encounters, mysterious lights and voices carried by the wind. Whether folklore or memory, these stories became part of the island's cultural identity."

    },

    kubong: {

        title: "The Legend of Tanjung Kubong",

        text:
        "Tanjung Kubong is closely associated with Labuan's coal-mining heritage. Beneath the quiet landscape lies a history of miners, industry and the movement of people who shaped the island. Today, the area offers visitors an opportunity to explore a different chapter of Labuan's past."

    },

    echoes: {

        title: "Echoes of the Past",

        text:
        "Historical buildings and memorials can act as storytellers. Their walls, paths and surroundings preserve memories of people and events that shaped Labuan. By visiting these places, modern travellers can experience history beyond words written in a textbook."

    }

};


/* =========================================
   OPEN STORY
========================================= */

function openStory(type) {

    const story = stories[type];

    if (!story) return;

    document.getElementById("modalTitle").textContent =
        story.title;

    document.getElementById("modalText").textContent =
        story.text;

    document.getElementById("storyModal")
        .classList.add("active");

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    document.getElementById("storyModal")
        .classList.remove("active");

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

document.getElementById("storyModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeModal();

        }

    });


/* =========================================
   DESTINATION INFORMATION
========================================= */

const destinations = {

    clock: {

        title: "Labuan Clock Tower",

        message:
        "A historic landmark that reflects Labuan's colonial-era development and changing identity through time."

    },

    chimney: {

        title: "Labuan Chimney",

        message:
        "Located in Tanjung Kubong, the Chimney represents an important chapter in Labuan's coal-mining history."

    },

    memorial: {

        title: "World War II Memorial",

        message:
        "A significant memorial site dedicated to remembering those who lost their lives during the Second World War."

    }

};


/* =========================================
   SHOW DESTINATION
========================================= */

function showPlace(type) {

    const place = destinations[type];

    if (!place) return;

    document.getElementById("modalTitle").textContent =
        place.title;

    document.getElementById("modalText").textContent =
        place.message;

    document.getElementById("storyModal")
        .classList.add("active");

}


/* =========================================
   AR BUTTON
========================================= */

function launchAR() {

    alert(
        "AR Experience\n\n" +
        "Your augmented reality experience can be connected here."
    );

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    ".legend-card, .destination, .heritage, .about"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});// JavaScript Document