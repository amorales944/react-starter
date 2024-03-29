import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Armando Morales</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "300px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Rump short loin strip steak alcatra turkey. Alcatra pork kielbasa,
              flank pork chop bresaola cow burgdoggen cupim ground round beef
              ribs turducken venison short ribs fatback. Shankle hamburger tail
              ham. Corned beef pork chop burgdoggen, chicken porchetta meatloaf
              ribeye swine flank shankle venison pastrami.
            </p>
          </Cell>
          <Cell col={6}>
            <h2 style={{textAlign:"left"}}>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className='fa fa-phone-square' aria-hidden='true'/>
                    (832) 799-3459
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className='fa fa-envelope' aria-hidden='true'/>
                    amorales944@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className='fa fa-skype' aria-hidden='true'/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
