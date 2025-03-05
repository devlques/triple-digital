export default class Block2 extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <style>
.block-2-container {
  position: relative;
  width: 100%;
  min-height: 100vh; 
  background: url('heroBlock2bg.avif') center/cover no-repeat; 
}

.block-2-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
}

.block-2-content-container {
  position: relative;
  background: transparent;
  z-index: 1;
  display:flex;
  flex-direction: column;
  top: 0;
  gap:30px;
  padding-bottom: 5%;
}
.block-2-title-label {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.block-2-title {
  font-size: 2rem;
}
.block-2-title-line {
  height: 1px;
  width: 50px;
  background: white;
}
.block-2-subtitle{
  margin-left: 60px;
  font-size:2.5rem;
}
.block-2-titles-container {
  padding: 5%;
 }
.boxes-container {
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
 }

.box {
  width: 85%;
  height: auto;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 5%;
  background: transparent;
  transition: background 0.5s ease-in;
  transform:  translateY(10%);
  transition: opacity 1s ease-in-out 1s, transform 1s ease-in-out 1s;
  opacity: 0;
}
.box.fade-in {
  opacity: 1;
  transform: translateY(0);
}
.x-icon, .box-icon-2 {
  width: 50px;
  aspect-ratio: 1/1;
  transition: filter 0.5s ease-in;
}
.box-icon {
  filter: invert(1);
 }

.box-cta {
  padding: 2% 4%;
  font-size: 1rem;
  background: transparent;
  border: 2px solid black;
  color: black;
  display:none;
  transition: display 0.5s ease-in;
  transition: color 0.3s ease-in;
  transition: background 0.3s ease-in;
  margin: auto;
}
.cta-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}
.right-arrow {
  transform: translateX(0%);
  width: 0px;
  opacity: 0;
  filter: invert(0);
  transition: 
    opacity 0.3s ease-in , 
    filter 0.3s ease-in , 
    width 0.3s ease-in , 
    transform 0.3s ease-in;
}
.box-cta:hover {
  background: black;
  color: white;
  width: fit-content;
}
.box-cta:hover .right-arrow {
  opacity: 1;
  filter: invert(1);
  transform: translateX(30%);
  width: 20px;
}

.box:hover {
    background: white;
 }
 .box:hover .box-content {
    display: none;
 }
 .box:hover .box-cta {
    display: block;
 }
 .box:hover .box-icon {
    filter: invert(0)
 }
 .box:hover .box-icon-2{
    filter: invert(1)
 }
 .h3 {
   transition: all 0.5s ease-in;
 }
 .box:hover h3 {
    color: black;
 }

@media only screen and (min-width: 1200px) {
  .block-2-img {
    display:block;
    width: 100%;
  }
  .block-2-content-container {
    background:transparent;
  }
  .block-2-title {
    font-size: 2.5rem;
  }
  .block-2-title-line {
    height: 1px;
    width: 75px;
    background: white;
   }

  .block-2-subtitle{
    margin-left: 85px;
    font-size: 3.5rem;
   }

  .boxes-container {
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    height: fit-content;
  }

  .box {
    padding: 1%;
    width: 20%;
    align-items: start;
  }
}
      </style>
      <div class="block-2-container">
        <img src="heroBlock2bg.avif" class="block-2-img" alt="dark bg image"/>
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
              <img src="icon1.svg" alt="icon 1" class="box-icon"//>
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
              <img src="icon2.svg" alt="icon 1" class="box-icon"//>
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
              <img src="icon3.svg" alt="icon 1" class="box-icon-2"//>
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
              <img src="icon4.svg" alt="icon 1" class="box-icon"/>
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
          boxes.forEach((box) => box.classList.remove("fade-in") );
          const allBoxesHidden = [...boxes].every(box => !box.classList.contains("fade-in"));
          if (entry.isIntersecting && allBoxesHidden) {
            if(allBoxesHidden){
               setTimeout(() => {
                boxes.forEach((box, i) => {
                  let counter = i;
                  setTimeout(() => box.classList.add("fade-in"), counter * 1000); 
                });
              }, 100); 
            }
          }else{
            boxes.forEach((box) => {
              setTimeout(() => box.classList.remove("fade-in"),10); 
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
