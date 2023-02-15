import React , { useEffect } from "react";

const Doctors = () => {

  const [doctors, setdoctors] = React.useState([])


  useEffect(() => {
    getData()
  }, [])

  const getData = () => {


    const promise = fetch('https://jsonplaceholer.typicode.com/users')

    promise.then(response => response.json())
    .then(json => {
      console.info("promise+++ json",json)
      setdoctors(json)
      console.info("promise+++ is resolved")
    }).catch((error) => {
      console.info("promise+++ error",error)
    }).finally(() => {
      console.info("promise+++ ended",)
    })

  }
  

  return (
    <div>
      <section id="doctors" className="doctors">
        <div className="container">
          <div className="section-title">
            <h2>Doctors</h2>
            <p>
              Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
              Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
              erat. Quisque in lectus id nulla viverra sodales in a risus.
              Aliquam ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu
              sagittis nec. Phasellus a eleifend elit.
            </p>
          </div>
          <div className="row">
            {doctors.map((i,index) => {
              return (
                <div className="col-lg-6" key={Math.floor(Math.random() * 100000000)}>
                  <div className="member d-flex align-items-start">
                    <div className="pic">
                      <img
                        src={'https://source.unsplash.com/random'}
                        className="img-doctor"
                        alt=""
                      />
                    </div>
                    <div className="member-info">
                      <h4>{i.name}</h4>
                      <span>{i.website}</span>
                      <p>{i.email}</p>
                      {index !== 2 && <div className="social">
                        <a href>
                          <i className="ri-twitter-fill" />
                        </a>
                        <a href>
                          <i className="ri-facebook-fill" />
                        </a>
                        <a href>
                          <i className="ri-instagram-fill" />
                        </a>
                        <a href>
                          {" "}
                          <i className="ri-linkedin-box-fill" />{" "}
                        </a>
                      </div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
