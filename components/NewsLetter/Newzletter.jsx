import { useState } from "react";
import cx from 'classnames'
import fakeLinks from '../DataFetching/index'
import validator from 'validator'
import NewsLetterStyle from '../../styles/Newsletter.module.scss'
import UseFetchPost from "../Transferring Data/UseFetchPost";

export default function Newsletter() {

    const [value, setValue] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    let emailID = '';

    function OnSubmitURI() {
        if (validator.isEmail(emailID)) {
            setErrorMsg('')
            UseFetchPost(fakeLinks.newsletter, `{"email": "${emailID}"}`)
            setValue('Thank You for Subscribing')
            document.getElementById('newsletterEmail').style.display = 'none'
            document.getElementById('newsletterEmaill').style.display = 'none'
        } else {
            console.log(emailID)
            setErrorMsg('Please Enter a Valid E-mail Address')
        }
    }

    return (
        <div className={cx(NewsLetterStyle.w3lsubscribe, NewsLetterStyle.py5)}>
            <div className={cx(NewsLetterStyle.container, NewsLetterStyle.pylg5, NewsLetterStyle.pymd4)}>
                <div className={cx(NewsLetterStyle.w3lsubscribecontent, NewsLetterStyle.textcenter, NewsLetterStyle.bgclrwhite, NewsLetterStyle.pymd5, NewsLetterStyle.py2)}>
                    <div className={NewsLetterStyle.py5}>
                        <h3 className={cx(NewsLetterStyle.sectiontitleleft, NewsLetterStyle.mb2)}>Subscribe to our newsletter!</h3>
                        <p className={cx(NewsLetterStyle.mbmd5, NewsLetterStyle.mb4)}>We&apos;ll send you the best of our blog just once a month. We promise. </p>
                        <h3>{errorMsg}</h3>
                        <div className={NewsLetterStyle.subscribe}>
                            <input type="email" className={NewsLetterStyle.subscribeinput} id={`newsletterEmail`} onChange={(e) => { emailID = e.target.value }} name="email" placeholder="Email address" required />
                            <button id={`newsletterEmaill`} className={cx(NewsLetterStyle.btn, NewsLetterStyle.btnstyle, NewsLetterStyle.btnprimary)} onClick={() => { OnSubmitURI() }}>Subscribe</button>
                            <h3 style={{ marginTop: `2em` }}>{value}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}