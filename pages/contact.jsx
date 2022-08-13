import contactStyle from '../styles/contact.module.scss'
import cx from 'classnames'
import data from '../Data/index.json'
import { useState } from 'react';
import UseFetchPost from '../components/Transferring Data/UseFetchPost'
import validator from 'validator';
import fakeLinks from '../components/DataFetching/index'
import SeoOptimised from '../components/Seo/index'

export default function contact() {
    const [value, setValue] = useState('');
    let emailID = '';
    let name = '';
    let phone = '';
    let message = '';
    let subject = '';

    function OnSubmitURI() {
        if (validator.isEmail(emailID)) {
            let mainmsg = message.replace(/[\r\n]+/gm, "")
            UseFetchPost(fakeLinks.contact, `{"email": "${emailID}","name": "${name}","message":"${mainmsg}","phone":"${phone}","subject":"${subject}"}`)
            setValue('Thank You Contacting me. We hope to Reach out to you as soon as Possible')
            document.getElementById('w3lName').style.display = 'none'
            document.getElementById('w3lSubject').style.display = 'none'
            document.getElementById('w3lSender').style.display = 'none'
            document.getElementById('w3lPhone').style.display = 'none'
            document.getElementById('w3lMessage').style.display = 'none'
            document.getElementById('submitbtn').style.display = 'none'
        }
    }

    return (
        <>
            <SeoOptimised curPage={`Contact`} />
            <div className={cx(contactStyle.w3lcontact10, contactStyle.py5)} id="contact">
                <div className={cx(contactStyle.form41mian, contactStyle.ptlg4, contactStyle.ptmd3, contactStyle.pbmd4)}>
                    <div className={contactStyle.container}>
                        <div className={contactStyle.heading}>
                            <h1 className={cx(contactStyle.categorytitle, contactStyle.mb3)}>Contact us </h1>
                            <p className={cx(contactStyle.mbmd5, contactStyle.mb4)}>If you have a question regarding My services, feel free
                                to contact me using the form below.</p>
                        </div>
                        <div className={contactStyle.row}>
                            <div className={cx(contactStyle.collg8, contactStyle.forminnercont)}>
                                <div className={contactStyle.signinform}>
                                    <h3>{value}</h3>
                                    <div className={contactStyle.formgrids}>
                                        <div className={contactStyle.forminput}>
                                            <input type="text" name="name" id="w3lName" onChange={(e) => { name = e.target.value }} placeholder="Enter your name *" required />
                                        </div>
                                        <div className={contactStyle.forminput}>
                                            <input type="text" name="subject" id="w3lSubject" onChange={(e) => { subject = e.target.value }} placeholder="Enter subject " required />
                                        </div>
                                        <div className={contactStyle.forminput}>
                                            <input type="email" name="email" id="w3lSender" onChange={(e) => { emailID = e.target.value }} placeholder="Enter your email *" required />
                                        </div>
                                        <div className={contactStyle.forminput}>
                                            <input type="text" name="phone" id="w3lPhone" onChange={(e) => { phone = e.target.value }} placeholder="Enter your Phone Number *" required />
                                        </div>
                                    </div>
                                    <div className={contactStyle.forminput}>
                                        <textarea name="message" id="w3lMessage" onChange={(e) => { message = e.target.value }} placeholder="Your message here" required defaultValue={""} />
                                    </div>
                                    <div className={contactStyle.textright}>
                                        <button className={cx(contactStyle.btn, contactStyle.btnstyle, contactStyle.btnprimary)} id='submitbtn' onClick={() => { OnSubmitURI() }}>Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx(contactStyle.collg4, contactStyle.contacts5gridmain, contactStyle.sectiongap, contactStyle.mtlg0, contactStyle.mt5)}>
                                <div className={contactStyle.contacts5grid}>
                                    <h3 className={cx(contactStyle.sectiontitleleft, contactStyle.mb4)}> Contact Me</h3>
                                    <div className={contactStyle.mapcontent5}>
                                        <section className={contactStyle.tabcontent}>
                                            <div className={contactStyle.contacttype}>
                                                {data.address && <div className={cx(contactStyle.addressgrid, contactStyle.mb4)}>
                                                    <h6>Address</h6>
                                                    <p>{data.address}</p>
                                                </div>}
                                                {data.emailAddress && <div className={cx(contactStyle.addressgrid, contactStyle.mb4)}>
                                                    <h6>Email Address</h6>
                                                    <a href={`mailto:${data.emailAddress}`} className={contactStyle.link1}>{data.emailAddress}</a>
                                                </div>}
                                                {data.phone && <div className={contactStyle.addressgrid}>
                                                    <h6>Phone Number</h6>
                                                    <a href={`tel:${data.phone}`} className={contactStyle.link1}>{data.phone}</a>
                                                </div>}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}