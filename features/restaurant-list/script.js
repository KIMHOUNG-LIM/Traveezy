const listings = [
  { name: "Mesa Restaurant", location: "Wat Bo Road, Siem Reap", rating: 5, oldPrice: 45, price: 35, img: "../../assets/images/province/Mesa Restaurant.jpg", type: "Fine Dining" },
  { name: "Golden Pumpkin", location: "Sok San Road, Siem Reap", rating: 5, oldPrice: 15, price: 10, img: "../../assets/images/province/Golden Pumpkin.jpg", type: "Traditional Khmer" },
  { name: "Mealea Restaurant", location: "Oum Chhay Street, Wat Bo", rating: 4, oldPrice: 50, price: 40, img: "../../assets/images/province/Mealea.jpeg", type: "Fine Dining" },
  { name: "Krousa Lotchea", location: "Pub Street, Siem Reap", rating: 4, oldPrice: 8, price: 5, img: "../../assets/images/province/Krousa lotchea.jpg", type: "Street Food" },
  { name: "Wat Bo Cafe", location: "Wat Bo Village, Siem Reap", rating: 5, oldPrice: 12, price: 8, img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", type: "Cafes & Bars" },
  { name: "Siem Reap Food Hub", location: "Night Market, Siem Reap", rating: 5, oldPrice: 6, price: 4, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", type: "Street Food" }
];

// This grabs the empty <div id="listingContainer"> so we can inject restaurant cards
const container = document.getElementById('listingContainer');


/* -------------------------------------------------------------------------
   2) BUILDING ONE LISTING CARD
   ------------------------------------------------------------------------- */
function cardHtml(item, idx) {
  const stars = '★'.repeat(item.rating); // turns rating:5 into "★★★★★"
  return `
  <div class="listing-card" data-type="${item.type}">
    <a href="../restaurant-detail/food.html" class="listing-thumb-link">
      <div class="listing-thumb" style="background-image:url('${item.img}')">
        <div class="fav-heart" data-idx="${idx}"><i class="fa-solid fa-heart"></i></div>
      </div>
    </a>
    <div class="listing-body">
      <div class="listing-top">
        <div>
          <div class="listing-name">${item.name}</div>
          <div class="listing-loc"><i class="fa-solid fa-location-dot"></i> ${item.location}</div>
        </div>
        <div class="stars">${stars}</div>
      </div>

      <div class="listing-stats">
        <span><i class="fa-solid fa-bowl-food"></i> ${item.type}</span>
        <div class="sep"></div>
        <span><i class="fa-solid fa-utensils"></i> Dine-in / Takeaway</span>
        <div class="sep"></div>
        <span><i class="fa-solid fa-clock"></i> 10 AM - 10 PM</span>
      </div>

      <div class="listing-bottom">
        <div>
          <span class="price-old">$${item.oldPrice}</span>
          <span class="price-new">$${item.price}<span>/person</span></span>
        </div>
        <a href="../restaurant-detail/food.html" class="btn-detail">
          View Detail
          <span class="circle"><i class="fa-solid fa-chevron-right"></i></span>
        </a>
      </div>
    </div>
  </div>`;
}


/* -------------------------------------------------------------------------
   3) DRAWING THE LIST (with filtering + sorting)
   ------------------------------------------------------------------------- */
function render(filterTypes = []) {
  // Step 1: keep only listings matching a checked filter
  let filtered = filterTypes.length
    ? listings.filter(l => filterTypes.includes(l.type))
    : listings.slice();

  // Step 2: reorder the results based on the sort dropdown
  const sortBy = document.getElementById('sortSelect')?.value || 'default';
  if (sortBy === 'low') filtered.sort((a, b) => a.price - b.price);   // cheapest first
  if (sortBy === 'high') filtered.sort((a, b) => b.price - a.price);   // priciest first
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating); // best rated first

  // Step 3: turn every remaining listing into HTML and inject it into the page
  container.innerHTML = filtered.map((item, i) => cardHtml(item, i)).join('');

  // Step 4: update the counter text
  document.getElementById('resultsCount').textContent = filtered.length;

  // Step 5: re-attach the heart click behavior
  attachHeartHandlers();
}


/* -------------------------------------------------------------------------
   4) FAVORITE HEART BUTTON
   ------------------------------------------------------------------------- */
function attachHeartHandlers() {
  document.querySelectorAll('.fav-heart').forEach(heart => {
    heart.addEventListener('click', (event) => {
      event.stopPropagation(); // prevent navigation when favoriting!
      heart.classList.toggle('active');
      showToast(heart.classList.contains('active') ? 'Added to favorites' : 'Removed from favorites');
    });
  });
}


/* -------------------------------------------------------------------------
   5) HOOKING UP THE FILTER CHECKBOXES + SORT DROPDOWN
   ------------------------------------------------------------------------- */
document.querySelectorAll('.type-filter').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checked = [...document.querySelectorAll('.type-filter:checked')].map(c => c.value);
    render(checked);
  });
});

document.getElementById('sortSelect').addEventListener('change', () => {
  const checked = [...document.querySelectorAll('.type-filter:checked')].map(c => c.value);
  render(checked);
});


/* -------------------------------------------------------------------------
   6) NEWSLETTER SUBSCRIBE BUTTON
   ------------------------------------------------------------------------- */
document.getElementById('subBtn').addEventListener('click', () => {
  const val = document.getElementById('subEmail').value.trim();
  if (val && val.includes('@')) {
    showToast('Subscribed! Welcome aboard.');
    document.getElementById('subEmail').value = '';
  } else {
    showToast('Please enter a valid email.');
  }
});


/* -------------------------------------------------------------------------
   7) "BOOKING NOW" BUTTON (hero section)
   Handled globally by the booking-modal component via data-booking-trigger.
   ------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------
   8) TOAST POPUP HELPER
   ------------------------------------------------------------------------- */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove('show'), 2200);
}


/* -------------------------------------------------------------------------
   9) FIRST LOAD
   ------------------------------------------------------------------------- */
render();
