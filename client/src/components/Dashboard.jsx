import React, { useState } from "react";
import '../style/Dashboard.css'
import { Dialog, DialogTitle, DialogContent, DialogActions,Button, TextField } from '@mui/material';
import { useGlobal } from '../GlobalContext';
import { Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
    const { access, setAccess,accountname } = useGlobal();
    const [flag, setFlag] = useState(false)
    const handleProduct = () => {
        setFlag(true)
    }

    
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [stock,setStock] = useState();
    const [image, setImage] = useState(null);
    
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handlePrice = (e)=>{
        setPrice(e.target.value)

    }
    const handleStock = (e)=>{
        setStock(e.target.value)

    }

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };
    
      
    const handleClose = () => {
        setFlag(false);
    };
    const logout=()=>{
        setAccess(false)
    }
    const handleClick =async()=>{
        try{
            const formData = new FormData();
            if(!name || !image || !stock || !price){
                toast.error("Please Fill Everything")
                return;
            }
            if(!accountname){
                toast.error("Please login again")
                return;
            }
            formData.append('name',name);
            formData.append('image', image);
            formData.append('stock', stock);
            formData.append('price', price);
            formData.append('seller', accountname);            
            const res = await axios.post('http://127.0.0.1:8000/api/product/',formData)
            toast.success("Product Added")
            setTimeout(() => {
                    setFlag(false);
            }, 1000);
            }
        catch(e){
            console.log(e);
        }
    }
    return (
        <div>
            {access?( <div className="gay">
            <Dialog open={flag} >
                <DialogTitle>Listing A New Product</DialogTitle>
                <DialogContent>
                    <div className="wushangclan">
                    <div className="baap">
                        Product Name
                        <TextField value={name} onChange={handleName}></TextField>
                    </div>
                    <div className="baap">
                        Enter Price Per Kg
                        <TextField type="number" value={price} onChange={handlePrice}></TextField>
                    </div>
                    <div className="baap">
                        Enter Stock
                        <TextField type="number" value={stock} onChange={handleStock}></TextField>
                    </div>
                    <div className="baap">
                        Image
                        <input  className="it" type="file" onChange={handleFileChange}/>
                    </div>
                    </div>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClick}>Add</Button>
                    <p style={{cursor:'pointer'}} onClick={handleClose}>Cancel</p>
                </DialogActions>
            </Dialog>
            <section id="sidebar">
                <a href="#" class="brand">
                    <i class='bx bxs-smile'></i>
                    <span class="text">ICON</span>
                </a>
                <ul class="side-menu top">
                    <li class="active">
                        <a href="#">
                            <i class='bx bxs-dashboard' ></i>
                            <span class="text">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-shopping-bag-alt' ></i>
                            <span class="text">My Store</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-doughnut-chart' ></i>
                            <span class="text">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-message-dots' ></i>
                            <span class="text">Message</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-group' ></i>
                            <span class="text">Team</span>
                        </a>
                    </li>
                </ul>
                <ul class="side-menu">
                    <li>
                        <a href="#">
                            <i class='bx bxs-cog' ></i>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="logout">
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text" onClick={logout}>Logout</span>
                        </a>
                    </li>
                </ul>
            </section>

            <section id="content">



                <main>
                    <div class="head-title">
                        <div class="left">
                            <h1>Dashboard</h1>
                            <ul class="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a class="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" class="btn-download">
                            <i class='bx bxs-cloud-download' ></i>
                            <span class="text" onClick={handleProduct}>Add Product</span>
                        </a>
                    </div>

                    <ul class="box-info">
                        <li>
                            <i class='bx bxs-calendar-check' ></i>
                            <span class="text">
                                <h3>1020</h3>
                                <p>New Order</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-group' ></i>
                            <span class="text">
                                <h3>2834</h3>
                                <p>Visitors</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-dollar-circle' ></i>
                            <span class="text">
                                <h3>2543Rs</h3>
                                <p>Total Sales</p>
                            </span>
                        </li>
                    </ul>


                    <div class="table-data">
                        <div class="order">
                            <div class="head">
                                <h3>Recent Orders</h3>
                                <i class='bx bx-search' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date Order</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="src/assets/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="src/assets/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="src/assets/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status process">Process</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="src/assets/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="src/assets/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="todo">
                            <div class="head">
                                <h3>To Do List</h3>
                                <i class='bx bx-plus' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <ul class="todo-list">
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                                <li class="not-completed">
                                    <p>Todo List</p>
                                    <i class='bx bx-dots-vertical-rounded' ></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>

            </section>
            <ToastContainer />

        </div>):(<Navigate to="/loginf" replace={true} />)}
       
        </div>
    )
}

export default Dashboard;