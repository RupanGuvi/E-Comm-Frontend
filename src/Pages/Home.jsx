import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://ecomm-backend-dc9u.onrender.com/api/products/get"
      );
      setProducts(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {products.map((ele) => (
          <div className="col-md-4 col-sm-6" key={ele._id}>
            <div className="card">
              <div className="card-header text-center">
                <h2>{ele.productName}</h2>
              </div>
              <img
                src={ele.productImage}
                className="card-img-top"
                alt={ele.productName}
              />
              <div className="card-body text-center">
                <h5 className="card-title">${ele.productPrice}</h5>
              </div>
              <div className="card-footer text-center">
                <button type="button" className="btn btn-warning mx-1" >
                  Edit
                </button>
                <button type="button" className="btn btn-danger mx-1" >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Home;
