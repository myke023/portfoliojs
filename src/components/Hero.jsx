import nsfw from "../assets/nsfwlogo.png"


const Hero = () => {


  return (
    <div className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>HELLO, JIZZ KANOR IS THE NAME!</h1>
          <p>Hi, is this my portfolio. Just call my name, <span className="PHWORD"> J K </span> for short.</p>
          <div className="hero-buttons">
            <button className="cta">EXPLORE</button>
          



          
            <button className="noncta">HIRE ME</button>
          </div>
        </div>
        <img src={nsfw} alt="" />
      </div>
    </div>
  )
}

export default Hero