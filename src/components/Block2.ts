export default class Block2 extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <link rel="stylesheet" href="/styles/block2.css"/>
      <style>
      </style>
      <div class="block-2-container">
        <img src="/heroBlock2bg.avif" class="block-2-img" alt="dark bg image"/>
        <div class="block-2-content-container">
          <div class="block-2-titles-container">
            <div class="block-2-title-label">
               <div class="block-2-title-line"></div>
               <div class="block-2-title">CASES WE HANDLE</div>
            </div>
            <div class="block-2-subtitle">A LEGACY OF WINNING.</div>
            <div class="block-2-subtitle">DECADES OF RESULTS.</div>
          </div>
          <div class="boxes-container">
            <div class="box">
              <img src="/icon1.svg" alt="icon 1" class="box-icon"//>
              <h3>PERSONAL INJURY</h3>
              <div class="box-content">
                <p>
    If  you or a loved one has been severely injured by another party, we can help you get the care and justice you’re owed. Everything from medical care and lost wages to recovering due compensation for your pain and suffering.
                </p>
              </div>
              <button class="box-cta"> 
                <div class="cta-content">
                  <span>VIEW ALL CASE TYPES</span>
                  <img src="/right-arrow.svg" class="right-arrow" alt="right-arrow"/>
               </div>
              </button>
            </div>
            <div class="box">
              <img src="/icon2.svg" alt="icon 1" class="box-icon"//>
              <h3>MEDICAL MALPRACTICE</h3>
              <div class="box-content">
                <p>
    Medical and other healthcare negligence cases are among the most complex types of cases. If you have a serious medical malpractice case, you need our expertise.
                </p>
              </div>
              <button class="box-cta"> 
                <div class="cta-content">
                  <span>VIEW ALL CASE TYPES</span>
                  <img src="/right-arrow.svg" class="right-arrow" alt="right-arrow"/>
               </div> 
            </div>
            <div class="box">
              <img src="/icon3.svg" alt="icon 1" class="box-icon-2"//>
              <h3>MOTOR VEHICLE ACCIDENTS</h3>
              <div class="box-content">
                <p>
    When motor vehicle accidents result in serious injuries, fatalities, or other adverse consequences due to collisions and individuals being hit or injured, we step into the arena to hold the responsible parties accountable.
                </p>
              </div>
              <button class="box-cta"> 
                <div class="cta-content">
                  <span>VIEW ALL CASE TYPES</span>
                  <img src="/right-arrow.svg" class="right-arrow" alt="right-arrow"/>
               </div>
              </button> 
            </div>
            <div class="box">
              <img src="/icon4.svg" alt="icon 1" class="box-icon"/>
              <h3>DANGEROUS PRODUCTS</h3>
              <div class="box-content">
                <p>
    We represent consumers harmed by unsafe or defective drugs, pesticides, machinery, medical devices, and other dangerous products.
                </p>
              </div>
              <button class="box-cta"> 
                <div class="cta-content">
                  <span>VIEW ALL CASE TYPES</span>
                  <img src="/right-arrow.svg" class="right-arrow" alt="right-arrow"/>
               </div> 
            </div>
         </div>
       </div>
      </div>
    `;
    this.addScrollAnimation();
  }

  addScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const boxes = this.querySelectorAll(".box") 
          if (entry.isIntersecting) {
            const allBoxesHidden = [...boxes].every(box => !box.classList.contains("fade-in"));
            if(allBoxesHidden){
               setTimeout(() => {
                boxes.forEach((box, i) => {
                  setTimeout(() => box.classList.add("fade-in"), i * 1000); 
                });
              }, 100); 
            }
          }else{
            boxes.forEach((box) => {
              box.classList.remove("fade-in"); 
            });
          }
        },
      );
    }, { threshold: 0.2 });

    const contentBlock = this.querySelector(".block-2-content-container") as HTMLElement;
    observer.observe(contentBlock)
  }
}

customElements.define('custom-block-2', Block2)
