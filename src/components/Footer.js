import React from 'react';
import img10 from '../images/FSCS.png'


const Footer = () => {
    return (
        <div>
        <div className='route'>
            <div className=''>
                <h6>About us</h6>
                <hr/>
                    <li ><a href='#'>About us</a></li>
                    <li ><a href='#'>History</a></li>
                    <li ><a href='#'>FBN Nigeria Board of Directors</a></li>
                    <li ><a href='#'>Management team</a></li>
                    <li ><a href='#'>FBN Careers</a></li>
            </div>
            <div className=''>
                <h6>Quick Link</h6>
                <hr/>
                    <li ><a href='#'>Accessibily</a></li>
                    <li ><a href='#'>Banking code</a></li>
                    <li ><a href='#'>Complaint process</a></li>
                    <li ><a href='#'>PSD2</a></li>
            </div>
            <div className=''>
                <h6>Security</h6>
                <hr/>
                    <li ><a href='#'>Security tips</a></li>
                    <li ><a href='#'>Password security</a></li>
                    <li ><a href='#'>Online security</a></li>
                    <li ><a href='#'>internet security tips</a></li>
                    <li ><a href='#'>Scan email</a></li>
                    <li><a href='#'>Fraud alert</a></li>
                    <li><a href='#'>Debit Card and Pin Security</a></li>
            </div>
            <div className=''>
                <h6>Service</h6>
                <hr/>
                    <li ><a href='#'>InstitutionBanking</a></li>
                    <li ><a href='#'>Private Banking</a></li>
                    <li ><a href='#'>Corporate Banking</a></li>
                    <li ><a href='#'>Savings Account</a></li>
            </div>
            <div className=''>
                <h6>Follow us</h6>
                <hr/>
                    <li className='nox'><a href='#'>Follow us</a></li>
            </div>
            <div className=''>
                <h6>Quick Link</h6>
                <hr/>
                    <li><a href='#'><img className='img10' src={img10} alt='pic' width='118px' height='121px'/></a></li>
                    <li><a href=''>Visit: www.fcsc.org</a></li>
            </div>
        </div>
        <div className='black'>
            <h4 className='copy' >Copyright © FBN Bank (UK) Ltd 2019 | Authorised and regulated by the Financial Conduct Authority and Prudential Regulation Authority</h4>
            <h4 className='privacy'>Privacy    |    Terms of Use    |    Complaints process    |    FCSC Information Sheet and Exclusion Sheet</h4>
        </div>

        </div>
    );
};

export default Footer;
