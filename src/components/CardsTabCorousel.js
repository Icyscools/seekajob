import Carousel from 'react-grid-carousel';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: 150,
  border: '4px solid #F4F4F4',
  borderRadius: '20px',
  backgroundColor: '#FEFEFE',
  padding: '30px',
};

const CardsTabCorousel = ({ title, items }) => {
  const renderCardItem = ({ title, description, endline, id, goto }) => {
    return (
      <Carousel.Item key={id}>
        <Link to={`${goto}`}>
          <div style={cardStyle}>
            <h5 style={{ marginBottom: 10 }}>{title}</h5>
            <small className="mb-3">{description}</small>
            <span className="mt-auto ml-auto">{endline ?? 'a'}</span>
          </div>
        </Link>
      </Carousel.Item>
    );
  };

  return (
    <Container>
      <h3 style={{ marginLeft: '3%' }}>{title}</h3>
      <Carousel cols={3} rows={1} gap={30} loop>
        {items?.map((item) => {
          return renderCardItem(item);
        })}
      </Carousel>
    </Container>
  );
};

export default CardsTabCorousel;
