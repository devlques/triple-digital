export default class CustomNav extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
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
    `

    window.addEventListener("scroll", () => {
      const nav = this.querySelector(".nav-container");
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
      const submenu = btn?.closest(".sub-menu-container")?.querySelector<HTMLUListElement>(".sub-menu-list-container");
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
                  const navContent = this.querySelector<HTMLElement>(".nav-content")
                  const subMenuContainer = this.querySelector<HTMLElement>(".sub-menu-container")
                  ul?.classList.add("multi-column");
                  if(ul){
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

