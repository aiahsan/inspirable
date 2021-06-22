import React from 'react';
import { Navbar, NavDropdown, Nav,Dropdown } from 'react-bootstrap';

import {useRouter} from 'next/router'
import { CgFacebook } from 'react-icons/cg'
import { ImInstagram, ImTwitter } from 'react-icons/im'
import { AiFillYoutube } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { FaAppStore, FaGooglePlay } from 'react-icons/fa'
import Link from 'next/link'

import UpdateBox from '../components/updatenewcomp';
import Footer from '../components/footer'
import Banner from '../components/banner'
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../components/LoadingAnimation'
import {LogOut} from '../redux/actionMethodes/User'
import { NextSeo } from 'next-seo';
import Head from 'next/head'

export default () => {
    const user=useSelector(x=>x.User)
    const dispatch=useDispatch();
    const history=useRouter();
    const [isfixed,setrisfixed]=React.useState(false);
const handleScroll = () => {
    const position = window.pageYOffset;
    if(position>68)
    {
        setrisfixed(true)
    }
    else
    {
        setrisfixed(false);
    }
   
};

React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    return <>
   <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
      title=""
      description=""
    />
      </Head>
    <Banner/>
<header>
    <div id="inner_header_post_thumb">
      <div class="dark_overlay">
        <div class="ml-5 mr-5 masd02-34asdsa3">
        <Navbar
         fixed={isfixed==true?"top":""}  style={{backgroundColor:isfixed==true?"#334d5e":"",color:'white'}}
        collapseOnSelect expand="lg" className={isfixed==true?"":"csty-asept5"}>
                    <Navbar.Brand as={Link} href="/" className="cst-nav-link"><img src="/images/logo1.png" className="logo-main" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-le">
                        <a as={Link} href="/" className={`cst-nav-link color-white roboto-reg-16 nav-link`} >Home</a>
                            <a as={Link} href="/about" className={`cst-nav-link color-white roboto-reg-16 nav-link`} >About</a>
                            <a as={Link} href="/features" className={`cst-nav-link color-white roboto-reg-16 active-3 nav-link`} >Features</a>
                            <a as={Link} href="/contact" className={`cst-nav-link color-white roboto-reg-16 nav-link`}>Contact</a>
                            <a as={Link} href="/blog" className={`cst-nav-link color-white roboto-reg-16 nav-link`} >Blog</a>

                           
                            {user&&user!=null?<Dropdown>
                                <Dropdown.Toggle className="btn sgn-btn" style={{backgroundColor:'white',color:'#334D5E'}}>
                                    Account
    </Dropdown.Toggle>

                                <Dropdown.Menu style={{    borderRadius: 16}}>
                                    <Dropdown.Item onClick={() => history.push('/account')}  >Account</Dropdown.Item>
                                    <Dropdown.Item onClick={() => dispatch(LogOut())}>Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
            
                       :<a href="/signin">
                       <button className="btn sgn-btn" style={{backgroundColor:'white',color:'#334D5E'}} >
Sign In                            </button>
                       </a>}
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
                <div className="mt-16p ">
                    <h1 className="asdfjop38as-sdfadsfw">
                        Features that help your child to discover new skills.
   </h1>
                </div>
     
        </div>
      </div>
    </div>
  </header>
      
        <div className="ml-5 mr-5" style={{marginTop:120}}>
        <div className="d-flex justify-content-center align-items-center">
                   <div className="row d-flex justify-content-center sdaf30dasn2">
                   <a href="#" className="shadaskldhask-12812y8hasdh-sad"><img className="w-100" src="/images/images/appstore.png"/></a>
                    <a href="#" className="shadaskldhask-12812y8hasdh-sad ml-2"><img className="w-100" src="/images/images/playstore.png"/></a>
                   </div>
                    </div>
            <div className="pt-5">
               <div className="dsp-flex-23">
               <h1 className="Noto-main-head text-center mt-5">
                    Features
                   </h1>
                   <div className="asdjwei4930234-sadfds34"></div>

               </div>
                <div class="row ">

                    <div class="col-md-5 mission mt-5">
                        <img src="/images/images/Parent Dashboard Section.png" alt="header section image" style={{
                            
                        }} class="img-fluid mr-4" />

                    </div>

                    <div class="col-md-6  mx-auto asdfjoew23-2342">


                        <h1 className="Noto-main-para ">
                        Parent Dashboard

                           
                        </h1>
                       
                        <p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
                        An easy-to-use Parent Dashboard helps you view the progress your child is making. From how long they have been reading for to what books they are currently reading, you can track everything. This feature ensures parents can keep an eye on how well their children are doing and whether or not they are enjoying reading.</p>

                    </div>
                </div>
               
                <div class="row ">
                <div class="col-md-6  mx-auto asdfjoew23-2342">


<h1 className="Noto-main-para ">
Personalised Books
   
</h1>

<p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
With our collection of books, children can choose the main character in each story to have a personalised experience.</p>

</div>
<div class="col-md-5 mission mt-5">
    <img src="/images/images/personalised books.png" alt="header section image" style={{
        
    }} class="img-fluid mr-4" />

</div>


</div>
           
            <div className="mt-5">
                <img src="/images/images/VocabHelper.jpg" className="mt-5 w-100 asdf32sf9-asdnio2382jo" />
            </div>  
             </div>
                    
           
        </div>
        <div className="dsp-flex-23">
               <h1 className="Noto-main-head text-center mt-5">
               Vocab Helper                    </h1>
                   <div className="asdjwei4930234-sadfds34"></div>

               </div>
               <p class="mt-5 roboto-reg-16  asdfnsioj3-asdhi23 ">
                   We are an innovative company, driven by our passion to help children see themselves in the stories they read. We believe in harnessing the power of technology to encourage open-minded learning and effective reading. For children aged 2-12, we offer books designed for interactive reading and enjoyment.</p>





                   <div className="ml-5 mr-5">
                <div class="row mt-5 lo90-u88gvtd67890gg">
                <div class="col-md-6  mx-auto asdfjoew23-2342">


                <div className="dsp-flex-23">
<h1 className="Noto-main-para ">
Interactive Learning
   
</h1>
                   <div className="asdjwei4930234-sadfds34  mt-n3"></div>

               </div>

<p class="mt-4 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
We are an innovative company, driven by our passion to help children see themselves in the stories they read. We believe in harnessing the power of technology to encourage open-minded learning and effective reading. For children aged 2-12, we offer books designed for interactive reading and enjoyment.</p>

</div>
<div class="col-md-5 mission mt-5">
    <img src="/images/images/glenn-carstens-peters-2.png" alt="header section image " style={{
        borderRadius:15
    }} class="img-fluid mr-4" />

</div>


</div>
<div className="mt-5">
                <img src="/images/images/CompatibilitywithiOSandAndroid.jpeg" className="mt-5 w-100" style={{borderRadius:15}} />
            </div> 
          
                </div>
  
                
    
         
                <div className="pt-2 mt-5 pb-5">
             <h1 className="Noto-main-head text-center mt-4 ">
             Compatibility with iOS and Android              </h1>
                   <p class="pt-2 roboto-reg-16 asdfnsioj3-asdhi23 ">
                   Inspirable is compatible with both iOS and Android operating systems for today’s wide range of smartphones and tablets, including the Samsung Galaxy, Samsung Note, Google Pixel 5, iPad, the latest iPhone, and more.</p>

                </div>  
         <div className="ml-5 mr-5">
         <div class="row lo90-u88gvtd67890gg">
                <div class="col-md-6  mx-auto asdfjoew23-2342">


<div className="dsp-flex-23">
<h1 className="Noto-main-para ">
On-Call User Support   
   
</h1>
                   <div className="asdjwei4930234-sadfds34 mt-n3"></div>

               </div>
<p class="pt-2 roboto-reg-16 mx-wdth512 mt-3" style={{ maxWidth: 461, color: '#A1A1A1' }}>
We are committed to offering comprehensive solutions to any troubleshooting issues that may arise when using our app. We have a member of our user support team on-call to assist should it be necessary simply by using our contact us page.</p>

</div>
<div class="col-md-5 mission mt-5">
    <img src="/images/images/On-Call User Support.jpeg" alt="header section image" style={{borderRadius:15}} class="img-fluid mr-4" />

</div>


</div>
           
<div class="row ">

<div class="col-md-5 mission mt-5">
    <img src="images/images/Individual Packages.jpg" alt="header section image" style={{borderRadius:15}} class="img-fluid mr-4" />

</div>

<div class="col-md-6  mx-auto asdfjoew23-2342">


    <div className="dsp-flex-23">
<h1 className="Noto-main-para ">
Individual Packages
   
</h1>
                   <div className="asdjwei4930234-sadfds34 mt-n3 "></div>

               </div>
    <p class="pt-2 roboto-reg-16 mx-wdth512 mt-3" style={{ maxWidth: 461, color: '#A1A1A1' }}>
    You can buy children's books individually right from the Inspirable app. The app is totally free and we have made it so that there are no annoying ads too.</p>

</div>
</div>


         <div class="row lo90-u88gvtd67890gg ">
                <div class="col-md-6  mx-auto asdfjoew23-2342">



<div className="dsp-flex-23">
<h1 className="Noto-main-para ">
4x Profiles per Account   
   
</h1>
                   <div className="asdjwei4930234-sadfds34 mt-n3"></div>

               </div>
<p class="pt-2 roboto-reg-16 mx-wdth512 mt-3" style={{ maxWidth: 461, color: '#A1A1A1' }}>
Each account will allow up to 4 profiles to be created. This takes into consideration families with more than one child. Each account represents the parent and the profile represents the child. This way each child can have their own personal experience with Inspirable.</p>

</div>
<div class="col-md-5 mission mt-5">
    <img src="/images/images/4x Profiles per Account.jpeg" alt="header section image" style={{borderRadius:15}} class="img-fluid mr-4" />

</div>


</div>
           
         </div>
         <div className="mt-5">
            <UpdateBox />
        </div>
        <Footer />
   </>

}