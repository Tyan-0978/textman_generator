import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
  const [name, setName] = useState("雪男");
  const [leftEye, setLeftEye] = useState("    ' ");
  const [rightEye, setRightEye] = useState(" '    ");
  const [mouth, setMouth] = useState("ω");
  const [bodySymbol, setBodySymbol] = useState("❄️");

  var textman = (
    <div className="main-text-div">
      <div>{ `恐怖！${name}` }</div>
      <div>
        {`
　　(${leftEye}${mouth}${rightEye})
　／${bodySymbol}${bodySymbol}${bodySymbol} ＼
  /${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}\\
/${bodySymbol} /${bodySymbol}${bodySymbol}${bodySymbol} \\${bodySymbol}\\
|　/${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}\\　|
\\Ԏ${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}  Ԏ/
　卜−${bodySymbol}${bodySymbol}―イ
　  \\${bodySymbol}${bodySymbol}/\\${bodySymbol} ﾉ
　　\\${bodySymbol}ﾉ    \\${bodySymbol}/
        `}
      </div>
    </div>
  );

  const copyText = () => {
    var targetText = `恐怖！${name}

　　(${leftEye}${mouth}${rightEye})
　／${bodySymbol}${bodySymbol}${bodySymbol} ＼
  /${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}\\
/${bodySymbol} /${bodySymbol}${bodySymbol}${bodySymbol} \\${bodySymbol}\\
|　/${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}\\　|
\\Ԏ${bodySymbol}${bodySymbol}${bodySymbol}${bodySymbol}  Ԏ/
　卜−${bodySymbol}${bodySymbol}―イ
　  \\${bodySymbol}${bodySymbol}/\\${bodySymbol} ﾉ
　　\\${bodySymbol}ﾉ    \\${bodySymbol}/

https://textman-generator.vercel.app/`;
    navigator.clipboard.writeText(targetText);
    //alert("Text copied");
  };

  return (
    <div className="body">
      <Navbar bg="dark" variant="dark">
        <Container className="top-bar">
	  <Navbar.Brand className="bar-title">
	    恐怖！（&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;）生成器
	  </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="body-container">
        <Row className="input-row">
	  <Form.Label column md={1} xs={3}>
	    Name
	  </Form.Label>
	  <Col md={11} xs={8}>
	    <Form.Control
	      type="text" value={ name }
	      onChange={ (e) => setName(e.target.value) }
	    />
	  </Col>
	</Row>
        <Row className="input-row">
	  <Form.Label column md={1} xs={3}>
	    Eyes
	  </Form.Label>
	  <Col md={5} xs={4}>
	    <Form.Control
	      type="text" value={ leftEye }
	      onChange={ (e) => setLeftEye(e.target.value) }
	    />
	  </Col>
	  <Col md={5} xs={4}>
	    <Form.Control
	      type="text" value={ rightEye }
	      onChange={ (e) => setRightEye(e.target.value) }
	    />
	  </Col>
	</Row>
        <Row className="input-row">
	  <Form.Label column md={1} xs={3}>
	    Mouth
	  </Form.Label>
	  <Col md={11} xs={8}>
	    <Form.Control
	      type="text" value={ mouth }
	      onChange={ (e) => setMouth(e.target.value) }
	    />
	  </Col>
	</Row>
        <Row className="input-row">
	  <Form.Label column md={1} xs={3}>
	    Body
	  </Form.Label>
	  <Col md={11} xs={8}>
	    <Form.Control
	      type="text" value={ bodySymbol }
	      onChange={ (e) => setBodySymbol(e.target.value) }
	    />
	  </Col>
	</Row>
	{ textman }
	<div className="button-div">
	  <Button variant="light" onClick={ () => copyText() }>
	    Copy
	  </Button>
	</div>
      </Container>
    </div>
  );
}

export default App;
