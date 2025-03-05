export default class CustomNav extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <style>
        
.nav-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
  background: #081126;
  opacity: 0.95;
  gap: 30px;
  z-index: 3;
  position: sticky;
  top: 0;
  z-index: 10;
}
.nav-info-bar{
  display: none;
}
.nav-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1%;
  color: white;
  width: 95%;
  background: #081126;
  opacity: 0.95;
  height: 100vh;
}
.nav-logo-large {
  display: none;
}
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  font-weight: bold;
  background: #081126;
  opacity: 0.95;
}
.sub-menu-container {
  display:flex;
  flex-direction: column;
}
.sub-menu-btn span{
  font-size: 1rem;
  font-weight: bold;
}
.sub-menu-btn:hove: {
  cursor: pointer;
}
.nav-logo-menu {
}
.nav-logo-menu, .sub-menu-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.sub-menu-list-container {
  display:none; 
  text-align: left;
  background: #081126;
  opacity: 0.9;
}
.open {
  display:block
}
.sub-menu-list-container ul {
  display:hidden;
  padding-left: 3%;
  list-style: none;
}
ul li {
  margin: 5px 0
}
.nav-logo-menu {
  padding: 1% 4%;
}
.btn {
  font-family: inherit;
  background: none;
  border:none;
  padding: 0;
}
.logo-img, .logo-img-large {
  height: 45px;
  width: 60px;
  background-color: white;
}
.logo-img-large {
  display:none;
}
#menu-btn{
  font-size: 1.5em;
}
.triangle-icon {
  display: inline-block;
  vertical-align: middle; 
  width: 0;
  height: 0;
  border-top: 8px solid white;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}
.triangle-icon:hover {
  border-top: 10px solid gray;
}
.nav-link {
  position: relative;
  text-decoration: none;
  color: white;
}
.nav-link:hover, .sub-menu-item:hover{ 
  color: gray;
}
.hamburger-icon {
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}
.line {
  height: 2px;
  width: 100%;
  background-color: white;
}
.close-icon {
  font-size: 1.5rem;
  font-weight: bold;
}
.hidden {
  display: none;
}

@media only screen and (min-width: 1395px) {
  .nav-container {
    width:100%;
    left:0;
    gap: 0;
    height: fit-content;
    background: transparent;
    opacity: 1;
  }
  .nav-info-bar{
    background: #1f417e;
    opacity: 1;
    display: flex;
    justify-content: end; 
    color: white;
    gap: 5%;
    padding: 12px 20px; 
    font-weight: bold;
    font-size: 1rem;
  }
  .nav-content{
    width:auto;
    display:block;
    position: relative;
    font-size: 1rem;
    height:fit-content;
    background: transparent;
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: transparent;
  }
  .logo-img-large { 
    display:inline-block;
  }
  .nav-logo-menu, .sub-menu-btn .triangle-icon {
    display: none;
  }
  .nav-logo-large {
    display: inline;
  }
  .nav-link:hover{
    color: white;
  }
  .nav-link::after {
    content: ""; 
    position: absolute;
    left: 0;
    bottom: -2px; 
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.5s ease-in-out;
  }

  .nav-link:hover::after {
    width: 100%; 
  }

  .sub-menu-list-container {
    position:absolute;
    top:75px;
    white-space: nowrap;
  } 
  .sub-menu-list-container ul {
    padding: 0;
  }
  li{
    padding: 1%;
  }
  .sub-menu-item:hover {
    background-color: #398ce1; 
    color: white;
  }
  .single-column{
    width:25vw;
  }
  .multi-column {
    justify-content: center;
    display: grid;
    column-gap: 50px;
    gap: 5px;
    width: 100vw;
  }
  .multi-column > .sub-menu-item {
    padding-left: 100px;
  }
}
      </style>
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
    `

    window.addEventListener("scroll", () => {
      const nav = this.querySelector(".nav-container") as HTMLElement;
      if (window.scrollY > 100) {
        nav.style.background = "#081126";
      } else {
        nav.style.background = "transparent"; // Keep transparent at the top
      }
    });
    const btnMenuClose = this.querySelector("#menu-close-btn");
    btnMenuClose?.addEventListener("click", () => {
        const navMenu = this.querySelector(".nav-content");
        const hamburgerIcon = this.querySelector(".hamburger-icon")
        const closeIcon = this.querySelector(".close-icon")
        navMenu?.classList.toggle('hidden')
        hamburgerIcon?.classList.toggle('hidden')
        closeIcon?.classList.toggle('hidden')

    })
    
    const subMenuButtons = this.querySelectorAll(".sub-menu-btn") 
    subMenuButtons?.forEach((btn) => {
      const submenu = btn?.closest(".sub-menu-container")?.querySelector<HTMLUListElement>(".sub-menu-list-container") as HTMLElement;
      const triangleIcon = btn.querySelector(".triangle-icon") as HTMLElement;

      btn.addEventListener("click", () => {
        submenu?.classList.toggle("open");
        if(triangleIcon){
          triangleIcon.style.transform = submenu?.classList.contains("open") ? "rotate(180deg)" : "rotate(0deg)";
        }
      });
      const handleHover = (event: Event) => {
          if (window.innerWidth > 1395) {
            const openedMenu = this.querySelector('.open');
            if(openedMenu){
                openedMenu.classList.remove('open')
                submenu?.classList.remove("multi-column");
            }
            if (event.type === "mouseenter") {
              submenu?.classList.add("open");
              const submenuList = submenu?.children
              const liLenght = submenuList ? submenuList[0].children?.length: 0
              const ul = submenuList ? submenuList[0] : null

              if( liLenght > 9){
                  const columns = Math.ceil(liLenght / 8); // Determine number of columns (N)
                  const navContent = this.querySelector<HTMLElement>(".nav-content") as HTMLElement;
                  const subMenuContainer = this.querySelector<HTMLElement>(".sub-menu-container") as HTMLElement;
                  ul?.classList.add("multi-column");
                  if(ul !== null){
                  //@ts-ignore
                   ul.style.gridTemplateColumns = `repeat(${columns}, minmax(150px, 1fr))`;  
                  }
                  submenu.style.left = "0";
                  subMenuContainer.style.position = "none";
                  navContent.style.position = "relative";

              }else{
                  ul?.classList.add("single-column");
              }
              if (triangleIcon) triangleIcon.style.transform = "rotate(180deg)";
            } else if (event.type === "mouseleave") {
              submenu?.classList.remove("open");
              if (triangleIcon) triangleIcon.style.transform = "rotate(0deg)";
            }
          }
        };

        btn.addEventListener("mouseenter", handleHover);
        submenu?.addEventListener("mouseenter", handleHover);
        submenu?.addEventListener("mouseleave", handleHover);
    });

    if (window.innerWidth > 1395) {
      const links = this.querySelectorAll("a")
      links.forEach(link => {
        link.addEventListener("mouseenter", () => {
          const openedMenu = this.querySelector('.open');
          if(openedMenu){
            openedMenu.classList.remove("open");
          }
        })
      })
    }
    
  }
}
customElements.define('custom-nav', CustomNav)

