export default class Block3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
.block-3-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url('heroBlock3bg.avif') center/cover no-repeat; 
}
.block-3-content-container {
  position:relative;
  width: 100%;
  height: 100%;
  background: transparent;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10% 0;
}
.block-3-video-container{
  flex:1;
  width: 100%;
  height: auto;
}
.block-3-content-text-container {
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 10% 0;
  gap: 50px;
}
.block-3-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.block-3-text-title-line {
  width: 75px;
  height: 1px;
  background: black;
}
.block-3-text-title {
  color: #081126;
  font-size: 2rem;
}
.slider-container {
  position: relative;
  display: flex;
  overflow: hidden;
  padding-left: 75px;
  max-width: 600px;
  height: 400px;
}
.panel {
  position: absolute;
  height: 100%;
  transition:  
    opacity 1s ease-in-out,
    transform 1s ease-in-out 
    ;
}
@keyframes slide-from-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes slide-from-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
.slide-in-left {
  animation: slide-from-left 1.5s ease-in-out;
}

.slide-in-right {
  animation: slide-from-right 1.5s ease-in-out;
} 
.panel-large-number {
  color: #081126;
  font-size: 3rem;
  font-family: Arial;
  font-weight: bold;
}
.panel-subtitle {
  color: #081126;
  font-size: 1.3rem;
}
.panel-content p {
  font-size: 1rem;
  line-height: 1.6;
  width: 70%;
}
.block-3-cta {
  background: transparent;
  border: 1px solid #081126;
  color: #081126;
  padding: 1%;
  font-size: 0.8rem;
  transition: 0.3s ease-in-out;
}
.block-3-cta:hover{
  background: #081126;
  color: white;
}
.slider-btns {
  padding-left: 75px;
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.slider-btn {
  background: transparent;
  border-radius: 50%;
  border: 1px solid #081126;
  width: 40px; 
  height: 40px;
  transition: border 1s ease-in-out;
}
.slider-btn img {
  width: 20px; 
  height: 20px;
  filter: invert(0);
  transition: filter 1s ease-in-out;
}
.disabled {
  border: 1px solid gray;
  img  {
    filter: invert(1);
  }
}

@media only screen and (min-width: 1200px) {
  .block-3-content-container {
    display:flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .block-3-cta {
    font-size: 0.9rem;
    padding: 2%;
  }
}
      </style>
      <div class="block-3-container">
        <div class="block-3-content-container">
          <div class="block-3-video-container">
            <video autoplay loop muted>
              <source src="https://videos.tresiocdn.com/BCP6V3XS6ZrJ2Gix14gbLNcyNlUeiL6b/high.mp4" type="video/mp4">
            </video>
          </div>
          <div class="block-3-content-text-container">
            <div class="block-3-title">
              <div class="block-3-text-title-line"></div>
              <div class="block-3-text-title">RESULTS FOR CLIENTS</div>
            </div> 
            <div class="slider-container">
              <div id="panel" class="panel active"></div>
            </div>
            <div class="slider-btns">
              <button id="prev-btn" class="slider-btn">
                <img src="left-arrow.svg"/>
              </button>
              <button id="next-btn" class="slider-btn">
                <img src="right-arrow.svg"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const panelsData = [
      {
        amount: "$11,000,000",
        subtitle: "SURGERY MEDICAL MALPRACTICE",
        content:
          "A patient underwent a neck fusion surgery wherein a combination of errors made by the neurosurgeon, anesthesiologist, and operative staff resulted in the patient suffering permanent paraplegia. We filed suit, and the jury awarded damages to pay for a lifetime of medical care and financial security for our client.",
      },
      {
        amount: "$10,000,000",
        subtitle: "DIABETES MEDICAL MALPRACTICE DEATH",
        content:
          "ER treatment delays for a diabetic crisis case resulted in the death of the patient. On behalf of the victim’s family, we obtained a $10 million settlement for wrongful death.",
      },
      {
        amount: "$10,000,000",
        subtitle: "ACCIDENTAL SHOOTING DEATH",
        content:
          "A mother hired us after her son was accidentally shot at their home. We procured a $10 million settlement through our client’s homeowners’ insurance policy.",
      },
      {
        amount: "$8,000,000",
        subtitle: "WORKER’S COMPENSATION NON-SUBSCRIBER",
        content:
          "A hospital employee was seriously injured due to unreasonably dangerous conditions at work. After contested arbitration proceedings, we procured an $8 million recovery for our client.",
      },
    ];

    let currentIndex = 0;
    const panel = this.querySelector("#panel") as HTMLElement;
    const nextBtn = this.querySelector("#next-btn") as HTMLElement;
    const prevBtn = this.querySelector("#prev-btn") as HTMLElement;
    const panelsHTML = panelsData.map(p => `
        <div class="panel-large-number">${p.amount}</div> 
          <div class="panel-subtitle">${p.subtitle}</div>
          <div class="panel-content">
          <p>${p.content}</p>
          </div>
         <button class="block-3-cta">VIEW ALL CASE RESULTS</button>
    `);
    

    const updatePanel = (direction?:string| null) => {
      if(direction === "next"){
        panel.classList.add("slide-in-right")  
      }else {
        panel.classList.add("slide-in-left")  
      }
      panel.innerHTML = panelsHTML[currentIndex];
      setTimeout(() => {
         panel.classList.remove("slide-in-left", "slide-in-right")
      }, 1500)
    };

    const checkDisabled = () => {
      if(currentIndex === panelsData.length -1){
          nextBtn.classList.add("disabled");
          return;
      }
      if(currentIndex === 0){
          prevBtn.classList.add("disabled");
          return;
      }
    };

    updatePanel(null);
    checkDisabled();

    nextBtn.addEventListener("click", () => {
      checkDisabled();
      if(nextBtn.classList.contains("disabled")) return
      if(currentIndex < panelsData.length -1 ){
        currentIndex++;
        updatePanel("next");
      }else{
        nextBtn.classList.add("disabled");
        return;
      }
      prevBtn.classList.remove("disabled");
    });

    prevBtn.addEventListener("click", () => {
      checkDisabled();
      if(prevBtn.classList.contains("disabled")) return
      if(currentIndex > 0){
        currentIndex--;
        updatePanel("prev");
      }else{
        prevBtn.classList.add("disabled");
        return;
      }
      nextBtn.classList.remove("disabled");
    });
  }
}

customElements.define("custom-block-3", Block3);
