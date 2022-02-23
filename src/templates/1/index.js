import './1.css'

function Template(props) {
    return (
      <div>
      <link href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet" type="text/css" />
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
              <div className="section__list-item">
                <div className="left">
                  <div className="name">KlowdBox</div>
                  <div className="addr">San Fr, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Akount</div>
                  <div className="addr">San Monica, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Sample Institute of technology</div>
                  <div className="addr">San Fr, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
              <div className="section__list-item">
                <div className="left">
                  <div className="name">Akount</div>
                  <div className="addr">San Monica, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
            </div>
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
              <div className="skills__item">
                <div className="left"><div className="name">
                    Javascript
                  </div></div>
                <div className="right">
                  <input id="ck1" type="checkbox" defaultChecked />
                  <label htmlFor="ck1" />
                  <input id="ck2" type="checkbox" defaultChecked />
                  <label htmlFor="ck2" />
                  <input id="ck3" type="checkbox" />
                  <label htmlFor="ck3" />
                  <input id="ck4" type="checkbox" />
                  <label htmlFor="ck4" />
                  <input id="ck5" type="checkbox" />
                  <label htmlFor="ck5" />
                </div>
              </div>
            </div>
            <div className="skills__item">
              <div className="left"><div className="name">
                  CSS</div></div>
              <div className="right">
                <input id="ck1" type="checkbox" defaultChecked />
                <label htmlFor="ck1" />
                <input id="ck2" type="checkbox" defaultChecked />
                <label htmlFor="ck2" />
                <input id="ck3" type="checkbox" />
                <label htmlFor="ck3" />
                <input id="ck4" type="checkbox" />
                <label htmlFor="ck4" />
                <input id="ck5" type="checkbox" />
                <label htmlFor="ck5" />
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">
              Interests
            </div>
            <div className="section__list">
              <div className="section__list-item">
                Football, programming.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}

export default Template;
