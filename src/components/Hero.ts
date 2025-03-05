export default class CustomHero extends HTMLElement {
    connectedCallback(){
      this.innerHTML = `
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
      `;
    }
}

customElements.define('custom-hero', CustomHero)
