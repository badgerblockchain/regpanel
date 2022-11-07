import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import LarryS from "./assets/LarryS.png";

// Icons
import { Twitter, Linkedin } from 'react-bootstrap-icons';

import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="left-side" xs={12} md={12} lg={6}> 
          <h1 className="title">THE FUTURE OF CRYPTO REGULATION IN THE UNITED STATES: IS <span className="eth"> ethereum </span> A SECURITY NOW? </h1>
          <Container xs={12} className="d-flex justify-content-center">
            <Button href="https://www.badgerblockchain.com/" target="_blank" rel="noopener noreferrer" className="button" variant="success" size="lg" >Register </Button>
            <Button  className="button-date" variant="light" size="lg" >11.29.2022 </Button>
            <Button href="https://www.badgerblockchain.com/" target="_blank" rel="noopener noreferrer" className="button" variant="primary" size="lg" >Zoom </Button>
          </Container>
        </Col>
        <Col md={12} lg={6} className="right-side">
          <h1 className="headers"> Our Panelists </h1>
          <div className="speaker-box">
              <img alt="" className="smaller-img" src="https://media-exp1.licdn.com/dms/image/C5603AQHwVEV_i574rg/profile-displayphoto-shrink_200_200/0/1517506456127?e=1673481600&v=beta&t=Jv1ZguOBnmLiMVuta62ICehFrcKo0aU92oORgDGFLqg"></img>
              <p className="names"> Max Eichenberger </p>
              <p className="positions"> Senior Counsel, Coinbase <br/> UW '13 <a href="https://www.linkedin.com/in/max-eichenberger-97b20b49/" target="_blank" rel="noopener noreferrer"><Linkedin className="linkedin-icon" size={20} color="#0072b1" /></a> </p>
              <div className="hotfix"></div>
          </div>
          <div className="speaker-box">
              <img alt="" className="smaller-img" src="https://media-exp1.licdn.com/dms/image/C5603AQG5KLyIAtfOTA/profile-displayphoto-shrink_200_200/0/1645015821120?e=1673481600&v=beta&t=S-M0-2JMc6QEIn6gjjmStQQnyUyb4UfWUtcknTS3_CM"></img>
              <p className="names"> Brendan Cochrane </p>
              <p className="positions"> Partner - Blockchain & Cryptocurrency, YK Law <br/> UW Law '13 <a href="https://www.linkedin.com/in/brendan-cochrane/" target="_blank" rel="noopener noreferrer"><Linkedin className="linkedin-icon" size={20} color="#0072b1" /></a></p>
              <div className="hotfix"></div>
          </div>
          <div className="speaker-box">
              <img alt="" className="smaller-img" src="https://media-exp1.licdn.com/dms/image/C5603AQEdmvHbKK33xw/profile-displayphoto-shrink_200_200/0/1592751142383?e=1673481600&v=beta&t=GxrpnwL1ndzh_8bm289Gqr5pPd_082AiuuKLadVpuTk"></img>
              <p className="names"> Miller Whitehouse</p>
              <p className="positions"> Policy Director at DeFi Education Fund <a href="https://www.linkedin.com/in/miller-whitehouse-levine-864b6b43/" target="_blank" rel="noopener noreferrer"><Linkedin className="linkedin-icon" size={20} color="#0072b1" /></a></p>
              <div className="hotfix"></div>
          </div>
          <div className="speaker-box">
              <img alt="" className="smaller-img" src={LarryS}></img>
              <p className="names"> Larry Sukernik</p>
              <p className="positions"> Co-Founder, Reverie <br/>Investor, Digital Currency Group <a href="https://twitter.com/lsukernik" target="_blank" rel="noopener noreferrer"><Twitter size={20} color="#1DA1F2" /></a> </p>
              <div className="hotfix"></div>
          </div>
          <h1 className="headers"> Our Moderators </h1>
            <div className="speaker-box">              
              <img alt="" className="smaller-img" src="https://media-exp1.licdn.com/dms/image/C4E03AQGI8vGYF5i6fA/profile-displayphoto-shrink_200_200/0/1637622163889?e=1673481600&v=beta&t=Byox4vquX5KUsP_eG2eFfd1SLaeqTB3njxsECVfQjfw"></img>
                <p className="names"> Brad Chandler</p>
                <p className="positions"> Director, Nicholas Center for Corporate Finance <a href="https://www.linkedin.com/in/brad-chandler-994a411/" target="_blank" rel="noopener noreferrer"><Linkedin className="linkedin-icon" size={20} color="#0072b1" /></a></p>
                <div className="hotfix"></div>
            </div>
            <div className="speaker-box">               
                <img alt="" className="smaller-img" src="https://media-exp1.licdn.com/dms/image/D4E03AQE8_w0h3wd_Zw/profile-displayphoto-shrink_400_400/0/1661397422512?e=1673481600&v=beta&t=-_hw31JfqWodDfTE8MzHEzcvTTag5HYVBRQ-7TLIxMo"></img>
                <p className="moderators-names"> TBD</p>
                <p className="positions"> Contact hfgoff@wisc.edu to be a moderator! <a href="https://www.linkedin.com/in/brad-chandler-994a411/" target="_blank" rel="noopener noreferrer"><Linkedin className="linkedin-icon" size={20} color="#0072b1" /></a></p>
                <div className="hotfix"></div>
            </div>
          <div className="hosted-by">
          <p className="mod-style"> <a className="badger" href="https://www.badgerblockchain.com">badger blockchain </a> &nbsp;--&nbsp; <a className="nick" href="https://business.wisc.edu/centers/nicholas/"> The Nicholas Center</a></p>
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
