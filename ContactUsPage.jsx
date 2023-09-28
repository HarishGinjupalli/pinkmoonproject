import React from "react";
import "./HomePage.css"
import { Link } from "react-router-dom";
const ContactUsPage=()=>{
    return(
        <>
            <div className='ps-3 pe-3 mb-5 '>
                
                <section className="mt-4" id="contact">
                <div>
                <h3 className="hed ">Contact us</h3>
                </div>
                <div className="container-fluid mt-3">
                <div className="row">
                <div className="col-md-3">
                <div className="card p-4 shadow card-height cardh">
                <div><i className="fa-brands fa-whatsapp fa-3x"></i></div>
                <div className="card-body mt-3">
                <p className="card-text fs-6">Chat with Expert / Organization</p>
                <Link to="/twiliosms">
                    <button type="button" className="btn btn-sm btn-danger"  >
                        Chat
                    </button>
                </Link>
                </div>
                </div>
                </div>
                <div className="col-md-3 ">
                <div className="card p-4 shadow card-height cardh" >
                <div><i className="fa-solid fa-video fa-3x"></i></div>
                <div className="card-body ">
                <p className="card-text fs-6">Video call with Expert / Organization</p>
                <Link to="/whatsapp">
                    <button type="button" className="btn btn-sm btn-danger mt-3">
                        Video Call
                    </button>
                </Link>
                </div>
                </div>
                </div>
                <div className="col-md-3 ">
                <div className="card p-4 shadow card-height cardh"  >
                <div><i className="fa-solid fa-user  fa-3x"></i></div>
                <div className="card-body mt-3">
                <p className="card-text fs-6">Chat with system Administrator</p>
                <Link  to="https://tawk.to/chat/63806b63daff0e1306d956e2/default">
                    <button type="button" className="btn btn-sm btn-danger  btnb">
                        Chat
                    </button>
                </Link>
                </div>
                </div>
                </div>
                <div className="col-md-3 ">
                <div className="card p-4 shadow card-height cardh" >
                <div><i className="fa-solid fa-calendar-check fa-3x"></i></div>
                <div className="card-body mt-3">
                <p className="card-text fs-6">Book an appointment</p>
                <Link to="/EmailPage">
                <button type="button" className="btn btn-sm btn-danger btnb"> 
                    Book
                </button>
                </Link>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>
            </div>        
        </> 
    )
}

export default ContactUsPage