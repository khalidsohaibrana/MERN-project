import React from 'react';

function Section1(props) {
    return (
        <div className='container'>

                <div class="card bg-dark text-white m-5 " style={{ borderRadius:'20px' , height:'30rem', background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                    {/* <img style={{ width: "100%", height: "100%" }} src="https://i.seadn.io/gcs/files/01de134db029be955aa892ea066c085f.png?auto=format&amp;dpr=1&amp;w=136&amp;h=136&amp;fr=1" class="card-img" alt="Card image cap"/> */}
                    <img style={{ width: "100%", height: "100%", objectFit:'cover' }} src="https://i.seadn.io/gcs/files/727247a72f9500ce6791eefc1b6870f6.png?auto=format&dpr=1&w=3840" class="card-img" alt="Card image cap"/>
                    <div class="card-img-overlay"  >
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    
                    </div>

                </div>
                </div>
    );
}

export default Section1;