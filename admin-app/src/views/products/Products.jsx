import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../features/product/productSlice'
import "./products.css";
const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { products, isLoading, isError, message } = useSelector(
        (state) => state.product
    ) 
        console.log(products)
    useEffect(() => {
        if (isError) {
            console.log(message)
        }
    
        dispatch(getProducts());   
       
    }, [navigate, dispatch, isError, message])   

    
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Products</h1>
                <Link to="new" className="d-none d-sm-inline-block btn btn-sm btn-dark shadow-sm">
                    <i className="fas fa-plus fa-sm "></i> Create New Product</Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark">Products Table</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th> Price</th>
                                    <th> Quantity</th>
                                    <th> Description</th>
                                    <th>Product Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>                                    
                            {!isLoading && products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stockquantity}</td>
                                    <td>{product.description}</td>
                                    <td>{product.image}</td>
                                    <td class="button-cell">
                                        <Link to={`/admin/products/edit/${product._id}`} className='btn btn-md btn-dark' >Edit</Link>
                                        <Link to={`/admin/products/delete/${product._id}`} className='btn btn-md btn-warning '>Delete</Link>
                                    </td>
                                </tr>
                            ))}                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default Products