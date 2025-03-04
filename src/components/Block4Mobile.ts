export default class Block4Mobile extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
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
      `;

      const data:any  = {
        perdue: {
          img:  '<img src="https://www.datocms-assets.com/110177/1698339552-2-perdue.jpg?auto=format,compress&w=1200" alt="man in suit looking into the future"/>',
          title: 'ATTORNEY & PARTNER',
          fullName: 'JIM M. PERDUE JR.',
          bio: '<p><b>Jim Perdue is a two-time “Trial Lawyer of the Year” for Medical Malpractice and Personal Injury Law.</b></p><p>He’s been recognized as a “Texas Super Lawyer” for 20 consecutive years and counting. He is double board-certified and his record of winning multi-million dollar jury verdicts has rightfully earned him a reputation as one of the more skilled and brilliant trial attorneys in the nation.</p>'
        },
        kidd: {
          img: '<img src="https://www.datocms-assets.com/110177/1699647224-3-kidd.jpg?auto=format,compress&w=1200 alt="man in suit looking into the future"/>',
          title: 'ATTORNEY & PARTNER',
          fullName: 'DONALD H. KIDD.',
          bio: '<p><b>Insurance companies and big corporations know they’re in trouble when they face off with Don Kidd.</b></p> <p>With over 25 years of legal experience and expertise, Don’s record of handling complex litigation and winning big for his clients have earned him countless recognitions and awards from state and national legal associations, including the Lifetime Achievement Award from “America’s Top 100 Lawyers”.</p>'
        },
        blake: {
        img:'<img src="https://www.datocms-assets.com/110177/1699647209-4-blake.jpg?auto=format,compress&w=1200" alt="man in suit looking into the future"/>',
        title:'ATTORNEY',
        fullName: 'ADAM J. BLAKE',
        bio: '<p><b>A native Houstonian with over a decade of trial experience, Adam Blake is one of the brightest young legal minds in the state.</b></p><p>Every year since 2019, Texas Super Lawyers has named him a “Rising Star”, a distinction that less than 2.5% of attorneys in the state receive. In 2023 he was elected President of the Houston Trial Lawyers Association to lead its membership of 1,100 attorneys working together, fighting for the legal rights of everyday citizens.</p>',
       },

      frase: {
        img: '<img src="https://www.datocms-assets.com/110177/1699647217-5-frase.jpg?auto=format,compress&w=1200" alt="man in suit looking into the future"/>',
        title:'ATTORNEY',
        fullName: 'SCOTT FRASE',
        bio: '<p><b>Prior to joining Perdue &amp; Kidd, Scott Frase worked as a trial attorney for two of the largest personal injury firms in the state of Texas.</b></p><p>He’s seen first-hand how, in the big law firms, sometimes clients are liable to be forgotten or treated as a number. Anyone who knows Scott will tell you he’s a fierce advocate for his clients who won’t tolerate anything less than the best for the people he represents, which makes him a perfect fit for the Perdue &amp; Kidd team. Scott is also distinguished as a “Rising Star” by Texas Super Lawyers, an award received by only 2.5% of all lawyers in the state.</p>',  
      }
    }
      const updateSelectedInfo =(name?:string) =>{
        const img:string = data[name || 'perdue'].img ?? '' ;
        const title:string = data[name || 'perdue'].title ?? '' ; 
        const fullName:string = data[name || 'perdue'].fullName ?? '' ; 
        const bio:string = data[name || 'perdue'].bio ?? '' ; 

        const pictureDiv = this.querySelector(".m-block-4-section-2") as HTMLElement;
        pictureDiv.innerHTML = img;
        const imgDiv = pictureDiv.querySelector("img") as HTMLImageElement;
        if(imgDiv){
          imgDiv.onload =() => imgDiv.classList.add("loaded")
        }
        const titleDiv = this.querySelector(".m-block-4-section-3-title") as HTMLDivElement;
        const fullNameDiv = this.querySelector(".m-block-4-section-3-full-name") as HTMLDivElement;
        const bioDiv = this.querySelector(".m-block-4-section-3-bio") as HTMLDivElement;
        titleDiv.textContent = title;
        fullNameDiv.textContent = fullName;
        bioDiv.innerHTML = bio;
      }

      updateSelectedInfo()

      const nameBtns = this.querySelectorAll(".m-block-4-section-1-name");
      nameBtns.forEach(btn => btn.addEventListener("click", (e) => {
        this.querySelector(".selected")?.classList.remove("selected")
        const btn = e.target as HTMLElement;
        btn.classList.add("selected")
        const name = btn.textContent?.trim().toLowerCase();
        updateSelectedInfo(name);
      }))
  }    
};

customElements.define('custom-block-4-mobile', Block4Mobile)

