import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
export function Home(props) {
    

    return (
        <>

        <Navbar />
            <section className="hero-section bg-red-400 flex flex-col m-4">
          <img src="https://www.pexels.com/download/video/4472923/" alt="" />
          <div className="box1 bg-blue-400 flex flex-col justify-center items-center">
            <h1 className="heading m-2 font-bold text-3xl te-orange-700">
              Product And Services
            </h1>
            <div className="marq w-[50%] text-center">
              <marquee behavior="up" direction="up" className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                quod animi obcaecati, fugiat ullam nihil, aliquid reprehenderit
                saepe aperiam quam tenetur facilis laboriosam magnam iste
                aspernatur? Explicabo earum aut ut!
              </marquee>
            </div>
          </div>

          <div className="box2 flex flex-col md:flex-row bg-blue-500">
            <div className="leftbox flex flex-col justify-center items-center text-center gap-5 p-8 bg-white shadow-md md:w-1/2">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                GROW & SHINE
              </h1>

              <h2 className="text-xl">Win With Grow and Shine!</h2>
              <h3 className="text-lg">Learn Coding For Free</h3>
              <div className="italic text-sm">
                <i>
                  Purchase Grow and Shine Today!
                  <br />
                  Buy 10 Get 6 Free Is the Best Value!
                </i>
              </div>
              <p className="text-sm w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                rerum sunt qui hic repellendus quis repellat adipisci veniam
                libero eius laboriosam similique quod totam quidem voluptate
                nemo quos nostrum asperiores!
              </p>
              <button className="bg-blue-500 text-white px-[15%] py-2 rounded-md hover:bg-blue-600">
                Register
              </button>
            </div>
            <div className="rightbox flex justify-center items-center w-full md:w-1/2">
              <div className="m-2 bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  className="object-cover w-full h-80 md:h-96"
                  src="https://plus.unsplash.com/premium_vector-1683141309231-70694b7ffb82?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
        </section> 
        <Footer />
        </>
    )
}
