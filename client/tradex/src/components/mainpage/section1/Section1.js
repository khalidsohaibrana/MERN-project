import React, { useEffect, useState } from 'react';
import CardMain from './CardMain';
import axios from 'axios';
import CarouselComponent from './CarouselComponent';

function Section1(props) {
    const [data, setData] = useState([]);
    useEffect(()=>{
        nftData();
    },[])
    

    async function nftData(){
        try {
             let result = await axios.get('http://localhost:3200/data');
          //  let result = await axios.get('https://livenewsglobe.com/wp-json/wp/v2/posts');
            setData(result.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className='container'>
            <div>
                <nav class="nav nav-underline nav-pills my-3 ">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                </nav>  
            </div>

            <CarouselComponent items={data} />

          
            

            {/* <div id="carouselExampleAutoplaying"  class="carousel slide carousel-fade mx-5" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active ">
                            <CardMain data={data}/>

                </div>
                <div class="carousel-item">
                            <CardMain data={data} />

                </div>
                <div class="carousel-item">
                            <CardMain data={data} />

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                
            </button>
            </div> */}




        </div>
    );
}

//important
// {
//     data.map((val,index)=>{
//         const{title,imageUrl,description, price}=val;
//        return(
//         <CardMain className={`carousel-item ${index === 0 ? 'active' : ''}`}
//             key={index}
//             imageUrl={imageUrl}
//             title={title}
//             price={price}
//             description={description}
//         />
//        );

//     })
// }


//last working code of carousal
// {
//     data.map((val,index)=>{
//                 const{title,imageUrl,description, price}=val;
//                return(
//                 <div id="carouselExampleAutoplaying"  class="carousel slide carousel-fade  mx-5" data-bs-ride="carousel">
//                 <div class="carousel-inner">
//                     <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        
//                         <div class="card  text-white   bg-transparent border-0 bg-image hover-zoom" style={{  height:'30rem' }}>
//                     {/* <img style={{ width: "100%", height: "100%" }} src="https://i.seadn.io/gcs/files/01de134db029be955aa892ea066c085f.png?auto=format&amp;dpr=1&amp;w=136&amp;h=136&amp;fr=1" class="card-img" alt="Card image cap"/> */}
                    
//                     <img style={{ width: "100%", height: "100%",   borderRadius:20 }} 
//                         src={imageUrl}
//                         // src="https://image.mux.com/3fpNUmTCv02yc1YN1eULEScknsHCqpSqoTiUOYJKc401o/thumbnail.jpg?auto=format&dpr=1&w=2560" 
//                         class="card-img w-100 " alt="Card image cap"/>
    
    
//                     <div class="card-img-overlay"  >
//                         <h5 class="card-title">{title}</h5>
//                         <p class="card-text">{description}</p>
//                         <p class="card-text">{price}</p>
                    
//                     </div>
//                         </div>
    
//                     </div>
    
//                 </div>
//                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    
//                 </button>
//                 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    
//                 </button>
//             </div>
//             );

//                  })
// }

export default Section1;