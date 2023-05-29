import React from 'react';

function CardMain({props}) {
    return (
<>  
      
                    
            <div class="card  text-white   bg-transparent border-0 bg-image hover-zoom" style={{  height:'30rem' }}>
                    {/* <img style={{ width: "100%", height: "100%" }} src="https://i.seadn.io/gcs/files/01de134db029be955aa892ea066c085f.png?auto=format&amp;dpr=1&amp;w=136&amp;h=136&amp;fr=1" class="card-img" alt="Card image cap"/> */}
                
                <img style={{ width: "100%", height: "100%",   borderRadius:20 }} 
                    src={props.imageUrl}
                    // src="https://image.mux.com/3fpNUmTCv02yc1YN1eULEScknsHCqpSqoTiUOYJKc401o/thumbnail.jpg?auto=format&dpr=1&w=2560" 
                    class="card-img w-100 " alt="Card image cap"/>


                <div class="card-img-overlay "  >
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <p class="card-text">{props.price}</p>
                
                </div>
                    </div>

                

     </>
    );
}
    // <div class="card  text-white   bg-transparent border-0 bg-image hover-zoom" style={{  height:'30rem' }}>
    //         {/* <img style={{ width: "100%", height: "100%" }} src="https://i.seadn.io/gcs/files/01de134db029be955aa892ea066c085f.png?auto=format&amp;dpr=1&amp;w=136&amp;h=136&amp;fr=1" class="card-img" alt="Card image cap"/> */}
            
    //         <img style={{ width: "100%", height: "100%",   borderRadius:20 }} 
    //             src={data[0].imageUrl}
    //             // src="https://image.mux.com/3fpNUmTCv02yc1YN1eULEScknsHCqpSqoTiUOYJKc401o/thumbnail.jpg?auto=format&dpr=1&w=2560" 
    //             class="card-img w-100 " alt="Card image cap"/>


    //         <div class="card-img-overlay"  >
    //             <h5 class="card-title">Card title</h5>
    //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //             <p class="card-text">Last updated 3 mins ago</p>
            
    //         </div>
    // </div>

export default CardMain;