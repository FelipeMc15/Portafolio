import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={6} sm={12} md={4}>
      <a href={href} target="_blank" className="text-none">
        <div className="proj-imgbx">
          <img src={imgUrl} className="img-card" alt="" />
          <div className="proj-txtx">
            <h4 className="title-card">{title}</h4>
            <span className="title-card">{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
