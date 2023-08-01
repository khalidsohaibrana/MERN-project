import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import CardList from './CardList';

function Section2(props) {
    const [slicedDataTop, setSlicedDataTop] = useState([]);
    const [slicedDataTrend, setSlicedDataTrend] = useState([]);
    useEffect(()=>{
        nftData();
    },[])
    

    async function nftData(){
        try {
             let result = await axios.get('http://localhost:3200/data');
          //  let result = await axios.get('https://livenewsglobe.com/wp-json/wp/v2/posts');
          //const data =result.data
          console.log(result.data)
          setSlicedDataTop(result.data.slice(0,5));
          setSlicedDataTrend(result.data.slice(5,10));
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        
                <div className=' container' style={{  height:'40rem' }}>
                   <div className='mt-5'>
                        <nav>
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Trending</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Top</a>
                                    </li>
                                    
                                </ul>

                        </nav>
                        {/* seprator/line */}
                        <div class="p-1 bg-dark w-100 mt-2" style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}></div>
                        

                        <div className='row mt-4'>                              
                            <div className='col-sm-6'>
                                
                                <CardList data={slicedDataTop}/>                                                                                                                         
                            
                            </div>
                            <div className='col-sm-6'>
                                
                                    
                            <CardList data={slicedDataTrend}/>
                                
                                
                            </div>

                            
                        </div>
                        {/* <div>
                                <Card className="card m-2 p-0 item " style={{ width: '18rem' }}  >
                                    <Image src='https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg' className="card-img-top" alt="https://geeks-nextjs.vercel.app/images/course/course-javascript.jpg"/>
                                    <div className="card-body ">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </Card>
                        </div> */}

                   </div>
                   
                </div>

        
    );
}

export default Section2;