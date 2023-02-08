import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    primerNombre: "",
    primerApellido: "",
    email: "",
    asunto: "",
    mensaje: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Enviar");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    emailjs
      .send(
        "service_xf4cd8h",
        "template_xn6iotd",
        formDetails,
        "WgljBikTONIwWls1P"
      )
      .then(
        function (response) {
          console.log(response);
          setStatus({
            succes: true,
            message: "El mensaje se ha enviado correctamente.",
          });
        },
        function (error) {
          console.log(error);
          setStatus({
            succes: false,
            message: "Ha ocurrido un error, Por favor intentalo nuevamente.",
          });
        }
      );
    setButtonText("Enviar");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="conectar">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contacto"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="Primer Nombre"
                        onChange={(e) =>
                          onFormUpdate("primerNombre", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.primerApellido}
                        placeholder="Primer Apellido"
                        onChange={(e) =>
                          onFormUpdate("primerApellido", e.target.value)
                        }
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="Direccion De Correo"
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                      />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input
                        type="text"
                        value={formDetails.asunto}
                        placeholder="Asunto"
                        onChange={(e) => onFormUpdate("asunto", e.target.value)}
                      />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea
                        rows="6"
                        value={formDetails.message}
                        placeholder="Mensaje"
                        onChange={(e) =>
                          onFormUpdate("mensaje", e.target.value)
                        }
                      ></textarea>
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                    </Col>
                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
