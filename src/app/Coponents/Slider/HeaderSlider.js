import React, { Fragment } from "react";
import {Carousel } from "react-bootstrap";
import "./HeaderSlider.css";
import { Link } from "react-router-dom";

function HeaderSlider() {

  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "90vh", objectFit: "cover" }}
            src="../img/slider/women_j.jpg"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Link to='/product/16'><span className='btn shopBtn mx-3 rounded-pill fw-bold'>Shop Now</span></Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "90vh", objectFit: "cover" }}
            src="../img/slider/raglan_t.jpg"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>Mens Casual Premium Slim Fit T-Shirts</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Link to='/product/2'><span className='btn shopBtn mx-3 rounded-pill fw-bold'>Shop Now</span></Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "90vh", objectFit: "cover" }}
            src="../img/slider/samsung_m.jpg"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              <Link to='/product/14'><span className='btn shopBtn mx-3 rounded-pill fw-bold'>Shop Now</span></Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
