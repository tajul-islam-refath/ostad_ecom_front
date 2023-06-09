import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../api/API";

function ProductCreateUpdate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      await createNewProduct({
        title,
        description,
        price,
        quantity,
        image,
      })
    ) {
      navigate("/admin/products");
    }
  };
  return (
    <div className="container mt-2">
      <h2>Create New Product</h2>
      <div className="card card-body p-3">
        <form onSubmit={onSubmit}>
          <div class="form-group my-2">
            <label for="Title">Title</label>
            <input
              type="text"
              class="form-control"
              id="Title"
              placeholder="Enter Title"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>
          <div class="form-group my-2">
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              placeholder="Description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </div>
          <div class="form-group my-2">
            <label for="Price">Price</label>
            <input
              type="text"
              class="form-control"
              id="Price"
              placeholder="0"
              onChange={(event) => setPrice(event.target.value)}
              value={price}
            />
          </div>
          <div class="form-group my-2">
            <label for="quantity">Quantity</label>
            <input
              type="text"
              class="form-control"
              id="quantity"
              placeholder="0"
              onChange={(event) => setQuantity(event.target.value)}
              value={quantity}
            />
          </div>
          <div class="form-group my-2">
            <label for="image">Image</label>
            <input
              type="file"
              class="form-control"
              id="image"
              onChange={(event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = function (e) {
                  const fileURL = e.target.result;
                  setImage(fileURL);
                };
                reader.readAsDataURL(file);
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductCreateUpdate;
