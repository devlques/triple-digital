(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();class g extends HTMLElement{connectedCallback(){this.innerHTML=`
      <link rel="stylesheet" href="/styles/navigation.css"/>
      <header class="nav-container">
          <div class="nav-info-bar">
            <div>REFERRING ATTORNEYS</div>    
            <div>CONTACT US</div>    
            <div>800-520-1749</div>    
          </div>

          <div class="nav-logo-menu">
            <img src="pkLogo.png" alt="logo" class="logo-img">
            <button type="button" id="menu-close-btn" class="btn"> 
              <span class="close-icon hidden">X</span>
              <div class="hamburger-icon">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </button>
          </div>
          <div class="nav-content hidden"> 
            <nav class="nav-links">
              <img src="pkLogo.png" alt="logo" class="logo-img-large">
              <a href="#" class="nav-link">HOME</a>
              <div class="sub-menu-container">

                <button class="sub-menu-btn btn">
                  <span class="nav-link">ABOUT</span>
                  <span class="triangle-icon"></span>
                </button>

                <div class="sub-menu-list-container">
                  <ul>
                    <li class="sub-menu-item">Overview</li>
                    <li class="sub-menu-item">The Answer to Insurance Companies</li>
                    <li class="sub-menu-item">National Trial Attorneys</li>
                    <li class="sub-menu-item">CLE</li>
                    <li class="sub-menu-item">Get the Newsletter</li>
                    <li class="sub-menu-item">Awards & Recognitions</li>
                    <li class="sub-menu-item">Victories</li>
                    <li class="sub-menu-item">Attorneys</li>
                    <li class="sub-menu-item">Reviews</li>
                  </ul>
                </div>

              </div>              
              <div class="sub-menu-container">
                <button class="sub-menu-btn btn">
                  <span class="nav-link">ATTORNEYS</span>
                  <span class="triangle-icon"></span>
                </button>
                <div class="sub-menu-list-container">
                  <ul>
                    <li class="sub-menu-item">Overview</li>
                    <li class="sub-menu-item">Jim M. Perdue Jr.</li>
                    <li class="sub-menu-item">Donald H. Kidd</li>
                    <li class="sub-menu-item">Scott R. Frase</li>
                    <li class="sub-menu-item">Rodney Merwin</li>
                    <li class="sub-menu-item">Jim M. Perdue Sr.</li>
                    <li class="sub-menu-item">Nicole Perdue</li>
                    <li class="sub-menu-item">Tammy Kidd</li>
                    <li class="sub-menu-item">Lou Thompson Black</li>
                  </ul>
                </div>
              </div>              
              <a href="#" class="nav-link">VICTORIES</a>
              <div class="sub-menu-container">
                <button class="sub-menu-btn btn">
                  <span class="nav-link">PERSONAL INJURY</span>
                  <span class="triangle-icon"></span>
                </button>
                <div  class="sub-menu-list-container">
                  <ul>
                    <li class="sub-menu-item">Overview</li>
                    <li class="sub-menu-item">Car Accidents</li>
                    <li class="sub-menu-item">Rideshare Accidents</li> <li class="sub-menu-item">Distracted Driving</li>
                    <li class="sub-menu-item">Oil Field Injuries</li>
                    <li class="sub-menu-item">Commercial Vehicle Accidents</li>
                    <li class="sub-menu-item">Motorcycle Accidents</li>
                    <li class="sub-menu-item">Auto-Pedestrian Accidents</li>
                    <li class="sub-menu-item">Traumatic Brain Injury</li>
                    <li class="sub-menu-item">Dram Shop/Drunk Driver</li>
                    <li class="sub-menu-item">Sexual Assault</li>
                    <li class="sub-menu-item">Workplace Injuries</li>
                    <li class="sub-menu-item">Dog Bites</li>
                    <li class="sub-menu-item">Wrongful Death</li>
                    <li class="sub-menu-item">Slip & Fall</li>
                    <li class="sub-menu-item">Liability of Premises Owners for Criminal Acts of Third Parties</li>
                    <li class="sub-menu-item">Plant & Refinery Accidents</li>
                    <li class="sub-menu-item">Insurance Coverages</li>
                    <li class="sub-menu-item">Automobile Defects</li>
                    <li class="sub-menu-item">Tire Failure/Blowout</li>
                    <li class="sub-menu-item">Non-Consensual Sharing of Intimate Images</li>
                  </ul>
                </div>
              </div>
              <div  class="sub-menu-container">
                <button  class="sub-menu-btn btn">
                   <span class="nav-link">MEDICAL MALPRACTICE</span>
                   <span class="triangle-icon"></span>
                </button>
                <div  class="sub-menu-list-container">
                  <ul>
                    <li class="sub-menu-item">Overview</li>
                    <li class="sub-menu-item">Medical Products</li>
                    <li class="sub-menu-item">Misdiagnosis & Failure to Diagnose</li>
                    <li class="sub-menu-item">Birth Injuries</li>
                    <li class="sub-menu-item">Pharmacy & Prescription Malpractice</li>
                    <li class="sub-menu-item">Dangerous Drugs</li>
                    <li class="sub-menu-item">Defective Knee Replacement</li>
                    <li class="sub-menu-item">Brain Injuries</li>
                    <li class="sub-menu-item">Wrongful Death</li>
                    <li class="sub-menu-item">Hospital Negligence</li>
                    <li class="sub-menu-item">Nursing Malpractice</li>
                    <li class="sub-menu-item">Nursing Home Negligence</li>
                    <li class="sub-menu-item">Bariatric Surgery Malpractice</li>
                    <li class="sub-menu-item">Cerebral Palsy</li>
                    <li class="sub-menu-item">Contaminated Baby Formula</li>
                    <li class="sub-menu-item">Prescription Drug Birth Defects</li>
                    <li class="sub-menu-item">Ozempic</li>
                  </ul>
                </div>
              </div>
             <div class="sub-menu-container">
                <button class="sub-menu-btn btn">
                  <span class="nav-link">DANGEROUS PRODUCTS</span>
                  <span class="triangle-icon"></span>
                </button>
                <div class="sub-menu-list-container">
                  <ul>
                    <li class="sub-menu-item">Overview</li>
                    <li class="sub-menu-item">Defective Hip Implants</li>
                    <li class="sub-menu-item">Prescription Drug Birth Defects</li>
                    <li class="sub-menu-item">Cordis IVC Filters</li>
                    <li class="sub-menu-item">Roundup</li>
                    <li class="sub-menu-item">Titan Fitness 3-in-1 Foam Plyometric Box</li>
                    <li class="sub-menu-item">Paraquat Herbicide</li>
                    <li class="sub-menu-item">Zantac</li>
                  </ul>
                </div>
              </div>
 
              <a href="#" class="nav-link">VIDEOS</a>
              <a href="#" class="nav-link">BLOG</a>
              <a href="#" class="nav-link">DISCLAIMER</a>
            </nav>
        </div>
      </header>
    `,window.addEventListener("scroll",()=>{const s=this.querySelector(".nav-container");window.scrollY>100?s.style.background="#081126":s.style.background="transparent"});const o=this.querySelector("#menu-close-btn");o==null||o.addEventListener("click",()=>{const s=this.querySelector(".nav-content"),e=this.querySelector(".hamburger-icon"),t=this.querySelector(".close-icon");s==null||s.classList.toggle("hidden"),e==null||e.classList.toggle("hidden"),t==null||t.classList.toggle("hidden")});const a=this.querySelectorAll(".sub-menu-btn");a==null||a.forEach(s=>{var i;const e=(i=s==null?void 0:s.closest(".sub-menu-container"))==null?void 0:i.querySelector(".sub-menu-list-container"),t=s.querySelector(".triangle-icon");s.addEventListener("click",()=>{e==null||e.classList.toggle("open"),t&&(t.style.transform=e!=null&&e.classList.contains("open")?"rotate(180deg)":"rotate(0deg)")});const r=l=>{var n;if(window.innerWidth>1395){const c=this.querySelector(".open");if(c&&(c.classList.remove("open"),e==null||e.classList.remove("multi-column")),l.type==="mouseenter"){e==null||e.classList.add("open");const d=e==null?void 0:e.children,b=d?(n=d[0].children)==null?void 0:n.length:0,u=d?d[0]:null;if(b>9){const h=Math.ceil(b/8),p=this.querySelector(".nav-content"),v=this.querySelector(".sub-menu-container");u==null||u.classList.add("multi-column"),u!==null&&(u.style.gridTemplateColumns=`repeat(${h}, minmax(150px, 1fr))`),e.style.left="0",v.style.position="none",p.style.position="relative"}else u==null||u.classList.add("single-column");t&&(t.style.transform="rotate(180deg)")}else l.type==="mouseleave"&&(e==null||e.classList.remove("open"),t&&(t.style.transform="rotate(0deg)"))}};s.addEventListener("mouseenter",r),e==null||e.addEventListener("mouseenter",r),e==null||e.addEventListener("mouseleave",r)}),window.innerWidth>1395&&this.querySelectorAll("a").forEach(e=>{e.addEventListener("mouseenter",()=>{const t=this.querySelector(".open");t&&t.classList.remove("open")})})}}customElements.define("custom-nav",g);class f extends HTMLElement{connectedCallback(){this.innerHTML=`
        <link rel="stylesheet" href="/styles/hero.css"/>
        <style>
          .hero-container {
            width: 100%;
            height: fit-content;
          }
          .img-container {
            position: relative;
          }
          .hero-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center bottom;
          }
          .img-container::before {
            content: "";
            position: absolute;
            inset: 0; 
            background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)); 
            z-index: 1;
          }
          .video-box{
            display:flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            place-content: center;
            width: 100px;
            height: 100px;
            background: #f6f6f6;
            opacity: 0.9;
            z-index:2;
          }
          .video-box:hover {
            opacity: 1;
            cursor:pointer;
          }
          a {
            text-decoration: none;
          }
          .play-icon {
            width: 0;
            height: 0;
            border-left: 30px solid #1f417e;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
          }
          .play-icon-text {
            color: black;
            font-weight:bold;
          }
          .content-text-container {
             position: absolute;
             bottom: 0;
             width: 100%;
             height: 100%;
             display: flex;
             flex-direction: column;
             align-items: end;
             justify-content: flex-end;  

             background: transparent;
             .h2-2 {
               font-family: Helvetica;
               font-weight: bold;
               font-size: 5rem;
             }
           }

          .content-text, .content-text-sm {
            padding: 5% 3%;
            display:flex;
            flex-direction: column;
            gap: 30px;
            z-index: 2;
          }
          .content-text-sm {
            background: #081126;
          }
          .content-text {
            display: none;
          }

          h1 {
            font-size: 2rem;
          }
          h2 .h2-1 {
            font-size: 1.5rem;
          }
          h2 .h2-2{
            font-size: 4rem;
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: 30px;
          }
          
          @media only screen and (min-width: 800px) {
            .hero-container{
              z-index: 10;
              margin-top: -100px;
            }
            .content-text-container {
              background:transparent;
            }
            .content-text-sm {
              display: none;
            }

            @keyframes zoom-out {
              from {
                transform: scale(1.2)
              }
              to {
                transform: scale(1)
              }
            }
            .hero-container img {
              animation: zoom-out 1s ease-in-out;
            }
            .video-box {
              width: 15%;
              height: 20%;
            }

            @keyframes slide-up {
              from {
                 opacity: 0;
                 transform: translateY(10%); 
              }
              to {
                 opacity: 1;
                 transform: translateY(0); 
              }
            }
            .content-text {
              display: block;
              animation: slide-up 1s ease-in-out;
            }

          }

        </style>
        <div class="hero-container">
          <div class="img-container">
            <img src="/hero.avif" alt="2 lawyers in suits" class="hero-img"/>
            <div class=content-text-container>
              <div class="content-text">
                 <h2> 
                   <span class="h2-1"> WHERE OTHERS SETTLE</span> <br/> <br/> 
                   <span class="h2-2">WE SUCCEED</span>
                 </h2>
                 <h1> Perdue & Kidd Personal Injury Lawyers in Houston, TX </h1> 
              </div>
              <a class="video-box" href="https://www.youtube.com/watch?v=bqLwIVC96Fo" target="_blank" >
                 <div class="play-icon"></div>
                 <div class="play-icon-text">PLAY VIDEO</div>
              </a>
            </div>
          </div>
          <div class="content-text-sm">
              <h2> 
              <span class="h2-1"> WHERE OTHERS SETTLE</span> 
              <br/>
              <br/> 
              <span class="h2-2">WE SUCCEED</span>
             </h2>
             <h1> Perdue & Kidd Personal Injury Lawyers in Houston, TX </h1> 
          </div>
        </div>
      `}}customElements.define("custom-hero",f);class y extends HTMLElement{connectedCallback(){this.innerHTML=`
      <link rel="stylesheet" href="/styles/videoBlock1.css"/>
      <style>
      </style>
      <div class="container">
        <div class="content-container">
          <div class="video-container">
            <video autoplay loop muted>
              <source src="https://videos.tresiocdn.com/00025qRFDTvw802RUFPvzIRGH302KeN5kRAB/medium.mp4" type="video/mp4">
            </video>
            <div class="overlay"></div>
          </div>
          <div class="content">
            <div class="title-label-container">
              <div class="title-label">HOUSTON, TX</div>
              <div class="hr-line"></div>
            </div>
            <div class="sub-content">
              <div class="title">ON "THE BEST LAWYERS IN AMERICA" LIST FOR 17 YEARS RUNNING</div>
              <p class="bold">There are thousands of personal injury law firms. There’s only one Perdue & Kidd.
              </p>
              <p>
                Based in Houston and serving clients nationwide, Perdue & Kidd is widely regarded and recognized as one of the most competent injury law firms in the country. The firm’s distinguished track record includes multiple eight-figure jury verdicts and a reputation for winning complex, high-stakes cases.
              </p>
              <div class="logos">
                <img src="/logq1.avif" alt="logo1"/> 
                <img src="/logo2.avif" alt="logo2"/> 
                <img src="/logo3.avif" alt="logo3"/> 
                <img src="/logo4.avif" alt="logo4"/> 
                <img src="/logo5.avif" alt="logo5"/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("custom-video-block-1",y);class w extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `,this.addScrollAnimation()}addScrollAnimation(){const o=new IntersectionObserver(s=>{s.forEach(e=>{const t=this.querySelectorAll(".box");t.forEach(i=>i.classList.remove("fade-in"));const r=[...t].every(i=>!i.classList.contains("fade-in"));e.isIntersecting&&r?r&&setTimeout(()=>{t.forEach((i,l)=>{setTimeout(()=>i.classList.add("fade-in"),l*1e3)})},100):t.forEach(i=>{setTimeout(()=>i.classList.remove("fade-in"),10)})})},{threshold:.2}),a=this.querySelector(".block-2-content-container");o.observe(a)}}customElements.define("custom-block-2",w);class k extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `;const o=[{amount:"$11,000,000",subtitle:"SURGERY MEDICAL MALPRACTICE",content:"A patient underwent a neck fusion surgery wherein a combination of errors made by the neurosurgeon, anesthesiologist, and operative staff resulted in the patient suffering permanent paraplegia. We filed suit, and the jury awarded damages to pay for a lifetime of medical care and financial security for our client."},{amount:"$10,000,000",subtitle:"DIABETES MEDICAL MALPRACTICE DEATH",content:"ER treatment delays for a diabetic crisis case resulted in the death of the patient. On behalf of the victim’s family, we obtained a $10 million settlement for wrongful death."},{amount:"$10,000,000",subtitle:"ACCIDENTAL SHOOTING DEATH",content:"A mother hired us after her son was accidentally shot at their home. We procured a $10 million settlement through our client’s homeowners’ insurance policy."},{amount:"$8,000,000",subtitle:"WORKER’S COMPENSATION NON-SUBSCRIBER",content:"A hospital employee was seriously injured due to unreasonably dangerous conditions at work. After contested arbitration proceedings, we procured an $8 million recovery for our client."}];let a=0;const s=this.querySelector("#panel"),e=this.querySelector("#next-btn"),t=this.querySelector("#prev-btn"),r=o.map(n=>`
        <div class="panel-large-number">${n.amount}</div> 
          <div class="panel-subtitle">${n.subtitle}</div>
          <div class="panel-content">
          <p>${n.content}</p>
          </div>
         <button class="block-3-cta">VIEW ALL CASE RESULTS</button>
    `),i=n=>{n==="next"?s.classList.add("slide-in-right"):s.classList.add("slide-in-left"),s.innerHTML=r[a],setTimeout(()=>{s.classList.remove("slide-in-left","slide-in-right")},1500)},l=()=>{if(a===o.length-1){e.classList.add("disabled");return}if(a===0){t.classList.add("disabled");return}};i(null),l(),e.addEventListener("click",()=>{if(l(),!e.classList.contains("disabled")){if(a<o.length-1)a++,i("next");else{e.classList.add("disabled");return}t.classList.remove("disabled")}}),t.addEventListener("click",()=>{if(l(),!t.classList.contains("disabled")){if(a>0)a--,i("prev");else{t.classList.add("disabled");return}e.classList.remove("disabled")}})}}customElements.define("custom-block-3",k);class x extends HTMLElement{connectedCallback(){this.innerHTML=`
        <style>
        .m-block-4-container {
          display:none;
         }
         @media only screen and (max-width: 1024px){
            .m-block-4-container{
              position: reltive;
              width: 100%;
              display: flex;
              flex-direction: column;
              color:white;
            }
            .m-block-4-section-1 {
               background: #081126;
               display:flex;
               flex-direction: column;
               align-items: center;
               gap: 20px;
               padding: 4% 0;
               .m-block-4-section-1-title {
                  font-size: 1.5rem;
               }
               .m-block-4-section-1-names {
                  display: flex;
                  flex-direction: row;
                  gap: 20px;
                  font-size: 2rem;
                  font-weight: bold;
                  font-family: Helvetica;
                  button:hover {
                    cursor:pointer;
                  }
                  .m-block-4-section-1-name {
                    background: transparent; 
                    border:none;
                    font-size: 2rem;
                  }
                  .m-block-4-section-1-name.selected {
                    text-decoration: underline; 
                    text-underline-offset: 15px;
                    text-decoration-thickness: 1px;
                  }
               }
            }
            .m-block-4-section-2{
               background: white;
               position: relative;
               height: 400px;
               overflow: hidden;
               img {
                  height: 100%;
                  width: 100%;
                  object-fit: cover;
                  object-position: center center;
                  opacity:0;
                  transition: opacity 0.5s ease-in-out;
               }
               img.loaded {
                 opacity: 1;
               }
            }
            .m-block-4-section-3 {
               background: #081126;
               padding:3%;
               display:flex;
               flex-direction:column;
               gap: 20px;

               button.m-block-4-section-3-btn {
                 background: transparent; 
                 border:1px solid white;
                 font-family: acumin-pro-condensed;
                 padding: 2% 4%;
                 height: 45px;
                 font-size: 1rem;
                 width: fit-content;
                 display: flex;
                 align-items: center;
                 gap: 10px;
               }
              .m-block-4-right-arrow {
                 opacity: 0;
                 filter: invert(0);
                 width: 0;
                 transform: translateX(-100%);
                 transition: 
                  opacity 0.3s ease-in-out,
                  filter 0.3s ease-in-out,
                  width 0.3s ease-in-out,
                  transform 0.3s ease-in-out;
               }
               button.m-block-4-section-3-btn:hover 
               .m-block-4-right-arrow {
                 opacity: 1;
                 filter: invert(1);
                 transform: translateX(0%);
                 width: 20px;
               }

               .m-block-4-section-3-title {
                  font-size: 1.5rem;
               }
               .m-block-4-section-3-full-name {
                  font-size: 3rem;
               }
               
            }

         }

        </style>
        <div class="m-block-4-container">
          <div class="m-block-4-section-1">
              <div class="m-block-4-section-1-title">OUR ATTORNEYS</div>
              <div class="m-block-4-section-1-names">
                <button class="m-block-4-section-1-name selected">Perdue</button>
                <button class="m-block-4-section-1-name">Kidd</button>
                <button class="m-block-4-section-1-name">Blake</button>
                <button class="m-block-4-section-1-name">Frase</button>
              </div>
          </div>
          <div class="m-block-4-section-2">
          </div>
          <div class="m-block-4-section-3">
            <div class="m-block-4-section-3-title"></div>
            <div class="m-block-4-section-3-full-name"></div>
            <div class="m-block-4-section-3-bio"></div>
            <button class="m-block-4-section-3-btn">
                  <span> READ BIO</span>
                  <img src="/right-arrow.svg" class="m-block-4-right-arrow" alt="right-arrow"/>
            </div>
          </div>
        </div>
      `;const o={perdue:{img:'<img src="https://www.datocms-assets.com/110177/1698339552-2-perdue.jpg?auto=format,compress&w=1200" alt="man in suit looking into the future"/>',title:"ATTORNEY & PARTNER",fullName:"JIM M. PERDUE JR.",bio:"<p><b>Jim Perdue is a two-time “Trial Lawyer of the Year” for Medical Malpractice and Personal Injury Law.</b></p><p>He’s been recognized as a “Texas Super Lawyer” for 20 consecutive years and counting. He is double board-certified and his record of winning multi-million dollar jury verdicts has rightfully earned him a reputation as one of the more skilled and brilliant trial attorneys in the nation.</p>"},kidd:{img:'<img src="https://www.datocms-assets.com/110177/1699647224-3-kidd.jpg?auto=format,compress&w=1200 alt="man in suit looking into the future"/>',title:"ATTORNEY & PARTNER",fullName:"DONALD H. KIDD.",bio:"<p><b>Insurance companies and big corporations know they’re in trouble when they face off with Don Kidd.</b></p> <p>With over 25 years of legal experience and expertise, Don’s record of handling complex litigation and winning big for his clients have earned him countless recognitions and awards from state and national legal associations, including the Lifetime Achievement Award from “America’s Top 100 Lawyers”.</p>"},blake:{img:'<img src="https://www.datocms-assets.com/110177/1699647209-4-blake.jpg?auto=format,compress&w=1200" alt="man in suit looking into the future"/>',title:"ATTORNEY",fullName:"ADAM J. BLAKE",bio:"<p><b>A native Houstonian with over a decade of trial experience, Adam Blake is one of the brightest young legal minds in the state.</b></p><p>Every year since 2019, Texas Super Lawyers has named him a “Rising Star”, a distinction that less than 2.5% of attorneys in the state receive. In 2023 he was elected President of the Houston Trial Lawyers Association to lead its membership of 1,100 attorneys working together, fighting for the legal rights of everyday citizens.</p>"},frase:{img:'<img src="https://www.datocms-assets.com/110177/1699647217-5-frase.jpg?auto=format,compress&w=1200" alt="man in suit looking into the future"/>',title:"ATTORNEY",fullName:"SCOTT FRASE",bio:"<p><b>Prior to joining Perdue &amp; Kidd, Scott Frase worked as a trial attorney for two of the largest personal injury firms in the state of Texas.</b></p><p>He’s seen first-hand how, in the big law firms, sometimes clients are liable to be forgotten or treated as a number. Anyone who knows Scott will tell you he’s a fierce advocate for his clients who won’t tolerate anything less than the best for the people he represents, which makes him a perfect fit for the Perdue &amp; Kidd team. Scott is also distinguished as a “Rising Star” by Texas Super Lawyers, an award received by only 2.5% of all lawyers in the state.</p>"}},a=e=>{const t=o[e||"perdue"].img??"",r=o[e||"perdue"].title??"",i=o[e||"perdue"].fullName??"",l=o[e||"perdue"].bio??"",n=this.querySelector(".m-block-4-section-2");n.innerHTML=t;const c=n.querySelector("img");c&&(c.onload=()=>c.classList.add("loaded"));const d=this.querySelector(".m-block-4-section-3-title"),b=this.querySelector(".m-block-4-section-3-full-name"),u=this.querySelector(".m-block-4-section-3-bio");d.textContent=r,b.textContent=i,u.innerHTML=l};a(),this.querySelectorAll(".m-block-4-section-1-name").forEach(e=>e.addEventListener("click",t=>{var l,n;(l=this.querySelector(".selected"))==null||l.classList.remove("selected");const r=t.target;r.classList.add("selected");const i=(n=r.textContent)==null?void 0:n.trim().toLowerCase();a(i)}))}}customElements.define("custom-block-4-mobile",x);class E extends HTMLElement{connectedCallback(){this.innerHTML=`
        <style>
        .block-4-container {
          display:none;
        }
         @media only screen and (min-width: 1024px){
            .block-4-container{
              position: reltive;
              display:grid;
              width: 100%;
              height: 100vh;
              background: 
                linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
                url('/group.jpg') top/cover no-repeat;
              transition: all 1s ease-in-out,
              grid-template-columns: 1fr; 
            } 

            .block-4-container-content {
              display:grid;
              transition: all 1s ease-in-out;
              grid-template-columns: 0.5fr;
              justify-content: center;
              .names-column {
                display: grid;
                grid-template-columns: repeat(5, auto); 
                gap: 150px;
                transition: all 1s ease-in-out;
              }
            }
           
            .block-4-container-content .name {
              font-size: 2rem;
              font-weight: bold;
              font-family: Helvetica;
              color: white;
              opacity: 1;
              background: transparent;
              transition: 
                transform 1s ease-in-out;
              border: none;
             } 

             .block-4-container .name-title {
                 font-size: 2rem;
                 border: none;
                 background: none;
                 transition: transform 1s ease-in-out;
             }

             .block-4-container-content-image {
                opacity: 0;
                transition: opacity 1s ease-in-out;
             }

            .block-4-container.active {
              background: black;
              grid-template-columns: 1fr 3fr; 
              height: auto;
              justify-content: space-center
              transition: all 1s ease-in-out;
            }

            .block-4-container.active .block-4-container-content {
              grid-template-columns: 1fr 4fr;
              justify-self: center;
            }

            .block-4-container.active .names-column {
               grid-template-columns: 1fr;
               gap:20px;
               text-align: left;
               padding-left: 20px;
               
            }
            .block-4-container.active button.name-title {
              background: none;
              border: none;
            }
            .block-4-container.active button.name {
              background: none;
              border: none;
              cursor: pointer;
            }
            .block-4-container.active .names-indicator-container {
              position: relative;
              height: 100%;
              width: 100%;
            }
            .block-4-container.active .names-indicator {
                position: absolute;
                top: 10px;
                height: 2px;
                width: 100%;
                background: white;
                transform: translateY(120px);
                transition: transform 1s ease-in-out;
            }

            .block-4-container.active .name {
              transform: translateY(20px); 
            }
            .block-4-container.active .name-title {
              transform: translateY(20px); 
            }

            .block-4-container.active
            .block-4-container-content-image {
              opacity: 1; 
              width:100%;
              min-height: 100vh;
              height: 100%;
              object-fit: cover;
            }
            button.block-4-btn {
               background: transparent; 
               border:1px solid #081126;
               font-family: acumin-pro-condensed;
               padding: 2% 4%;
               height: 45px;
               font-size: 1rem;
               width: fit-content;
               display: flex;
               align-items: center;
               gap: 10px;
               transition: all 0.3s ease-in-out;
               color:#081126;
               margin-left: 50px;
               cursor: pointer;
             }
            .block-4-right-arrow {
               opacity: 0;
               filter: invert(0);
               width: 0;
               transform: translateX(-100%);
               transition: all 0.3s ease-in-out;
             }
            button.block-4-btn:hover 
            .block-4-right-arrow {
               opacity: 1;
               filter: invert(1);
               transform: translateX(0%);
               width: 20px;
            }
            button.block-4-btn:hover {
               background: #081126; 
               color: white;
               z-index: 20;
            }
            .block-4-container-content-data{
              display: flex;
              flex-direction: column;
              justify-content: center;
              position: relative;
              height: 100%;
              width: 50%;
              align-items: start;
              color: black;
              text-align: justify;
            }
            .block-4-container-content-data::before {
              content: "";
              position: absolute;
              inset: 0;
              background: linear-gradient(to right, white, rgba(255, 255, 255, 0));
              z-index: 0;
            }
            .block-4-container-content-data > * {
              z-index: 1;
              padding-left: 50px;
            }

            .content-data-title {
              font-size: 1.5rem;
            }
            .content-data-full-name {
              font-family: Helvetica;
              font-size: 2rem;
              font-weight: bold;
            }
         }

        </style>
        <section class="block-4-container">
          <div class="block-4-container-content">
              <div class="names-indicator-container">
                <div class="names-indicator"></div>
              </div>
              <div class="names-column">
                <button class="name-title">OUR ATTORNEYS</button>
                <button class="name">Perdue</button>
                <button class="name">Kidd</button>
                <button class="name">Blake</button>
                <button class="name">Frase</button>
              </div>
          </div>
          <div class="block-4-container-content-image">
            <div class="block-4-container-content-data">
              <div class="content-data-title"> </div>
              <div class="content-data-full-name"></div>
              <div class="content-data-bio"></div>

              <button class="block-4-btn">
                    <span> READ BIO</span>
                    <img src="/right-arrow.svg" class="block-4-right-arrow" alt="right-arrow"/>
              </button>
            </div> 
          </div>
        </section>
        
      `;const o={perdue:{img:"https://www.datocms-assets.com/110177/1698339552-2-perdue.jpg?auto=format,compress&w=1200",title:"ATTORNEY & PARTNER",fullName:"JIM M. PERDUE JR.",bio:"<p><b>Jim Perdue is a two-time “Trial Lawyer of the Year” for Medical Malpractice and Personal Injury Law.</b></p><p>He’s been recognized as a “Texas Super Lawyer” for 20 consecutive years and counting. He is double board-certified and his record of winning multi-million dollar jury verdicts has rightfully earned him a reputation as one of the more skilled and brilliant trial attorneys in the nation.</p>"},kidd:{img:"https://www.datocms-assets.com/110177/1699647224-3-kidd.jpg?auto=format,compress&w=1200",title:"ATTORNEY & PARTNER",fullName:"DONALD H. KIDD.",bio:"<p><b>Insurance companies and big corporations know they’re in trouble when they face off with Don Kidd.</b></p> <p>With over 25 years of legal experience and expertise, Don’s record of handling complex litigation and winning big for his clients have earned him countless recognitions and awards from state and national legal associations, including the Lifetime Achievement Award from “America’s Top 100 Lawyers”.</p>"},blake:{img:"https://www.datocms-assets.com/110177/1699647209-4-blake.jpg?auto=format,compress&w=1200",title:"ATTORNEY",fullName:"ADAM J. BLAKE",bio:"<p><b>A native Houstonian with over a decade of trial experience, Adam Blake is one of the brightest young legal minds in the state.</b></p><p>Every year since 2019, Texas Super Lawyers has named him a “Rising Star”, a distinction that less than 2.5% of attorneys in the state receive. In 2023 he was elected President of the Houston Trial Lawyers Association to lead its membership of 1,100 attorneys working together, fighting for the legal rights of everyday citizens.</p>"},frase:{img:"https://www.datocms-assets.com/110177/1699647217-5-frase.jpg?auto=format,compress&w=1200",title:"ATTORNEY",fullName:"SCOTT FRASE",bio:"<p><b>Prior to joining Perdue &amp; Kidd, Scott Frase worked as a trial attorney for two of the largest personal injury firms in the state of Texas.</b></p><p>He’s seen first-hand how, in the big law firms, sometimes clients are liable to be forgotten or treated as a number. Anyone who knows Scott will tell you he’s a fierce advocate for his clients who won’t tolerate anything less than the best for the people he represents, which makes him a perfect fit for the Perdue &amp; Kidd team. Scott is also distinguished as a “Rising Star” by Texas Super Lawyers, an award received by only 2.5% of all lawyers in the state.</p>"}},a=i=>{const l=this.querySelector(".block-4-container-content-image"),n=this.querySelector(".content-data-title"),c=this.querySelector(".content-data-full-name"),d=this.querySelector(".content-data-bio");l.style.background=`url(${o[i].img}) center/cover no-repeat `,n.innerHTML=o[i].title,c.innerHTML=o[i].fullName,d.innerHTML=o[i].bio},s=()=>{const i=this.querySelector(".block-4-container");new IntersectionObserver(n=>{n.forEach(c=>{c.isIntersecting?setTimeout(()=>i.classList.add("active"),2e3):setTimeout(()=>i.classList.remove("active"),500)})},{threshold:.75}).observe(i)};a("perdue"),s();const e=this.querySelector(".names-indicator"),t=this.querySelector(".names-indicator-container"),r=i=>{const l=i.getBoundingClientRect(),n=t.getBoundingClientRect(),c=l.top-n.top+l.height/2;e.style.transform=`translateY(${c}px)`};this.querySelectorAll(".name").forEach(i=>{i.addEventListener("click",l=>{var d;if(!e||!t)return;const n=l.target,c=(d=n.textContent)==null?void 0:d.trim().toLowerCase();r(n),c&&a(c)})})}}customElements.define("custom-block-4",E);
