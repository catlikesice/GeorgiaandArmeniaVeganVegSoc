/**
 * Simple i18n helper shared across pages.
 * Provides translation lookup, language persistence, and selector syncing.
 */
const translations = {
  en: {
    "index.meta.title": `Ethical Food Association of Georgia and Armenia`,
    "index.header.title": `Ethical Food Association of Georgia and Armenia`,
    "index.header.tagline": `Nurturing compassionate communities rooted in plant-based, fair trade, organic, and sustainable values.`,
    "index.nav.home": `Home`,
    "index.nav.about": `About`,
    "index.nav.programs": `Programs & Initiatives`,
    "index.nav.events": `Events & Gatherings`,
    "index.nav.restaurants": `Restaurants`,
    "index.nav.restaurantLabel": `Choose a city to view featured restaurants`,
    "common.city.placeholder": `Select a city`,
    "common.city.tbilisi": `Tbilisi`,
    "common.city.kutaisi": `Kutaisi`,
    "common.city.batumi": `Batumi`,
    "common.city.yerevan": `Yerevan`,
    "index.nav.recipes": `Recipes`,
    "index.nav.membership": `Membership`,
    "index.nav.membershipBenefits": `Benefits`,
    "index.nav.membershipJoin": `Join`,
    "index.nav.contact": `Contact`,
    "common.language.label": `Select language`,
    "common.language.english": `English`,
    "common.language.russian": `Русский`,
    "common.language.georgian": `ქართული`,
    "common.language.armenian": `Հայերեն`,
    "index.home.heading": `Welcome`,
    "index.home.body": `Welcome to the Ethical Food Association of Georgia and Armenia. We promote plant-based living alongside fair trade partnerships, organic agriculture, and community-wide sustainability.`,
    "index.about.heading": `About the Association`,
    "index.about.body": `We collaborate with local advocates, fair trade cooperatives, organic farmers, and policymakers to expand access to ethical, plant-centered, and sustainable food systems across the Caucasus region.`,
    "index.programs.heading": `Programs & Initiatives`,
    "index.programs.body": `Our core programs include school outreach, culinary training for restaurants, fair trade market development, farm partnerships, and public education campaigns that highlight the benefits of organic, plant-forward, and sustainable living.`,
    "index.events.heading": `Events & Gatherings`,
    "index.events.body": `Seasonal markets, urban garden tours, film screenings, and volunteer meetups help us build supportive networks and celebrate sustainable food traditions.`,
    "index.restaurants.heading": `Restaurants`,
    "index.restaurants.body": `Explore our trusted network of plant-forward, fair trade, and organic dining partners across the region.`,
    "index.recipes.heading": `Recipes & Nutrition`,
    "index.recipes.body": `We share culturally diverse meal plans, chef-developed recipes, and nutrition tips for every stage of life.`,
    "index.membership.heading": `Membership & Volunteers`,
    "index.membership.benefits.heading": `Benefits`,
    "index.membership.benefits.body": `Our membership program actively promotes policies that benefit vegetarian, vegan, sustainable, and fair trade businesses while equipping every member with advocacy tools, collaborative trainings, and regional impact updates.`,
    "index.membership.benefits.business.heading": `Business Membership`,
    "index.membership.benefits.business.item1": `Quarterly strategy briefings with partner organizations and policy action teams`,
    "index.membership.benefits.business.item2": `Featured advertising across association publications and digital channels`,
    "index.membership.benefits.business.item3": `Sponsored showcases and product demos at association-funded events`,
    "index.membership.benefits.business.item4": `Tailored support to align business campaigns with veg-forward and fair trade policy priorities`,
    "index.membership.benefits.individual.heading": `Individual Membership`,
    "index.membership.benefits.individual.item1": `Exclusive discounts at vegetarian, vegan, sustainable, and fair trade businesses that are part of our network`,
    "index.membership.join.heading": `Join`,
    "index.membership.join.body": `Ready to get involved? Choose the membership path that fits your goals, launch a neighborhood initiative, or connect with our team to start a new chapter.`,
    "index.membership.join.item1": `Select <em>Business Membership</em> to co-create campaigns, shape policy positions, and access promotional partnerships`,
    "index.membership.join.item2": `Select <em>Individual Membership</em> to enjoy discounts at participating member businesses while championing veg-forward, sustainable, and fair trade policies`,
    "index.membership.join.item3": `Partner with mentors to design community programming rooted in veg-forward, sustainable, and fair trade principles as a business member`,
    "index.membership.join.item4": `Coordinate with regional leads for collaborative projects across Georgia and Armenia through business membership cohorts`,
    "index.membership.join.link": `Connect with our team`,
    "index.contact.heading": `Contact & Partnerships`,
      "index.contact.body": `Connect with us to collaborate on community programs, request media interviews, or become a sponsoring partner.`,
      "common.footer.cta": `Looking for more plant-based, fair trade, and organic destinations? Explore regional partners through the <a class="text-link" href="../index.html">Ethical Food Association of Georgia and Armenia</a>.`,
      "restaurants.tbilisi.meta.title": `Tbilisi Vegetarian Restaurants | Ethical Food Association of Georgia and Armenia`,
      "restaurants.tbilisi.header.tagline": `Tbilisi Conscious Dining Guide · Curated around plant-based, fair trade, organic, and sustainable experiences.`,
      "restaurants.tbilisi.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">City Spotlight · Tbilisi</p>
          <h2>Find the most vibrant vegetarian, fair trade, and organic kitchens in the Georgian capital.</h2>
          <p>From plant-forward khachapuri to ethically sourced coffees, these restaurants showcase the creativity and warmth behind Tbilisi’s thriving sustainable dining scene.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">See the featured table</a>
            <a class="cta-button ghost" href="#top-spots">Browse the full list</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Seasonal menus</span>
              <span class="highlight-detail">Culinary teams update dishes quarterly to spotlight local harvests.</span>
            </li>
            <li>
              <span class="highlight-title">Sustainable sourcing</span>
              <span class="highlight-detail">Many partners work directly with organic growers in Kakheti and Kartli.</span>
            </li>
            <li>
              <span class="highlight-title">Inclusive dining</span>
              <span class="highlight-detail">Gluten-free, raw, and family-friendly options across the lineup.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Neighborhood dining highlights">
          <div class="sidecard-inner">
            <p class="sidecard-title">Neighborhood Focus</p>
            <ul>
              <li>Sololaki – cozy cafés &amp; artisan desserts</li>
              <li>Vake – modern plant-forward bistros</li>
              <li>Old Tbilisi – historic courtyards with live music</li>
              <li>Saburtalo – casual lunch spots near tech hubs</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.tbilisi.featured.html": `
        <div class="section-heading">
          <h2>Featured Experience</h2>
          <p>Our monthly spotlight shares one standout restaurant delivering unforgettable vegetarian hospitality.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-livin">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Editor's Pick</span>
            <h3 id="featured-livin">Livin Café Tbilisi</h3>
            <p>Set inside a light-filled courtyard in Vake, Livin Café layers Georgian vegetables with Levantine spices, house-fermented pickles, and cold-pressed juices. The team’s zero-waste pantry and relaxed service make it a refreshing pause between museum visits and park strolls.</p>
            <dl class="feature-details">
              <div>
                <dt>Neighborhood</dt>
                <dd>Vake</dd>
              </div>
              <div>
                <dt>Signature dish</dt>
                <dd>Kababi mushroom shawarma with tarragon tahini</dd>
              </div>
              <div>
                <dt>Good to know</dt>
                <dd>Solar-roasted coffee flights, refillable juice growlers</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/uFAK3f5oQd3Livin8" target="_blank" rel="noopener noreferrer">View on map</a>
              <a class="cta-button ghost" href="https://www.instagram.com/livincafetbilisi" target="_blank" rel="noopener noreferrer">Visit page</a>
            </div>
            <p class="feature-note">Order the chef’s tasting tray before 18:00 to pair it with a complimentary cold brew.</p>
          </div>
        </article>
      `,
      "restaurants.tbilisi.topSpots.html": `
        <div class="section-heading">
          <h2>Top Vegetarian Restaurants</h2>
          <p>Handpicked dining rooms known for fresh ingredients, attentive service, and vegetarian-first menus.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Leila</h3>
              <p class="card-subtitle">Old Tbilisi · Fusion café in a historical courtyard</p>
            </header>
            <p>Bright, spice-driven plates blending Georgian and Middle Eastern influences. Expect colorful hummus boards, wild herb soups, and kombucha on tap.</p>
            <ul class="tag-list">
              <li class="tag">Vegan-friendly</li>
              <li class="tag">Gluten-aware</li>
              <li class="tag">Live music</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 10:00–22:00</span>
              <span>₾₾ · Courtyard seating</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/j5uH5CYR4s5Leila" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Mama Terra</h3>
              <p class="card-subtitle">Vake · Bright all-day café with build-your-own bowls</p>
            </header>
            <p>Cold-pressed juices, hearty breakfast wraps, and grain bowls topped with roasted vegetables and house-made sauces. Perfect for a relaxed brunch or remote work session.</p>
            <ul class="tag-list">
              <li class="tag">Organic produce</li>
              <li class="tag">Brunch</li>
              <li class="tag">Workspace friendly</li>
            </ul>
            <div class="restaurant-meta">
              <span>Mon–Sat 09:00–21:00</span>
              <span>₾₾ · Free Wi-Fi</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/LwcX6nSPvXLGzTtM7" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Living Vino</h3>
              <p class="card-subtitle">Mtatsminda · Natural wine bar with seasonal tasting plates</p>
            </header>
            <p>A chic loft space featuring raw desserts, small plates, and a curated list of Georgian qvevri wines. Hosts plant-based pairing nights twice a month.</p>
            <ul class="tag-list">
              <li class="tag">Natural wine</li>
              <li class="tag">Raw desserts</li>
              <li class="tag">Date night</li>
            </ul>
            <div class="restaurant-meta">
              <span>Wed–Sun 17:00–00:00</span>
              <span>₾₾₾ · Reservations advised</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/xrRcCtk7o3YcQG4E9" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Hummusbar Tbilisi</h3>
              <p class="card-subtitle">Saburtalo · Casual counter-service with Middle Eastern classics</p>
            </header>
            <p>Whipped hummus, falafel wraps, and warming soups prepared with locally sourced legumes. Offers family platters and takeaway picnic boxes.</p>
            <ul class="tag-list">
              <li class="tag">Family-friendly</li>
              <li class="tag">Takeaway</li>
              <li class="tag">Budget-friendly</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 11:00–23:00</span>
              <span>₾ · Delivery available</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/4iU3UkVfwg12fU3g7" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Kiwi Vegan Café &amp; Bistro</h3>
              <p class="card-subtitle">Sololaki · Community kitchen with global comfort plates</p>
            </header>
            <p>Beloved for vibrant salads, nut-based cheeses, and hearty lentil stews, Kiwi pairs Georgian produce with international flavors. Expect friendly staff, a lending library, and plenty of plugs for laptops.</p>
            <ul class="tag-list">
              <li class="tag">Plant-based</li>
              <li class="tag">Co-working friendly</li>
              <li class="tag">Live music</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 10:00–21:00</span>
              <span>₾₾ · Courtyard seating</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/mM5sFQEbbcTbilisi" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
        </div>
      `,
      "restaurants.tbilisi.plan.html": `
        <div class="section-heading">
          <h2>Plan Your Visit</h2>
          <p>Blend your dining itinerary with markets, coffee breaks, and cultural stops.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Market Morning</h3>
            <p>Start your day at the Dezerter Bazaar with fresh fruit tastings and spice shopping.</p>
            <ul>
              <li>Sample churchkhela made with walnut paste.</li>
              <li>Pick up local tkemali sauces for souvenirs.</li>
              <li>Walk to nearby Mama Terra for lunch specials.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Evening Crawl</h3>
            <p>String together an evening of rooftop views and garden patios.</p>
            <ul>
              <li>Golden hour mocktails at Living Vino.</li>
              <li>Dinner at Leila with live folk music.</li>
              <li>Cap the night with raw desserts at Kiwi Café.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Insider Tips</h3>
            <p>Make the most of Tbilisi’s vegetarian network.</p>
            <ul>
              <li>Call ahead for English-language cooking classes.</li>
              <li>Ask about plant-based khinkali specials on weekends.</li>
              <li>Carry reusable containers—many cafés offer discounts.</li>
            </ul>
          </article>
        </div>
      `,
      "restaurants.batumi.meta.title": `Batumi Vegetarian Restaurants | Ethical Food Association of Georgia and Armenia`,
      "restaurants.batumi.header.title": `Batumi Conscious Dining Guide`,
      "restaurants.batumi.header.tagline": `Curated by the Ethical Food Association of Georgia and Armenia to highlight plant-based, fair trade, organic, and sustainable coastal kitchens.`,
      "restaurants.batumi.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">City Spotlight · Batumi</p>
          <h2>Soak up Black Sea breezes while exploring Ajara’s coastal plant, fair trade, and organic cuisine.</h2>
          <p>Batumi’s conscious tables celebrate citrus groves, tea gardens, and seaside markets through sustainable sourcing. From sunrise smoothie bars to twilight wine terraces, your ethically-minded journey starts here.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">See the featured table</a>
            <a class="cta-button ghost" href="#top-spots">Browse the full list</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Coastal bounty</span>
              <span class="highlight-detail">Chefs lean on mandarins, tea leaves, and mountain greens from Ajara.</span>
            </li>
            <li>
              <span class="highlight-title">Sunrise-to-midnight energy</span>
              <span class="highlight-detail">Beach cafés, night markets, and rooftop lounges keep the city humming.</span>
            </li>
            <li>
              <span class="highlight-title">Art-meets-food</span>
              <span class="highlight-detail">Expect gallery pop-ups, DJ sets, and seaside yoga pairings with menus.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Neighborhood dining highlights">
          <div class="sidecard-inner">
            <p class="sidecard-title">Neighborhood Focus</p>
            <ul>
              <li>Old Boulevard · seaside promenades and terrace cafés</li>
              <li>New Boulevard · modern rooftops near the dancing fountains</li>
              <li>Batumi Bay · harbor-front bistros with live jazz</li>
              <li>Adjara Hills · tea plantations and eco guesthouses</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.batumi.featured.html": `
        <div class="section-heading">
          <h2>Featured Experience</h2>
          <p>Our featured Batumi restaurant brings coastal harvests to the table with inventive hospitality.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-citrus">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Editor's Pick</span>
            <h3 id="featured-citrus">Citrus &amp; Tea House</h3>
            <p>Inside a renovated seaside villa, Citrus &amp; Tea House layers tangerine glazes, smoked aubergine, and wild herb dumplings with ceramics fired by local artists. Their tea sommelier curates rare black teas from nearby plantations.</p>
            <dl class="feature-details">
              <div>
                <dt>Neighborhood</dt>
                <dd>Old Boulevard</dd>
              </div>
              <div>
                <dt>Signature dish</dt>
                <dd>Mandarin lacquered cauliflower with hazelnut mousse</dd>
              </div>
              <div>
                <dt>Good to know</dt>
                <dd>Sunset tea ceremonies every Friday at 19:30</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/CitrusTeaHouseBatumi" target="_blank" rel="noopener noreferrer">View on map</a>
              <a class="cta-button ghost" href="https://www.instagram.com/citrusteahouse" target="_blank" rel="noopener noreferrer">Visit page</a>
            </div>
            <p class="feature-note">Reserve the sea-view lounge for a guided tasting of small-lot teas paired with plant-based tapas.</p>
          </div>
        </article>
      `,
      "restaurants.batumi.topSpots.html": `
        <div class="section-heading">
          <h2>Top Vegetarian Restaurants</h2>
          <p>Curated favorites delivering fresh produce, thoughtful service, and Ajara-inspired menus.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Black Sea Sprouts</h3>
              <p class="card-subtitle">New Boulevard · Beachfront breakfast and dinner lounge</p>
            </header>
            <p>Bright smoothie bowls at sunrise, artisanal flatbreads at dusk, and DJs spinning mellow house beats. Locally sourced fruit, microgreens, and cold-pressed oils take center stage.</p>
            <ul class="tag-list">
              <li class="tag">Beachfront</li>
              <li class="tag">Smoothie bar</li>
              <li class="tag">Live DJs</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 07:00–00:00</span>
              <span>₾₾ · Sunset happy hour</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/BlackSeaSprouts" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Adjara Herb Kitchen</h3>
              <p class="card-subtitle">Adjara Hills · Farm café with tea garden tours</p>
            </header>
            <p>Guests hike through tea terraces before settling into a menu of laurel-smoked bean pots, foraged herb khachapuri, and citrus sorbets churned in copper bowls.</p>
            <ul class="tag-list">
              <li class="tag">Tea tours</li>
              <li class="tag">Foraged menu</li>
              <li class="tag">Scenic views</li>
            </ul>
            <div class="restaurant-meta">
              <span>Thu–Mon 10:00–20:00</span>
              <span>₾₾₾ · Pre-book transport</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/AdjaraHerbKitchen" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Portside Pantry</h3>
              <p class="card-subtitle">Batumi Bay · Harbour-view tapas bar</p>
            </header>
            <p>Shareable plates of walnut pâté, marinated artichokes, and grilled vegetable skewers paired with coastal mocktails. Ideal for sunset meetups by the marina.</p>
            <ul class="tag-list">
              <li class="tag">Tapas</li>
              <li class="tag">Mocktails</li>
              <li class="tag">Harbor views</li>
            </ul>
            <div class="restaurant-meta">
              <span>Wed–Sun 16:00–01:00</span>
              <span>₾₾ · Live jazz Fridays</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/PortsidePantryBatumi" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Mandari Café Lab</h3>
              <p class="card-subtitle">Old Boulevard · Experimental dessert studio</p>
            </header>
            <p>Inventive cakes, vegan gelato, and nitro-brew coffees infused with citrus peels. Pop-up pastry classes and latte art workshops fill the calendar.</p>
            <ul class="tag-list">
              <li class="tag">Dessert lab</li>
              <li class="tag">Workshops</li>
              <li class="tag">Vegan gelato</li>
            </ul>
            <div class="restaurant-meta">
              <span>Tue–Sun 11:00–22:00</span>
              <span>₾₾ · Class bookings</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/MandariCafeLab" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Urban Tea Rooftop</h3>
              <p class="card-subtitle">New Boulevard · Rooftop lounge with plant tapas</p>
            </header>
            <p>Skyline views, candlelit tables, and small plates of beet tartare, grilled peaches, and herb focaccia. Evening yoga sessions transform into cozy supper clubs.</p>
            <ul class="tag-list">
              <li class="tag">Rooftop</li>
              <li class="tag">Yoga nights</li>
              <li class="tag">Tapas</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 17:00–01:00</span>
              <span>₾₾₾ · Lounge dress code</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/UrbanTeaRooftop" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
        </div>
      `,
      "restaurants.batumi.plan.html": `
        <div class="section-heading">
          <h2>Plan Your Visit</h2>
          <p>Mix beach time, tea fields, and vibrant markets into your Batumi itinerary.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Sunrise Ritual</h3>
            <p>Wake up with the sea and fuel your day with energizing plant plates.</p>
            <ul>
              <li>Stretch on the New Boulevard boardwalk yoga deck.</li>
              <li>Grab a smoothie bowl and cold brew at Black Sea Sprouts.</li>
              <li>Cycle the coastal path to the Alphabetic Tower viewpoint.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Tea &amp; Culture Day</h3>
            <p>Head inland for tea heritage and Ajara mountain hospitality.</p>
            <ul>
              <li>Tour the Chakvi tea museum and pick your own leaves.</li>
              <li>Lunch at Adjara Herb Kitchen with a guided tea pairing.</li>
              <li>Return to the city for sunset tapas at Portside Pantry.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Insider Tips</h3>
            <p>Navigate Batumi’s vegetarian network like a local.</p>
            <ul>
              <li>Reserve rooftop spots during summer festival weekends.</li>
              <li>Ask about plant-based Adjaruli khachapuri specials.</li>
              <li>Bring a reusable water bottle—many cafés offer citrus-infused refills.</li>
            </ul>
          </article>
        </div>
      `,
      "restaurants.kutaisi.meta.title": `Kutaisi Vegetarian Restaurants | Ethical Food Association of Georgia and Armenia`,
      "restaurants.kutaisi.header.title": `Kutaisi Conscious Dining Guide`,
      "restaurants.kutaisi.header.tagline": `Curated by the Ethical Food Association of Georgia and Armenia to celebrate plant-based, fair trade, organic, and sustainable kitchens.`,
      "restaurants.kutaisi.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">City Spotlight · Kutaisi</p>
          <h2>Lean into Imereti’s riverside charm with soulful, plant-led, fair trade, and organic kitchens.</h2>
          <p>From clay-pot lobio to foraged herb salads, Kutaisi’s chefs transform regional produce with sustainable sourcing and ethical partnerships. Let these cozy dining rooms be your guide to western Georgia’s conscious dining heart.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">See the featured table</a>
            <a class="cta-button ghost" href="#top-spots">Browse the full list</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Imeretian harvests</span>
              <span class="highlight-detail">Expect sulguni variations, tarragon, and wild greens from Sataplia hills.</span>
            </li>
            <li>
              <span class="highlight-title">Historic ambience</span>
              <span class="highlight-detail">Many cafés sit inside 19th-century townhouses and riverside courtyards.</span>
            </li>
            <li>
              <span class="highlight-title">Slow travel rhythms</span>
              <span class="highlight-detail">Dining rooms double as artist studios, tea salons, and poetry venues.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Neighborhood dining highlights">
          <div class="sidecard-inner">
            <p class="sidecard-title">Neighborhood Focus</p>
            <ul>
              <li>White Bridge Quarter · sunset terraces along the Rioni</li>
              <li>Historic Center · heritage cafés near the Colchis Fountain</li>
              <li>Balakhvani · artisan bakeries and tea salons</li>
              <li>Sataplia Highway · roadside farm kitchens</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.kutaisi.featured.html": `
        <div class="section-heading">
          <h2>Featured Experience</h2>
          <p>Each month we spotlight a Kutaisi kitchen elevating Imereti’s pantry with thoughtful, plant-based craft.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-sapere">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Editor's Pick</span>
            <h3 id="featured-sapere">Sapere Botanical Kitchen</h3>
            <p>Nestled beside the Rioni River, Sapere layers clay-pot beans, slow-roasted quince, and charcoal-grilled vegetables with herb oils pressed in-house. Afternoon tea flights follow the seasons with foraged blooms.</p>
            <dl class="feature-details">
              <div>
                <dt>Neighborhood</dt>
                <dd>White Bridge Quarter</dd>
              </div>
              <div>
                <dt>Signature dish</dt>
                <dd>Sulguni-stuffed pumpkin with tarragon adjika glaze</dd>
              </div>
              <div>
                <dt>Good to know</dt>
                <dd>Guided herb garden walks at 16:00 daily</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/2MwSapereKutaisi" target="_blank" rel="noopener noreferrer">View on map</a>
              <a class="cta-button ghost" href="https://www.instagram.com/saperebotanical" target="_blank" rel="noopener noreferrer">Visit page</a>
            </div>
            <p class="feature-note">Reserve the sunset tasting for a sulguni fondue poured tableside with warm mchadi.</p>
          </div>
        </article>
      `,
      "restaurants.kutaisi.topSpots.html": `
        <div class="section-heading">
          <h2>Top Vegetarian Restaurants</h2>
          <p>Warm, community-minded spots committed to locally sourced grains, cheeses, and seasonal produce.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Green Balcony</h3>
              <p class="card-subtitle">Historic Center · Terrace café with river views</p>
            </header>
            <p>Sunlit interiors filled with plants and ceramics. Menu highlights include spinach pkhali tartines, walnut-stuffed mushrooms, and fragrant herbal lemonades.</p>
            <ul class="tag-list">
              <li class="tag">Local ceramics</li>
              <li class="tag">Rooftop seating</li>
              <li class="tag">Live piano</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 10:00–22:00</span>
              <span>₾₾ · Reservations encouraged</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/GreenBalconyKutaisi" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Imedi Garden Table</h3>
              <p class="card-subtitle">Balakhvani · Courtyard brunch studio</p>
            </header>
            <p>Family-run, with daily rotating menus inspired by the home garden. Think millet porridge with caramelized pears, smoked beet carpaccio, and herbal tonics.</p>
            <ul class="tag-list">
              <li class="tag">Farm-to-table</li>
              <li class="tag">Brunch</li>
              <li class="tag">Workshops</li>
            </ul>
            <div class="restaurant-meta">
              <span>Wed–Mon 09:00–18:00</span>
              <span>₾₾ · Patio seating</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/ImediGardenKutaisi" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Sataplia Ferments Bar</h3>
              <p class="card-subtitle">Sataplia Highway · Rustic tasting room</p>
            </header>
            <p>Specializes in kombucha flights, kvass infusions, and shareable plates of pickled vegetables, bean pâtés, and sprouted breads baked onsite.</p>
            <ul class="tag-list">
              <li class="tag">Fermentation</li>
              <li class="tag">Tasting flights</li>
              <li class="tag">Takeaway jars</li>
            </ul>
            <div class="restaurant-meta">
              <span>Thu–Sun 12:00–21:00</span>
              <span>₾₾ · Sample bar</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/SatapliaFerments" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Colchis Pantry</h3>
              <p class="card-subtitle">White Bridge Quarter · Evening dining room</p>
            </header>
            <p>Inventive takes on lobio, stuffed peppers, and corn breads paired with natural qvevri wines. Candlelit dining with a seasonal tasting menu.</p>
            <ul class="tag-list">
              <li class="tag">Natural wine</li>
              <li class="tag">Tasting menu</li>
              <li class="tag">Date night</li>
            </ul>
            <div class="restaurant-meta">
              <span>Tue–Sat 18:00–23:00</span>
              <span>₾₾₾ · Reservations required</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/ColchisPantry" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Rioni Tea Salon</h3>
              <p class="card-subtitle">Historic Center · Afternoon tea with plant-forward bites</p>
            </header>
            <p>Savory khachapuri pinwheels, walnut shortbread, and tea blends featuring local honeybush. Enjoy poetry readings and vinyl listening sessions on weekends.</p>
            <ul class="tag-list">
              <li class="tag">Tea flights</li>
              <li class="tag">Pastry bar</li>
              <li class="tag">Community events</li>
            </ul>
            <div class="restaurant-meta">
              <span>Fri–Tue 11:00–20:00</span>
              <span>₾₾ · Salon seating</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/RioniTeaSalon" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
        </div>
      `,
      "restaurants.kutaisi.plan.html": `
        <div class="section-heading">
          <h2>Plan Your Visit</h2>
          <p>Pair Kutaisi’s markets, monasteries, and caves with nourishing vegetarian meals.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Morning Market Loop</h3>
            <p>Wander through the Kutaisi Central Market for fresh greens, fruit leather, and spice blends.</p>
            <ul>
              <li>Sample honeycomb and sunflower seed brittle from local vendors.</li>
              <li>Pick up blue fenugreek and home-pressed walnut oil.</li>
              <li>Walk to Green Balcony for a light brunch overlooking the Rioni.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Cultural Afternoon</h3>
            <p>Explore Gelati Monastery and Sataplia Nature Reserve before a nourishing dinner.</p>
            <ul>
              <li>Pack a picnic from Imedi Garden Table to enjoy near Gelati’s frescoes.</li>
              <li>Hike Sataplia’s dinosaur footprints and glass walkway.</li>
              <li>Return to Sapere Botanical Kitchen for sunset tasting menus.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Insider Tips</h3>
            <p>Make the most of Kutaisi’s vegetarian community.</p>
            <ul>
              <li>Book fermentation classes at Sataplia Ferments Bar in advance.</li>
              <li>Bring reusable jars—many cafés offer refills on teas and tapenades.</li>
              <li>Check local event boards for poetry nights at Rioni Tea Salon.</li>
            </ul>
          </article>
        </div>
      `,
      "restaurants.yerevan.meta.title": `Yerevan Vegetarian Restaurants | Ethical Food Association of Georgia and Armenia`,
      "restaurants.yerevan.header.title": `Ethical Food Association of Georgia and Armenia`,
      "restaurants.yerevan.header.tagline": `Yerevan Conscious Dining Guide · Curated around plant-based, fair trade, organic, and sustainable experiences.`,
      "restaurants.yerevan.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">City Spotlight · Yerevan</p>
          <h2>Experience Armenia’s capital through inventive, plant-centered, fair trade, and organic cuisine.</h2>
          <p>Fresh mountain herbs, artisanal lavash, and slow-fermented produce anchor these kitchens, all rooted in sustainable sourcing and equitable partnerships. Discover the chefs redefining Yerevan’s dining scene with vibrant, ethical menus.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">See the featured table</a>
            <a class="cta-button ghost" href="#top-spots">Browse the full list</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Local terroir</span>
              <span class="highlight-detail">Menus spotlight Lori cheeses, Tavush berries, and herbs from the Ararat Valley.</span>
            </li>
            <li>
              <span class="highlight-title">Seasonal sustainability</span>
              <span class="highlight-detail">Chefs collaborate with small farmers to source organic pulses and stone fruit.</span>
            </li>
            <li>
              <span class="highlight-title">Creative community</span>
              <span class="highlight-detail">Expect art openings, vinyl nights, and community dinners alongside the meals.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Neighborhood dining highlights">
          <div class="sidecard-inner">
            <p class="sidecard-title">Neighborhood Focus</p>
            <ul>
              <li>Cascade · gallery cafés with panoramic terraces</li>
              <li>Abovyan Street · slow-food bistros in heritage buildings</li>
              <li>Saryan Street · wine bars and creative plant plates</li>
              <li>Kentron · cozy lunch spots near cultural landmarks</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.yerevan.featured.html": `
        <div class="section-heading">
          <h2>Featured Experience</h2>
          <p>Each month we highlight a restaurant bringing Armenian produce to life with plant-based artistry.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-dalmatian">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Editor's Pick</span>
            <h3 id="featured-dalmatian">Dalma Orchard Kitchen</h3>
            <p>Situated on a vine-shaded patio near Lovers’ Park, Dalma Orchard Kitchen crafts tasting menus inspired by regional harvests. Expect apricot-glazed eggplant, smoked bean purées, and herbal infusions blended tableside.</p>
            <dl class="feature-details">
              <div>
                <dt>Neighborhood</dt>
                <dd>Kentron</dd>
              </div>
              <div>
                <dt>Signature dish</dt>
                <dd>Lavash parcels with mushroom tolma and blackberry reduction</dd>
              </div>
              <div>
                <dt>Good to know</dt>
                <dd>Chef-led garden tours every Saturday afternoon</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/1hqjX5Zy9YerevanDalma" target="_blank" rel="noopener noreferrer">View on map</a>
              <a class="cta-button ghost" href="https://www.instagram.com/dalmaorchardkitchen" target="_blank" rel="noopener noreferrer">Visit page</a>
            </div>
            <p class="feature-note">Reserve the twilight tasting to sample their limited-edition apricot ferment paired with herbal spritzers.</p>
          </div>
        </article>
      `,
      "restaurants.yerevan.topSpots.html": `
        <div class="section-heading">
          <h2>Top Vegetarian Restaurants</h2>
          <p>Handpicked dining rooms known for welcoming service, mindful sourcing, and inventive plant-led menus.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Green Bean Yerevan</h3>
              <p class="card-subtitle">Cascade · Contemporary café with cold brew and mezze flights</p>
            </header>
            <p>Bright, feel-good plates featuring roasted chickpeas, lavash chips, and seasonal salads. Popular with creatives who camp out with laptops in the sunlit lounge.</p>
            <ul class="tag-list">
              <li class="tag">Fair-trade coffee</li>
              <li class="tag">Workspace friendly</li>
              <li class="tag">Brunch</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 09:00–22:00</span>
              <span>֏֏ · Terrace seating</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/GreenBeanYerevan" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Life Food</h3>
              <p class="card-subtitle">Kentron · Raw vegan studio with handcrafted desserts</p>
            </header>
            <p>Nut-based cheesecakes, sprouted wraps, and cold-pressed juices dominate this calming studio. Workshops teach fermentation and zero-waste pantry tips.</p>
            <ul class="tag-list">
              <li class="tag">Raw cuisine</li>
              <li class="tag">Workshops</li>
              <li class="tag">Gluten-free</li>
            </ul>
            <div class="restaurant-meta">
              <span>Tue–Sun 10:00–21:00</span>
              <span>֏֏֏ · Reservations recommended</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/LifeFoodYerevan" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Eat &amp; Fit Healthy Café</h3>
              <p class="card-subtitle">Azatutyan · Energy bowls, smoothies, and plant-forward mains</p>
            </header>
            <p>A favorite for fitness lovers seeking hearty plant proteins. Build-your-own bowls pair Armenian grains with smoky vegetables and tahini dressings.</p>
            <ul class="tag-list">
              <li class="tag">Protein-rich</li>
              <li class="tag">Takeaway</li>
              <li class="tag">Smoothie bar</li>
            </ul>
            <div class="restaurant-meta">
              <span>Mon–Sat 08:00–21:30</span>
              <span>֏֏ · Delivery available</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/EatFitYerevan" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Drams Vegan Bistro</h3>
              <p class="card-subtitle">Saryan Street · Wine-forward bistro with plant tapas boards</p>
            </header>
            <p>Pair natural Armenian wines with grape leaf dolma, roasted cauliflower steaks, and ferment-forward snack boards. Live acoustic sessions on Thursday nights.</p>
            <ul class="tag-list">
              <li class="tag">Natural wine</li>
              <li class="tag">Live music</li>
              <li class="tag">Tapas</li>
            </ul>
            <div class="restaurant-meta">
              <span>Wed–Sun 17:00–00:00</span>
              <span>֏֏֏ · Reservations advised</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/DramsVeganBistro" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Mirzoyan Library Café</h3>
              <p class="card-subtitle">Pushkin Street · Creative hub with art shows and plant plates</p>
            </header>
            <p>Set inside a historic printing house, this café serves smoked beet tartines, spiced lentil chili, and homemade kombucha. Expect rotating exhibits and evening poetry readings.</p>
            <ul class="tag-list">
              <li class="tag">Art space</li>
              <li class="tag">Kombucha</li>
              <li class="tag">Community events</li>
            </ul>
            <div class="restaurant-meta">
              <span>Daily 11:00–23:00</span>
              <span>֏֏ · Cultural venue</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/MirzoyanLibraryCafe" target="_blank" rel="noopener noreferrer">Get directions</a>
          </article>
        </div>
      `,
      "restaurants.yerevan.plan.html": `
        <div class="section-heading">
          <h2>Plan Your Visit</h2>
          <p>Blend market walks, coffee rituals, and cultural stops with your Yerevan dining itinerary.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Morning Market Circuit</h3>
            <p>Start at the Gum Market to sample dried fruit, wild mountain teas, and freshly baked gata.</p>
            <ul>
              <li>Pick up sun-dried tomatoes and herb salts from local vendors.</li>
              <li>Grab a plant-based lahmajun from the pop-up bakery.</li>
              <li>Walk to Green Bean for a cold brew and mezze platter.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Art &amp; Aperitifs</h3>
            <p>Spend the afternoon exploring galleries before a plant-forward dinner crawl.</p>
            <ul>
              <li>Tour the Cafesjian Center for the Arts at the Cascade.</li>
              <li>Sip herbal spritzers at Dalma Orchard Kitchen.</li>
              <li>Sample natural wines and tapas at Drams Vegan Bistro.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Insider Tips</h3>
            <p>Make the most of Yerevan’s vegetarian network.</p>
            <ul>
              <li>Reserve outdoor seating during apricot season for special menus.</li>
              <li>Ask about Armenian-language cooking classes on Sundays.</li>
              <li>Carry reusable containers—cafés offer discounts for bring-your-own jars.</li>
            </ul>
          </article>
        </div>
      `,
      "restaurants.batumi.meta.title": `Вегетарианские рестораны Батуми | Ассоциация этичного питания Грузии и Армении`,
      "restaurants.batumi.header.title": `Гид по осознанной гастрономии Батуми`,
      "restaurants.batumi.header.tagline": `Составлен Ассоциацией этичного питания Грузии и Армении и посвящён растительным, честным, органическим и устойчивым прибрежным кухням.`,
      "restaurants.batumi.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">Городской акцент · Батуми</p>
          <h2>Поймайте бриз Чёрного моря, исследуя растительную, честную и органическую кухню Аджарии.</h2>
          <p>Сознательные рестораны Батуми прославляют цитрусовые сады, чайные плантации и морские рынки с устойчивыми поставками. От рассветных смузи-баров до винных террас на закате — ваше ответственное путешествие начинается здесь.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">Посмотреть выбранный ресторан</a>
            <a class="cta-button ghost" href="#top-spots">Смотреть весь список</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Щедрость побережья</span>
              <span class="highlight-detail">Шефы делают ставку на мандарины, чайные листья и горную зелень из Аджарии.</span>
            </li>
            <li>
              <span class="highlight-title">Энергия от рассвета до полуночи</span>
              <span class="highlight-detail">Пляжные кафе, ночные маркеты и лаунжи на крышах поддерживают ритм города.</span>
            </li>
            <li>
              <span class="highlight-title">Искусство и гастрономия</span>
              <span class="highlight-detail">Ожидайте pop-up галереи, DJ-сеты и йогу у моря вместе с меню.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Районные гастрономические акценты">
          <div class="sidecard-inner">
            <p class="sidecard-title">Районный фокус</p>
            <ul>
              <li>Старый бульвар — приморские променады и террасные кафе</li>
              <li>Новый бульвар — современные крыши рядом с танцующими фонтанами</li>
              <li>Бухта Батуми — рестораны у гавани с живым джазом</li>
              <li>Аджарские холмы — чайные плантации и эко-гостевые дома</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.batumi.featured.html": `
        <div class="section-heading">
          <h2>Избранный опыт</h2>
          <p>Наш герой месяца в Батуми приносит дары побережья на стол с изобретательным гостеприимством.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-citrus">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Выбор редакции</span>
            <h3 id="featured-citrus">Citrus &amp; Tea House</h3>
            <p>В отреставрированной вилле у моря Citrus &amp; Tea House сочетает мандариновые глазури, копчёный баклажан и пельмени с дикими травами, сервируя их на керамике местных мастеров. Чайный сомелье подбирает редкие чёрные чаи с близлежащих плантаций.</p>
            <dl class="feature-details">
              <div>
                <dt>Район</dt>
                <dd>Старый бульвар</dd>
              </div>
              <div>
                <dt>Фирменное блюдо</dt>
                <dd>Цветная капуста в мандариновой глазури с фундуковым муссом</dd>
              </div>
              <div>
                <dt>Полезно знать</dt>
                <dd>Чайные церемонии на закате по пятницам в 19:30</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/CitrusTeaHouseBatumi" target="_blank" rel="noopener noreferrer">На карте</a>
              <a class="cta-button ghost" href="https://www.instagram.com/citrusteahouse" target="_blank" rel="noopener noreferrer">Перейти на страницу</a>
            </div>
            <p class="feature-note">Забронируйте лаунж с видом на море для дегустации камерных чаёв с растительными тапасами.</p>
          </div>
        </article>
      `,
      "restaurants.batumi.topSpots.html": `
        <div class="section-heading">
          <h2>Лучшие вегетарианские рестораны</h2>
          <p>Избранные места со свежими продуктами, внимательным сервисом и меню, вдохновлённым Аджарией.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Black Sea Sprouts</h3>
              <p class="card-subtitle">Новый бульвар · лаунж у моря от завтрака до ужина</p>
            </header>
            <p>Яркие смузи-боулы на рассвете, авторские лепёшки на закате и мягкая хаус-музыка от DJ. В центре внимания — местные фрукты, микрозелень и масла холодного отжима.</p>
            <ul class="tag-list">
              <li class="tag">У моря</li>
              <li class="tag">Смузи-бар</li>
              <li class="tag">Живые DJ-сеты</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 07:00–00:00</span>
              <span>₾₾ · Счастливые часы на закате</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/BlackSeaSprouts" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Adjara Herb Kitchen</h3>
              <p class="card-subtitle">Аджарские холмы · фермерское кафе с чайными экскурсиями</p>
            </header>
            <p>Перед обедом гости прогуливаются по чайным террасам, а затем пробуют копчёные бобовые в глиняных горшках, хачапури из диких трав и цитрусовые сорбеты в медных чанах.</p>
            <ul class="tag-list">
              <li class="tag">Чайные туры</li>
              <li class="tag">Меню из дикорастущих трав</li>
              <li class="tag">Панорамные виды</li>
            </ul>
            <div class="restaurant-meta">
              <span>Чт–Пн 10:00–20:00</span>
              <span>₾₾₾ · Требуется трансфер</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/AdjaraHerbKitchen" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Portside Pantry</h3>
              <p class="card-subtitle">Батумская бухта · тапас-бар с видом на гавань</p>
            </header>
            <p>Общие тарелки с ореховым паштетом, маринованными артишоками и овощными шашлычками в компании прибрежных моктейлей. Идеально для встреч на закате у марина.</p>
            <ul class="tag-list">
              <li class="tag">Тапас</li>
              <li class="tag">Моктейли</li>
              <li class="tag">Вид на гавань</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ср–Вс 16:00–01:00</span>
              <span>₾₾ · Живой джаз по пятницам</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/PortsidePantryBatumi" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Mandari Café Lab</h3>
              <p class="card-subtitle">Старый бульвар · экспериментальная десертная лаборатория</p>
            </header>
            <p>Изобретательные торты, веганское джелато и нитро-кофе с цитрусовой цедрой. Регулярные поп-ап классы по выпечке и латте-арту.</p>
            <ul class="tag-list">
              <li class="tag">Десертная лаборатория</li>
              <li class="tag">Мастер-классы</li>
              <li class="tag">Веганское джелато</li>
            </ul>
            <div class="restaurant-meta">
              <span>Вт–Вс 11:00–22:00</span>
              <span>₾₾ · Запись на занятия</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/MandariCafeLab" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Urban Tea Rooftop</h3>
              <p class="card-subtitle">Новый бульвар · лаунж на крыше с растительными тапасами</p>
            </header>
            <p>Вид на город, свечи и тарелки с тартаром из свёклы, запечёнными персиками и травяной фокаччей. Вечерние занятия йогой переходят в камерные ужины.</p>
            <ul class="tag-list">
              <li class="tag">Крыша</li>
              <li class="tag">Йога-вечера</li>
              <li class="tag">Тапас</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 17:00–01:00</span>
              <span>₾₾₾ · Требуется дресс-код</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/UrbanTeaRooftop" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
        </div>
      `,
      "restaurants.batumi.plan.html": `
        <div class="section-heading">
          <h2>Спланируйте визит</h2>
          <p>Смешайте пляж, чайные поля и яркие рынки в своём маршруте по Батуми.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Рассветный ритуал</h3>
            <p>Просыпайтесь вместе с морем и подпитывайте день энергичными растительными блюдами.</p>
            <ul>
              <li>Потянитесь на йога-деке Нового бульвара.</li>
              <li>Возьмите смузи-боу и колд-брю в Black Sea Sprouts.</li>
              <li>Прокатитесь по набережной до обзорной площадки Башни алфавита.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>День чая и культуры</h3>
            <p>Отправляйтесь вглубь страны за чайным наследием и гостеприимством горной Аджарии.</p>
            <ul>
              <li>Посетите музей чая в Chakvi и соберите собственные листья.</li>
              <li>Пообедайте в Adjara Herb Kitchen с чайным сетом.</li>
              <li>Вернитесь в город на закатные тапас в Portside Pantry.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Советы инсайдера</h3>
            <p>Освойте вегетарианскую сеть Батуми как местный.</p>
            <ul>
              <li>Бронируйте места на крышах в пиковые летние выходные.</li>
              <li>Уточняйте про растительные аджарули хачапури.</li>
              <li>Берите многоразовую бутылку — в кафе предлагают цитрусовую воду.</li>
            </ul>
          </article>
        </div>
      `,
      "restaurants.kutaisi.meta.title": `Вегетарианские рестораны Кутаиси | Ассоциация этичного питания Грузии и Армении`,
      "restaurants.kutaisi.header.title": `Гид по осознанной гастрономии Кутаиси`,
      "restaurants.kutaisi.header.tagline": `Составлен Ассоциацией этичного питания Грузии и Армении, чтобы отпраздновать растительные, честные, органические и устойчивые кухни Западной Грузии.`,
      "restaurants.kutaisi.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">Городской акцент · Кутаиси</p>
          <h2>Погрузитесь в речной шарм Имерети с душевными растительными, честными и органическими кухнями.</h2>
          <p>От лобио в глиняных горшках до салатов из диких трав — повара Кутаиси раскрывают местные продукты через устойчивые поставки и этичные партнёрства. Эти уютные залы проведут вас по сердцу сознательной гастросцены западной Грузии.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">Посмотреть выбранный ресторан</a>
            <a class="cta-button ghost" href="#top-spots">Смотреть весь список</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Имеретинские урожаи</span>
              <span class="highlight-detail">Ожидайте вариации сулугуни, тархун и дикорастущие травы с холмов Сатаплия.</span>
            </li>
            <li>
              <span class="highlight-title">Историческая атмосфера</span>
              <span class="highlight-detail">Многие кафе расположены в домах XIX века и двориках у реки.</span>
            </li>
            <li>
              <span class="highlight-title">Ритмы неспешного путешествия</span>
              <span class="highlight-detail">Залы совмещают функции арт-студий, чайных салонов и поэтических площадок.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Районные гастрономические акценты">
          <div class="sidecard-inner">
            <p class="sidecard-title">Районный фокус</p>
            <ul>
              <li>Квартал Белого моста — террасы на закате вдоль Риони</li>
              <li>Исторический центр — кафе наследия рядом с фонтаном Колхида</li>
              <li>Балахвани — ремесленные пекарни и чайные салоны</li>
              <li>Трасса Сатаплия — придорожные фермерские кухни</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.kutaisi.featured.html": `
        <div class="section-heading">
          <h2>Избранный опыт</h2>
          <p>Каждый месяц мы выделяем кухню Кутаиси, которая с теплом переосмысливает кладовую Имерети.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-sapere">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Выбор редакции</span>
            <h3 id="featured-sapere">Sapere Botanical Kitchen</h3>
            <p>У самого Риони Sapere сочетает фасоль из глиняных горшков, томлёную айву и овощи на углях с травяными маслами собственного отжима. Послеобеденные чайные полёты следуют за сезонами и дополняются лесными цветами.</p>
            <dl class="feature-details">
              <div>
                <dt>Район</dt>
                <dd>Квартал Белого моста</dd>
              </div>
              <div>
                <dt>Фирменное блюдо</dt>
                <dd>Тыква с сулугуни под тархуновой аджикой</dd>
              </div>
              <div>
                <dt>Полезно знать</dt>
                <dd>Экскурсии по травяному саду ежедневно в 16:00</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/2MwSapereKutaisi" target="_blank" rel="noopener noreferrer">На карте</a>
              <a class="cta-button ghost" href="https://www.instagram.com/saperebotanical" target="_blank" rel="noopener noreferrer">Перейти на страницу</a>
            </div>
            <p class="feature-note">Забронируйте дегустацию на закате, чтобы попробовать фондю из сулугуни, подаваемое с тёплым мчади прямо у стола.</p>
          </div>
        </article>
      `,
      "restaurants.kutaisi.topSpots.html": `
        <div class="section-heading">
          <h2>Лучшие вегетарианские рестораны</h2>
          <p>Тёплые, ориентированные на сообщество площадки, использующие местные крупы, сыры и сезонные продукты.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Green Balcony</h3>
              <p class="card-subtitle">Исторический центр · террасное кафе с видом на реку</p>
            </header>
            <p>Зал, залитый солнцем, наполнен растениями и керамикой. В меню — тосты со шпинатным пхали, грибы, фаршированные орехами, и ароматные травяные лимонады.</p>
            <ul class="tag-list">
              <li class="tag">Местная керамика</li>
              <li class="tag">Терраса на крыше</li>
              <li class="tag">Живое фортепиано</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 10:00–22:00</span>
              <span>₾₾ · Рекомендуется бронирование</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/GreenBalconyKutaisi" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Imedi Garden Table</h3>
              <p class="card-subtitle">Балахвани · двориковая бранч-студия</p>
            </header>
            <p>Семейное место с меню, которое ежедневно меняется под вдохновением домашнего сада. Ожидайте пшённую кашу с карамелизированными грушами, копчёную свёклу и травяные тоники.</p>
            <ul class="tag-list">
              <li class="tag">Фермерские продукты</li>
              <li class="tag">Бранч</li>
              <li class="tag">Мастер-классы</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ср–Пн 09:00–18:00</span>
              <span>₾₾ · Патио под открытым небом</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/ImediGardenKutaisi" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Sataplia Ferments Bar</h3>
              <p class="card-subtitle">Трасса Сатаплия · рустикальный дегустационный бар</p>
            </header>
            <p>Специализируется на дегустациях комбучи, кваса и ассорти из маринованных овощей, паштетов из бобов и пророщенного хлеба.</p>
            <ul class="tag-list">
              <li class="tag">Ферментация</li>
              <li class="tag">Дегустационные сеты</li>
              <li class="tag">Баночки навынос</li>
            </ul>
            <div class="restaurant-meta">
              <span>Чт–Вс 12:00–21:00</span>
              <span>₾₾ · Дегустационный бар</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/SatapliaFerments" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Colchis Pantry</h3>
              <p class="card-subtitle">Квартал Белого моста · вечерний ресторан</p>
            </header>
            <p>Авторские вариации на лобио, фаршированные перцы и кукурузные лепёшки в паре с натуральными винами квеври. Свечи и сезонный дегустационный сет.</p>
            <ul class="tag-list">
              <li class="tag">Натуральное вино</li>
              <li class="tag">Дегустационное меню</li>
              <li class="tag">Для свиданий</li>
            </ul>
            <div class="restaurant-meta">
              <span>Вт–Сб 18:00–23:00</span>
              <span>₾₾₾ · Необходима бронь</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/ColchisPantry" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Rioni Tea Salon</h3>
              <p class="card-subtitle">Исторический центр · дневное чайное пространство</p>
            </header>
            <p>Слойки с хачапури, ореховое песочное печенье и чайные купажи с местным хани буш. По выходным — поэтические вечера и виниловые сеты.</p>
            <ul class="tag-list">
              <li class="tag">Чайные полёты</li>
              <li class="tag">Пастри-бар</li>
              <li class="tag">События для сообщества</li>
            </ul>
            <div class="restaurant-meta">
              <span>Пт–Вт 11:00–20:00</span>
              <span>₾₾ · Салонная посадка</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/RioniTeaSalon" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
        </div>
      `,
      "restaurants.kutaisi.plan.html": `
        <div class="section-heading">
          <h2>Спланируйте визит</h2>
          <p>Совместите рынки, монастыри и пещеры с питательными растительными блюдами.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Утренний маршрут</h3>
            <p>Прогуляйтесь по Центральному рынку Кутаиси за зеленью, пастилой и пряностями.</p>
            <ul>
              <li>Продегустируйте соты и козинаки из подсолнечника у местных продавцов.</li>
              <li>Купите голубой пажитник и домашнее грецкое масло.</li>
              <li>Зайдите в Green Balcony на лёгкий бранч с видом на Риони.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Культурный полдень</h3>
            <p>Исследуйте монастырь Гелати и заповедник Сатаплия перед сытным ужином.</p>
            <ul>
              <li>Возьмите пикник в Imedi Garden Table и устройтесь у фресок Гелати.</li>
              <li>Пройдитесь по следам динозавров и стеклянной тропе Сатаплия.</li>
              <li>Вернитесь в Sapere Botanical Kitchen на закатный сет.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Советы инсайдера</h3>
            <p>Используйте все возможности вегетарианского сообщества Кутаиси.</p>
            <ul>
              <li>Бронируйте заранее ферментационные классы в Sataplia Ferments Bar.</li>
              <li>Берите многоразовые баночки — кафе охотно делают refill чаёв и тапенадов.</li>
              <li>Проверяйте афиши: в Rioni Tea Salon часто проходят поэтические вечера.</li>
            </ul>
          </article>
        </div>
      `,
      "restaurants.yerevan.meta.title": `Вегетарианские рестораны Еревана | Ассоциация этичного питания Грузии и Армении`,
      "restaurants.yerevan.header.title": `Ассоциация этичного питания Грузии и Армении`,
      "restaurants.yerevan.header.tagline": `Ереванский гид по осознанной гастрономии · составлен Ассоциацией этичного питания Грузии и Армении и посвящён растительным, честным, органическим и устойчивым практикам.`,
      "restaurants.yerevan.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">Городской акцент · Ереван</p>
          <h2>Откройте столицу Армении через изобретательную растительную, честную и органическую кухню.</h2>
          <p>Свежие горные травы, ремесленный лаваш и долго ферментированные продукты лежат в основе этих кухонь, построенных на устойчивых поставках и справедливых партнёрствах. Познакомьтесь с шефами, которые переосмысляют гастросцену Еревана яркими этичными меню.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">Посмотреть выбранный ресторан</a>
            <a class="cta-button ghost" href="#top-spots">Смотреть весь список</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Местный терруар</span>
              <span class="highlight-detail">В меню — сыры из Лори, ягоды Тавуша и травы долины Арарат.</span>
            </li>
            <li>
              <span class="highlight-title">Сезонная устойчивость</span>
              <span class="highlight-detail">Шефы сотрудничают с малым фермерами, закупая органические бобовые и косточковые.</span>
            </li>
            <li>
              <span class="highlight-title">Творческое сообщество</span>
              <span class="highlight-detail">Вас ждут арт-открытия, винил-вечера и общие ужины вместе с блюдами.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Районные гастрономические акценты">
          <div class="sidecard-inner">
            <p class="sidecard-title">Районный фокус</p>
            <ul>
              <li>Каскад — галерейные кафе с панорамными террасами</li>
              <li>Улица Абовяна — слоу-фуд бистро в домах наследия</li>
              <li>Улица Сарьяна — винные бары с креативными растительными тарелками</li>
              <li>Кентрон — уютные столовые рядом с культурными объектами</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.yerevan.featured.html": `
        <div class="section-heading">
          <h2>Избранный опыт</h2>
          <p>Каждый месяц мы выделяем ресторан, который оживляет армянские продукты растительной кулинарией.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-dalmatian">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Выбор редакции</span>
            <h3 id="featured-dalmatian">Dalma Orchard Kitchen</h3>
            <p>На террасе, утопающей в виноградной лозе рядом с парком влюблённых, Dalma Orchard Kitchen создаёт дегустационные меню по мотивам местных урожаев. Ожидайте баклажан в абрикосовой глазури, копчёные бобовые пюре и травяные настои, смешиваемые при гостях.</p>
            <dl class="feature-details">
              <div>
                <dt>Район</dt>
                <dd>Кентрон</dd>
              </div>
              <div>
                <dt>Фирменное блюдо</dt>
                <dd>Лаваш с толмой из грибов и соусом из ежевики</dd>
              </div>
              <div>
                <dt>Полезно знать</dt>
                <dd>Экскурсии по саду с шефом каждую субботу днём</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/1hqjX5Zy9YerevanDalma" target="_blank" rel="noopener noreferrer">На карте</a>
              <a class="cta-button ghost" href="https://www.instagram.com/dalmaorchardkitchen" target="_blank" rel="noopener noreferrer">Перейти на страницу</a>
            </div>
            <p class="feature-note">Забронируйте дегустацию в сумерках, чтобы попробовать редкий абрикосовый фермент с травяными спритцами.</p>
          </div>
        </article>
      `,
      "restaurants.yerevan.topSpots.html": `
        <div class="section-heading">
          <h2>Лучшие вегетарианские рестораны</h2>
          <p>Отобранные рестораны с тёплым приёмом, ответственными поставками и изобретательными растительными меню.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Green Bean Yerevan</h3>
              <p class="card-subtitle">Каскад · современное кафе с колд-брю и ассорти мезе</p>
            </header>
            <p>Яркая, бодрящая еда с жареным нутом, чипсами из лаваша и сезонными салатами. Любимое место креативщиков с ноутбуками в залитой солнцем гостиной.</p>
            <ul class="tag-list">
              <li class="tag">Честный кофе</li>
              <li class="tag">Удобно для работы</li>
              <li class="tag">Бранч</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 09:00–22:00</span>
              <span>֏֏ · Терраса</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/GreenBeanYerevan" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Life Food</h3>
              <p class="card-subtitle">Кентрон · студия сыроедческой кухни с авторскими десертами</p>
            </header>
            <p>Ореховые чизкейки, пророщенные роллы и соки холодного отжима задают тон спокойному пространству. На мастер-классах обучают ферментации и хозяйству без отходов.</p>
            <ul class="tag-list">
              <li class="tag">Сыроедение</li>
              <li class="tag">Мастер-классы</li>
              <li class="tag">Без глютена</li>
            </ul>
            <div class="restaurant-meta">
              <span>Вт–Вс 10:00–21:00</span>
              <span>֏֏֏ · Рекомендуется резерв</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/LifeFoodYerevan" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Eat &amp; Fit Healthy Café</h3>
              <p class="card-subtitle">Азатутян · энергетические боулы, смузи и растительные основые блюда</p>
            </header>
            <p>Любимое место спортсменов, ищущих насыщенный растительный белок. Соберите собственный боул из армянских круп с копчёными овощами и тахиновой заправкой.</p>
            <ul class="tag-list">
              <li class="tag">Белковый акцент</li>
              <li class="tag">Навынос</li>
              <li class="tag">Смузи-бар</li>
            </ul>
            <div class="restaurant-meta">
              <span>Пн–Сб 08:00–21:30</span>
              <span>֏֏ · Есть доставка</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/EatFitYerevan" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Drams Vegan Bistro</h3>
              <p class="card-subtitle">Улица Сарьяна · винный бистро с растительными тапасами</p>
            </header>
            <p>Сочетайте натуральные армянские вина с долмой из виноградных листьев, запечёнными стейками из цветной капусты и ферментированными закусками. По четвергам — акустические концерты.</p>
            <ul class="tag-list">
              <li class="tag">Натуральное вино</li>
              <li class="tag">Живая музыка</li>
              <li class="tag">Тапас</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ср–Вс 17:00–00:00</span>
              <span>֏֏֏ · Рекомендуется резерв</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/DramsVeganBistro" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Mirzoyan Library Café</h3>
              <p class="card-subtitle">Улица Пушкина · творческий хаб с выставками и растительными блюдами</p>
            </header>
            <p>В исторической типографии подают тартинки с копчёной свёклой, острый чечевичный чили и домашнюю комбучу. Ждите сменные выставки и поэтические вечера.</p>
            <ul class="tag-list">
              <li class="tag">Арт-пространство</li>
              <li class="tag">Комбуча</li>
              <li class="tag">События для сообщества</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 11:00–23:00</span>
              <span>֏֏ · Культурная площадка</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/MirzoyanLibraryCafe" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
        </div>
      `,
      "restaurants.yerevan.plan.html": `
        <div class="section-heading">
          <h2>Спланируйте визит</h2>
          <p>Сочетайте прогулки по рынкам, кофейные ритуалы и культурные остановки с гастрономическим маршрутом по Еревану.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Утренний маршрут по рынку</h3>
            <p>Начните в ГУМ-рынке: попробуйте сухофрукты, горные травяные чаи и свежую гату.</p>
            <ul>
              <li>Купите вяленые томаты и травяные соли у местных производителей.</li>
              <li>Возьмите растительный лахмаджун в pop-up пекарне.</li>
              <li>Дойдите до Green Bean за колд-брю и ассорти мезе.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Искусство и аперитивы</h3>
            <p>Посвятите день галереям, а вечер — растительному гастрономическому турне.</p>
            <ul>
              <li>Посетите Центр искусств Кафесджяна на Каскаде.</li>
              <li>Попробуйте травяные спритцы в Dalma Orchard Kitchen.</li>
              <li>Продолжите натуральными винами и тапасами в Drams Vegan Bistro.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Советы инсайдера</h3>
            <p>Используйте все возможности вегетарианского сообщества Еревана.</p>
            <ul>
              <li>Раннее бронируйте столики на открытом воздухе в сезон абрикосов.</li>
              <li>Уточняйте расписание кулинарных классов на армянском по воскресеньям.</li>
              <li>Берите многоразовые контейнеры — кафе делают скидку за собственные баночки.</li>
            </ul>
          </article>
        </div>
      `
  },
  ru: {
    "index.meta.title": `Ассоциация этичного питания Грузии и Армении`,
    "index.header.title": `Ассоциация этичного питания Грузии и Армении`,
    "index.header.tagline": `Мы развиваем эмпатичные сообщества, основанные на ценностях растительного питания, честной торговли, органического и устойчивого развития.`,
    "index.nav.home": `Главная`,
    "index.nav.about": `О нас`,
    "index.nav.programs": `Программы и инициативы`,
    "index.nav.events": `События и встречи`,
    "index.nav.restaurants": `Рестораны`,
    "index.nav.restaurantLabel": `Выберите город, чтобы посмотреть рекомендуемые рестораны`,
    "common.city.placeholder": `Выберите город`,
    "common.city.tbilisi": `Тбилиси`,
    "common.city.kutaisi": `Кутаиси`,
    "common.city.batumi": `Батуми`,
    "common.city.yerevan": `Ереван`,
    "index.nav.recipes": `Рецепты`,
    "index.nav.membership": `Членство`,
    "index.nav.membershipBenefits": `Преимущества`,
    "index.nav.membershipJoin": `Вступление`,
    "index.nav.contact": `Контакты`,
    "common.language.label": `Выберите язык`,
    "common.language.english": `Английский`,
    "common.language.russian": `Русский`,
    "common.language.georgian": `ქართული`,
    "common.language.armenian": `Հայերեն`,
    "index.home.heading": `Добро пожаловать`,
    "index.home.body": `Добро пожаловать в Ассоциацию этичного питания Грузии и Армении. Мы продвигаем растительный образ жизни вместе с партнёрствами в сфере честной торговли, органическим земледелием и устойчивым развитием сообществ.`,
    "index.about.heading": `Об ассоциации`,
    "index.about.body": `Мы сотрудничаем с местными активистами, кооперативами честной торговли, органическими фермерами и политиками, чтобы расширить доступ к этичным, растительным и устойчивым продовольственным системам по всему Кавказскому региону.`,
    "index.programs.heading": `Программы и инициативы`,
    "index.programs.body": `Наши ключевые программы включают просветительскую работу в школах, кулинарное обучение для ресторанов, развитие рынков честной торговли, партнёрства с фермами и общественные кампании, подчёркивающие преимущества растительного и устойчивого образа жизни.`,
    "index.events.heading": `События и встречи`,
    "index.events.body": `Сезонные маркеты, туры по городским садам, кинопоказы и встречи волонтёров помогают нам строить поддерживающие сети и праздновать традиции устойчивого питания.`,
    "index.restaurants.heading": `Рестораны`,
    "index.restaurants.body": `Откройте нашу проверенную сеть ресторанов, ориентированных на растительную кухню, честную торговлю и органические продукты по всему региону.`,
    "index.recipes.heading": `Рецепты и питание`,
    "index.recipes.body": `Мы делимся разнообразными планами питания, рецептами от шеф-поваров и советами по питанию для любого этапа жизни.`,
    "index.membership.heading": `Членство и волонтёры`,
    "index.membership.benefits.heading": `Преимущества`,
    "index.membership.benefits.body": `Наша программа членства активно продвигает политики в поддержку вегетарианских, веганских, устойчивых и честных торговых бизнесов, предоставляя каждому участнику инструменты адвокации, совместные обучения и региональные обновления о влиянии.`,
    "index.membership.benefits.business.heading": `Корпоративное членство`,
    "index.membership.benefits.business.item1": `Ежеквартальные стратегические брифинги с партнёрскими организациями и командами по политическим инициативам`,
    "index.membership.benefits.business.item2": `Рекламные размещения во всех публикациях и цифровых каналах ассоциации`,
    "index.membership.benefits.business.item3": `Спонсируемые презентации и продуктовые демонстрации на мероприятиях ассоциации`,
    "index.membership.benefits.business.item4": `Персональная поддержка для согласования бизнес-кампаний с приоритетами вегетарианской и честной торговой политики`,
    "index.membership.benefits.individual.heading": `Индивидуальное членство`,
    "index.membership.benefits.individual.item1": `Эксклюзивные скидки в вегетарианских, веганских, устойчивых и честных торговых бизнесах нашей сети`,
    "index.membership.join.heading": `Вступление`,
    "index.membership.join.body": `Готовы присоединиться? Выберите путь членства, который соответствует вашим целям, запустите инициативу в своём районе или свяжитесь с нашей командой, чтобы открыть новое отделение.`,
    "index.membership.join.item1": `Выберите <em>Корпоративное членство</em>, чтобы совместно создавать кампании, формировать политические позиции и получать доступ к партнёрским возможностям продвижения`,
    "index.membership.join.item2": `Выберите <em>Индивидуальное членство</em>, чтобы пользоваться скидками у партнёрских бизнесов и поддерживать приоритеты растительного, устойчивого и честного торгового развития`,
    "index.membership.join.item3": `Сотрудничайте с наставниками, чтобы разрабатывать общественные программы на принципах растительной кухни, устойчивости и честной торговли в рамках корпоративного членства`,
    "index.membership.join.item4": `Координируйте совместные проекты по всей Грузии и Армении с региональными лидерами в корпоративных когортах`,
    "index.membership.join.link": `Свяжитесь с нашей командой`,
    "index.contact.heading": `Контакты и партнёрства`,
      "index.contact.body": `Свяжитесь с нами, чтобы сотрудничать в общественных программах, запросить интервью для СМИ или стать спонсирующим партнёром.`,
      "common.footer.cta": `Ищете больше растительных, честных и органических направлений? Исследуйте региональных партнёров вместе с <a class="text-link" href="../index.html">Ассоциацией этичного питания Грузии и Армении</a>.`,
      "restaurants.tbilisi.meta.title": `Вегетарианские рестораны Тбилиси | Ассоциация этичного питания Грузии и Армении`,
      "restaurants.tbilisi.header.tagline": `Гид по осознанной гастрономии Тбилиси · составлен Ассоциацией этичного питания Грузии и Армении и посвящён растительным, честным и устойчивым практикам.`,
      "restaurants.tbilisi.hero.html": `
        <div class="hero-content">
          <p class="eyebrow">Городской акцент · Тбилиси</p>
          <h2>Откройте самые яркие вегетарианские, этичные и органические кухни столицы Грузии.</h2>
          <p>От растительных хачапури до кофе из честных поставок — эти рестораны демонстрируют креативность и тепло процветающей устойчивой гастросцены Тбилиси.</p>
          <div class="hero-cta">
            <a class="cta-button" href="#featured">Посмотреть выбранный ресторан</a>
            <a class="cta-button ghost" href="#top-spots">Смотреть весь список</a>
          </div>
          <ul class="hero-highlights">
            <li>
              <span class="highlight-title">Сезонные меню</span>
              <span class="highlight-detail">Кулинарные команды обновляют блюда каждый сезон, чтобы подчеркнуть местные урожаи.</span>
            </li>
            <li>
              <span class="highlight-title">Устойчивые поставки</span>
              <span class="highlight-detail">Многие партнёры работают напрямую с органическими фермерами Кахети и Картли.</span>
            </li>
            <li>
              <span class="highlight-title">Гостеприимство для всех</span>
              <span class="highlight-detail">Безглютеновые, сыроедческие и семейные варианты доступны во всём меню.</span>
            </li>
          </ul>
        </div>
        <aside class="hero-sidecard" aria-label="Районные гастрономические акценты">
          <div class="sidecard-inner">
            <p class="sidecard-title">Районный фокус</p>
            <ul>
              <li>Сололаки — уютные кафе и авторские десерты</li>
              <li>Ваке — современные растительные бистро</li>
              <li>Старый Тбилиси — исторические дворики с живой музыкой</li>
              <li>Сабуртало — дружелюбные к семьям обеды рядом с технопарками</li>
            </ul>
          </div>
        </aside>
      `,
      "restaurants.tbilisi.featured.html": `
        <div class="section-heading">
          <h2>Избранный опыт</h2>
          <p>Каждый месяц мы отмечаем ресторан, который по-новому раскрывает вегетарианское гостеприимство.</p>
        </div>
        <article class="feature-box" aria-labelledby="featured-livin">
          <div class="feature-photo" role="presentation"></div>
          <div class="feature-info">
            <span class="feature-tag">Выбор редакции</span>
            <h3 id="featured-livin">Livin Café Tbilisi</h3>
            <p>В светлом дворе района Ваке Livin Café соединяет грузинские овощи с левантийскими специями, домашними ферментами и соками холодного отжима. Нулевая переработка отходов и спокойный сервис делают его идеальной паузой между музеями и прогулками по паркам.</p>
            <dl class="feature-details">
              <div>
                <dt>Район</dt>
                <dd>Ваке</dd>
              </div>
              <div>
                <dt>Фирменное блюдо</dt>
                <dd>Шаурма из грибов кабаби с тархуновым тахини</dd>
              </div>
              <div>
                <dt>Полезно знать</dt>
                <dd>Дегустации кофе, обжаренного на солнечной энергии, и многоразовые бутыли для соков</dd>
              </div>
            </dl>
            <div class="feature-actions">
              <a class="cta-button" href="https://maps.app.goo.gl/uFAK3f5oQd3Livin8" target="_blank" rel="noopener noreferrer">На карте</a>
              <a class="cta-button ghost" href="https://www.instagram.com/livincafetbilisi" target="_blank" rel="noopener noreferrer">Перейти на страницу</a>
            </div>
            <p class="feature-note">Закажите дегустационный сет до 18:00 и получите в подарок колд-брю.</p>
          </div>
        </article>
      `,
      "restaurants.tbilisi.topSpots.html": `
        <div class="section-heading">
          <h2>Лучшие вегетарианские рестораны</h2>
          <p>Отобранные площадки со свежими продуктами, заботливым сервисом и меню, где растительные блюда стоят на первом месте.</p>
        </div>
        <div class="restaurants-grid">
          <article class="restaurant-card">
            <header>
              <h3>Leila</h3>
              <p class="card-subtitle">Старый Тбилиси · фьюжн-кафе в историческом дворике</p>
            </header>
            <p>Яркие блюда с насыщенными специями объединяют грузинские и ближневосточные вкусы. Ожидайте разноцветные тарелки с хумусом, супы из диких трав и комбучу на розлив.</p>
            <ul class="tag-list">
              <li class="tag">Подходит для веганов</li>
              <li class="tag">Учитывает безглютеновые запросы</li>
              <li class="tag">Живая музыка</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 10:00–22:00</span>
              <span>₾₾ · Посадка во дворе</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/j5uH5CYR4s5Leila" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Mama Terra</h3>
              <p class="card-subtitle">Ваке · светлое кафе целый день с конструктором боулов</p>
            </header>
            <p>Соки холодного отжима, сытные завёртыши на завтрак и боулы с запечёнными овощами и фирменными соусами. Идеально для расслабленного бранча или работы с ноутбуком.</p>
            <ul class="tag-list">
              <li class="tag">Органические продукты</li>
              <li class="tag">Бранч</li>
              <li class="tag">Удобно для работы</li>
            </ul>
            <div class="restaurant-meta">
              <span>Пн–Сб 09:00–21:00</span>
              <span>₾₾ · Бесплатный Wi‑Fi</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/LwcX6nSPvXLGzTtM7" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Living Vino</h3>
              <p class="card-subtitle">Мтацминда · бар натуральных вин с сезонными сетами</p>
            </header>
            <p>Стильный лофт с сыроедческими десертами, тапасами и подборкой грузинских вин квеври. Дважды в месяц проходят растительные фуд-пэринги.</p>
            <ul class="tag-list">
              <li class="tag">Натуральное вино</li>
              <li class="tag">Сырой десерт</li>
              <li class="tag">Для свиданий</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ср–Вс 17:00–00:00</span>
              <span>₾₾₾ · Рекомендуется резерв</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/xrRcCtk7o3YcQG4E9" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Hummusbar Tbilisi</h3>
              <p class="card-subtitle">Сабуртало · демократичное место с ближневосточной классикой</p>
            </header>
            <p>Взбитый хумус, фалафель и согревающие супы из местных бобовых. Есть семейные сеты и пикниковые боксы на вынос.</p>
            <ul class="tag-list">
              <li class="tag">Для всей семьи</li>
              <li class="tag">Еда навынос</li>
              <li class="tag">Доступные цены</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 11:00–23:00</span>
              <span>₾ · Доступна доставка</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/4iU3UkVfwg12fU3g7" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
          <article class="restaurant-card">
            <header>
              <h3>Kiwi Vegan Café &amp; Bistro</h3>
              <p class="card-subtitle">Сололаки · комьюнити-кухня с блюдами комфорт-фуд</p>
            </header>
            <p>Любимое место с сочными салатами, ореховыми сырами и наваристыми чечевичными рагу. Дружелюбная команда, буккроссинг и множество розеток для ноутбуков.</p>
            <ul class="tag-list">
              <li class="tag">Полностью растительно</li>
              <li class="tag">Удобно для коворкинга</li>
              <li class="tag">Живая музыка</li>
            </ul>
            <div class="restaurant-meta">
              <span>Ежедневно 10:00–21:00</span>
              <span>₾₾ · Посадка во дворе</span>
            </div>
            <a class="text-link" href="https://maps.app.goo.gl/mM5sFQEbbcTbilisi" target="_blank" rel="noopener noreferrer">Проложить маршрут</a>
          </article>
        </div>
      `,
      "restaurants.tbilisi.plan.html": `
        <div class="section-heading">
          <h2>Спланируйте визит</h2>
          <p>Сочетайте гастрономический маршрут с рынками, кофейными паузами и культурными остановками.</p>
        </div>
        <div class="plan-grid">
          <article class="plan-card">
            <h3>Утро на рынке</h3>
            <p>Начните день на базаре Дезертири с дегустации фруктов и покупки специй.</p>
            <ul>
              <li>Попробуйте чурчхелу с грецким орехом.</li>
              <li>Возьмите местный ткемали в подарок.</li>
              <li>Загляните в Mama Terra на обеденный сет.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Вечерний маршрут</h3>
            <p>Соберите вечер из видов на крыши и уютных внутренних двориков.</p>
            <ul>
              <li>Закажите авторские безалкогольные коктейли в Living Vino на закате.</li>
              <li>Поужинайте в Leila под живую народную музыку.</li>
              <li>Завершите вечер сыроедческими десертами в Kiwi Café.</li>
            </ul>
          </article>
          <article class="plan-card">
            <h3>Советы инсайдера</h3>
            <p>Используйте все возможности вегетарианской сети Тбилиси.</p>
            <ul>
              <li>Заранее бронируйте кулинарные классы на английском языке.</li>
              <li>Уточняйте про растительные хинкали в выходные.</li>
              <li>Берите многоразовую тару — многие кафе дают скидку.</li>
            </ul>
          </article>
        </div>
      `
  },
  ka: {},
  hy: {}
};

const FALLBACK_LANGUAGE = "en";
const STORAGE_KEY = "efa:preferred-language";
let activeLanguage = null;

function resolveLanguage(requested) {
  if (requested && Object.prototype.hasOwnProperty.call(translations, requested)) {
    return requested;
  }
  return FALLBACK_LANGUAGE;
}

function getTranslation(lang, key) {
  const langData = translations[lang] || {};
  if (Object.prototype.hasOwnProperty.call(langData, key)) {
    return langData[key];
  }
  const fallbackData = translations[FALLBACK_LANGUAGE] || {};
  return fallbackData[key];
}

function updateElementContent(element, value) {
  if (value == null) {
    return;
  }

  const tag = element.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") {
    if (element.hasAttribute("placeholder")) {
      element.setAttribute("placeholder", value);
    } else {
      element.value = value;
    }
    return;
  }

  if (tag === "META") {
    element.setAttribute("content", value);
    return;
  }

  if (/<[a-z][\s\S]*>/i.test(value)) {
    element.innerHTML = value;
  } else {
    element.textContent = value;
  }
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n-key");
    if (!key) {
      return;
    }
    const translation = getTranslation(lang, key);
    if (translation !== undefined) {
      updateElementContent(element, translation);
    }
  });

  document.documentElement.setAttribute("lang", lang);
}

function syncLanguageSelectors(lang) {
  const selectors = document.querySelectorAll("#language-selector");
  selectors.forEach((selector) => {
    if (selector.value !== lang) {
      selector.value = lang;
    }
  });
}

function setLanguage(lang, { persist = true } = {}) {
  const resolved = resolveLanguage(lang);
  if (resolved === activeLanguage) {
    return;
  }

  activeLanguage = resolved;
  applyTranslations(resolved);
  syncLanguageSelectors(resolved);

  if (persist && window.localStorage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, resolved);
    } catch (_) {
      // ignore storage errors
    }
  }
}

function determineInitialLanguage() {
  if (window.localStorage) {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return resolveLanguage(stored);
      }
    } catch (_) {
      // ignore storage errors
    }
  }

  const browserLang = (navigator.language || navigator.userLanguage || "").split("-")[0];
  return resolveLanguage(browserLang);
}

document.addEventListener("DOMContentLoaded", () => {
  const initialLanguage = determineInitialLanguage();
  setLanguage(initialLanguage, { persist: false });

  const selectors = document.querySelectorAll("#language-selector");
  selectors.forEach((selector) => {
    selector.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  });
});

const setLanguageInternal = setLanguage;

window.setLanguage = (lang, options) => setLanguageInternal(lang, options);
