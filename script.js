document.addEventListener("DOMContentLoaded", () => {
    const things = [
      { number: "01", title: "your laugh", text: "The kind that makes everyone around you laugh too. It is genuinely one of my favourite sounds." },
      { number: "02", title: "your humour", text: "You can turn the most normal situation into a full comedy episode without even trying." },
      { number: "03", title: "your dekhne ka nazariya", text: "You somehow make little things look prettier, more intentional, and completely your vibe." },
      { number: "04", title: "your class", text: "Effortlessly elegant, even when the situation is anything but elegant." },
      { number: "05", title: "our café hopping", text: "Going in autos, trying new cafés, ordering random things, and you being the best partner for every little adventure.", image: "images/photo2.jpeg" },
      { number: "06", title: "your chaos", text: "Because life with you is never boring, predictable, or quiet." },
      { number: "07", title: "sharing academic pressure", text: "From deadlines and exams to panic sessions, everything feels a little less scary because we go through it together." },
      { number: "08", title: "dealing with boy drama", text: "Thank you for being there through every confusing plot twist, questionable decision, and what-does-this-mean conversation." },
      { number: "09", title: "listening to me", text: "You listen to every rant, every overthought thought, and every tiny detail that somehow becomes a very big deal to me." },
      { number: "10", title: "your overreactions", text: "Please never stop your overreactions. They are iconic, dramatic, and genuinely one of your best features.", image: "images/photo3.jpeg" },
      { number: "11", title: "your loyalty", text: "You love your people deeply, and they are very lucky to have you." },
      { number: "12", title: "making ordinary days special", text: "Even a random auto ride or normal afternoon becomes a memory with you." },
      { number: "13", title: "your honesty", text: "You say what needs to be said, but always with love." },
      { number: "14", title: "our memories", text: "All our inside jokes, random pictures, late-night conversations, and moments that only make sense to us.", image: "images/photo4.jpeg" },
      { number: "15", title: "your style", text: "Polished, pretty, classy, and completely your own." },
      { number: "16", title: "your softness", text: "Behind all the jokes, you have one of the kindest and most caring hearts." },
      { number: "17", title: "your stories", text: "No one tells a story with more detail, drama, and entertainment than you." },
      { number: "18", title: "the way you show up", text: "When someone needs you, you are there. That means more than you know." },
      { number: "19", title: "your ambition", text: "You have so much ahead of you, and I cannot wait to watch you do it all." },
      { number: "20", title: "the comfort of you", text: "You make people feel heard, included, and safe just by being yourself." },
      { number: "21", title: "just being the way you are", text: "Funny, aesthetic, classy, caring, chaotic, and completely irreplaceable. Please never change the parts of you that make you, you." }
    ];
  
    const birthdayPopup = document.getElementById("birthdayPopup");
    const openSurprise = document.getElementById("openSurprise");
  
    if (openSurprise && birthdayPopup) {
      openSurprise.addEventListener("click", () => {
        birthdayPopup.style.display = "none";
      });
    }
  
    const cardGrid = document.getElementById("cardGrid");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeButton");
    const modalNumber = document.getElementById("modalNumber");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const modalImage = document.getElementById("modalImage");
  
    if (cardGrid) {
      things.forEach((thing) => {
        const card = document.createElement("button");
        card.className = "memory-card";
  
        card.innerHTML = `
          <span class="card-number">${thing.number}</span>
          ${thing.image ? `<img src="${thing.image}" alt="${thing.title}" />` : ""}
          <h3>${thing.title}</h3>
          <p>click to open →</p>
        `;
  
        card.addEventListener("click", () => {
          modalNumber.textContent = thing.number;
          modalTitle.textContent = thing.title;
          modalText.textContent = thing.text;
  
          if (thing.image) {
            modalImage.src = thing.image;
            modalImage.style.display = "block";
          } else {
            modalImage.style.display = "none";
          }
  
          modal.classList.add("show");
        });
  
        cardGrid.appendChild(card);
      });
    }
  
    if (closeButton && modal) {
      closeButton.addEventListener("click", () => {
        modal.classList.remove("show");
      });
  
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("show");
        }
      });
    }
  
    const startButton = document.getElementById("startButton");
  
    if (startButton && cardGrid) {
      startButton.addEventListener("click", () => {
        cardGrid.scrollIntoView({ behavior: "smooth" });
      });
    }
  });