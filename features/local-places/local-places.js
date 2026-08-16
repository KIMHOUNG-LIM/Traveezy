// --------------------------------------------------------------------------
// TRAVEEZY — LOCAL PLACES INTERACTIVE LOGIC & MODAL GUIDE
// --------------------------------------------------------------------------

const PLACES_DATA = [
    {
        id: "banteay-srei",
        title: "Banteay Srei (Pink Citadel)",
        khmer: "បន្ទាយស្រី",
        category: "heritage",
        categoryLabel: "Sacred Heritage",
        rating: "4.9",
        reviews: "950+",
        distance: "32 km North of Town",
        bestTime: "7:00 AM – 9:00 AM",
        fee: "Included in Angkor Pass",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
        description: "Known as the 'Citadel of Women' and 'Jewel of Khmer Art', Banteay Srei is built from radiant pink sandstone featuring the finest, most intricate 3D carvings in Southeast Asia.",
        highlights: ["10th-Century miniature pink sandstone temples", "Intricate relief carvings of celestial Devatas and floral lintels", "Surrounding lotus ponds and lotus field walkways", "Traditional Khmer music performances by local musicians"],
        insiderTip: "Arrive right at 7:00 AM before tour buses arrive to see the soft morning sun illuminate the pink sandstone in golden glow.",
        dressCode: "Shoulders and knees must be covered (strict temple rule).",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Banteay+Srei+Siem+Reap"
    },
    {
        id: "wat-bo",
        title: "Wat Bo Village & Pagoda",
        khmer: "ភូមិវត្តបូព៌",
        category: "neighbourhood",
        categoryLabel: "Cool Neighbourhood",
        rating: "4.8",
        reviews: "680+",
        distance: "0.5 km (East of Siem Reap River)",
        bestTime: "Late Afternoon & Evening",
        fee: "Free Entry",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
        description: "Voted by Time Out as one of the coolest neighbourhoods globally. A leafy sanctuary of historic Buddhist pagodas, trendy craft coffee roasters, art galleries, and organic Khmer bistros.",
        highlights: ["18th-century rare Reamker (Ramayana) murals inside Wat Bo Pagoda", "Specialty cafes & micro-roasteries", "Boutique art galleries and contemporary artisan shops", "Tree-lined shaded walking promenades along the riverside"],
        insiderTip: "Step into the main Wat Bo vihara to view the historic 19th-century murals portraying ancient daily Khmer life alongside epic legends.",
        dressCode: "Smart casual; cover shoulders/knees when entering the active pagoda vihara.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wat+Bo+Village+Siem+Reap"
    },
    {
        id: "phnom-kulen",
        title: "Phnom Kulen Holy Waterfalls",
        khmer: "ភ្នំគូលែន",
        category: "nature",
        categoryLabel: "Nature & Waterfalls",
        rating: "4.8",
        reviews: "1.1k+",
        distance: "48 km Northeast of Town",
        bestTime: "Morning (8:30 AM – 2:00 PM)",
        fee: "$20 USD (Separate ticket)",
        image: "../../assets/images/home/heritage1.jpg",
        description: "The sacred birthplace of the ancient Khmer Empire (802 AD). Features refreshing multi-tier jungle waterfalls for swimming, the River of 1,000 Lingas, and a giant hilltop reclining Buddha.",
        highlights: ["Twin-tier jungle waterfalls with natural plunge pools for swimming", "Kbal Spean sacred River of a Thousand Lingas riverbed carvings", "Preah Ang Thom 16th-century giant gold-painted rock Buddha", "Sacred mountain wild red bananas and fresh forest coconut water"],
        insiderTip: "Road traffic goes uphill until 11:30 AM and downhill after 12:30 PM. Plan your departure by 8:00 AM to enjoy the cool waterfall morning.",
        dressCode: "Modest swimwear for swimming; cover shoulders and knees when visiting Preah Ang Thom pagoda.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Phnom+Kulen+Waterfall+Siem+Reap"
    },
    {
        id: "kampong-phluk",
        title: "Kampong Phluk Stilted & Mangrove Village",
        khmer: "កំពង់ភ្លុក",
        category: "water-village",
        categoryLabel: "Floating Village",
        rating: "4.7",
        reviews: "820+",
        distance: "30 km Southeast of Town",
        bestTime: "3:30 PM – 6:30 PM (Golden Sunset)",
        fee: "$20–$25 USD (Includes wooden longtail boat)",
        image: "../../assets/images/province/Tonlé Sap Floating Village.avif",
        description: "An authentic fishing community built on towering 8-meter bamboo stilts over the Tonlé Sap Biosphere Reserve. Features peaceful hand-paddled wooden canoe rides through flooded mangrove forests.",
        highlights: ["Towering stilted wooden houses adapting to the dramatic seasonal water levels", "Flooded mangrove forest canoe tours operated by local village women", "Floating pagoda and local primary school on the water", "Breathtaking sunset horizon views across the Great Tonlé Sap Lake"],
        insiderTip: "Support the local women's canoe cooperative (approx. $5–$6 per small canoe) for the peaceful paddle through the flooded forest canopy.",
        dressCode: "Casual, flat comfortable shoes, sun protection & hat.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kampong+Phluk+Floating+Village+Siem+Reap"
    },
    {
        id: "phare-circus",
        title: "Phare, The Cambodian Circus",
        khmer: "សៀកហ្វារ",
        category: "culture",
        categoryLabel: "Culture & Arts",
        rating: "4.9",
        reviews: "3.4k+",
        distance: "2 km (Ring Road Downtown)",
        bestTime: "Shows at 8:00 PM Nightly (Dinner from 6:30 PM)",
        fee: "$18–$38 USD (Supports Youth NGO)",
        image: "../../assets/images/province/Phare.webp",
        description: "More than just a circus — an internationally acclaimed live performing arts theatre blending high-energy acrobatics, contemporary dance, live Khmer music, and heartwarming Cambodian storytelling.",
        highlights: ["100% human talent with electrifying aerial acrobatics and fire acts", "Storylines inspired by Cambodian folklore, history, and modern life", "Nightly open-air street food village and artisan craft market before show", "All ticket sales empower social education and vocational careers for youth"],
        insiderTip: "Book preferred seat tickets (Section A/B) at least 24 hours in advance during high season as seats sell out daily.",
        dressCode: "Smart casual with air-conditioned or ventilated big-top seating.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Phare+The+Cambodian+Circus+Siem+Reap"
    },
    {
        id: "apopo-center",
        title: "APOPO Visitor Center (HeroRATs)",
        khmer: "មជ្ឈមណ្ឌលកណ្តុរហេរ៉ូ",
        category: "culture",
        categoryLabel: "Culture & Peace Mission",
        rating: "4.9",
        reviews: "1.8k+",
        distance: "5 km North of Old Market",
        bestTime: "8:30 AM – 4:30 PM",
        fee: "$10 USD Donation / Tour",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
        description: "An inspiring humanitarian center where African giant pouched rats ('HeroRATs') are trained using positive reinforcement scent-detection to clear landmines, restoring safe lands to Cambodian farmers.",
        highlights: ["Live demonstration watching HeroRATs swiftly locate simulated scents in real time", "Meeting professional Cambodian deminers and rat handlers", "Educational museum on Cambodia's modern recovery and peacebuilding", "Interactive photo opportunities with the gentle hero animals"],
        insiderTip: "Book a guided 45-minute tour to hear direct stories from Cambodian deminers who work every day in remote provinces.",
        dressCode: "Comfortable casual walking wear.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=APOPO+Visitor+Center+Siem+Reap"
    },
    {
        id: "ta-prohm",
        title: "Ta Prohm (Jungle Temple)",
        khmer: "ប្រាសាទតាព្រហ្ម",
        category: "heritage",
        categoryLabel: "Sacred Heritage",
        rating: "4.9",
        reviews: "4.2k+",
        distance: "12 km Northeast of Town",
        bestTime: "7:30 AM or 12:30 PM (Quiet Times)",
        fee: "Included in Angkor Pass",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        description: "Left intentionally in much of its wild, atmospheric state, Ta Prohm showcases the breathtaking power of nature as colossal silk-cotton and strangler fig roots embrace crumbling 12th-century stone towers.",
        highlights: ["Iconic 'Tomb Raider' tree roots engulfing ancient stone doorways", "Intricate devata stone carvings framed by verdant moss and ferns", "The mysterious Echo Chamber that reverberates with chest-beats", "Hall of the Dancers with detailed celestial Apsara carvings"],
        insiderTip: "Enter through the quiet East Gate and exit at the West Gate to avoid tour group bottlenecks and capture serene jungle photography.",
        dressCode: "Temple dress code strictly enforced: shoulders and knees covered.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ta+Prohm+Temple+Siem+Reap"
    },
    {
        id: "psar-chaa",
        title: "Psar Chaa (Old Market) & Riverside",
        khmer: "ផ្សារចាស់",
        category: "neighbourhood",
        categoryLabel: "Local Markets & Food",
        rating: "4.7",
        reviews: "2.5k+",
        distance: "Town Center (Downtown)",
        bestTime: "Morning (Local life) & Evening (Shopping)",
        fee: "Free Entry",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
        description: "The historical beating heart of daily local life in Siem Reap. Morning wet market stalls packed with fresh tropical fruits, Kampot pepper, and Cambodian breakfast noodles give way to evening artisan souvenirs.",
        highlights: ["Authentic local breakfast stalls serving Num Banh Chok and Bai Sach Chrouk", "Aromatic spices, Kampot pepper, palm sugar, and local dried river fish", "Handmade silk scarves, silver jewelry, and stone woodcraft souvenirs", "Shaded riverside benches illuminated by lanterns in the evening"],
        insiderTip: "Visit between 6:30 AM and 8:30 AM to see local chefs and families shopping for fresh river catch and herbs for the day's curries.",
        dressCode: "Casual comfortable streetwear.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old+Market+Siem+Reap+Psar+Chaa"
    },
    {
        id: "artisans-angkor",
        title: "Artisans Angkor & Silk Farm",
        khmer: "សិប្បកម្មអង្គរ",
        category: "culture",
        categoryLabel: "Culture & Arts",
        rating: "4.8",
        reviews: "1.4k+",
        distance: "Downtown (Workshop) & 15 km (Silk Farm)",
        bestTime: "9:00 AM – 4:00 PM",
        fee: "Free Guided Tours",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        description: "A premier social enterprise dedicated to reviving ancient Khmer craftsmanship. Watch master artisans sculpt fine sandstone, carve teak wood, apply gold lacquer, and weave pure Cambodian golden silk.",
        highlights: ["Free guided workshops showing master stone, wood, and silver craftsmanship", "End-to-end mulberry tree garden and golden silkworm cocoon spinning at the Silk Farm", "Ethical fair-trade boutique with authentic luxury handicrafts", "Tranquil outdoor garden cafe surrounded by lush tropical landscaping"],
        insiderTip: "Take the complimentary shuttle bus from the downtown workshop to the Puok Silk Farm for an unforgettable half-day eco-tour.",
        dressCode: "Casual comfortable.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Artisans+Angkor+Siem+Reap"
    }
];

// Render Places Grid
function renderPlaces(filter = "all", searchQuery = "") {
    const container = document.getElementById("placesGridContainer");
    const countBadge = document.getElementById("resultsCountBadge");
    if (!container) return;

    const cleanQuery = searchQuery.trim().toLowerCase();

    const filtered = PLACES_DATA.filter(place => {
        const matchesCategory = (filter === "all") || (place.category === filter);
        const matchesSearch = cleanQuery === "" ||
            place.title.toLowerCase().includes(cleanQuery) ||
            place.categoryLabel.toLowerCase().includes(cleanQuery) ||
            place.description.toLowerCase().includes(cleanQuery) ||
            place.highlights.some(h => h.toLowerCase().includes(cleanQuery));

        return matchesCategory && matchesSearch;
    });

    if (countBadge) {
        countBadge.textContent = `${filtered.length} Local Places Found`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="p-5 bg-white rounded-4 border">
                    <i class="fa-solid fa-magnifying-glass fs-1 text-muted mb-3"></i>
                    <h4 class="playfair-display color-navy fw-bold">No matching places found</h4>
                    <p class="text-secondary small mb-3">Try adjusting your search terms or selecting a different category.</p>
                    <button class="btn btn-outline-primary rounded-pill px-4" onclick="resetFilters()">View All Places</button>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(place => `
        <div class="col-12 col-md-6 col-lg-4" data-category="${place.category}">
            <div class="place-card-modern shadow-sm">
                <div class="place-img-wrapper">
                    <img src="${place.image}" alt="${place.title}" loading="lazy">
                    <div class="place-top-badges">
                        <span class="place-chip-pill">
                            <i class="fa-solid fa-star text-warning me-1"></i> ${place.rating} (${place.reviews})
                        </span>
                        <span class="place-chip-pill bg-dark-glass">
                            <i class="fa-solid fa-location-dot text-danger me-1"></i> ${place.distance.split('(')[0]}
                        </span>
                    </div>
                </div>

                <div class="p-3 d-flex flex-column flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="place-category-badge">${place.categoryLabel}</span>
                        <span class="text-muted small"><i class="fa-regular fa-clock me-1"></i> ${place.bestTime.split('(')[0]}</span>
                    </div>

                    <h4 class="playfair-display fw-bold color-navy fs-5 mb-2">${place.title}</h4>
                    <p class="inter text-secondary small leading-normal mb-3 flex-grow-1">${place.description}</p>

                    <div class="place-secret-tip mb-3">
                        <i class="fa-solid fa-lightbulb text-warning me-1"></i>
                        <strong>Insider Tip:</strong> ${place.insiderTip}
                    </div>

                    <div class="place-card-actions pt-2 border-top">
                        <a href="${place.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-place-map" title="Open in Google Maps">
                            <i class="fa-solid fa-map-location-dot text-danger"></i>
                            <span>Google Maps</span>
                        </a>
                        <button type="button" class="btn-place-guide" onclick="openPlaceModal('${place.id}')">
                            <i class="fa-solid fa-compass"></i>
                            <span>Place Guide</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

// Open Place Guide Modal
function openPlaceModal(placeId) {
    const place = PLACES_DATA.find(p => p.id === placeId);
    if (!place) return;

    const modalEl = document.getElementById("placeDetailModal");
    if (!modalEl) return;

    document.getElementById("modalPlaceImg").src = place.image;
    document.getElementById("modalPlaceTitle").textContent = place.title;
    document.getElementById("modalPlaceCategory").textContent = place.categoryLabel;
    document.getElementById("modalPlaceRating").innerHTML = `<i class="fa-solid fa-star text-warning me-1"></i> ${place.rating} (${place.reviews})`;
    document.getElementById("modalPlaceDistance").innerHTML = `<i class="fa-solid fa-location-dot text-danger me-1"></i> ${place.distance}`;
    document.getElementById("modalPlaceBestTime").innerHTML = `<i class="fa-regular fa-clock text-primary me-1"></i> <strong>Best Time:</strong> ${place.bestTime}`;
    document.getElementById("modalPlaceFee").innerHTML = `<i class="fa-solid fa-ticket text-success me-1"></i> <strong>Entry &amp; Fee:</strong> ${place.fee}`;
    document.getElementById("modalPlaceDress").innerHTML = `<i class="fa-solid fa-shirt text-info me-1"></i> <strong>Dress Code:</strong> ${place.dressCode}`;
    document.getElementById("modalPlaceDesc").textContent = place.description;
    document.getElementById("modalPlaceTip").innerHTML = `<strong>Insider Travel Secret:</strong> ${place.insiderTip}`;

    // Highlights
    const highlightsContainer = document.getElementById("modalPlaceHighlights");
    highlightsContainer.innerHTML = place.highlights.map(h => `
        <li class="mb-1"><i class="fa-solid fa-circle-check text-success me-2 fs-xs"></i>${h}</li>
    `).join("");

    // Map Action Button
    const mapBtn = document.getElementById("modalPlaceMapBtn");
    mapBtn.href = place.mapUrl;

    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}

function resetFilters() {
    const searchInput = document.getElementById("placeSearchInput");
    if (searchInput) searchInput.value = "";

    document.querySelectorAll(".btn-filter-chip").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-category") === "all");
    });

    renderPlaces("all", "");
}

// Initialize Filters & Listeners
document.addEventListener("DOMContentLoaded", () => {
    renderPlaces();

    // Category Filter Chips
    const chips = document.querySelectorAll(".btn-filter-chip");
    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");

            const category = chip.getAttribute("data-category");
            const searchInput = document.getElementById("placeSearchInput");
            const query = searchInput ? searchInput.value : "";
            renderPlaces(category, query);
        });
    });

    // Real-time Search Input
    const searchInput = document.getElementById("placeSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const activeChip = document.querySelector(".btn-filter-chip.active");
            const category = activeChip ? activeChip.getAttribute("data-category") : "all";
            renderPlaces(category, e.target.value);
        });
    }
});
