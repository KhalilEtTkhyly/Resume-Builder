import './2.css';

function Template(props) {

  const educationSection = props.sname.map((val, i) =>
    (val && <p key={i}>{props.schoolStartDate[i] + " - " +  props.schoolEndDate[i]} | <em> {props.sname[i]} | {props.major[i]}</em></p>)
  )

  const experienceSection = props.company.map((val, i) =>
    (val && <p key={i}>{props.jobStartDate[i]} - {props.jobEndDate[i]} <em> {props.company[i]}. | {props.role[i]}</em></p>)
  )

  const skillSection = props.skills.map(function(val, i) {
    if (Object.keys(val).length === 0) return;
    if (!val.name) return
    return(
        <li key={i}>{val.name}</li>
      )
    }
  )

  const interests = props.interests.split(",");

  return (
        <div className="wrapper clearfix" ref={props.reference}>
          <div className='top'>
            <div className="name-hero">
              <div className='me-img mb-3' style={{backgroundImage: 'url('+props.profileImage+')'}}></div>
              <div className="name-text">
                <h1>{props.fname}</h1>
                <p>{props.email}</p>
                <p>{props.phone}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="inner">
              <section>
                <h1>Employment</h1>
                {experienceSection}
              </section>
              <section>
                <h1>Education</h1>
                {educationSection}
              </section>
              <section>
                <h1>Technical Skills</h1>
                <ul className="skill-set">
                  {skillSection}
                </ul>
              </section>
              <section>
                <h1>Personal Interests</h1>
                <ul className="skill-set">
                  {interests.map((val, i) => {
                    if (!val) return;
                    return (<li key={i}>{val}</li>)
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      );
}

export default Template;
