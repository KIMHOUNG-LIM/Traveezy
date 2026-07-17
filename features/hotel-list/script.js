const listings = [
  { name: "Sunset Villa", location: "Beverly Hill, CA", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", type: "Villas" },
  { name: "Sunset Villa", location: "Beverly Hill, CA", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop", type: "Hotels" },
  { name: "Sunset Villa", location: "Beverly Hill, CA", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop", type: "Apartments" },
  { name: "Sunset Villa", location: "Beverly Hill, CA", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop", type: "Vacation Homes" },
  { name: "Sunset Villa", location: "Beverly Hill, CA", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop", type: "Villas" },
  { name: "Sunset Villa", location: "Beverly Hill, CA", size: "4,200 sq.ft.", beds: 5, baths: 5, rating: 5, oldPrice: 650, price: 550, img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop", type: "Hotels" }
];

// This grabs the empty <div id="listingContainer"> from index.html so we
// can fill it with listing cards using JavaScript.
const container = document.getElementById('listingContainer');


/* -------------------------------------------------------------------------
   2) BUILDING ONE LISTING CARD
   This function takes one listing object (from the list above) and turns
   it into the HTML "card" you see on the page — photo, name, stats, price,
   and button. Think of it like a printable template that gets the details
   filled in each time.
   ------------------------------------------------------------------------- */
function cardHtml(item, idx) {
  const stars = '★'.repeat(item.rating); // turns rating:5 into "★★★★★"
  return `
  <div class="listing-card" data-type="${item.type}">
    <div class="listing-thumb" style="background-image:url('${item.img}')">
      <div class="fav-heart" data-idx="${idx}"><i class="fa-solid fa-heart"></i></div>
    </div>
    <div class="listing-body">
      <div class="listing-top">
        <div>
          <div class="listing-name">${item.name}</div>
          <div class="listing-loc"><i class="fa-solid fa-location-dot"></i> ${item.location}</div>
        </div>
        <div class="stars">${stars}</div>
      </div>

      <div class="listing-stats">
        <span><i class="fa-solid fa-expand"></i> ${item.size}</span>
        <div class="sep"></div>
        <span><i class="fa-solid fa-bed"></i> ${item.beds} bed</span>
        <div class="sep"></div>
        <span><i class="fa-solid fa-bath"></i> ${item.baths} bath</span>
      </div>

      <div class="listing-bottom">
        <div>
          <span class="price-old">$${item.oldPrice}</span>
          <span class="price-new">$${item.price}<span>/day</span></span>
        </div>
        <button class="btn-detail">
          View Detail
          <span class="circle"><i class="fa-solid fa-chevron-right"></i></span>
        </button>
      </div>
    </div>
  </div>`;
}


/* -------------------------------------------------------------------------
   3) DRAWING THE LIST (with filtering + sorting)
   This is the "engine" that decides which cards to show and in what order,
   then draws them all into the page at once.
   - filterTypes: which checkboxes are ticked (e.g. ["Villas","Hotels"])
   - it also reads the sort dropdown's current choice
   ------------------------------------------------------------------------- */
function render(filterTypes = []) {
  // Step 1: keep only listings matching a checked filter (or show all
  // listings if no checkbox is ticked).
  let filtered = filterTypes.length
    ? listings.filter(l => filterTypes.includes(l.type))
    : listings.slice();

  // Step 2: reorder the results based on the sort dropdown.
  const sortBy = document.getElementById('sortSelect')?.value || 'default';
  if (sortBy === 'low') filtered.sort((a, b) => a.price - b.price);   // cheapest first
  if (sortBy === 'high') filtered.sort((a, b) => b.price - a.price);   // priciest first
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating); // best rated first

  // Step 3: turn every remaining listing into HTML and inject it into the page.
  container.innerHTML = filtered.map((item, i) => cardHtml(item, i)).join('');

  // Step 4: update the little "X stays found" counter text.
  document.getElementById('resultsCount').textContent = filtered.length;

  // Step 5: re-attach the heart click behavior (needed every time we
  // redraw the cards, since the old heart icons were just replaced).
  attachHeartHandlers();
}


/* -------------------------------------------------------------------------
   4) FAVORITE HEART BUTTON
   Clicking the heart on a card toggles it red/gray and shows a small
   confirmation message at the bottom of the screen.
   ------------------------------------------------------------------------- */
function attachHeartHandlers() {
  document.querySelectorAll('.fav-heart').forEach(heart => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('active');
      showToast(heart.classList.contains('active') ? 'Added to favorites' : 'Removed from favorites');
    });
  });
}


/* -------------------------------------------------------------------------
   5) HOOKING UP THE FILTER CHECKBOXES + SORT DROPDOWN
   Whenever a checkbox or the dropdown changes, we re-run render() with the
   currently ticked filters, which redraws the list to match.
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
   Checks that something that looks like an email was typed, then shows a
   confirmation message. (This is just a visual demo — to actually collect
   emails you'd need to connect this to an email service or backend.)
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
   Currently just shows a friendly message. Swap this out later to scroll
   to a booking form, or open a booking page, once you build one.
   ------------------------------------------------------------------------- */
document.getElementById('bookingBtn').addEventListener('click', () => {
  showToast("Let's find your perfect stay!");
});


/* -------------------------------------------------------------------------
   8) TOAST POPUP HELPER
   A small reusable function: give it any message, and it slides the black
   pill up from the bottom of the screen for about 2 seconds, then hides it.
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
   Draws the full, unfiltered list of stays the moment the page opens.
   ------------------------------------------------------------------------- */
render();
