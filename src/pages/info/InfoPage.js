import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import styles from "../../styles/InfoPage.module.css";

const InfoPage = () => {
  return (
    <Container className={`${appStyles.Content} ${styles.AboutContent} p-5 mt-4`}>
      <Row>
        <Col>
          <div className='d-flex justify-content-center'>
            <h3>MewMes in a nutshell!</h3>
          </div>
          <hr />
          <div className='text-center'>
            <i className="fas fa-cat"></i>
            <p>Welcome to MewMes, the ultimate destination for cat lovers and meme enthusiasts alike!</p>
            <p>Are you ready to embark on a cat-tastic journey into the whimsical world of feline hilarity? Look no further! MewMes is your one-stop-shop for all things cat memes.</p>
            <i className="far fa-grin-squint-tears"></i>
            <p>Join our vibrant community of cat aficionados and start sharing your favourite cat memes today! Whether you're a seasoned meme connoisseur or a casual cat lover, there's a place for you in our purr-fect universe.</p>
            <i className="fas fa-paw"></i>
            <p>Ready to join our mew-nificent community? Simply create an account, upload your favorite cat memes, and let the laughter roar!</p>
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}

export default InfoPage;