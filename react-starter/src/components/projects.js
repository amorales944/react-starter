import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
          <div className='projects-grid'>
          {/*MongoDB Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://guyharwood.co.uk/content/images/2018/07/MongoDB--1-.png) center / cover"
              }}
            >
              MongoDB Project #1
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*MongoDB Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://guyharwood.co.uk/content/images/2018/07/MongoDB--1-.png) center / cover"
              }}
            >
              MongoDB Project #2
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*MongoDB Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://guyharwood.co.uk/content/images/2018/07/MongoDB--1-.png) center / cover"
              }}
            >
              MongoDB Project #3
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      );
    } else if (this.state.activeTab === 1) {
      return (

        <div className='projects-grid'>
          {/*ExpressJS Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://blog.cyberpanel.net/wp-content/uploads/2019/03/express-js-cyberpanel.jpeg) center / cover"
              }}
            >
              ExpressJS Project #1
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*ExpressJS Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://blog.cyberpanel.net/wp-content/uploads/2019/03/express-js-cyberpanel.jpeg) center / cover"
              }}
            >
              ExpressJS Project #2
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*ExpressJS Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://blog.cyberpanel.net/wp-content/uploads/2019/03/express-js-cyberpanel.jpeg) center / cover"
              }}
            >
              ExpressJS Project #3
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          {/*React Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-fKJMA2hvqzBq2zzo8uyuEMt8AjEMmF5bOIGCc8fpU5JgK-f) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*React Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-fKJMA2hvqzBq2zzo8uyuEMt8AjEMmF5bOIGCc8fpU5JgK-f) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*React Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-fKJMA2hvqzBq2zzo8uyuEMt8AjEMmF5bOIGCc8fpU5JgK-f) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className='projects-grid'>
          {/*NodeJS Project 1*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://qph.fs.quoracdn.net/main-qimg-d5a02906c81f462777744848e9f28c25) center / cover"
              }}
            >
              NodeJS Project #1
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*NodeJS Project 2*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://qph.fs.quoracdn.net/main-qimg-d5a02906c81f462777744848e9f28c25) center / cover"
              }}
            >
              NodeJS Project #2
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*NodeJS Project 3*/}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://qph.fs.quoracdn.net/main-qimg-d5a02906c81f462777744848e9f28c25) center / cover"
              }}
            >
              NodeJS Project #3
            </CardTitle>
            <CardText>
              Bacon ipsum dolor amet turducken chicken tongue chuck. Swine ham
              hock pork loin, brisket jerky jowl leberkas ham doner salami
              boudin kielbasa ribeye. Alcatra porchetta kielbasa sausage tail,
              fatback rump doner drumstick spare ribs pork biltong boudin kevin.
              Drumstick cow ham hock strip steak alcatra rump andouille
              meatloaf. Tongue pork chop cupim bacon, pork loin burgdoggen
              sausage. Pancetta jowl buffalo, kielbasa salami burgdoggen venison
              t-bone.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>GitHub</Button>
              <Button colored>LiveSite</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.avtiveTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>MongoDB</Tab>
          <Tab>ExpressJS</Tab>
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
        </Tabs>
        
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        
      </div>
    );
  }
}

export default Projects;
