// Vacation Class
class Vacation {
    constructor(title, type, description, thingsToDo, imageFile, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.imageFile = imageFile;
        this.mapSrc = mapSrc;
    }

    // getCard - returns a clickable card for the gallery
    getCard() {
        const card = document.createElement("div");
        card.className = "vacation-card";

        const band = document.createElement("div");
        band.className = "card-band";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.innerHTML = this.title;

        const type = document.createElement("p");
        type.className = "card-type";
        type.innerHTML = this.type + " Vacation";

        band.appendChild(title);
        band.appendChild(type);

        const img = document.createElement("img");
        img.className = "card-img";
        img.src = this.imageFile;
        img.alt = this.title;

        card.appendChild(band);
        card.appendChild(img);

        card.onclick = () => showModal(this);
        return card;
    }
}

// Array of Vacations (4 cities + 4 coral reefs)
const vacations = [
    new Vacation("San Francisco", "City", "Iconic hills and the Golden Gate Bridge.", "Golden Gate Bridge, Alcatraz, cable cars", "images/san-fran.jpg", "https://www.google.com/maps?q=San+Francisco&output=embed"),
    new Vacation("Columbia", "City", "Southern charm with rivers and museums.", "Riverbanks Zoo, State Museum, Congaree", "images/columbia.jpg", "https://www.google.com/maps?q=Columbia+South+Carolina&output=embed"),
    new Vacation("Reykjavik", "City", "Northernmost capital, gateway to glaciers.", "Blue Lagoon, Northern Lights, whale watching", "images/reykjavik.jpg", "https://www.google.com/maps?q=Reykjavik+Iceland&output=embed"),
    new Vacation("Cape Town", "City", "Coastal city beneath Table Mountain.", "Table Mountain, V&A Waterfront, Robben Island", "images/cape-town.jpg", "https://www.google.com/maps?q=Cape+Town&output=embed"),
    new Vacation("Great Barrier Reef", "Coral Reef", "World's largest coral reef system.", "Snorkeling, scuba diving, island hopping", "images/great-barrier-reef.jpg", "https://www.google.com/maps?q=Great+Barrier+Reef+Queensland&output=embed"),
    new Vacation("Belize Barrier Reef", "Coral Reef", "Part of the Mesoamerican Reef.", "Blue Hole diving, snorkeling, cave tubing", "images/belize-reef.jpg", "https://www.google.com/maps?q=Belize+Barrier+Reef&output=embed"),
    new Vacation("Cozumel Reefs", "Coral Reef", "Caribbean island famous for drift diving.", "Scuba diving, snorkeling, Chankanaab Park", "images/cozumel.jpg", "https://www.google.com/maps?q=Cozumel+Reefs+Mexico&output=embed"),
    new Vacation("Red Sea Coral Reef", "Coral Reef", "Vibrant reefs with exceptional visibility.", "Ras Mohammed diving, dolphin watching", "images/red-sea.jpg", "https://www.google.com/maps?q=Red+Sea+Reef+Egypt&output=embed")
];

// Element references
const modal = document.getElementById("vacation-modal");

// Show modal with class data
const showModal = (v) => {
    document.getElementById("modal-title").innerHTML = v.title;
    document.getElementById("modal-name").innerHTML = v.title;
    document.getElementById("modal-type").innerHTML = v.type;
    document.getElementById("modal-description").innerHTML = v.description;
    document.getElementById("modal-things").innerHTML = v.thingsToDo;
    document.getElementById("modal-map").src = v.mapSrc;
    modal.style.display = "block";
};

// Close modal
const closeModal = () => {
    modal.style.display = "none";
    document.getElementById("modal-map").src = "";
};

// Build gallery by looping through vacations
const buildGallery = () => {
    const gallery = document.getElementById("gallery");
    vacations.forEach(v => gallery.appendChild(v.getCard()));
};

// Initialize
buildGallery();