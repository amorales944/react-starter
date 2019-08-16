import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experince";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-side" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn.pixabay.com/photo/2015/03/01/14/39/thing-654750_960_720.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Armando Morales</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Ham pig tri-tip brisket flank, andouille doner shoulder. Drumstick
              chicken beef turducken pork chop doner. Tongue brisket boudin
              short loin andouille. Pork chop picanha landjaeger, short ribs
              chuck beef ribs jowl doner jerky ball tip salami. Biltong pork
              chop jowl hamburger, strip steak burgdoggen ham hock.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(832) 799-3459</p>
            <h5>Email</h5>
            <p>amorales944@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-side" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="The University of Texas at Austin"
              schoolDescription="Center for Professional Education (CPE) - Full Stack Developer"
            />

            {/* <Education
              startYear={2010}
              endYear={2019}
              schoolName="My 2nd University"
              schoolDescription="Beef ribs pancetta rump, flank doner pork belly prosciutto fatback shank frankfurter. Bacon shoulder pork belly ham hock ribeye tail."
            /> */}

            <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="SpectrumVoIP"
              jobDescription="Field Service Manager - South Texas Region"
            />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="SpectrumVoIP"
              jobDescription="IT Field Technician - Houston, TX"
            />

            <Experience
              startYear={2013}
              endYear={2015}
              jobName="GE Oil and Gas"
              jobDescription="Hydraulic Technician - Humble, TX"
            />

            <Experience
              startYear={2012}
              endYear={2013}
              jobName="Boot and Coots (a Halliburton Service)"
              jobDescription="Operator Assistant - Houston, TX"
            />

            <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Skills</h2>
            <Skills 
                skill='HTML/CSS'
                progress={75}
            />
            <Skills 
                skill='Bootstrap'
                progress={70}
            />
            <Skills 
                skill='React'
                progress={25}
            />
            <Skills 
                skill='React-MDL'
                progress={25}
            />
            <Skills 
                skill='NodeJS'
                progress={44}
            />
            <Skills 
                skill='ExpressJS'
                progress={44}
            />
            <Skills 
                skill='MongoDB'
                progress={20}
            />
            <Skills 
                skill='MySQL'
                progress={20}
            />

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
