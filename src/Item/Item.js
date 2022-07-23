
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Item({products}) {
  return (
    <Container>
      <Row >
      {products.map(product => (<Col key={product.id}><div><img  src={product.img}></img><h1>{product.name}</h1><p>${product.price}</p></div></Col>))}
      </Row>
    </Container>
  );
}

export default Item

