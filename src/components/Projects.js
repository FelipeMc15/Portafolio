import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-dog.png";
import projImg2 from "../assets/img/project-grupal.png";
import projImg3 from "../assets/img/hackaton-midu.png";
import projImg4 from "../assets/img/project-notas.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Proyecto Individual",
      description: "Api Dogs",
      imgUrl: projImg1,
      href: "https://pi-dogs-felipemc15.netlify.app/home",
    },
    {
      title: "Proyecto Grupal",
      description: "Fashion Clothing",
      imgUrl: projImg2,
      href: "https://proyecto-final-ropa-moda.vercel.app/",
    },
    {
      title: "Hackaton MiduDev",
      description: "NutriPlanes AI",
      imgUrl: projImg3,
      href: "https://nutriplanes.netlify.app/",
    },
    {
      title: "App de Notas y Control De Adultos Mayores",
      description: "Solo para fundaciones de adultos mayores",
      imgUrl: projImg4,
      href: "https://www.youtube.com/watch?v=nqgVQJtjut0",
    },
  ];

  return (
    <section className="project" id="proyectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>Proyectos</h2>
                <p>
                  Aquí verás mis trabajos en multiples tecnologías. Cada
                  proyecto demuestra mi capacidad para trabajar en equipo,
                  resolver problemas y cumplir requisitos.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content
                    id="slideInUp"
                    className={"animate__animated animate__slideInUp"}
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="{colorSharp2}"></img>
    </section>
  );
};
