export default class Block4 extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
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
                url('group.jpg') top/cover no-repeat;
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
        
      `;
       const data:any  = {
            perdue: {
              img:  'https://www.datocms-assets.com/110177/1698339552-2-perdue.jpg?auto=format,compress&w=1200',
              title: 'ATTORNEY & PARTNER',
              fullName: 'JIM M. PERDUE JR.',
              bio: '<p><b>Jim Perdue is a two-time “Trial Lawyer of the Year” for Medical Malpractice and Personal Injury Law.</b></p><p>He’s been recognized as a “Texas Super Lawyer” for 20 consecutive years and counting. He is double board-certified and his record of winning multi-million dollar jury verdicts has rightfully earned him a reputation as one of the more skilled and brilliant trial attorneys in the nation.</p>'
            },
            kidd: {
              img: 'https://www.datocms-assets.com/110177/1699647224-3-kidd.jpg?auto=format,compress&w=1200',
              title: 'ATTORNEY & PARTNER',
              fullName: 'DONALD H. KIDD.',
              bio: '<p><b>Insurance companies and big corporations know they’re in trouble when they face off with Don Kidd.</b></p> <p>With over 25 years of legal experience and expertise, Don’s record of handling complex litigation and winning big for his clients have earned him countless recognitions and awards from state and national legal associations, including the Lifetime Achievement Award from “America’s Top 100 Lawyers”.</p>'
            },
            blake: {
            img:'https://www.datocms-assets.com/110177/1699647209-4-blake.jpg?auto=format,compress&w=1200',
            title:'ATTORNEY',
            fullName: 'ADAM J. BLAKE',
            bio: '<p><b>A native Houstonian with over a decade of trial experience, Adam Blake is one of the brightest young legal minds in the state.</b></p><p>Every year since 2019, Texas Super Lawyers has named him a “Rising Star”, a distinction that less than 2.5% of attorneys in the state receive. In 2023 he was elected President of the Houston Trial Lawyers Association to lead its membership of 1,100 attorneys working together, fighting for the legal rights of everyday citizens.</p>',
           },

          frase: {
            img: 'https://www.datocms-assets.com/110177/1699647217-5-frase.jpg?auto=format,compress&w=1200',
            title:'ATTORNEY',
            fullName: 'SCOTT FRASE',
            bio: '<p><b>Prior to joining Perdue &amp; Kidd, Scott Frase worked as a trial attorney for two of the largest personal injury firms in the state of Texas.</b></p><p>He’s seen first-hand how, in the big law firms, sometimes clients are liable to be forgotten or treated as a number. Anyone who knows Scott will tell you he’s a fierce advocate for his clients who won’t tolerate anything less than the best for the people he represents, which makes him a perfect fit for the Perdue &amp; Kidd team. Scott is also distinguished as a “Rising Star” by Texas Super Lawyers, an award received by only 2.5% of all lawyers in the state.</p>',  
          }
        }

      const updateContent = (name:string) => {
          const imgContainer = this.querySelector(".block-4-container-content-image") as HTMLElement;
          const divTitle = this.querySelector(".content-data-title") as HTMLElement;
          const divFullname = this.querySelector(".content-data-full-name") as HTMLElement;
          const divbio = this.querySelector(".content-data-bio") as HTMLElement;
          imgContainer.style.background = `url(${data[name].img}) center/cover no-repeat `;
          divTitle.innerHTML = data[name].title;
          divFullname.innerHTML = data[name].fullName;
          divbio.innerHTML = data[name].bio;
          
      } 
  
      const observeAnimation = () => {
        const container = this. querySelector(".block-4-container") as HTMLElement;
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting){
              setTimeout(() => container.classList.add("active"), 2000);
            }else {
              setTimeout(() => container.classList.remove("active"), 500);
            }
          }) 
        }, {threshold: 0.75});
        observer.observe(container)
      }
      updateContent('perdue')
      observeAnimation()

      const indicator = this.querySelector('.names-indicator') as HTMLElement;
      const container = this.querySelector('.names-indicator-container') as HTMLElement;

      const moveIndicator = (nameDiv: HTMLElement) => {
        const nameRect = nameDiv.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offsetY = nameRect.top - containerRect.top + (nameRect.height / 2);
        indicator.style.transform = `translateY(${offsetY}px)`;
      }


      this.querySelectorAll('.name').forEach((nameElement) => {
        nameElement.addEventListener('click', (event) => {
          if (!indicator || !container) return;
          const nameDiv = event.target as HTMLElement;
          const name = nameDiv.textContent?.trim().toLowerCase()
          moveIndicator(nameDiv)
          if(name){
            updateContent(name)
          }
      });
    });
  }    
};

customElements.define('custom-block-4', Block4)

