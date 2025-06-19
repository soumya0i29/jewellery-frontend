import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AllProdAdmin() {
    const [products, setProducts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setErrorMessage('Failed to load products.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    // Delete product function
    const deleteProduct = async (productId) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/products/${productId}`);
            if (response.status === 200) {
                // After successful deletion, remove the product from the state
                setProducts(products.filter(product => product._id !== productId));
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            setErrorMessage('Failed to delete the product.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-md">
                {errorMessage && (
                    <div className="text-red-500 font-semibold mb-4">
                        {errorMessage}
                    </div>
                )}
                <h2 className="text-2xl font-semibold mb-4 text-center text-orange-500">All Products:</h2>
                <table className="min-w-full bg-white border border-gray-300 text-center">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600">
                            <th className="py-2 px-4 border">Product ID</th>
                            <th className="py-2 px-4 border">Image</th>
                            <th className="py-2 px-4 border">Category</th>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Description</th>
                            <th className="py-2 px-4 border">Price</th>
                            <th className="py-2 px-4 border">Stock</th>
                            <th className="py-2 px-4 border">Actions</th> {/* Added Actions column */}
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((p) => (
                                <tr key={p._id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border">{p._id}</td>
                                    <td className="py-2 px-4 border">
                                        <img src={p.image} alt={p.name} className="w-12 h-12 object-cover" />
                                    </td>
                                    <td className="py-2 px-4 border">{p.tag}</td>
                                    <td className="py-2 px-4 border">{p.name}</td>
                                    <td className="py-2 px-4 border">{p.description}</td>
                                    <td className="py-2 px-4 border">${p.price}</td>
                                    <td className="py-2 px-4 border">{p.stock}</td>
                                    <td className="py-2 px-4 border">
                                        {/* Delete button */}
                                        <button 
                                            onClick={() => deleteProduct(p._id)} 
                                            className="text-red-500 hover:text-red-700 transition duration-200">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="py-2 px-4 text-center">No products found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="mt-6 text-center">
                    <button
                        onClick={() => navigate('/admin')}
                        className="bg-orange-300 rounded-full px-6 py-3 text-white font-semibold hover:bg-orange-500">
                        Add New Products
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AllProdAdmin;