import meter1 from "../assets/img/iconTs.svg";
import meter2 from "../assets/img/iconJs.svg";
import meter3 from "../assets/img/iconReact.svg";
import meter4 from "../assets/img/iconNode.svg";
import meter5 from "../assets/img/iconExpress.svg";
import meter6 from "../assets/img/iconPostgreSql.svg";
import meter7 from "../assets/img/iconMongoDb.svg";
import meter8 from "../assets/img/iconScrum.svg";
import meter9 from "../assets/img/iconUi.svg";
import meter10 from "../assets/img/iconRedux.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="habilidades">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <br />
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="TypeScript Logo" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="JavaScript Logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="React Logo" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="Redux" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Node Logo" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Express Logo" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="PostgreSQL Logo" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="MongoDB Logo" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Scrum Logo" />
                  <h5>Metodología Scrum</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="UI/UX Logo" />
                  <h5>UI/UX designer</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
