export default class VideoBlock1 extends HTMLElement {
  connectedCallback(){
    this.innerHTML =  `
      <style>
.container {
  display:block;
  position:relative;
  color: black;
  background: white;
}
.content-container{
  display:flex;
  flex-direction: column;
  gap: 50px;
}
.video-container {
  position: relative;
  width: 90%;
  aspect-ratio: 1/1;
  padding: 5%;
  overflow: hidden;
}
.title-label {
  font-size: 1.5rem;
}
.title-label-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.hr-line{
  height: 1px;
  width: 75px;
  background: black;
}
.content {
  padding: 5% 2%;
  display:flex;
  flex-direction: column;
}
.sub-content {
  display:flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 75px;
}
.logos {
  width: 100%;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.logos img{
  width: 15% ;  
  aspect-ratio: 1/1;
}
.title {
  font-size: 2rem;
  font-family: Arial;
  font-weight:bold;
}
p{
  font-family: Arial;
  font-color: gray;
}
.bold {
  font-weight:bold;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  
-webkit-mask-image: linear-gradient(90deg, 
  rgba(0,0,0,0) 10%, rgba(0,0,0,0) 40%, /* First rectangle (left) */
  rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, /* Space between */
  rgba(0,0,0,0) 60%, rgba(0,0,0,0) 90% /* Second rectangle (right) */
);

mask-image: 
  linear-gradient(90deg, 
    rgba(0,0,0,0) 10%, rgba(0,0,0,0) 40%, /* First rectangle (left) */
    rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, /* Space between */
    rgba(0,0,0,0) 60%, rgba(0,0,0,0) 90% /* Second rectangle (right) */
  ); 
} 

@media only screen and (min-width: 1024px) {
 .content-container{
    display:flex;
    flex-direction: row;
  }
  .title {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.3rem;
  }

}
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
