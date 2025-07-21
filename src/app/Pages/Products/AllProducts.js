import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "../../Coponents/Footer/Footer";
import ProductCard from "../../Coponents/Product/Card/ProductCard";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="Page pt-3">
      <Container>
        <h4 className="mb-4">Showing Produdcts from</h4>
        <Row>
          {products &&
            products.map((p) => {
              return (
                <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={p.id}>
                  <ProductCard product={p} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <div className="mb-5"></div>
      <Footer />
    </div>
  );
}

export default AllProducts;
