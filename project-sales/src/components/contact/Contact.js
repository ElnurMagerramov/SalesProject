import React, { Component } from 'react'
import { Button } from 'reactstrap'
import {
    FaPhone,
    FaEnvelope
} from 'react-icons/fa'
import { VscLocation } from 'react-icons/vsc'
export default class Contact extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#a1c4fd" }}> <br /><br /><br />
                <section class="mb-4 container p-5" style={{ width: "60%", color: "white", backgroundColor: "#4835d4", borderRadius: "15px" }}><br />
                    <h1 className='h1-responsive font-weight-bold text-center'>Contact us</h1><br />
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    <div class="row">
                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <label for="name" class="">Your name</label>
                                            <input type="text" id="name" name="name" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <label for="email" class="">Your email</label>
                                            <input type="email" id="email" name="email" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <label for="subject" class="">Subject</label>
                                            <input type="text" id="subject" name="subject" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="text-center text-md-left my-3">
                                <Button className='col-12' color='info'>Send</Button>
                            </div>
                            <div class="status"></div>
                        </div>
                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><VscLocation className=' h1' />
                                    <p>Baku, Hirdalan, Azerbaijan</p>
                                </li>

                                <li>
                                    <FaPhone className='mt-4 h3' /><p> + 994 50 853 45 91</p>
                                </li>

                                <li>
                                    <FaEnvelope className='mt-4 h3' /><p>
                                        elnur2370@gmail.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </section><br /><br /><br />
            </div>
        )
    }
}
