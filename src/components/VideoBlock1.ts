export default class VideoBlock1 extends HTMLElement {
  connectedCallback(){
    this.innerHTML =  `
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
    `;
  }
}

customElements.define('custom-video-block-1', VideoBlock1)
