import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProjectCardAlt = ({ value, imgHeight }) => {
  const {
    title,
    url,
    url2,
    repo,
    notes,
    videoUrl,
    thumbnail,
  } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title } </Card.Title>
          <div height={imgHeight}><img className="card-img-top" height="auto" width='auto' src={thumbnail} alt={title}></img></div>
          <hr></hr>
          <Card.Text>{notes}</Card.Text>
          <CardButtons video_url={videoUrl} link={url} link2={url2} repo={repo} />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ video_url, link, link2, repo }) => {
  return (
    <>
      {video_url &&
        <a
            href={video_url}
            target=" _blank"
            className="btn btn-outline-secondary mr-3"
        >
            <i className="fab fa-youtube" /> 
          </a>
      }
      {link &&
        <a
            href={link}
            target=" _blank"
            className="btn btn-outline-secondary"
        >
            <i className="fas fa-link " /> 
          </a>
      }
      {link2 &&
        <a
            href={link2}
            target=" _blank"
            className="btn btn-outline-secondary"
        >
            <i className="fas fa-link " /> 
          </a>
      }
     {repo &&
        <a
            href={repo}
            target=" _blank"
            className="btn btn-outline-secondary"
        >
            <i className="fab fa-github" /> 
          </a>
      }

    </>
  );
};


export default ProjectCardAlt;
