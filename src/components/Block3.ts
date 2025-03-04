export default class Block3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="/styles/block3.css" />
      <style>
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
                <img src="/left-arrow.svg"/>
              </button>
              <button id="next-btn" class="slider-btn">
                <img src="/right-arrow.svg"/>
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
