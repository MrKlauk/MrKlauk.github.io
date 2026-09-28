// Associative arrays
const cities = {
    "San Francisco": "https://www.google.com/maps?q=San+Francisco&output=embed",
    "Columbia": "https://www.google.com/maps?q=Columbia+South+Carolina&output=embed",
    "Reykjavik": "https://www.google.com/maps?q=Reykjavik+Iceland&output=embed",
    "Cape Town": "https://www.google.com/maps?q=Cape+Town&output=embed"
};

const reefs = {
    "Great Barrier Reef": "https://www.google.com/maps?q=Great+Barrier+Reef+Queensland&output=embed",
    "Belize Barrier Reef": "https://www.google.com/maps?q=Belize+Barrier+Reef&output=embed",
    "Cozumel Reefs": "https://www.google.com/maps?q=Cozumel+Reefs+Mexico&output=embed",
    "Red Sea Coral Reef": "https://www.google.com/maps?q=Red+Sea+Reef+Egypt&output=embed"
};

// Build links
const showDestinations = (data) => {
    const destinations = document.getElementById("destinations");
    const map = document.getElementById("map");

    destinations.innerHTML = "";
    map.src = "";
    document.getElementById("map-wrap").classList.remove("show");

    for (let name in data) {
        const link = document.createElement("a");
        link.href = "#";
        link.innerHTML = name;

        link.onclick = () => {
            map.src = data[name];
            document.getElementById("map-wrap").classList.add("show");
            return false;
        };

        destinations.appendChild(link);
    }
};

document.getElementById("type-select").onchange = (e) => {
    if (e.target.value) {
        showDestinations({ cities: cities, reefs: reefs }[e.target.value]);
    } else {
        document.getElementById("map-wrap").classList.remove("show");
        document.getElementById("destinations").innerHTML = "";
    }
};