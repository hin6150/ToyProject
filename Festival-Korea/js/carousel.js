"use strict";

import { cardInput } from "./modal.js";

class Carousel {
  constructor(el) {
    this.el = el;
    this.carouselOptions = ["previous", "next"];
    this.carouselInView = [1, 2, 3, 4, 5];
    this.carouselContainer;
  }

  mounted() {
    this.setupCarousel();
  }

  // Build carousel html
  setupCarousel() {
    const container = document.createElement("div");
    const controls = document.createElement("div");

    // const cardList = document.querySelectorAll(".carousel .card");
    for (let i = 0; i < 5; i++) {
      const card = new cardInput(i, "Seoul");
      container.append(card);
      card.className = `carousel-card carousel-item carousel-item-${i + 1}`;
      card.setAttribute("loading", "lazy");
      card.setAttribute("data-index", `${i + 1}`);
    }

    // Add container for carousel items and controls
    // .append()	선택된 요소의 마지막에 새로운 요소나 콘텐츠를 추가한다.
    this.el.append(container, controls);
    container.className = "carousel-container";
    controls.className = "carousel-controls";

    this.carouselOptions.forEach((option) => {
      const btn = document.createElement("button");
      const axSpan = document.createElement("span");

      // Add accessibilty spans to button
      axSpan.innerText = option;
      axSpan.className = "ax-hidden";
      btn.append(axSpan);

      // Add button attributes
      btn.className = `carousel-control carousel-control-${option}`;
      btn.setAttribute("data-name", option);

      // Add carousel control options
      controls.append(btn);
    });

    // After rendering carousel to our DOM, setup carousel controls' event listeners
    this.setControls([...controls.children]);

    // Set container property
    this.carouselContainer = container;
  }

  setControls(controls) {
    controls.forEach((control) => {
      control.onclick = (event) => {
        event.preventDefault();

        // Manage control actions, update our carousel data first then with a callback update our DOM
        this.controlManager(control.dataset.name);
      };
    });
  }

  controlManager(control) {
    if (control === "previous") return this.previous();
    if (control === "next") return this.next();

    return;
  }

  previous() {
    // Push the first item to the end of the array so that the previous item is front and center
    this.carouselInView.push(this.carouselInView.shift());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[
        index
      ].className = `carousel-card carousel-item carousel-item-${item}`;
    });
  }

  next() {
    // Take the last item and add it to the beginning of the array so that the next item is front and center
    this.carouselInView.unshift(this.carouselInView.pop());

    // Update the css class for each carousel item in view
    this.carouselInView.forEach((item, index) => {
      this.carouselContainer.children[
        index
      ].className = `carousel-card carousel-item carousel-item-${item}`;
    });
  }
}

// Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
const el = document.querySelector(".carousel");
// Create a new carousel object
const exampleCarousel = new Carousel(el);
// Setup carousel and methods
exampleCarousel.mounted();
