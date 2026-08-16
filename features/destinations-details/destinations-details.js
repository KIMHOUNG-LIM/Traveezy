// --------------------------------------------------------------------------
// TRAVEEZY — DESTINATIONS DETAIL DATA & DYNAMIC RENDERING ENGINE
// --------------------------------------------------------------------------

const DESTINATIONS_DATA = [
    {
        id: "angkor-wat",
        name: "Angkor Wat Grand Complex",
        khmer: "ប្រាសាទអង្គរវត្ត",
        tagline: "The World's Largest Religious Sanctuary & Sacred Wonder of the World",
        category: "UNESCO World Heritage",
        categoryIcon: "fa-landmark",
        rating: "5.0",
        reviewCount: "4.8k+ Reviews",
        location: "Angkor Archaeological Park (6 km North of Town)",
        bestTime: "5:00 AM – 8:30 AM (Sunrise Reflections)",
        admission: "Included in Angkor Pass ($37 / 1-Day, $62 / 3-Day)",
        dressCode: "Strict sacred modesty: shoulders & knees must be covered (no see-through shawls)",
        heroImage: "../../assets/images/province/siem reap hero img.jpg",
        description: "Built in the early 12th century by King Suryavarman II, Angkor Wat is an architectural triumph of epic proportions. Spanning 400+ acres, its five towering lotus spires replicate Mount Meru, rising dramatically above a vast sacred moat and reflecting in twin morning lotus ponds.",
        facts: [
            "Largest religious monument on Earth, spanning 162.6 hectares (larger than Vatican City).",
            "Oriented uniquely to the West (the direction of Vishnu and the setting sun), unlike other Khmer temples.",
            "Features 800+ meters of bas-relief stone carvings and more than 2,000 individually carved celestial Apsaras.",
            "The central tower rises 65 meters (213 feet) above the forest floor, symbolizing the cosmic center of the universe."
        ],
        activities: [
            {
                title: "Sunrise Reflection Photography",
                icon: "fa-camera",
                desc: "Arrive at 5:15 AM before the Northern Lotus Pond to capture the world-famous silhouette reflection."
            },
            {
                title: "Walk the Bas-Relief Galleries",
                icon: "fa-person-walking",
                desc: "Explore 800m of 12th-century stone wall carvings depicting the 'Churning of the Ocean of Milk' with an expert guide."
            },
            {
                title: "Ascend to the Bakan Sanctum",
                icon: "fa-stairs",
                desc: "Climb the steep wooden staircase to the highest sacred terrace for breathtaking 360° jungle canopy panoramas."
            },
            {
                title: "Monk Jasmine-Water Blessing",
                icon: "fa-hands-praying",
                desc: "Receive a traditional Buddhist chanting blessing and red thread wristlet in the peaceful inner courtyards."
            }
        ],
        travelTips: [
            {
                title: "5:00 PM Ticket Free Entry Hack",
                badge: "Timing Secret",
                icon: "fa-ticket",
                text: "If you purchase your Angkor Pass after 5:00 PM the afternoon before, you get free admission to watch the sunset that same evening, and your pass is valid all of the next day!"
            },
            {
                title: "Northern Reflection Pond Setup",
                badge: "Photo Hack",
                icon: "fa-camera",
                text: "The Northern pond (on your left as you cross the causeway) has deeper water and lush pink lotus blooms, creating the classic postcard reflection. Bring a small pocket mat to sit on the grass."
            },
            {
                title: "Strict Upper Bakan Sanctuary Rules",
                badge: "Dress Code",
                icon: "fa-shirt",
                text: "Shoulders and knees MUST be covered with real garments (wrapping a sheer scarf or sarong over a tank top is not accepted by temple officers). Closed on Buddhist Holy Days (lunar calendar)."
            },
            {
                title: "Pocket Torch for the Rainbow Bridge",
                badge: "Gear Advice",
                icon: "fa-flashlight",
                text: "The floating causeway across the wide moat has no artificial lighting before dawn. Keep your phone flashlight or a small pocket torch ready to walk safely across the pontoon."
            },
            {
                title: "Authorized Yellow Uniform Guides",
                badge: "Local Tour",
                icon: "fa-user-tie",
                text: "Hire certified local Cambodian guides wearing official yellow or beige uniforms ($25–$35/day). They bring the bas-relief epics of the Ramayana and Mahabharata to vivid life."
            },
            {
                title: "Midday Temple Rest Period",
                badge: "Energy Tip",
                icon: "fa-sun",
                text: "Between 11:30 AM and 2:00 PM, the stone courtyards become intense heat traps. Head back to town for a relaxing lunch and pool swim, then return for soft afternoon light around 3:30 PM."
            }
        ],
        hotels: [
            {
                name: "Jaya House River Park",
                badge: "TripAdvisor #1 Eco-Luxury",
                rating: "5.0 Stars",
                price: "From $195 / night",
                distance: "4.5 km (10 mins to Angkor Wat Gate)",
                highlight: "100% plastic-free sanctuary, private riverfront gardens, complimentary private Tuk-Tuk service.",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Sofitel Angkor Phokeethra",
                badge: "French Colonial Grandeur",
                rating: "4.9 Stars",
                price: "From $220 / night",
                distance: "4.0 km (8 mins to Gate)",
                highlight: "Magnificent lagoon pool, championship 18-hole golf course, and lush landscaped botanical gardens.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "FCC Angkor by Avani",
                badge: "Historic Riverfront Heritage",
                rating: "4.8 Stars",
                price: "From $160 / night",
                distance: "5.0 km (12 mins to Gate)",
                highlight: "Former French Governor's mansion featuring salt-water pool, art gallery, and vintage bar lounges.",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Malis Restaurant Siem Reap",
                badge: "Royal Khmer Fine Dining",
                cuisine: "Living Royal Cambodian Cuisine",
                signature: "Royal Saraman Beef Curry & Baked Goby with Green Mango",
                rating: "4.9 Stars",
                distance: "5.0 km (Riverside Pokambor)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Haven Training Restaurant",
                badge: "Social Impact & Gourmet",
                cuisine: "Modern Asian & Khmer Fusion",
                signature: "Khmer Coconut Vegetable Curry & Crispy Fish with Tamarind Sauce",
                rating: "4.8 Stars",
                distance: "4.8 km (Wat Damnak)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "The Sugar Palm",
                badge: "Celebrated Countryside Recipes",
                cuisine: "Traditional Home-Style Khmer",
                signature: "Authentic Steamed Fish Amok Soufflé in Banana Leaf",
                rating: "4.7 Stars",
                distance: "5.2 km (Taphul Road)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Angkor+Wat+Siem+Reap"
    },
    {
        id: "bayon",
        name: "Bayon & Angkor Thom Capital",
        khmer: "ប្រាសាទបាយ័ន",
        tagline: "The 216 Serene Smiling Stone Faces of King Jayavarman VII",
        category: "Royal Sacred Citadel",
        categoryIcon: "fa-gem",
        rating: "4.9",
        reviewCount: "3.6k+ Reviews",
        location: "Angkor Thom Center (8.5 km North of Downtown)",
        bestTime: "7:30 AM – 9:30 AM & 3:30 PM – 5:00 PM (Raking Golden Light)",
        admission: "Included in Angkor Pass",
        dressCode: "Temple dress code strictly enforced (shoulders & knees covered)",
        heroImage: "../../assets/images/province/province-hero.jpg",
        description: "Standing at the exact center of the royal walled city of Angkor Thom, Bayon is famed for its 54 Gothic-style stone towers adorned with 216 enigmatic, serenely smiling stone faces representing the Bodhisattva Avalokiteshvara.",
        facts: [
            "Built in the late 12th century by King Jayavarman VII as the state Mahayana Buddhist temple.",
            "Contains 216 massive smiling stone faces that seem to watch over you from every angle.",
            "Outer gallery walls uniquely chronicle vibrant 12th-century Cambodian daily life: market vendors, cooking, and naval battles.",
            "Flanked by the legendary 350-meter Terrace of the Elephants and the Terrace of the Leper King."
        ],
        activities: [
            {
                title: "Photograph the Smiling Faces",
                icon: "fa-camera",
                desc: "Find the eye-level face on the upper terrace to capture the iconic perspective against ancient sandstone."
            },
            {
                title: "Study Market Bas-Reliefs",
                icon: "fa-magnifying-glass",
                desc: "Walk the outer lower wall to see ancient Khmer market stalls, street food, and traditional family scenes."
            },
            {
                title: "Stroll Elephant Terrace",
                icon: "fa-monument",
                desc: "Walk the 350-meter royal viewing platform used for royal processions, military reviews, and festivals."
            },
            {
                title: "Cross South Gate Causeway",
                icon: "fa-road",
                desc: "Admire the 108 sacred stone guardian statues and celestial deities lining the causeway holding the legendary Naga serpent."
            }
        ],
        travelTips: [
            {
                title: "Late Afternoon Raking Light",
                badge: "Photography",
                icon: "fa-sun",
                text: "Visit between 3:30 PM and 5:00 PM. The low western sun hits the carved faces at a dramatic 45-degree angle, casting deep photographic shadows and golden highlights."
            },
            {
                title: "South Gate 10-Minute Stop",
                badge: "Transit Secret",
                icon: "fa-motorcycle",
                text: "Tell your Remork driver to pause for 10 minutes right before the South Gate bridge. The morning reflection of the stone guardians over the wide moat is one of Angkor's finest frames."
            },
            {
                title: "Walk the Quiet Moat Ramparts",
                badge: "Hidden Path",
                icon: "fa-shoe-prints",
                text: "Climb the earthen stairway inside the South Gate to walk along the peaceful 8-meter-tall city wall to Prasat Chrung corner shrine for complete isolation and canopy views."
            },
            {
                title: "Explore Baphuon's Giant Reclining Buddha",
                badge: "Nearby Gem",
                icon: "fa-compass",
                text: "Just a 3-minute stroll behind Bayon sits Baphuon temple. Walk to its back western wall to discover a massive 70-meter reclining Buddha subtly carved directly into the stone blocks."
            },
            {
                title: "Eye-Level Portrait Angle",
                badge: "Angle Tip",
                icon: "fa-camera-retro",
                text: "On the central upper terrace, look for the freestanding face tower near the eastern doorway. Standing 2 meters back aligns your profile directly eye-to-eye with the Bodhisattva smile."
            },
            {
                title: "Wide-Brimmed Sun Hat Required",
                badge: "Comfort",
                icon: "fa-hat-cowboy",
                text: "Unlike jungle temples, Bayon's upper level has no tree cover. The dark sandstone radiates significant heat by noon, so wear a wide hat and sunglasses."
            }
        ],
        hotels: [
            {
                name: "Shinta Mani Angkor",
                badge: "Bill Bensley Design",
                rating: "4.9 Stars",
                price: "From $180 / night",
                distance: "7.5 km (15 mins by Remork)",
                highlight: "Award-winning design architecture, tranquil courtyard pool, and Shinta Mani Foundation community support.",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Raffles Grand Hotel d'Angkor",
                badge: "1932 Historic Palace",
                rating: "5.0 Stars",
                price: "From $310 / night",
                distance: "7.0 km (14 mins to South Gate)",
                highlight: "Iconic colonial heritage, Cambodia's largest swimming pool, and historic Elephant Bar.",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Treeline Urban Resort",
                badge: "Contemporary Art Eco Stay",
                rating: "4.9 Stars",
                price: "From $140 / night",
                distance: "7.5 km (Riverside Wat Bo)",
                highlight: "Rooftop infinity pool, curated modern art installations, and organic garden breakfasts.",
                image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Chanrey Tree",
                badge: "Riverside Garden Setting",
                cuisine: "Countryside Khmer Fine Dining",
                signature: "Roasted Free-Range Chicken with Khmer Herb Stuffing & Charred Eggplant Dip",
                rating: "4.8 Stars",
                distance: "7.0 km (Pokambor Ave)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Cuisine Wat Damnak",
                badge: "Michelin-Lauded Chef",
                cuisine: "Modern Seasonal Khmer",
                signature: "Wild Tonle Sap Sand Goby in Lotus Broth & Braised Pork Belly",
                rating: "4.9 Stars",
                distance: "8.0 km (Wat Damnak)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Mie Cafe",
                badge: "French-Khmer Villa Bistro",
                cuisine: "Artisan Khmer-European Fusion",
                signature: "Homemade Duck Ravioli in Aromatic Kroeung Curry Cream",
                rating: "4.8 Stars",
                distance: "6.5 km (North River Road)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Bayon+Temple+Siem+Reap"
    },
    {
        id: "phare-circus",
        name: "Phare, The Cambodian Circus",
        khmer: "សៀកហ្វារកម្ពុជា",
        tagline: "Electrifying Live Acrobatics, Theatrical Folklore & Social Impact",
        category: "Performing Arts & Culture",
        categoryIcon: "fa-masks-theater",
        rating: "4.9",
        reviewCount: "3.4k+ Reviews",
        location: "Ring Road, South of Downtown Siem Reap",
        bestTime: "Nightly 8:00 PM (Garden Dinner from 6:30 PM)",
        admission: "$18 – $38 USD (100% Supports Youth NGO)",
        dressCode: "Smart casual; comfortable ventilated big-top seating",
        heroImage: "../../assets/images/province/Phare.webp",
        description: "More than a circus — an internationally acclaimed live performing arts sensation blending high-flying human acrobatics, contortionism, fire acts, live Khmer music, and deeply moving theatrical Cambodian folk storytelling. 100% human talent, zero animals.",
        facts: [
            "Founded in 1994 by 9 young Cambodians returning from refugee camps who healed through art therapy.",
            "All artists are graduates of the famous Phare Ponleu Selpak non-profit vocational academy in Battambang.",
            "Ticket revenues fund free daily schooling and art education for over 1,200 Cambodian children.",
            "Voted the #1 Night Experience in Siem Reap by international traveler reviews year after year."
        ],
        activities: [
            {
                title: "Live Acrobatic & Fire Show",
                icon: "fa-fire",
                desc: "Witness heart-pounding human towers, aerial silks, and fire-juggling synchronized to live Khmer drums."
            },
            {
                title: "Meet & Greet the Artists",
                icon: "fa-handshake",
                desc: "Step onto the stage after the performance to take keepsake photos and congratulate the talented performers."
            },
            {
                title: "Phare Street Food Village",
                icon: "fa-utensils",
                desc: "Arrive at 6:30 PM to savor fresh spring rolls, grilled lemongrass chicken, and craft iced herbal teas."
            },
            {
                title: "Fair-Trade Artisan Boutique",
                icon: "fa-bag-shopping",
                desc: "Shop for original paintings, handmade jewelry, and silk apparel crafted by Cambodian student artisans."
            }
        ],
        travelTips: [
            {
                title: "Section B Best Sightline Hack",
                badge: "Seating Tip",
                icon: "fa-chair",
                text: "While Section A offers front-row immersion, Section B (tiered rows 3–6) provides the single best elevated viewpoint for aerial silks, high-flying flips, and stage acrobatics."
            },
            {
                title: "Arrive at 6:30 PM for Garden Stalls",
                badge: "Arrival Timing",
                icon: "fa-clock",
                text: "Arrive 90 minutes before showtime. The outdoor garden is illuminated with warm fairy lanterns, live acoustic music, local food stalls, and an open-air student art gallery."
            },
            {
                title: "Pre-Arrange Your Return Remork",
                badge: "Transport",
                icon: "fa-motorcycle",
                text: "When taking a Tuk-Tuk from your hotel, tell the driver to wait for you outside or agree on a pickup time at 9:05 PM. Standard fares back to downtown are fixed at $2–$3."
            },
            {
                title: "Stay After the Final Bow for Photos",
                badge: "Memories",
                icon: "fa-camera",
                text: "Do not rush out when the curtain falls! The master acrobats and musicians step down to the front stage to chat, sign souvenir programs, and take memorable group photos."
            },
            {
                title: "Rotating Storyline Repertoire",
                badge: "Show Info",
                icon: "fa-masks-theater",
                text: "Phare rotates between 6 distinct theatrical productions (e.g. *Sokha*, *Same Same but Different*, *Eclipse*). If staying in town for a week, you can see two totally different shows!"
            },
            {
                title: "Ventilated Big-Top Comfort",
                badge: "Attire",
                icon: "fa-fan",
                text: "The circular big top features large industrial misting fans. Wear breathable, lightweight casual clothing and bring a mini hand fan if visiting in April/May."
            }
        ],
        hotels: [
            {
                name: "Treeline Urban Resort",
                badge: "Riverside Eco Sanctuary",
                rating: "4.9 Stars",
                price: "From $140 / night",
                distance: "2.5 km (7 mins by Tuk-Tuk)",
                highlight: "Rooftop infinity pool, curated contemporary art gallery, organic breakfast buffet.",
                image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Viroth's Hotel",
                badge: "World #1 Boutique Chic",
                rating: "5.0 Stars",
                price: "From $160 / night",
                distance: "2.8 km (8 mins by Tuk-Tuk)",
                highlight: "50s modernist design, 20m emerald saltwater pool, vintage limousine transfers.",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Lub d Cambodia Siem Reap",
                badge: "Trendy Boutique Social Resort",
                rating: "4.8 Stars",
                price: "From $45 / night",
                distance: "2.0 km (5 mins by Tuk-Tuk)",
                highlight: "Swim-up pool bar, games lounge, private king rooms and modern dorms in central location.",
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Phare Cafe & Street Food Village",
                badge: "Open-Air Garden Dining",
                cuisine: "Khmer Street Comfort & BBQ",
                signature: "Grilled Lemongrass Chicken Skewers & Fresh Spring Rolls",
                rating: "4.8 Stars",
                distance: "On-site (Circus Garden)",
                image: "../../assets/images/province/Krousa%20lotchea.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Cuisine Wat Damnak",
                badge: "Michelin-Celebrated Fine Dining",
                cuisine: "Modern Seasonal Khmer",
                signature: "Braised Pork Belly with Kroeung Paste & Wild Sand Goby",
                rating: "4.9 Stars",
                distance: "2.0 km (Wat Damnak)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Georges Rhumerie & French Bistro",
                badge: "Craft Rum & Tapas",
                cuisine: "French-Creole & Asian Fusion",
                signature: "House-Smoked Duck Breast with Tamarind Glaze & Infused Rums",
                rating: "4.8 Stars",
                distance: "2.2 km (Wat Damnak)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Phare+The+Cambodian+Circus+Siem+Reap"
    },
    {
        id: "tonle-sap",
        aliases: ["kampong-phluk"],
        name: "Tonlé Sap Stilted Floating Village",
        khmer: "ភូមិបណ្តែតទឹកកំពង់ភ្លុក",
        tagline: "8-Meter Bamboo Stilt Houses & Canoe Journeys Through Flooded Mangrove Forests",
        category: "UNESCO Biosphere Reserve",
        categoryIcon: "fa-water",
        rating: "4.7",
        reviewCount: "1.9k+ Reviews",
        location: "Kampong Phluk (30 km Southeast of Siem Reap)",
        bestTime: "3:00 PM – 6:30 PM (Golden Sun into Lake Sunset)",
        admission: "$20 – $25 USD (Boat Ticket) + $5 for Women's Canoe Tour",
        dressCode: "Light casual wear, slip-resistant shoes, sun hat & sunscreen",
        heroImage: "../../assets/images/province/Tonlé Sap Floating Village.avif",
        description: "Experience the unique aquatic life of Southeast Asia's largest freshwater lake. In Kampong Phluk, families live in towering houses on 8-meter bamboo stilts above the UNESCO Biosphere Reserve, complete with wooden canoe rides through flooded mangrove forests.",
        facts: [
            "The Tonlé Sap is the largest freshwater lake in Southeast Asia and a UNESCO Biosphere Reserve.",
            "Water levels fluctuate dramatically by up to 8 meters between dry and monsoon rainy seasons.",
            "Houses are built on tall bamboo stilts that look like high towers in dry season and floating villas in wet season.",
            "Flooded mangrove forests serve as a vital natural nursery for hundreds of freshwater fish and bird species."
        ],
        activities: [
            {
                title: "Flooded Mangrove Canoe Tour",
                icon: "fa-sailboat",
                desc: "Glide silently through the emerald flooded forest tree canopy guided by local village rowers."
            },
            {
                title: "Visit Floating Schools & Pagodas",
                icon: "fa-school",
                desc: "Observe how children travel to floating classrooms and island pagodas on small wooden skiffs."
            },
            {
                title: "Sunset on the Great Lake",
                icon: "fa-sun",
                desc: "Drift out into the vast horizon of the Great Lake as the golden sun dips into the open water."
            },
            {
                title: "Taste Fresh Lake Lotus Seeds",
                icon: "fa-seedling",
                desc: "Sample freshly harvested green lotus seeds and charcoal-grilled freshwater fish from local boat stalls."
            }
        ],
        travelTips: [
            {
                title: "Understanding Dry vs. Wet Seasons",
                badge: "Seasonal Wisdom",
                icon: "fa-cloud-rain",
                text: "From August to January (wet season), water fills the forest for silent boating. From February to July (dry season), the water recedes to expose the towering 8-meter stilts. Both seasons are stunning in different ways!"
            },
            {
                title: "Take the Women's Canoe Co-op",
                badge: "Community Tip",
                icon: "fa-hand-holding-heart",
                text: "When switching from the large motorized boat, pay the $5–$6 ticket for the small wooden paddle canoe. This directly empowers local women rowers while offering a tranquil, engine-free mangrove experience."
            },
            {
                title: "Depart Town by 3:00 PM for Sunset",
                badge: "Timing Strategy",
                icon: "fa-sun",
                text: "Allow 45 minutes for the drive to the pier, 1 hour in the village & mangrove forest, and arrive on the open lake by 5:30 PM as the golden sunset glows across the water horizon."
            },
            {
                title: "Choose Kampong Phluk over Chong Kneas",
                badge: "Authenticity",
                icon: "fa-compass",
                text: "Kampong Phluk is significantly more authentic, peaceful, and respectful to the local community than commercial, crowded boat piers closer to town."
            },
            {
                title: "Polarized Sunglasses & Bug Spray",
                badge: "Gear Advice",
                icon: "fa-glasses",
                text: "Open lake reflections can create strong midday glare; bring polarized sunglasses, a hat that clips against the wind, and natural mosquito repellent for sunset."
            },
            {
                title: "Small Cash for Floating Drinks",
                badge: "Payments",
                icon: "fa-money-bill-wave",
                text: "Floating boat vendors sell chilled fresh coconuts and peeled green lotus seeds. Carry crisp $1 bills or 4,000 KHR notes, as digital cellular data can be weak on the lake."
            }
        ],
        hotels: [
            {
                name: "Phum Baitang (Zannier Hotels)",
                badge: "5-Star Stilt Villa Luxury",
                rating: "5.0 Stars",
                price: "From $380 / night",
                distance: "25 km from Lake / 8 km from Town",
                highlight: "Private stilt villas nestled in working green rice paddies, infinity pool, cigar lounge.",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Angkor Village Resort",
                badge: "Botanical River Cottages",
                rating: "4.8 Stars",
                price: "From $130 / night",
                distance: "26 km from Lake (Town South)",
                highlight: "Meandering 200m river pool weaving past wooden Khmer cottages in tropical jungle gardens.",
                image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Sokkhak Boutique Resort",
                badge: "Tranquil Garden Hideaway",
                rating: "4.9 Stars",
                price: "From $110 / night",
                distance: "27 km from Lake",
                highlight: "Saltwater pool surrounded by private wooden sundecks and Khmer fine dining.",
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Floating Lake Co-op Restaurant",
                badge: "Fresh Lake Catch",
                cuisine: "Local Freshwater Seafood & Rice",
                signature: "Roasted Tonle Sap Fish with Green Mango Chilli Dip",
                rating: "4.6 Stars",
                distance: "On-site (Floating Pier)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Golden Pumpkin Restaurant",
                badge: "Authentic Family Kitchen",
                cuisine: "Authentic Khmer Amok & Curries",
                signature: "Traditional Steamed Fish Amok in Banana Leaf with Fresh Herbs",
                rating: "4.7 Stars",
                distance: "28 km (Town Center)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Khmer Kitchen Restaurant",
                badge: "Old Market Classic",
                cuisine: "Traditional Khmer Curries & BBQ",
                signature: "Khmer Red Chicken Curry with Baguette & Beef Lok Lak",
                rating: "4.6 Stars",
                distance: "28 km (Old Market)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Kampong+Phluk+Floating+Village+Siem+Reap"
    },
    {
        id: "night-market",
        name: "Siem Reap Night Market & Pub Street",
        khmer: "ផ្សាររាត្រីសៀមរាប",
        tagline: "Bustling Evening Street Food, Artisan Silk Crafts & Starlit Open-Air Lounges",
        category: "Nightlife & Street Food",
        categoryIcon: "fa-moon",
        rating: "4.7",
        reviewCount: "2.8k+ Reviews",
        location: "Old Market / Psar Chaa District (Town Center)",
        bestTime: "6:30 PM – 11:00 PM (Vibrant Atmosphere)",
        admission: "Free Entry (Open 5:00 PM – Midnight Daily)",
        dressCode: "Casual comfortable evening streetwear",
        heroImage: "../../assets/images/province/Night Market.webp",
        description: "The energetic heartbeat of Siem Reap's evening life. Hundreds of illuminated stalls offer handmade Cambodian silk, Kampot peppercorns, woodcarvings, foot reflexology spas, sizzling BBQ carts, and neon-lit cocktail bars.",
        facts: [
            "Established in 2007 as Cambodia's very first dedicated eco-friendly night market.",
            "Streets become pedestrian-only zones from 6:00 PM with live acoustic music and $0.50–$1 draft beer.",
            "Local street food carts serve fresh coconut pancakes (*Num Krok*), beef pin noodles, and banana roti.",
            "Surrounded by historic French colonial architecture along the shaded Siem Reap River walkways."
        ],
        activities: [
            {
                title: "Taste Khmer Street Delicacies",
                icon: "fa-utensils",
                desc: "Sample Num Krok coconut cakes, sweet mango sticky rice, and sizzling BBQ skewers fresh off the grill."
            },
            {
                title: "Shop for Artisan Souvenirs",
                icon: "fa-gift",
                desc: "Find hand-woven silk scarves, silver jewelry, stone carvings, and genuine aromatic Kampot pepper."
            },
            {
                title: "Relax with Foot Reflexology",
                icon: "fa-spa",
                desc: "Enjoy an affordable $4–$6 soothing herbal foot massage after a full day of climbing temple steps."
            },
            {
                title: "Sip Cocktails at Miss Wong",
                icon: "fa-martini-glass",
                desc: "Experience a 1930s Shanghai-style speakeasy lounge serving craft cocktails infused with Cambodian botanicals."
            }
        ],
        travelTips: [
            {
                title: "Friendly 15–20% Bargaining Etiquette",
                badge: "Shopping Hack",
                icon: "fa-handshake",
                text: "Bargaining on non-food crafts and silk is friendly and expected. Greet the vendor with a smile, ask politely for their best price, and aim for a fair 15–20% discount. Never haggle aggressively over small change."
            },
            {
                title: "Look for High-Turnover Street Stalls",
                badge: "Food Safety",
                icon: "fa-utensils",
                text: "When enjoying street delicacies, choose stalls bustling with local Cambodians where the woks are blazing hot and ingredients are cooked fresh right in front of you."
            },
            {
                title: "Bakong KHQR & Small Cash",
                badge: "Payments",
                icon: "fa-qrcode",
                text: "Nearly every market stall accepts digital Bakong KHQR payments on smartphones. If paying cash, carry $1 and $5 bills or 10,000 KHR notes for effortless change."
            },
            {
                title: "Pre-9:00 PM for Families & Diners",
                badge: "Atmosphere",
                icon: "fa-clock",
                text: "From 6:30 PM to 8:30 PM, the market and riverside promenade are relaxed and great for families. After 9:30 PM, Pub Street ramps up into vibrant music, clubs, and neon lounges."
            },
            {
                title: "Hidden Alleyway Cocktail Lounges",
                badge: "Nightlife Secret",
                icon: "fa-martini-glass-citrus",
                text: "Slip away from the main Pub Street strip into *The Lane* or *Alley West* to find intimate speakeasies like *Miss Wong* and *Picasso Bar* serving craft botanical cocktails."
            },
            {
                title: "Temple Fatigue Foot Reflexology",
                badge: "Wellness",
                icon: "fa-spa",
                text: "After walking 15,000 steps around Angkor, stop by air-conditioned spas on 2 Thnou Street for a $4–$6 herbal foot reflexology session."
            }
        ],
        hotels: [
            {
                name: "Viroth's Hotel",
                badge: "World #1 TripAdvisor Winner",
                rating: "5.0 Stars",
                price: "From $160 / night",
                distance: "600 meters (5 mins walk to Night Market)",
                highlight: "50s modernist chic design, 20m emerald saltwater pool, vintage limousine transfers, lush vertical gardens.",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "The Aviary Hotel",
                badge: "Bird-Themed Eco Boutique",
                rating: "4.8 Stars",
                price: "From $95 / night",
                distance: "300 meters (3 mins walk)",
                highlight: "Urban oasis inspired by Cambodian birdlife, saltwater plunge pool, and canopy cafe.",
                image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Heritage Suites Hotel",
                badge: "Colonial Luxury & Jazz",
                rating: "4.9 Stars",
                price: "From $155 / night",
                distance: "1.2 km (4 mins by Tuk-Tuk)",
                highlight: "Classic colonial architecture, private outdoor stone bathtubs, and Thursday live jazz nights.",
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Krousa Lotchea & Street 8 Stalls",
                badge: "Legendary Street Comfort",
                cuisine: "Authentic Khmer Street Comfort Food",
                signature: "Stir-Fried Pin Noodles (*Lot Chha*) with Beef & Fried Duck Egg",
                rating: "4.8 Stars",
                distance: "On-site (Night Market Center)",
                image: "../../assets/images/province/Krousa%20lotchea.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Miss Wong Cocktail Bar & Eatery",
                badge: "1930s Speakeasy Lounge",
                cuisine: "Dim Sum & Asian Small Plates",
                signature: "Steamed Prawn Har Gow & Indochine Lemongrass Martini",
                rating: "4.9 Stars",
                distance: "100 meters (Pub Street Lane)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Mesa Restaurant",
                badge: "Modern Asian Bistro",
                cuisine: "Contemporary Khmer & Grilled Steaks",
                signature: "Grilled Australian Ribeye with Fresh Kampot Peppercorn Sauce",
                rating: "4.8 Stars",
                distance: "200 meters (Hospital Street)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Street+Siem+Reap"
    },
    {
        id: "apsara-dance",
        name: "Apsara Dance Banquet & Royal Theatre",
        khmer: "របាំព្រះរាជទ្រព្យ (អប្សរា)",
        tagline: "UNESCO Intangible Cultural Heritage: Sacred Royal Ballet & 4-Course Khmer Banquet",
        category: "Living Royal Heritage",
        categoryIcon: "fa-crown",
        rating: "4.8",
        reviewCount: "1.6k+ Reviews",
        location: "Apsara Theatre / Kanell Cultural Banquet (Town Center)",
        bestTime: "7:00 PM – 9:30 PM (Dinner 7:15 PM, Show 8:00 PM)",
        admission: "$25 – $45 USD (Includes Royal Dinner & Full Show)",
        dressCode: "Smart casual or elegant evening wear",
        heroImage: "../../assets/images/province/Apsara Dance.webp",
        description: "Inscribed on UNESCO's Intangible Heritage list, classical Khmer dance (*Robam Preah Reach Trop*) is a 1,500-year-old royal art form. Celestial Apsaras perform over 1,500 symbolic hand gestures accompanied by live Pinpeat royal court orchestras and multi-course Khmer dinners.",
        facts: [
            "Inscribed on the UNESCO Intangible Cultural Heritage of Humanity list in 2003.",
            "Dancers master over 1,500 distinct hand and finger gestures communicating flowers, water, fruit, love, and life.",
            "Costumes feature heavy golden tiaras, silk sampots, and ornate brass jewelry weighing up to 5 kg.",
            "Accompanied by a live *Pinpeat* orchestra playing traditional xylophones (Roneat), gongs, and barrel drums."
        ],
        activities: [
            {
                title: "Classical Apsara Ballet",
                icon: "fa-feather",
                desc: "Watch the celestial Mera dance illustrating ancient Hindu mythology with delicate, hypnotic movements."
            },
            {
                title: "Pinpeat Royal Music Concert",
                icon: "fa-music",
                desc: "Listen to the ancient acoustic vibrations of bamboo xylophones, bronze gongs, and double-reed oboes."
            },
            {
                title: "Royal 4-Course Khmer Banquet",
                icon: "fa-utensils",
                desc: "Feast on Royal Saraman Beef Curry, Steamed Fish Amok in banana leaf, and sweet coconut sticky rice."
            },
            {
                title: "Stage Keepsake Photo Session",
                icon: "fa-camera",
                desc: "Meet the lead Apsara dancers on stage after the curtain falls for stunning photos in golden royal regalia."
            }
        ],
        travelTips: [
            {
                title: "Book 24–48 Hours Ahead for Front Tables",
                badge: "Seating Hack",
                icon: "fa-chair",
                text: "Reserve early to request central front-row or elevated center-tier tables with unobstructed views of the dancers' hand gestures."
            },
            {
                title: "7:00 PM Seating for Relaxed Dinner",
                badge: "Arrival Timing",
                icon: "fa-clock",
                text: "The royal banquet dinner begins at 7:15 PM, giving you plenty of time to enjoy appetizers before the theatre lights dim for the performance at 8:00 PM."
            },
            {
                title: "Understand the 1,500 Hand Gestures (*Kbach*)",
                badge: "Cultural Insight",
                icon: "fa-hands",
                text: "Curved fingers touching the thumb represent a bud; an open flexed palm is a blossoming flower; downward pointing hands symbolize rain and sorrow."
            },
            {
                title: "No Flash Photography Etiquette",
                badge: "Etiquette",
                icon: "fa-camera",
                text: "Strobe flash can momentarily blind the dancers during balancing poses; low-light ambient photography and video are warmly permitted."
            },
            {
                title: "Stage Keepsake Photo Opportunity",
                badge: "Memories",
                icon: "fa-image",
                text: "After the finale bow, guests are invited to the edge of the stage to take commemorative photos alongside the royal dancers."
            },
            {
                title: "Smart Casual / Linen Attire",
                badge: "Dress Code",
                icon: "fa-user-tie",
                text: "While casual clothes are acceptable, smart casual or light summer linen matches the elegant palace atmosphere."
            }
        ],
        hotels: [
            {
                name: "Raffles Grand Hotel d'Angkor",
                badge: "1932 Historic Palace",
                rating: "5.0 Stars",
                price: "From $310 / night",
                distance: "1.5 km (5 mins by Tuk-Tuk)",
                highlight: "Historic royal French colonial luxury, 35-meter swimming pool, famous high tea.",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Sofitel Angkor Phokeethra",
                badge: "5-Star Resort Sanctuary",
                rating: "4.9 Stars",
                price: "From $220 / night",
                distance: "2.0 km (7 mins by Tuk-Tuk)",
                highlight: "Freeform lagoon pool, French-Khmer spa, lush tropical landscaped gardens.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Shinta Mani Shack & Resort",
                badge: "Bill Bensley Luxury",
                rating: "4.9 Stars",
                price: "From $180 / night",
                distance: "1.0 km (Town Center)",
                highlight: "Boutique courtyard pool, signature Khmer cocktails, non-profit community foundation.",
                image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Kanell Restaurant & Theatre",
                badge: "On-Stage Royal Dinner",
                cuisine: "Authentic Royal Banquet Set",
                signature: "Steamed Fish Amok Soufflé & Lemongrass Chicken with Jasmine Rice",
                rating: "4.9 Stars",
                distance: "On-site Theatre Dining",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Mealea Restaurant (Wat Bo)",
                badge: "French Colonial & Khmer Banquet",
                cuisine: "Royal Khmer Fine Dining",
                signature: "Braised Beef Cheek in Star Anise Jus & Lemongrass Fish Amok",
                rating: "4.9 Stars",
                distance: "600 meters (Wat Bo Road)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Mahob Khmer Cuisine",
                badge: "Hot Volcanic Stone Tasting",
                cuisine: "Authentic Cambodian Gastronomy",
                signature: "Khmer Beef Tenderloin Sizzled on Hot Volcanic Rock with Kampot Pepper",
                rating: "4.8 Stars",
                distance: "1.2 km (Wat Bo Quarter)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Apsara+Theatre+Siem+Reap"
    },
    {
        id: "wat-bo",
        name: "Wat Bo Village & Heritage Pagoda",
        khmer: "ភូមិវត្តបូព៌ និងវត្តអារាមប្រវត្តិសាស្ត្រ",
        tagline: "Time Out's Global Coolest Neighbourhood: Leafy Streets, Heritage Murals & Specialty Cafes",
        category: "Cool Neighbourhood & Heritage",
        categoryIcon: "fa-tree-city",
        rating: "4.8",
        reviewCount: "680+ Reviews",
        location: "East Bank of Siem Reap River (Downtown East)",
        bestTime: "Morning 7:30 AM (Pagoda) & 3:00 PM – 9:00 PM (Cafes & Dining)",
        admission: "Free Entry (Active Monastery & Public Promenade)",
        dressCode: "Shoulders & knees covered when stepping inside the sacred Vihara",
        heroImage: "https://i.pinimg.com/736x/a1/dc/9f/a1dc9f28eb49e2b7b3e0f1e2209ba50f.jpg",
        description: "Ranked by Time Out as one of the coolest neighbourhoods on Earth, Wat Bo is a picturesque riverside sanctuary blending 18th-century Buddhist temple murals with contemporary Cambodian artist studios, artisan specialty cafes, and tranquil tree-lined streets.",
        facts: [
            "Home to Wat Bo Pagoda, founded in the 18th century, making it one of Siem Reap's oldest continuously active monasteries.",
            "The main Vihara houses rare, vibrant 19th-century wall murals depicting the Reamker (Khmer Ramayana) interwoven with scenes of French colonial daily life.",
            "Voted one of the world's top coolest neighbourhoods in Time Out's prestigious global cultural index.",
            "Famous for having Siem Reap's highest concentration of artisan micro-coffee roasteries and boutique organic eateries."
        ],
        activities: [
            {
                title: "Study 19th-Century Reamker Murals",
                icon: "fa-palette",
                desc: "Admire historic painted frescoes inside the monastery illustrating Khmer legends alongside 19th-century French officers and market life."
            },
            {
                title: "Specialty Micro-Coffee Crawl",
                icon: "fa-mug-hot",
                desc: "Hop between artisan roasteries like Footprint Cafes, The Little Red Fox Espresso, and Missing Socks Laundry Cafe."
            },
            {
                title: "Explore Contemporary Art Boutiques",
                icon: "fa-store",
                desc: "Discover sustainable fashion, lacquerware, hand-thrown ceramics, and contemporary Cambodian art studios."
            },
            {
                title: "Sunset Riverside Stroll",
                icon: "fa-person-walking",
                desc: "Walk along the shaded pedestrian paths of the Siem Reap River as amber streetlamps reflect on the gentle water."
            }
        ],
        travelTips: [
            {
                title: "Respectful Pagoda Etiquette",
                badge: "Temple Etiquette",
                icon: "fa-hands-praying",
                text: "Wat Bo is an active Buddhist monastery where resident monks study. Remove your shoes and hat before stepping onto the Vihara floor."
            },
            {
                title: "Specialty Coffee Roastery Tip",
                badge: "Food & Drink",
                icon: "fa-mug-saucer",
                text: "Local cafes roast beans from Ratanakiri and Mondulkiri highlands. Try an iced coconut latte sweetened with organic palm nectar."
            },
            {
                title: "Hidden Art Studios Along Street 26",
                badge: "Culture Hack",
                icon: "fa-palette",
                text: "Venture down Street 26 and connected quiet alleyways to find independent artisan workshops and fair-trade craft boutiques."
            },
            {
                title: "Bicycle Rental Discovery",
                badge: "Transport",
                icon: "fa-bicycle",
                text: "Wat Bo is flat and shaded with minimal car traffic. Rent a classic cruiser bicycle for $2/day to explore every hidden courtyard."
            },
            {
                title: "Quiet Afternoon Sanctuary",
                badge: "Atmosphere",
                icon: "fa-leaf",
                text: "Between 2:00 PM and 4:30 PM, the monastery garden courtyards are serenely peaceful — ideal for reading and quiet journaling."
            },
            {
                title: "Evening Bistro Reservations",
                badge: "Dining Tip",
                icon: "fa-utensils",
                text: "Popular neighbourhood dining spots like Banlle and Cuisine Wat Damnak fill up quickly; book tables 24 hours in advance."
            }
        ],
        hotels: [
            {
                name: "Treeline Urban Resort",
                badge: "Riverside Eco Chic",
                rating: "4.9 Stars",
                price: "From $140 / night",
                distance: "On-site (Wat Bo Riverside)",
                highlight: "Rooftop infinity pool, curated contemporary art gallery, organic breakfast buffet.",
                image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Viroth's Hotel",
                badge: "World #1 Boutique Winner",
                rating: "5.0 Stars",
                price: "From $160 / night",
                distance: "200 meters (Street 24)",
                highlight: "50s modernist design, 20m emerald saltwater pool, vintage limousine transfers.",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "RiverTree Villa & Spa",
                badge: "Tranquil Tropical Garden",
                rating: "4.8 Stars",
                price: "From $75 / night",
                distance: "150 meters (Wat Bo Village)",
                highlight: "Secluded outdoor pool bordered by frangipani blossoms and Khmer herbal spa.",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Banlle Vegetarian Restaurant",
                badge: "Farm-to-Table Garden",
                cuisine: "Organic Vegetarian & Asian Comfort",
                signature: "Banana Blossom Salad & Creamy Green Curry with Garden Herbs",
                rating: "4.8 Stars",
                distance: "On-site (Street 26)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Tevy's Place (Social Enterprise)",
                badge: "Community & Women Empowerment",
                cuisine: "Homestyle Khmer & Healthy Bowls",
                signature: "Classic Chicken Lok Lak with Lime Peppercorn Dip",
                rating: "4.9 Stars",
                distance: "100 meters (Street 26)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Footprint Cafes & Roasters",
                badge: "Books, Beans & Purpose",
                cuisine: "Specialty Coffee, Brunch & Khmer Bowls",
                signature: "Slow-Drip Mondulkiri Cold Brew & Khmer Fish Sandwich",
                rating: "4.8 Stars",
                distance: "250 meters (Wat Bo Road)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Wat+Bo+Village+Siem+Reap"
    },
    {
        id: "old-market",
        aliases: ["psar-chaa"],
        name: "Old Market (Psar Chaa) & French Quarter",
        khmer: "ផ្សារចាស់ និងតំបន់ស្ថាបត្យកម្មបារាំង",
        tagline: "French Colonial Shaded Boulevards, Morning Spice Bazaars & Riverside Heritage",
        category: "Historic Quarter & Market",
        categoryIcon: "fa-building-columns",
        rating: "4.8",
        reviewCount: "3.1k+ Reviews",
        location: "Psar Chaa / Riverside Promenade (Town Center)",
        bestTime: "6:30 AM – 9:00 AM (Morning Wet Market) & 5:00 PM – 10:00 PM (Heritage Walk)",
        admission: "Free Entry (Public Market & Colonial District)",
        dressCode: "Casual comfortable walking wear",
        heroImage: "https://i.pinimg.com/1200x/65/a6/cd/65a6cdb15fdf7aee8354e46ee5bc2520.jpg",
        description: "The historic epicenter of Siem Reap, where 1920s ochre-hued French colonial buildings line the tree-shaded riverbanks. By morning, Psar Chaa buzzes with local chefs buying fresh river fish and herbs; by twilight, the lantern-lit alleys fill with artisan boutiques and open-air wine bistros.",
        facts: [
            "Built in the early 20th century under the French Protectorate as the primary commercial hub of Siem Reap province.",
            "Preserves distinctive yellow-washed colonial shophouses with green wooden louvered shutters and wrought-iron balconies.",
            "Psar Chaa is the oldest functioning traditional market in the city, selling authentic Kampot pepper, palm sugar, and handwoven silks.",
            "Connected by historic iron and stone footbridges that cross the scenic Siem Reap River."
        ],
        activities: [
            {
                title: "Morning Chef Spice Tour",
                icon: "fa-pepper-hot",
                desc: "Walk the morning market aisles packed with fresh kaffir lime, galangal, lemongrass, and aromatic Kampot peppercorns."
            },
            {
                title: "French Colonial Architecture Walk",
                icon: "fa-camera",
                desc: "Photograph 1920s colonial facades, wooden shutters, and shaded archways along Pokambor and 2 Thnou Street."
            },
            {
                title: "Artisan Silk & Woodcarving Shopping",
                icon: "fa-bag-shopping",
                desc: "Browse authentic Khmer silk scarves, brass statues, and stone handicrafts crafted by provincial village artisans."
            },
            {
                title: "Riverside Lantern Dining",
                icon: "fa-utensils",
                desc: "Enjoy open-air dining along the illuminated river promenade with French wine and Royal Khmer delicacies."
            }
        ],
        travelTips: [
            {
                title: "Morning 7:00 AM Fresh Noodle Breakfast",
                badge: "Breakfast Hack",
                icon: "fa-bowl-food",
                text: "Head to the inner food section around 7:00 AM for steaming bowls of authentic *Num Banh Chok* (fresh rice noodles in fragrant fish green curry) for only $1."
            },
            {
                title: "Vacuum-Sealed Kampot Pepper Hack",
                badge: "Souvenirs",
                icon: "fa-seedling",
                text: "Buy sealed, certified GI (Geographical Indication) black, red, and white Kampot peppercorns directly from established spice vendors."
            },
            {
                title: "Friendly Bargaining Guidelines",
                badge: "Shopping Etiquette",
                icon: "fa-handshake",
                text: "Polite bargaining is customary for handicrafts and clothing. Offer a warm smile and aim for a fair 15–20% discount without aggressive haggling."
            },
            {
                title: "Alley West Secret Speakeasies",
                badge: "Nightlife",
                icon: "fa-martini-glass",
                text: "Explore Alley West and The Lane right beside the market for quiet cocktail speakeasies like Miss Wong and Picasso Bar."
            },
            {
                title: "Crossing Historic Bridges",
                badge: "Photo Spot",
                icon: "fa-bridge",
                text: "The footbridges crossing the Siem Reap River between Old Market and Wat Bo offer stunning golden-hour reflections."
            },
            {
                title: "Bakong KHQR Payments Accepted",
                badge: "Payments",
                icon: "fa-qrcode",
                text: "Nearly all market stalls and surrounding bistros accept digital Bakong KHQR. Keep small $1 and $5 cash notes handy."
            }
        ],
        hotels: [
            {
                name: "FCC Angkor by Avani",
                badge: "Colonial Mansion Heritage",
                rating: "4.8 Stars",
                price: "From $160 / night",
                distance: "800 meters (Pokambor Riverside)",
                highlight: "Historic French Governor's mansion, saltwater swimming pool, vintage Scribe Bar.",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Heritage Suites Hotel",
                badge: "Colonial Grandeur & Jazz",
                rating: "4.9 Stars",
                price: "From $155 / night",
                distance: "1.2 km (4 mins by Tuk-Tuk)",
                highlight: "Classic colonial suites, private outdoor stone soaking tubs, live jazz evenings.",
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Central Suite Residence",
                badge: "Boutique Comfort in Town",
                rating: "4.8 Stars",
                price: "From $80 / night",
                distance: "300 meters (Old Market)",
                highlight: "Central courtyard pool, private balconies, complimentary airport transfers.",
                image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Chanrey Tree Riverside",
                badge: "Lush Garden Setting",
                cuisine: "Countryside Khmer Fine Dining",
                signature: "Roasted Free-Range Chicken with Khmer Herb Stuffing & Charred Eggplant Dip",
                rating: "4.8 Stars",
                distance: "On-site (Pokambor Ave)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Malis Cambodian Restaurant",
                badge: "Living Khmer Cuisine",
                cuisine: "Master Chef Royal Cuisine",
                signature: "Royal Saraman Beef Curry & Baked Goby with Green Mango",
                rating: "4.9 Stars",
                distance: "400 meters (Riverside)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "The Sugar Palm",
                badge: "Celebrated Countryside Heritage",
                cuisine: "Traditional Home-Style Khmer",
                signature: "Authentic Steamed Fish Amok Soufflé in Banana Leaf",
                rating: "4.7 Stars",
                distance: "600 meters (Taphul Road)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Old+Market+Siem+Reap+Psar+Chaa"
    },
    {
        id: "taphul-village",
        name: "Taphul Village Sanctuary",
        khmer: "ភូមិតាភុល (ស្វាយដង្គំ)",
        tagline: "Tranquil Leafy Residential Haven, Boutique Eco-Resorts & Local Artisan Bakeries",
        category: "Boutique Oasis",
        categoryIcon: "fa-spa",
        rating: "4.9",
        reviewCount: "890+ Reviews",
        location: "Svay Dangkum (5 Mins Walk West of Downtown)",
        bestTime: "All Day (Relaxed Oasis Any Season)",
        admission: "Free Entry (Residential & Boutique District)",
        dressCode: "Casual comfortable",
        heroImage: "https://i.pinimg.com/1200x/83/6f/35/836f352d68e26c625eb8cc1b453f8e3d.jpg",
        description: "A quiet, green residential neighbourhood nestled just steps from the energetic town center. Known for its tranquil unpaved lanes shaded by giant rain trees, world-class boutique villas, private saltwater pools, and local French-Khmer bakeries.",
        facts: [
            "Originally established as a quiet residential and handicraft quarter in the early 20th century.",
            "Pioneered sustainable boutique eco-hospitality in Siem Reap with zero-single-use-plastic resorts.",
            "Home to award-winning sourdough bakeries, artisanal patisseries, and quiet yoga shalas.",
            "Offers the ultimate balance: total peaceful sleep while being only 400 meters from downtown restaurants."
        ],
        activities: [
            {
                title: "Relax in Saltwater Garden Pools",
                icon: "fa-water-ladder",
                desc: "Unwind on tropical sun loungers surrounded by frangipani trees and private bamboo gardens."
            },
            {
                title: "Artisan Bakery & Brunch Hopping",
                icon: "fa-bread-slice",
                desc: "Taste flaky butter croissants, sourdough toast with avocado, and cold-pressed passion fruit juices."
            },
            {
                title: "Holistic Herbal Spa Treatments",
                icon: "fa-spa",
                desc: "Experience ancient Khmer herbal body scrubs using fresh turmeric, lemongrass, and local honey."
            },
            {
                title: "Quiet Shaded Sunset Cycling",
                icon: "fa-bicycle",
                desc: "Ride along sleepy residential lanes lined with blooming bougainvillea and traditional Khmer wooden stilt houses."
            }
        ],
        travelTips: [
            {
                title: "Walkable Downtown Shortcut",
                badge: "Transit Tip",
                icon: "fa-shoe-prints",
                text: "Taphul connects directly to Sivatha Boulevard and Pub Street via quiet 5-minute pedestrian laneways."
            },
            {
                title: "Sourdough & Morning Croissant Tip",
                badge: "Breakfast",
                icon: "fa-mug-hot",
                text: "Visit local French-Khmer bakeries before 9:00 AM when warm baguettes and pain au chocolat emerge fresh from the ovens."
            },
            {
                title: "Boutique Spa Booking",
                badge: "Wellness",
                icon: "fa-spa",
                text: "After temple exploration, reserve an evening 90-minute aromatherapy massage at neighbourhood boutique spas."
            },
            {
                title: "Bicycle Exploration",
                badge: "Mobility",
                icon: "fa-bicycle",
                text: "Most Taphul boutique hotels offer complimentary cruiser bicycles to pedal effortlessly into town."
            },
            {
                title: "Local Cambodian Street Vendors",
                badge: "Street Eats",
                icon: "fa-utensils",
                text: "Look for friendly afternoon carts along Taphul Road selling fresh green mango with chili salt and sweet grilled bananas."
            },
            {
                title: "Quiet Hours Etiquette",
                badge: "Community",
                icon: "fa-moon",
                text: "Taphul is a serene residential quarter; keep noise low when returning late at night to respect sleeping families."
            }
        ],
        hotels: [
            {
                name: "Golden Temple Boutique",
                badge: "Traditional Khmer Warmth",
                rating: "4.9 Stars",
                price: "From $110 / night",
                distance: "On-site (Taphul Road)",
                highlight: "Stone-carved swimming pool, complimentary daily massages, high-speed WiFi.",
                image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Koulen Central Hotel",
                badge: "Modern Poolside Comfort",
                rating: "4.8 Stars",
                price: "From $65 / night",
                distance: "200 meters (Sivatha Road)",
                highlight: "Generous rooms, tropical garden terrace, central location.",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Central Boutique Angkor",
                badge: "Budget-Friendly Garden Hideaway",
                rating: "4.7 Stars",
                price: "From $50 / night",
                distance: "300 meters (Taphul Village)",
                highlight: "Twin swimming pools, poolside bar, quiet leafy compound.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "The Sugar Palm Restaurant",
                badge: "Heritage Home Kitchen",
                cuisine: "Authentic Homestyle Khmer",
                signature: "Steamed Fish Amok in Fresh Banana Leaf Soufflé",
                rating: "4.8 Stars",
                distance: "On-site (Taphul Street)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Haven Training Restaurant",
                badge: "Social Impact Dining",
                cuisine: "Modern Asian & Swiss Khmer Fusion",
                signature: "Crispy Fish Fillet in Tamarind Lime Sauce with Jasmine Rice",
                rating: "4.9 Stars",
                distance: "800 meters (Wat Damnak)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Fresh Fruit Factory",
                badge: "Artisanal Dessert & Fruit Shaves",
                cuisine: "Natural Fruit Desserts, Smoothies & Curry",
                signature: "Fresh Mango Passion Fruit Shaved Mountain & Cold Coconut Brew",
                rating: "4.8 Stars",
                distance: "400 meters (Taphul)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Taphul+Village+Siem+Reap"
    },
    {
        id: "phnom-kulen",
        name: "Phnom Kulen Holy Waterfalls & Mountain",
        khmer: "រមណីយដ្ឋានភ្នំគូលែន",
        tagline: "Birthplace of the Khmer Empire (802 AD), 1,000 Lingas & Refreshing Jungle Waterfalls",
        category: "Nature & Sacred Mountain",
        categoryIcon: "fa-mountain-sun",
        rating: "4.8",
        reviewCount: "1.1k+ Reviews",
        location: "Svay Leu District (48 km Northeast of Siem Reap)",
        bestTime: "8:30 AM – 2:30 PM (Morning Waterfall Swim & 1,000 Lingas)",
        admission: "$20 USD (Separate Mountain Pass)",
        dressCode: "Swimwear with cover-up shawl; modest clothing for Preah Ang Thom reclining Buddha",
        heroImage: "../../assets/images/home/heritage1.jpg",
        description: "The sacred plateau where King Jayavarman II proclaimed independence in 802 AD, founding the Angkorian Empire. Dive into two-tiered jungle waterfalls, marvel at the sacred underwater carvings along the River of 1,000 Lingas, and visit the massive 16th-century golden reclining Buddha carved into a giant natural sandstone boulder.",
        facts: [
            "Considered the most sacred mountain in Cambodia and the birthplace of the ancient Angkor Empire.",
            "The riverbed of Kbal Spean features over 1,000 intricately carved Hindu Lingas and Yonis that bless the river waters flowing down to Angkor.",
            "Preah Ang Thom houses Cambodia's largest 16th-century reclining Buddha, sculpted directly from a monolith rock summit.",
            "The lower waterfall has a wide, refreshing natural plunge pool ideal for jungle swimming."
        ],
        activities: [
            {
                title: "Swim in Two-Tiered Jungle Waterfalls",
                icon: "fa-water",
                desc: "Swim beneath refreshing natural cascades and relax on bamboo picnic platforms over clear mountain streams."
            },
            {
                title: "See River of 1,000 Lingas Carvings",
                icon: "fa-gem",
                desc: "Gaze into the crystal stream where sacred Shiva Lingas were carved directly into the underwater sandstone riverbed."
            },
            {
                title: "Climb to Preah Ang Thom Reclining Buddha",
                icon: "fa-hands-praying",
                desc: "Climb the stone staircase to the mountain summit to offer incense before the monumental 8-meter golden reclining Buddha."
            },
            {
                title: "Taste Rare Wild Red Bananas",
                icon: "fa-apple-whole",
                desc: "Sample sweet, aromatic mini red bananas grown exclusively in the volcanic red soil of Mount Kulen."
            }
        ],
        travelTips: [
            {
                title: "One-Way Mountain Road Traffic Rule",
                badge: "Transit Rule",
                icon: "fa-road",
                text: "The mountain access road is strictly one-way: uphill traffic only until 11:30 AM, and downhill traffic only after 12:30 PM. Depart town by 8:00 AM."
            },
            {
                title: "Swimwear Modesty Shawl",
                badge: "Dress Code",
                icon: "fa-shirt",
                text: "Cambodians swim respectfully in light shirts or sarongs. Bring a cover-up shawl and towel when drying off by the falls."
            },
            {
                title: "Waterproof Phone Pouch",
                badge: "Gear Advice",
                icon: "fa-mobile-screen",
                text: "Water mist near the lower falls can be heavy; protect your electronics with a sealed waterproof lanyard pouch."
            },
            {
                title: "Sweet Mountain Red Bananas",
                badge: "Local Delicacy",
                icon: "fa-apple-whole",
                text: "Roadside village stalls sell clusters of sweet red bananas and roasted mountain jackfruit chips unique to Mount Kulen."
            },
            {
                title: "Sturdy Water Shoes for Sandstone",
                badge: "Safety",
                icon: "fa-shoe-prints",
                text: "River rocks can be slippery with moss. Wear strap-on sandals or water shoes with good grip."
            },
            {
                title: "Combine with Banteay Srei on Return",
                badge: "Itinerary Hack",
                icon: "fa-route",
                text: "On your drive back in the afternoon, stop at the pink sandstone jewel temple of Banteay Srei and the Landmine Museum."
            }
        ],
        hotels: [
            {
                name: "Jaya House River Park",
                badge: "5-Star Eco Sanctuary",
                rating: "5.0 Stars",
                price: "From $195 / night",
                distance: "Town Base (Driver to Mountain)",
                highlight: "100% plastic-free oasis, private riverfront gardens, complimentary private Tuk-Tuk.",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Phum Baitang (Zannier Hotels)",
                badge: "Luxury Green Paddy Villas",
                rating: "5.0 Stars",
                price: "From $380 / night",
                distance: "Town West",
                highlight: "Private stilt villas nestled in working green rice paddies, infinity pool, cigar lounge.",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Kulen Elephant Forest Eco Stay",
                badge: "Nature & Wildlife Base",
                rating: "4.9 Stars",
                price: "From $120 / night",
                distance: "Foot of Kulen Mountain",
                highlight: "Ethical elephant conservation sanctuary, jungle bungalows, organic meals.",
                image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Kulen Mountain Jungle BBQ",
                badge: "Scenic Stream Dining",
                cuisine: "Local Khmer Mountain BBQ",
                signature: "Charcoal Grilled River Fish with Chili Lime Dip & Bamboo Sticky Rice",
                rating: "4.7 Stars",
                distance: "On-site (Waterfall Bank)",
                image: "../../assets/images/province/Krousa%20lotchea.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Malis Restaurant Siem Reap",
                badge: "Royal Living Cuisine",
                cuisine: "Master Chef Living Cambodian",
                signature: "Royal Saraman Beef Curry with Lotus Blossom",
                rating: "4.9 Stars",
                distance: "Town Center",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Chanrey Tree Restaurant",
                badge: "Countryside Fine Dining",
                cuisine: "Traditional Khmer Garden",
                signature: "Roasted Free-Range Chicken with Khmer Herb Stuffing",
                rating: "4.8 Stars",
                distance: "Riverside",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Phnom+Kulen+Waterfall+Siem+Reap"
    },
    {
        id: "banteay-srei",
        name: "Banteay Srei (The Pink Sandstone Citadel)",
        khmer: "ប្រាសាទបន្ទាយស្រី",
        tagline: "The Crown Jewel of Classical Khmer Art: Radiant Pink Sandstone & 3D Filigree Carvings",
        category: "UNESCO Sacred Heritage",
        categoryIcon: "fa-landmark-dome",
        rating: "4.9",
        reviewCount: "950+ Reviews",
        location: "Banteay Srei District (32 km North of Siem Reap)",
        bestTime: "7:00 AM – 8:30 AM (Soft Pink Sunrise Glow)",
        admission: "Included in Angkor Pass",
        dressCode: "Strict temple dress code: shoulders and knees covered",
        heroImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
        description: "Revered as the jewel of Khmer art, Banteay Srei was built in 967 AD not by a king, but by a royal Brahmin scholar. Carved from rare rose-pink sandstone, its miniature shrines showcase the most intricate, lace-like 3D stone carvings found anywhere in Asia.",
        facts: [
            "Constructed in 967 AD and dedicated to the Hindu deity Shiva.",
            "Built from rare fine-grained pink sandstone that hardens with age and can be carved like fine wood.",
            "The bas-reliefs are so delicate and detailed that French explorers proclaimed they must have been carved by the gentle hands of women ('Banteay Srei').",
            "Surrounded by tranquil lily-filled moats and rural lotus farmlands."
        ],
        activities: [
            {
                title: "Marvel at 3D Devata & Floral Lintels",
                icon: "fa-gem",
                desc: "Examine miniature multi-layered stone pediments depicting Hindu epics carved in incredible 3-dimensional relief."
            },
            {
                title: "Listen to Traditional Khmer Rhythms",
                icon: "fa-music",
                desc: "Hear local musicians playing traditional Roneat xylophones and Tro fiddles along the shaded wooden park entrance."
            },
            {
                title: "Walk the Lotus Lake Boardwalk",
                icon: "fa-leaf",
                desc: "Stroll along peaceful boardwalks through blooming pink lotus ponds surrounding the ancient moat."
            },
            {
                title: "Visit Banteay Srei Butterfly Sanctuary",
                icon: "fa-dove",
                desc: "Stop at the nearby enclosed tropical garden housing thousands of free-flying native Cambodian butterflies."
            }
        ],
        travelTips: [
            {
                title: "7:00 AM Golden Rose Glow",
                badge: "Photography",
                icon: "fa-camera",
                text: "Arrive right at 7:00 AM when the low morning sun illuminates the pink sandstone with a glowing rose-gold hue before tour crowds arrive."
            },
            {
                title: "Macro Lens / Telephoto Camera Hack",
                badge: "Photo Hack",
                icon: "fa-camera-retro",
                text: "The miniature temple sanctum is rope-protected for conservation. Bring a telephoto zoom lens (70-200mm) to capture ultra-fine stone details."
            },
            {
                title: "Combine with Landmine Museum on Return",
                badge: "Itinerary",
                icon: "fa-route",
                text: "On the 30-minute drive back, stop at the Cambodia Landmine Museum and the Banteay Srei Butterfly Garden."
            },
            {
                title: "Fresh Hand-Peeler Lotus Pods",
                badge: "Local Snack",
                icon: "fa-seedling",
                text: "Roadside villagers sell fresh green lotus pods. Peel the pod to eat sweet, nutty raw lotus seeds."
            },
            {
                title: "Shoulders & Knees Real Garments",
                badge: "Dress Code",
                icon: "fa-shirt",
                text: "Apsara Authority guards strictly enforce covered shoulders and knees with real fabrics (no see-through shawls)."
            },
            {
                title: "Cold Fresh Sugar Cane Juice",
                badge: "Refreshment",
                icon: "fa-glass-water",
                text: "Enjoy a $0.50 freshly pressed cold sugar cane juice with a squeeze of calamansi lime outside the ticket entrance."
            }
        ],
        hotels: [
            {
                name: "Jaya House River Park",
                badge: "Eco Luxury Sanctuary",
                rating: "5.0 Stars",
                price: "From $195 / night",
                distance: "Town Base (30 mins by Car)",
                highlight: "100% plastic-free oasis, private riverfront gardens, complimentary private Tuk-Tuk.",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Sofitel Angkor Phokeethra",
                badge: "French Colonial Luxury",
                rating: "4.9 Stars",
                price: "From $220 / night",
                distance: "28 km (North of Town)",
                highlight: "Magnificent lagoon pool, championship 18-hole golf course, lush botanical gardens.",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Banteay Srei Eco Stay",
                badge: "Village Countryside Lodge",
                rating: "4.8 Stars",
                price: "From $45 / night",
                distance: "2 km from Temple",
                highlight: "Authentic wooden chalets, organic rice paddies, home-cooked country dinners.",
                image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Banteay Srei Lotus Restaurant",
                badge: "Lake View Garden",
                cuisine: "Local Countryside Khmer",
                signature: "Stir-Fried Morning Glory with Crispy Pork & Fresh Lotus Salad",
                rating: "4.7 Stars",
                distance: "On-site (Temple Gate)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Malis Cambodian Restaurant",
                badge: "Living Royal Dining",
                cuisine: "Master Chef Living Khmer",
                signature: "Royal Saraman Beef Curry & Baked River Fish",
                rating: "4.9 Stars",
                distance: "Town Center",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Haven Training Restaurant",
                badge: "Gourmet Social Impact",
                cuisine: "Modern Asian & Khmer Fusion",
                signature: "Coconut Vegetable Curry & Crispy Fish Fillet",
                rating: "4.8 Stars",
                distance: "Town Center",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Banteay+Srei+Siem+Reap"
    },
    {
        id: "ta-prohm",
        name: "Ta Prohm (The Jungle Temple)",
        khmer: "ប្រាសាទតាព្រហ្ម",
        tagline: "Colossal Silk-Cotton Roots Engulfing Ancient 12th-Century Stone Sanctuaries",
        category: "UNESCO Sacred Heritage",
        categoryIcon: "fa-tree",
        rating: "4.9",
        reviewCount: "4.2k+ Reviews",
        location: "Angkor Archaeological Park (12 km Northeast of Downtown)",
        bestTime: "7:30 AM (Morning Mist) or 12:30 PM (Quiet Midday)",
        admission: "Included in Angkor Pass",
        dressCode: "Temple dress code strictly enforced: shoulders & knees covered",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        description: "Preserved intentionally in its semi-wild jungle state, Ta Prohm is a mesmerizing testament to nature's power. Massive silk-cotton and strangler fig tree roots weave through ancient stone galleries, vaulted corridors, and celestial Apsara shrines.",
        facts: [
            "Consecrated in 1186 AD by King Jayavarman VII as a Mahayana Buddhist monastery dedicated to his mother.",
            "Once housed more than 12,500 people, including 18 high priests and 615 classical temple dancers.",
            "Gained global fame as the mystical setting for the iconic 2001 film 'Lara Croft: Tomb Raider'.",
            "Contains the famous 'Echo Chamber' where thumping your chest resonates powerfully throughout the stone vault."
        ],
        activities: [
            {
                title: "Photograph Crocodile Tree Roots",
                icon: "fa-camera",
                desc: "Capture the world-famous sprawling silk-cotton roots embracing ancient carved stone doorways."
            },
            {
                title: "Test Chest Resonance in Echo Chamber",
                icon: "fa-heart-pulse",
                desc: "Stand against the inner wall and gently thump your chest to hear deep acoustic reverberations."
            },
            {
                title: "Explore the Hall of Dancers",
                icon: "fa-masks-theater",
                desc: "Marvel at stone pillars carved with hundreds of dancing celestial Apsaras surrounded by creeping vines."
            },
            {
                title: "Walk Shaded Forest Corridors",
                icon: "fa-shoe-prints",
                desc: "Stroll along cool, lichen-encrusted flagstones sheltered beneath the towering jungle canopy."
            }
        ],
        travelTips: [
            {
                title: "Enter East Gate, Exit West Gate",
                badge: "Routing Secret",
                icon: "fa-route",
                text: "Have your Tuk-Tuk drop you off at the East Gate and meet you at the West Gate. This avoids backtracking and gives you a continuous cinematic walk."
            },
            {
                title: "12:30 PM Empty Temple Window",
                badge: "Crowd Hack",
                icon: "fa-clock",
                text: "Between 12:00 PM and 1:30 PM, tour buses depart for lunch in town. The temple becomes whisper-quiet, perfect for unobstructed photography."
            },
            {
                title: "Echo Chamber Chest Technique",
                badge: "Acoustic Gem",
                icon: "fa-ear-listen",
                text: "In the central sanctuary chamber, back up against the stone wall and tap your chest gently with your fist to feel the low-frequency acoustic rumble."
            },
            {
                title: "Wooden Raised Boardwalk Protection",
                badge: "Eco Protection",
                icon: "fa-shoe-prints",
                text: "Walk strictly on the newly installed raised wooden boardwalks designed to protect ancient tree root networks and delicate stones."
            },
            {
                title: "Wide-Angle Lens Perspective",
                badge: "Photo Hack",
                icon: "fa-camera-retro",
                text: "The giant trees extend over 30 meters high. Use a wide-angle lens (16-35mm) or your phone's 0.5x ultra-wide mode looking upward."
            },
            {
                title: "Jungle Mosquito Repellent",
                badge: "Comfort",
                icon: "fa-shield-virus",
                text: "Dense canopy shade and moisture mean natural mosquito repellent is essential during morning and late afternoon visits."
            }
        ],
        hotels: [
            {
                name: "Raffles Grand Hotel d'Angkor",
                badge: "1932 Historic Landmark",
                rating: "5.0 Stars",
                price: "From $310 / night",
                distance: "10 km (18 mins to East Gate)",
                highlight: "Iconic colonial heritage, Cambodia's largest swimming pool, Elephant Bar.",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Shinta Mani Angkor",
                badge: "Bill Bensley Luxury",
                rating: "4.9 Stars",
                price: "From $180 / night",
                distance: "11 km (Wat Bo Quarter)",
                highlight: "Award-winning design architecture, courtyard pool, community foundations.",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Heritage Suites Hotel",
                badge: "Colonial Charm & Pool",
                rating: "4.9 Stars",
                price: "From $155 / night",
                distance: "10.5 km",
                highlight: "Outdoor stone bathtubs, private gardens, live Thursday jazz.",
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Chanrey Tree Riverside",
                badge: "Riverside Garden Setting",
                cuisine: "Countryside Khmer Fine Dining",
                signature: "Roasted Free-Range Chicken with Khmer Herb Stuffing",
                rating: "4.8 Stars",
                distance: "Pokambor Ave",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Cuisine Wat Damnak",
                badge: "Michelin-Celebrated Dining",
                cuisine: "Modern Seasonal Khmer",
                signature: "Braised Pork Belly with Kroeung Paste & Wild Sand Goby",
                rating: "4.9 Stars",
                distance: "Wat Damnak",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "The Sugar Palm",
                badge: "Celebrated Countryside Classic",
                cuisine: "Traditional Home-Style Khmer",
                signature: "Steamed Fish Amok Soufflé in Banana Leaf",
                rating: "4.7 Stars",
                distance: "Taphul Road",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ta+Prohm+Temple+Siem+Reap"
    },
    {
        id: "apopo-center",
        name: "APOPO Visitor Center (HeroRATs)",
        khmer: "មជ្ឈមណ្ឌលកណ្តុរហេរ៉ូ",
        tagline: "Inspiring Humanitarian Peace Mission: African Giant Pouched Rats Saving Cambodian Lives",
        category: "Humanitarian & Culture",
        categoryIcon: "fa-hand-holding-heart",
        rating: "4.9",
        reviewCount: "1.8k+ Reviews",
        location: "Trapeang Ses Village (5 km North of Old Market)",
        bestTime: "8:30 AM – 4:30 PM (Guided Tours on the Hour)",
        admission: "$10 USD Donation (Directly Funds Mine Clearance)",
        dressCode: "Casual comfortable walking wear",
        heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
        description: "An uplifting, world-renowned center where African giant pouched rats ('HeroRATs') are trained using positive scent-detection to swiftly locate landmines, releasing cleared land back to rural Cambodian farming communities.",
        facts: [
            "HeroRATs are too light to trigger landmines (weighing only ~1 kg) and have saved countless lives across Cambodia.",
            "A single HeroRAT can search an area the size of a tennis court in just 20 minutes — a task that takes human deminers up to 4 days.",
            "100% of admission fees directly fund rural humanitarian mine-clearing operations.",
            "Recipient of the prestigious international PDSA Gold Medal for animal gallantry."
        ],
        activities: [
            {
                title: "Watch Live Scent-Detection Demo",
                icon: "fa-paw",
                desc: "Witness the remarkable HeroRATs quickly scan test fields and scratch the ground accurately upon detecting TNT scents."
            },
            {
                title: "Hold & Meet the Gentle Hero Animals",
                icon: "fa-heart",
                desc: "Meet and hold the friendly, gentle giant pouched rats and take memorable photos with the trainers."
            },
            {
                title: "Meet Cambodian Deminer Heroes",
                icon: "fa-user-shield",
                desc: "Listen to firsthand accounts from Cambodian field deminers who work tirelessly to keep rural children and farmers safe."
            },
            {
                title: "Tour the Peace Exhibition Museum",
                icon: "fa-monument",
                desc: "Explore historic interactive exhibits detailing Cambodia's postwar journey of peace, clearance, and rebirth."
            }
        ],
        travelTips: [
            {
                title: "Book 45-Minute Guided Slot Online",
                badge: "Booking Tip",
                icon: "fa-calendar-check",
                text: "Tours depart hourly between 8:30 AM and 4:30 PM. Reserving your preferred time slot online ensures a private, personalized guide."
            },
            {
                title: "Meet-the-Rat Photo Opportunity",
                badge: "Photo Moment",
                icon: "fa-camera",
                text: "Have your camera ready during the meet-and-greet! The HeroRATs love being held and are extremely calm around children and adults."
            },
            {
                title: "Adopt a HeroRAT Souvenir Certificate",
                badge: "Charity Impact",
                icon: "fa-award",
                text: "You can sponsor an active working HeroRAT for $7/month and receive regular updates and photos from their field missions in Cambodia."
            },
            {
                title: "Air-Conditioned Briefing Theatre",
                badge: "Comfort",
                icon: "fa-snowflake",
                text: "The visitor center features a comfortable, cool multimedia theater with inspiring documentaries before the outdoor field demo."
            },
            {
                title: "Morning Cool Hours (9:00 AM)",
                badge: "Timing Strategy",
                icon: "fa-sun",
                text: "Visit around 9:00 AM or 3:30 PM when outdoor temperatures are cooler and the HeroRATs are at their most energetic."
            },
            {
                title: "Combine with Angkor Silk Farm",
                badge: "Itinerary Tip",
                icon: "fa-route",
                text: "APOPO is located on the Northern corridor; pair your visit seamlessly with Angkor Wat or the Angkor Silk Farm."
            }
        ],
        hotels: [
            {
                name: "Viroth's Hotel",
                badge: "World #1 Boutique Chic",
                rating: "5.0 Stars",
                price: "From $160 / night",
                distance: "4.5 km (Downtown Wat Bo)",
                highlight: "Modernist design, 20m emerald saltwater pool, vintage limousine transfers.",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Treeline Urban Resort",
                badge: "Riverside Eco Sanctuary",
                rating: "4.9 Stars",
                price: "From $140 / night",
                distance: "4.0 km (Riverside)",
                highlight: "Rooftop infinity pool, contemporary art gallery, organic breakfast buffet.",
                image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Jaya House River Park",
                badge: "Eco-Luxury Sanctuary",
                rating: "5.0 Stars",
                price: "From $195 / night",
                distance: "3.5 km (River Park)",
                highlight: "100% plastic-free oasis, private riverfront gardens, complimentary private Tuk-Tuk.",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Haven Training Restaurant",
                badge: "Social Impact & Gourmet",
                cuisine: "Modern Asian & Khmer Fusion",
                signature: "Khmer Coconut Vegetable Curry & Crispy Fish with Tamarind Sauce",
                rating: "4.8 Stars",
                distance: "4.8 km (Wat Damnak)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Tevy's Place",
                badge: "Community & Women Empowerment",
                cuisine: "Homestyle Khmer & Healthy Bowls",
                signature: "Classic Chicken Lok Lak with Lime Peppercorn Dip",
                rating: "4.9 Stars",
                distance: "4.5 km (Wat Bo)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Malis Cambodian Restaurant",
                badge: "Royal Living Cuisine",
                cuisine: "Living Royal Cambodian",
                signature: "Royal Saraman Beef Curry & Baked Goby",
                rating: "4.9 Stars",
                distance: "4.0 km (Riverside)",
                image: "../../assets/images/province/Mesa%20Restaurant.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=APOPO+Visitor+Center+Siem+Reap"
    },
    {
        id: "artisans-angkor",
        name: "Artisans Angkor & Silk Farm",
        khmer: "សិប្បកម្មអង្គរ និងកសិដ្ឋានសូត្រ",
        tagline: "Revival of Ancient Khmer Craftsmanship: Stone Sculpting, Gold Lacquer & Golden Silk",
        category: "Fine Arts & Living Heritage",
        categoryIcon: "fa-palette",
        rating: "4.8",
        reviewCount: "1.4k+ Reviews",
        location: "Stung Thmey (Downtown Workshop) & Puok (Silk Farm)",
        bestTime: "9:00 AM – 4:00 PM (Workshops in Full Swing)",
        admission: "Free Guided Walking Tours",
        dressCode: "Casual comfortable",
        heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
        description: "Created to train rural Cambodian youth in classical Khmer master crafts, Artisans Angkor is an inspiring social enterprise. Watch sculptors chisel fine sandstone, master woodcarvers shape teak, and see golden silkworms spin pure Cambodian silk threads.",
        facts: [
            "Founded in the late 1990s to revive traditional Khmer arts and provide sustainable rural employment.",
            "Employs over 1,000 artisans across Siem Reap province with fair-trade ethical working conditions.",
            "Operates an 8-hectare mulberry plantation in Puok showcasing the entire lifecycle of Cambodian golden silk.",
            "All stone and wood carvings follow exact 12th-century Angkorian proportions and casting techniques."
        ],
        activities: [
            {
                title: "Free Guided Artisan Workshop Walk",
                icon: "fa-person-chalkboard",
                desc: "Walk alongside expert multilingual guides through stone chiseling, woodcarving, and gold leaf gilding stations."
            },
            {
                title: "Watch Golden Silkworm Spinning",
                icon: "fa-worm",
                desc: "Observe how raw golden cocoons are unspooled by hand and woven on traditional wooden floor looms."
            },
            {
                title: "Shop Authentic Fair-Trade Crafts",
                icon: "fa-bag-shopping",
                desc: "Acquire certified master-sculpted stone busts, lacquered jewelry boxes, and raw mulberry silk apparel."
            },
            {
                title: "Relax at Tropical Garden Courtyard",
                icon: "fa-mug-hot",
                desc: "Enjoy iced organic lemongrass tea and coconut pastries under shaded frangipani trees."
            }
        ],
        travelTips: [
            {
                title: "Free Shuttle to Puok Silk Farm",
                badge: "Transport Hack",
                icon: "fa-van-shuttle",
                text: "Artisans Angkor provides a complimentary daily shuttle bus departing from the downtown workshop directly to the Puok Silk Farm (15 km west)."
            },
            {
                title: "Ask Artisans Directly About Their Craft",
                badge: "Interaction",
                icon: "fa-comments",
                text: "The master carvers and weavers welcome questions; your guide will happily translate and explain the complex techniques."
            },
            {
                title: "Authentic Golden Silk Identification",
                badge: "Shopping Wisdom",
                icon: "fa-gem",
                text: "Cambodian golden silk is naturally amber-gold before dying. The fabric has an organic raw sheen that softens with every wash."
            },
            {
                title: "Safe Worldwide Shipping Service",
                badge: "Logistics",
                icon: "fa-box",
                text: "If purchasing heavy sandstone statues or large teak carvings, the boutique provides insured international door-to-door shipping."
            },
            {
                title: "Shaded Courtyard Cafe",
                badge: "Refreshment",
                icon: "fa-mug-saucer",
                text: "The center garden features a lovely shaded open-air cafe serving fresh iced juices and Cambodian coffees."
            },
            {
                title: "Air-Conditioned Showroom",
                badge: "Comfort",
                icon: "fa-snowflake",
                text: "The extensive two-story boutique is fully air-conditioned, making it a great midday retreat when outdoor temperatures peak."
            }
        ],
        hotels: [
            {
                name: "Heritage Suites Hotel",
                badge: "Colonial Luxury & Jazz",
                rating: "4.9 Stars",
                price: "From $155 / night",
                distance: "1.0 km (4 mins by Tuk-Tuk)",
                highlight: "Classic colonial suites, private outdoor stone bathtubs, live jazz nights.",
                image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Shinta Mani Angkor",
                badge: "Design Sanctuary",
                rating: "4.9 Stars",
                price: "From $180 / night",
                distance: "800 meters (Downtown)",
                highlight: "Bill Bensley design architecture, courtyard pool, community foundations.",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            },
            {
                name: "Viroth's Hotel",
                badge: "World #1 Boutique Chic",
                rating: "5.0 Stars",
                price: "From $160 / night",
                distance: "1.2 km (Wat Bo)",
                highlight: "50s modernist design, 20m emerald saltwater pool, vintage limousine transfers.",
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800&auto=format&fit=crop",
                link: "../hotel-list/hotel-list.html"
            }
        ],
        restaurants: [
            {
                name: "Chanrey Tree Restaurant",
                badge: "Riverside Garden Setting",
                cuisine: "Countryside Khmer Fine Dining",
                signature: "Roasted Free-Range Chicken with Khmer Herb Stuffing",
                rating: "4.8 Stars",
                distance: "500 meters (Riverside)",
                image: "../../assets/images/province/Mealea.jpeg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Golden Pumpkin Restaurant",
                badge: "Authentic Family Kitchen",
                cuisine: "Authentic Khmer Amok & Curries",
                signature: "Traditional Steamed Fish Amok in Banana Leaf with Fresh Herbs",
                rating: "4.7 Stars",
                distance: "400 meters (Town Center)",
                image: "../../assets/images/province/Golden%20Pumpkin.jpg",
                link: "../restaurant-list/restaurant-list.html"
            },
            {
                name: "Krousa Lotchea",
                badge: "Legendary Street Comfort",
                cuisine: "Khmer Street Noodles",
                signature: "Stir-Fried Pin Noodles (*Lot Chha*) with Beef & Fried Duck Egg",
                rating: "4.8 Stars",
                distance: "600 meters (Night Market)",
                image: "../../assets/images/province/Krousa%20lotchea.jpg",
                link: "../restaurant-list/restaurant-list.html"
            }
        ],
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Artisans+Angkor+Siem+Reap"
    }
];

// --------------------------------------------------------------------------
// DYNAMIC DETAIL PAGE RENDERING
// --------------------------------------------------------------------------

function getDestinationIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id") || "angkor-wat";
}

function renderDestinationDetail(destinationId) {
    const dest = DESTINATIONS_DATA.find(d => d.id === destinationId || (d.aliases && d.aliases.includes(destinationId))) || DESTINATIONS_DATA[0];

    // Page Title & Meta
    document.title = `${dest.name} — Facts, Activities, Stays & Dining | Traveezy`;

    // Hero Section Elements
    const heroEl = document.getElementById("destHeroSection");
    if (heroEl) {
        heroEl.style.backgroundImage = `url('${dest.heroImage}')`;
    }

    const titleEl = document.getElementById("destTitle");
    if (titleEl) titleEl.innerHTML = `${dest.name} <span class="dest-khmer-sub d-block fs-4 text-white-50">${dest.khmer}</span>`;

    const taglineEl = document.getElementById("destTagline");
    if (taglineEl) taglineEl.textContent = dest.tagline;

    const ratingEl = document.getElementById("destRatingBadge");
    if (ratingEl) ratingEl.innerHTML = `<i class="fa-solid fa-star text-warning me-1"></i> ${dest.rating} (${dest.reviewCount})`;

    const categoryEl = document.getElementById("destCategoryBadge");
    if (categoryEl) categoryEl.innerHTML = `<i class="fa-solid ${dest.categoryIcon} me-1"></i> ${dest.category}`;

    const locationEl = document.getElementById("destLocationBadge");
    if (locationEl) locationEl.innerHTML = `<i class="fa-solid fa-location-dot text-danger me-1"></i> ${dest.location}`;

    // Map Action Button
    const mapBtn = document.getElementById("destMapBtn");
    if (mapBtn) mapBtn.href = dest.mapUrl;

    // Overview & Facts
    const descEl = document.getElementById("destOverviewDesc");
    if (descEl) descEl.textContent = dest.description;

    const factsListEl = document.getElementById("destFactsList");
    if (factsListEl) {
        factsListEl.innerHTML = dest.facts.map(fact => `
            <li class="d-flex align-items-start gap-2 mb-2">
                <i class="fa-solid fa-circle-check text-success mt-1 fs-xs"></i>
                <span class="inter text-secondary small leading-relaxed">${fact}</span>
            </li>
        `).join("");
    }

    // Quick Logistics Pills
    const bestTimeEl = document.getElementById("destBestTime");
    if (bestTimeEl) bestTimeEl.innerHTML = `<i class="fa-regular fa-clock text-primary me-1"></i> <strong>Best Time:</strong> ${dest.bestTime}`;

    const feeEl = document.getElementById("destAdmission");
    if (feeEl) feeEl.innerHTML = `<i class="fa-solid fa-ticket text-success me-1"></i> <strong>Admission:</strong> ${dest.admission}`;

    const dressEl = document.getElementById("destDressCode");
    if (dressEl) dressEl.innerHTML = `<i class="fa-solid fa-shirt text-info me-1"></i> <strong>Dress Code:</strong> ${dest.dressCode}`;

    // Curated Activities
    const activitiesGrid = document.getElementById("destActivitiesGrid");
    if (activitiesGrid) {
        activitiesGrid.innerHTML = dest.activities.map(act => `
            <div class="col-12 col-md-6">
                <div class="dest-activity-card h-100 shadow-sm">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="dest-act-icon">
                            <i class="fa-solid ${act.icon}"></i>
                        </div>
                        <h4 class="playfair-display fw-bold color-navy fs-5 mb-0">${act.title}</h4>
                    </div>
                    <p class="inter text-secondary small leading-relaxed mb-0">${act.desc}</p>
                </div>
            </div>
        `).join("");
    }

    // Multi-Hotels Spotlight Grid
    const hotelGrid = document.getElementById("destHotelsGrid");
    if (hotelGrid) {
        hotelGrid.innerHTML = dest.hotels.map(h => `
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="spotlight-card bg-white border overflow-hidden shadow-sm h-100 d-flex flex-column">
                    <div class="spotlight-img-wrap position-relative">
                        <img src="${h.image}" alt="${h.name}" class="w-100 h-100 object-fit-cover" loading="lazy">
                        <span class="spotlight-badge">
                            <i class="fa-solid fa-hotel text-warning me-1"></i> ${h.badge}
                        </span>
                    </div>
                    <div class="spotlight-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge bg-primary-subtle text-primary rounded-pill px-2 py-1 small fw-semibold">${h.rating}</span>
                            <span class="text-secondary small fw-bold">${h.price}</span>
                        </div>
                        <h4 class="playfair-display fw-bold color-navy fs-5 mb-2">${h.name}</h4>
                        <p class="inter text-secondary small leading-relaxed mb-3 flex-grow-1">${h.highlight}</p>
                        <div class="spotlight-footer">
                            <span class="text-muted small"><i class="fa-solid fa-location-dot text-danger me-1"></i> ${h.distance}</span>
                            <a href="${h.link}" class="btn btn-primary btn-sm rounded-pill px-3 fw-semibold text-white">
                                View Hotel <i class="fa-solid fa-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // Multi-Restaurants Spotlight Grid
    const restGrid = document.getElementById("destRestaurantsGrid");
    if (restGrid) {
        restGrid.innerHTML = dest.restaurants.map(r => `
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="spotlight-card bg-white border overflow-hidden shadow-sm h-100 d-flex flex-column">
                    <div class="spotlight-img-wrap position-relative">
                        <img src="${r.image}" alt="${r.name}" class="w-100 h-100 object-fit-cover" loading="lazy">
                        <span class="spotlight-badge">
                            <i class="fa-solid fa-utensils text-warning me-1"></i> ${r.badge}
                        </span>
                    </div>
                    <div class="spotlight-body">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <span class="badge bg-warning-subtle text-dark rounded-pill px-2 py-1 small fw-semibold">${r.rating}</span>
                            <span class="text-secondary small fst-italic">${r.cuisine}</span>
                        </div>
                        <h4 class="playfair-display fw-bold color-navy fs-5 mb-2">${r.name}</h4>
                        <p class="inter text-secondary small leading-relaxed mb-3 flex-grow-1">
                            <strong>Signature Dish:</strong> ${r.signature}
                        </p>
                        <div class="spotlight-footer">
                            <span class="text-muted small"><i class="fa-solid fa-location-dot text-danger me-1"></i> ${r.distance}</span>
                            <a href="${r.link}" class="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold">
                                View Dining <i class="fa-solid fa-arrow-right ms-1"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // Expanded Multi-Travel Tips Grid
    const tipsContainer = document.getElementById("destTipsGrid");
    if (tipsContainer) {
        tipsContainer.innerHTML = dest.travelTips.map(tip => `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="dest-tip-box h-100 shadow-sm d-flex flex-column">
                    <div class="dest-tip-header">
                        <div class="dest-tip-icon">
                            <i class="fa-solid ${tip.icon}"></i>
                        </div>
                        <span class="badge bg-light text-secondary border dest-tip-badge">
                            ${tip.badge}
                        </span>
                    </div>
                    <h5 class="playfair-display fw-bold color-navy fs-6 mb-2">${tip.title}</h5>
                    <p class="inter text-secondary small leading-relaxed mb-0 flex-grow-1">${tip.text}</p>
                </div>
            </div>
        `).join("");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentId = getDestinationIdFromUrl();
    renderDestinationDetail(currentId);
});
