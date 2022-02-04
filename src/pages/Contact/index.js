import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Contact = ({ setUser }) => {

    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    return (
        <div id='cont-div'>
            <div id='comm-info'>
                <strong>Commisions for drawings, paintings, and decoden phone cases are available. To inquire, fill out the form below or email me directly at Slimetooth.art@gmail.com.</strong>
            </div>
            <form className='mx-auto ' id='contact-form' >
                <div className="mb-3" id='name-input'>
                    <label htmlFor="exampleInputUser1" className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        id="exampleName"
                        aria-describedby="UserHelp"
                    />
                </div>

                <div className="mb-3" id='email-input'>
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail" />

                </div>
                <div className="mb-3" id='subject-input'>
                    <label htmlFor="exampleInputSubject" className="form-label">Subject</label>
                    <input type="Subject"
                        className="form-control"
                        id="exampleInputSubject" />
                </div>
                <div className="mb-3" id='message-input'>
                    <label htmlFor="exampleInputMessage" className="form-label">Message</label>
                    <textarea type="text"
                        className="form-control"
                        id="exampleInputMessage" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
