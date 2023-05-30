import React from 'react';

function CardList({data}) {
    return (
        <div className='d-flex  mt-1 row'  style={{  height:'6rem'}}>
            {
            data.map((item, index) => (
                <div className='row' key={index}>
             <div className='col-md-8'>
                                        <div class="card my-1 border-0" style={{ height:'5rem'}}>
                                            <div class="row  g-0">
                                                <div class="col-md-4  d-flex "  style={{objectFit:'' }}>
                                                {/* <img src="https://i.seadn.io/gcs/files/01de134db029be955aa892ea066c085f.png?auto=format&amp;dpr=1&amp;w=136&amp;h=136&amp;fr=1" class="img-thumbnail rounded float-start mx-auto" style={{width:'6rem'}} alt="..."/> */}
                                                <img src={item.thumbnail} style={{objectFit:''  , width:'5rem', height:'5rem'}} alt="..."/>
                                                </div>
                                                <div class="col-md-8" style={{objectFit:'contain', height:'6rem'}}>
                                                <div class="card-body d-flex">
                                                    <h5 class="card-title">{item.title}</h5>
                                                    {/* <p class="card-text">{item.description}</p> */}
                                                    <p class="card-text"><small class="text-muted"></small></p>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
            </div>

             <div className='col-md-4' style={{justifyContent:'center',  alignSelf:'center'}}>
                                        <div className="" >
                                            {item.price} ETH
                                        </div>
            </div>
                </div>
            ))
            }
        </div>
    );
}

export default CardList;