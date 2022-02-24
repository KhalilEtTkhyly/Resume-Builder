import {ListGroup, Badge} from 'react-bootstrap';
import './1.css';

function Template(props) {
    const educationSection = props.sname.map((val, i) =>
      (val && 
        <div className="section__list" key={i}>
          <div className="section__list-item">
            <div className="left">
              <div className="name">{props.sname[i]}</div>
              <div className="addr">{props.slocation[i]}</div>
              <div className="duration">{props.schoolStartDate[i] + " - " + props.schoolEndDate[i]}</div>
            </div>
            <div className="right">
              <div className="name">{props.major[i]}</div>
            </div>
          </div>
        </div>)
    )

    const experienceSection = props.company.map((val, i) =>
      (val && 
        <div className="section__list" key={i}>
          <div className="section__list-item">
            <div className="left">
              <div className="name">{props.company[i] && props.company[i]}</div>
              <div className="addr">{props.clocation[i] && props.clocation[i]}</div>
              <div className="duration">{props.jobStartDate[i] + " - " +  props.jobEndDate[i]}</div>
            </div>
            <div className="right">
              <div className="name">{props.role[i] && props.role[i]}</div>
            </div>
          </div>
        </div>)
    )

    const skillSection = props.skills.map(function(val, i) {
      const num = parseInt(props.skills[i].score)
      if (Object.keys(val).length === 0) return;
      return(
          <div className="skills__item" key={i}>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{val.name}</div>
                </div>
                <Badge variant="primary" pill>
                  {num*20 + "%"}
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </div>
        )
      }
    ) 

    return (
      <div>
      <div className="resume" ref={props.reference}>
        <div className="header">
          <div className="full-name">
            <span className="first-name">{props.fname}</span> 
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{props.email}</span>
            <span className="separator" />
            <span className="phone">Phone: </span>
            <span className="phone-val">{props.phone}</span>
          </div>
          <div className="about">
            <span className="desc">{props.overview}</span>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              {experienceSection}
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            {educationSection}
          </div>
          <div className="section">
            <div className="section__title">Projects</div> 
            <div className="section__list">
              <div className="section__list-item">
                <div className="name">DSP</div>
                <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
              </div>
              <div className="section__list-item">
                <div className="name">DSP</div>
                <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              {skillSection}
            </div>
          </div>
          <div className="section">
            <div className="section__title">
              Interests
            </div>
            <div className="section__list">
              <div className="section__list-item">
                {props.interests}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}

export default Template;
