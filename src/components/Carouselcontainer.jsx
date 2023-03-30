import Carousel from 'react-bootstrap/Carousel';
import cesarhokage from "../assets/cesarhokage.jpg"
import thirdcesarhokage from "../assets/thirdcesarhokage.jpg"
import nasabeu from "../assets/nasabeu.jfif"
import Valiktadyungtalim from "../assets/Valiktadyungtalim.jfif"

function UncontrolledExample() {
  return (
    <section className="projects">
      <h1>PROJECTS PARANORMAL</h1>
      <div className="container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src={thirdcesarhokage}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <span className="paragraphdarkforwhite">Happy Birthday Kagawad Kris more and more power to you. Dont forget na merong hokage na nag susuport sayo. Lab yu man hapi berthday Gadbless.</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src={cesarhokage}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Dont forget na merong hokage na nag susuport sayo. Lab yu man hapi berthday Gadbless.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src={nasabeu}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <span className="paragraphdarkforwhite">Nulla vitae elit libero, a pharetra augue mollis interdum.</span> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:500}}
          src={Valiktadyungtalim}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Valiktad</h3>
          <p>
          D baliktad yon baliktad. Ginaya ko lang si vattousai binaliktad yong talim.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    </section>
  );
}

export default UncontrolledExample;