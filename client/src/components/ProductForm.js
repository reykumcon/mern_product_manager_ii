import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setTitle("");
        setPrice(0);
        setDescription("");
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <span><label>Title:</label></span>
                    <span>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </span>
                </div>
                <div>
                    <span><label>Price:</label></span>
                    <span>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </span>
                </div>
                <div>
                    <span><label>Description:</label></span>
                    <span>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </span>
                </div>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default ProductForm;