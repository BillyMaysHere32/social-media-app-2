import { Container, Row, Col } from "react-bootstrap";
import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';

export function Home() {
    return (   
      <Container> 
        <Row>
          <Col>
            <Posts />
          </Col>
          <Col>
            <Form />
          </Col>
        </Row>
      </Container> 
    )
  }