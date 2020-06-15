import React from 'react'

const Home = () => {
  return (
    <>

      <h1 className="center-block text-center">Welcome to Unique Wall Art</h1>

    <div className="row">
    <div className="col-4 px-md-5">
        <img src="https://picsum.photos/id/1015/400" alt="main" className="img-thumbnail"></img>
      </div>
      <div className="col-4 text-center px-md-5">
        <p>Welcome to Unique Wall Art. We offer the finest prints of nature images, which can be printed according to your needs. These high-quality photos will be a great addition to any space.</p>
        <p>We also offer wholesale pricing for retailers.</p>

      </div>
      <div className="col-4">
        <img src="https://picsum.photos/id/1016/400" alt="main" className="img-thumbnail"></img>
      </div>
    </div>
    </>
  )
}

export default Home;