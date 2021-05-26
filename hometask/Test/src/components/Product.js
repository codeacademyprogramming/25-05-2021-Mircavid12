import React, { Component } from "react";
import { productsRequest, AddCart } from "../stores/actions";
import { connect } from "react-redux";
export class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productsRequest();
  }

  render() {
    const { _products } = this.props._products;
    if (_products.length > 0) {
      return (
        <div className="row mt-5 mb-5" style={{ marginTop: "10px" }}>
          <div className="col-md-12">
            <div className="row">
              {_products.map((item, index) => (
                <div className="col-lg-3 text-center mt-5">
                  <div className="card">
                    <img alt="" src={item.image} />
                    <h4 className="pizza-name">{item.name}</h4>
                    <p className="ingredients">{item.category}</p>
                    <span className="card-cost">{item.price} MAN</span>
                    <div className="show-features mx-auto">
                      <i className="fas fa-shopping-bag"></i>
                    </div>
                    <div className="sizes-overlay hidden">
                      <h3>Sizes:</h3>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          small - 20cm
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          medium - 20cm
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          big - 20cm
                        </label>
                      </div>
                      <button
                        className="btn btn-success add-basket-btn mb-3"
                        onClick={() => this.props.AddCart(item)}
                      >
                        Add to basket
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._ProductList,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    productsRequest: () => dispatch(productsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
