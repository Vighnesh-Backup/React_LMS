import React from 'react'

export function Card(props) {
    

    return (
        <>
        <Navbar />
        <div className="cards">
         <div className="card-Container flex flex-wrap items-center justify-center  gap-5 ">
          <div className="card glass xs:w-[450px] md:w-[288px] ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Dowanload now!</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Footer/>    
        </>
    )
}
