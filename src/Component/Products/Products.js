import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
export default class Product extends Component{
    constructor(props) {
        super(props);
        this.state={
            products:[]
        };
        this.SendRequestUpdatePro=this.SendRequestUpdatePro.bind(this)
    }
    componentDidMount() {
      axios.get("/products").then((res) => {
        this.setState({
          products: res.data || ["loading"]
        });
      });
    }
    SendRequestUpdatePro(product){
      axios.put('/products/updateByID', {
        _id: product._id
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    render() {
      const { products } = this.state;
      return (
        <Container>
          <h1>Item of Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm="4">
                <Card>
                  <CardImg top width="100%" src={product.image} alt="" />
                  <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <Button color="primary" >Add To Cart</Button>
                    <Button color="warning" onClick={() => this.SendRequestUpdatePro(product)}>Edit
                    </Button>
                    <Button color="danger">Delete</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
    }
}