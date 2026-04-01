//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  const $menu = document.getElementById('menu')
  const $showMenu = document.getElementById('showMenu')
  if ($menu && $showMenu && $menu.dataset.path === "/") {
    $menu.hidden = true
    $showMenu.hidden = false
    $showMenu.addEventListener('click', () => {
      $menu.hidden = false
      $showMenu.hidden = true
    })
  }

  const $deliveryOptions = document.getElementById('delivery-options')
  if ($deliveryOptions) {
    $deliveryOptions.hidden = false
    // Simulate getting delivery options from an API
    setTimeout(() => {
      $deliveryOptions.innerHTML = '<h2 class="tna-heading-l">Delivery options:</h2><ul class="tna-ul"><li>Standard delivery</li><li>Express delivery</li><li>Click and collect</li><li>Next day delivery</li><li>Same day delivery</li><li>International delivery</li></ul>'
    }, 4000)
  }

  const $relatedRecords = document.getElementById('related-records')
  if ($relatedRecords) {
    $relatedRecords.hidden = false
    // Simulate getting related records from an API
    setTimeout(() => {
      $relatedRecords.innerHTML = `<h2 class="tna-heading-l">Related records</h2><ul class="tna-ul tna-ul--plain tna-!--margin-top-m">
    <li class="tna-!--margin-top-s">
      <article class="tna-card tna-card--horizontal tna-card--horizontal-small-image tna-card--padded tna-card--plain">
        <h2 class="tna-heading-m tna-card__heading">
          <a href="#" class="tna-card__heading-link">Card 1</a>
        </h2>
        <a href="#" class="tna-card__image-container" tabindex="-1" aria-hidden="true">
          <picture class="tna-card__image">
            <img src="https://placehold.co/600x400/00623b/fff?text=Image&amp;font=museo&amp;font_size=48" alt="A random example image" width="600" height="400">
          </picture>
        </a>
        <div class="tna-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt velit, a molestie turpis.</p>
        </div>
      </article>
    </li>
    <li class="tna-!--margin-top-s">
      <article class="tna-card tna-card--horizontal tna-card--horizontal-small-image tna-card--padded tna-card--plain">
        <h2 class="tna-heading-m tna-card__heading">
          <a href="#" class="tna-card__heading-link">Card 2</a>
        </h2>
        <a href="#" class="tna-card__image-container" tabindex="-1" aria-hidden="true">
          <picture class="tna-card__image">
            <img src="https://placehold.co/600x400/00623b/fff?text=Image&amp;font=museo&amp;font_size=48" alt="A random example image" width="600" height="400">
          </picture>
        </a>
        <div class="tna-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt velit, a molestie turpis.</p>
        </div>
      </article>
    </li>
    <li class="tna-!--margin-top-s">
      <article class="tna-card tna-card--horizontal tna-card--horizontal-small-image tna-card--padded tna-card--plain">
        <h2 class="tna-heading-m tna-card__heading">
          <a href="#" class="tna-card__heading-link">Card 3</a>
        </h2>
        <a href="#" class="tna-card__image-container" tabindex="-1" aria-hidden="true">
          <picture class="tna-card__image">
            <img src="https://placehold.co/600x400/00623b/fff?text=Image&amp;font=museo&amp;font_size=48" alt="A random example image" width="600" height="400">
          </picture>
        </a>
        <div class="tna-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt velit, a molestie turpis.</p>
        </div>
      </article>
    </li>
  </ul>`
    }, 2500)
  }

  const $stories = document.getElementById('stories')
  if ($stories) {
    $stories.hidden = false
    // Simulate getting stories from an API
    setTimeout(() => {
      $stories.innerHTML = `<h2 class="tna-heading-l">Stories</h2><ul class="tna-container tna-container--nested">
    <li class="tna-column tna-column--width-1-3 tna-column--width-1-2-medium tna-column--width-1-2-small tna-column--full-tiny tna-!--margin-top-m">
      <article class="tna-card">
        <h2 class="tna-heading-m tna-card__heading">
          <a href="#" class="tna-card__heading-link">Card 1</a>
        </h2>
        <a href="#" class="tna-card__image-container" tabindex="-1" aria-hidden="true">
          <picture class="tna-card__image">
            <img src="https://placehold.co/600x400/00623b/fff?text=Image&amp;font=museo&amp;font_size=48" alt="A random example image" width="600" height="400">
          </picture>
        </a>
        <div class="tna-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt velit, a molestie turpis.</p>
        </div>
      </article>
    </li>
    <li class="tna-column tna-column--width-1-3 tna-column--width-1-2-medium tna-column--width-1-2-small tna-column--full-tiny tna-!--margin-top-m">
      <article class="tna-card">
        <h2 class="tna-heading-m tna-card__heading">
          <a href="#" class="tna-card__heading-link">Card 2</a>
        </h2>
        <a href="#" class="tna-card__image-container" tabindex="-1" aria-hidden="true">
          <picture class="tna-card__image">
            <img src="https://placehold.co/600x400/00623b/fff?text=Image&amp;font=museo&amp;font_size=48" alt="A random example image" width="600" height="400">
          </picture>
        </a>
        <div class="tna-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt velit, a molestie turpis.</p>
        </div>
      </article>
    </li>
    <li class="tna-column tna-column--width-1-3 tna-column--width-1-2-medium tna-column--width-1-2-small tna-column--full-tiny tna-!--margin-top-m">
      <article class="tna-card">
        <h2 class="tna-heading-m tna-card__heading">
          <a href="#" class="tna-card__heading-link">Card 3</a>
        </h2>
        <a href="#" class="tna-card__image-container" tabindex="-1" aria-hidden="true">
          <picture class="tna-card__image">
            <img src="https://placehold.co/600x400/00623b/fff?text=Image&amp;font=museo&amp;font_size=48" alt="A random example image" width="600" height="400">
          </picture>
        </a>
        <div class="tna-card__body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tincidunt velit, a molestie turpis.</p>
        </div>
      </article>
    </li>
  </ul>`
    }, 1000)
  }
})
