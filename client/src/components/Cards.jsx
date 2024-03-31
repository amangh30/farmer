import React, { useEffect, useState } from 'react';
import '../style/cards.css';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../LoadingPage.css'; // Import your CSS file for styling




const Cards = ({ sendDataToChild }) => {
    const [items, setItems] = useState([0]); // Initialize with a default value
    const [isLoading, setIsLoading] = useState(false);
    const [data,setData] = useState();
    const [imageData, setImageData] = useState([]);
    const [elements,setElements] = useState();
    const getCards = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/api/product/')
            return(res.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
      };

    const getPicture = async (id) => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/products/${id}/image/`,{ responseType: 'arraybuffer' })
            const base64Image = arrayBufferToBase64(res.data);
            return `data:image/jpeg;base64,${base64Image}`;
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(()=>{
        getCards().then((value)=>{
            setData(value)
            const e = data?.filter(product => product.name.toLowerCase() === sendDataToChild.toLowerCase());
            setElements(e)
        }).catch((error)=>{
            console.log(error)
        });

        setIsLoading(true);
            // Simulate loading delay
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
        
    },[sendDataToChild])

    useEffect(() => {
        const fetchImages = async () => {
            const promises = elements.map(async (element) => {
                const base64Image = await getPicture(element.id);
                return {
                    id: element.id,
                    base64Image: base64Image
                };
            });
            const imageDataResults = await Promise.all(promises);
            setImageData(imageDataResults);
        };
        fetchImages();
    }, [elements]);

    const handleAdd =(id)=>{
        setItems(prevItems => {
            // Ensure the new array has enough length to accommodate the specified index
            const newItems = [...prevItems];
            while (newItems.length <= id) {
              newItems.push(0); // Add zeros to the end of the array until it reaches the specified index
            }
            newItems[id] += 1; // Increment the value at the specified index by 1
            return newItems; // Return the updated array
          });
    }

    const handleRemove =(id)=>{
        if(items[id]<=0){
            const product = document.querySelector("rmicon");
            product.style.display = "none"
        }
        else{   
        setItems(prevItems => {
            // Ensure the new array has enough length to accommodate the specified index
            const newItems = [...prevItems];
            while (newItems.length <= id) {
              newItems.push(0); // Add zeros to the end of the array until it reaches the specified index
            }
            newItems[id] -= 1; // Increment the value at the specified index by 1
            return newItems; // Return the updated array
          });    
        }
        }

        

    return (
        <div>
        {isLoading ? (
            <div className="loading-page">
              <div className="spinner"></div>
            </div>
          ):<div>{sendDataToChild ? (
            <div>
                <div className="coc">
                    <div className='card-container'>
                    {imageData.map(({ id, base64Image }) => (
                <div key={id} className="bg404">
                    <div className="card_box">
                        <img className="photu" src={`${base64Image}`} alt="" />
                        <h3>{elements.find(element => element.id === id)?.name}</h3>
                        <p className='soldby'>Sold By: {elements.find(element => element.id === id)?.seller}</p>
                        <p style={{fontWeight: '600', fontSize: '16px'}}>₹ {elements.find(element => element.id === id)?.price}</p>
                        <div className="details">
                            <button style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '150px'}} className='btn'>
                                <RemoveIcon className='rmicon' onClick={() => handleRemove(id)} style={{fontSize: '22px', cursor: 'pointer'}}/>
                                {items[id] ? (<p>{items[id]}</p>) : (<p>Add to Cart</p>)}
                                <AddIcon style={{fontSize: '22px', cursor: 'pointer'}} onClick={() => handleAdd(id)}/>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
                    </div>
                </div>
            </div>) : (<div>Hello world</div>)}</div>}
            </div>
    );
}

export default Cards