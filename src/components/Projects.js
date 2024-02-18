import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pro5.png";
import projImg2 from "../assets/img/pro4.png";
import projImg3 from "../assets/img/pro3.png";
import projImg4 from "../assets/img/pro7.png";
import projImg5 from "../assets/img/pro8.png";
import projImg6 from "../assets/img/pro9.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bootstrap Project",
      description: "Tourism in Egypt",
      
      imgUrl: projImg1,
    },
    {
      title: "Online plant store",
      description: "Advanced Design",
      
      imgUrl: projImg2,
    },
    {
      title: "Brand Store",
      description: "Advanced Design",
      
      imgUrl: projImg3,
    },
    {
      title: "Special Plant",
      description: "Advanced Design",
      
      imgUrl: projImg4,
    },
    {
      title: "Colection Brand",
      description: "Advanced Design",
      
      imgUrl: projImg5,
    },
    {
      title: "Shoping Card",
      description: "Advanced JavaScript",
      
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2><h2 className="h2project"> Proj</h2>ects</h2>
                <p> <span className="spanskills">Hello</span>, I am Youssef Sabry, a software engineer,<br></br>  And I currently work in web development as front-end and back-end..</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" >Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <p className="p-project">A collection of front-end projects using html, css, js <span className="spanproject"> Please open it on your computer </span> <span className="danger">The third and fourth are available on mobile</span>   </p>
                        
                        <div className="mb-5 btnoo">
                        <Button variant="outline-success"><a target="_blank" href="https://yousef-sabry.github.io/First-Project-BrandStore/" className="uu">Live Demo Project 1</a></Button>
                        <Button variant="outline-info"><a target="_blank" href="https://yousef-sabry.github.io/Second-project-Plant-Store/" className="uu">Live Demo Project 2</a></Button>
                        <Button variant="outline-warning"><a target="_blank" href="https://yousef-sabry.github.io/third-project/" className="uu">Live Demo Project 3</a></Button>
                        <Button variant="outline-success"><a target="_blank" href="https://yousef-sabry.github.io/Four-project-shoping-cart/" className="uu">Live Demo Project 4</a></Button>
                       </div>
             
      
      
                      <Row >
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                                
                            )
                          })
                          
                        }
                    
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
