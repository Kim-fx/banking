import React from 'react';
import img1 from '../images/Home.png';
import img2 from '../images/FirstBankLogo.png'
import img3 from '../images/Search.png'
import img4 from '../images/call.png'
import img5 from '../images/complaint.png'

const NavBar = () => {
    return (
        <div>
                <img className='img1' src={img1} alt='pic' width='20px' height='17px'/>
                <nav>
                    <img className='img2' src={img2} alt='pic' width='150.01px' height='42.19px'/>
                    <div className='space'>
                        <div className='search'>
                            <input className='input' type='text'/>
                            <img className='img3' src={img3} alt='pic' width='17.49px' height='17.49px'/>
                        </div>
                        <div className='button'>
                        <select >
                            <option value='Internet banking'>
                                Internet banking
                            </option>
                            <option value='Funding'>
                                Funding
                            </option>   
                        </select>
                        </div>
                    </div>
                    <div className='contact '>
                    <img className='img4' src={img4} alt='pic' width='18px' height='18px'/>
                    <h6 className='first'>Contact us</h6>

                    <h6 className='second'>+2348123456879</h6>

                    <img className='img5' src={img5} alt='pic' width='20px' height='20px'/>
                    <h6 className='third'>Complaint process</h6>
                    </div>
                </nav>
                <nav className='navbar'>
                    <ul>
                        <li><a href='#'>Corporate Banking</a></li>
                        <li><a href='#'>Institutional Banking</a></li>
                        <li><a href='#'>private Banking</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Internet Banking</a></li>
                        <li><a href='#'>Contact us</a></li>
                    </ul>
                </nav>
        </div>
        
    );
};

export default NavBar;