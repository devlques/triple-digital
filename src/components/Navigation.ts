export default class CustomNav extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <style>
        .nav-container {
          display: flex;
          flex-direction: column;
          position: absolute;
          width: 100vw;
          height: fit-content;
          opacity: 0.9;
          background: #081126;
          gap: 30px;
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
          height: 100vh;
        }
        .nav-logo-large {
          display: none;
        }
        .nav-links {
          display: flex;
          flex-direction: column;
          row-gap: 20px;
          color: white;
          font-weight: bold;
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
          text-decoration: none;
          color: white;
        }
        .nav-link:hover, .sub-menu-item:hover{ 
          color: gray;
        }
        @media only screen and (min-width: 1024px) {
          .nav-container {
            right: 0;
            width: 33vw;
          }
        }
        @media only screen and (min-width: 1395px) {
          .nav-container {
            display: flex;
            justify-content: center;
            left:0;
            gap: 0;
            width: 100vw;
            height: fit-content;
          }
          .nav-info-bar{
            background-color: #1f417e;
            display: flex;
            justify-content: end; 
            color: white;
            gap: 5%;
            padding: 12px 20px; 
            font-weight: bold;
            font-size: .7rem;
          }
          .nav-content{
            position: relative;
            font-size: 1rem;
            height:fit-content;
          }
          .nav-links {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
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
            text-decoration: underline;
            text-underline-offset: 5px;
          }
          .sub-menu-container {
            opacity: 0.8;
          }
          .sub-menu-list-container {
            position:absolute;
            top:75px;
            white-space: nowrap;
            width: fit-content;
          }
          .sub-menu-item:hover {
            background-color: #398ce1; 
            color: white;
          }

          .multi-column {
            display: grid;
            column-gap: 50px;
            row-gap: 5px;
            width: 100vw
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
            <button type="button" id="menu-btn" class="btn"> X</button>
          </div>
          <div class="nav-content"> 
            <nav class="nav-links">
              <img src="pkLogo.png" alt="logo" class="logo-img-large">
              <a href="#" class="nav-link">Home</a>
              <div class="sub-menu-container">

                <button class="sub-menu-btn btn">
                  <span class="nav-link">About</span>
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
                  <span class="nav-link">Attorneys</span>
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
              <a href="#" class="nav-link">Victories</a>
              <div class="sub-menu-container">
                <button class="sub-menu-btn btn">
                  <span class="nav-link">Personal Injury</span>
                  <span class="triangle-icon"></span>
                </button>
                <div  class="sub-menu-list-container">
                  <ul>
                    <li class="sub-menu-item">Overview</li>
                    <li class="sub-menu-item">Car Accidents</li>
                    <li class="sub-menu-item">Rideshare Accidents</li>
                    <li class="sub-menu-item">Distracted Driving</li>
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
                   <span class="nav-link">Medical Malpractice</span>
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
                  <span class="nav-link">Dangerous Products</span>
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
 
              <a href="#" class="nav-link">Videos</a>
              <a href="#" class="nav-link">Blog</a>
              <a href="#" class="nav-link">Disclaimer</a>
            </nav>
        </div>
      </header>
    `

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
    const links = this.querySelectorAll("a")
    console.log('links', links)
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
customElements.define('custom-nav', CustomNav)

