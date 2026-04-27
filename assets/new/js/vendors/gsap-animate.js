// Initialize GSAP and SplitText
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the .section-title class
  const titles = document.querySelectorAll(".section-title");

  // Loop through each title and create an animation
  titles.forEach((title) => {
    // Split the text into characters
    const splitText = new SplitText(title, { type: "words,chars" });
    const chars = splitText.chars;

    // Set initial state for each character
    gsap.set(chars, { x: 50, autoAlpha: 0 }); // Use autoAlpha instead of opacity

    // Create the animation timeline with ScrollTrigger
    gsap.timeline({
      scrollTrigger: {
        trigger: title,         // Trigger animation when this title comes into view
        start: "top 90%",       // Start animation when the top of the title reaches 80% of the viewport
        end: "bottom 20%",      // End animation when the bottom of the title reaches 20% of the viewport
        once: true              // Play the animation only once
      },
    }).to(chars, {
      x: 0,                     // Move characters to their original position
      autoAlpha: 1,             // Fade in characters using autoAlpha
      duration: 0.6,              // Duration of the animation
      stagger: 0.02             // Stagger the animation for each character
    });
  });
});