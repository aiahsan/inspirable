import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import NavBar from '../components/headersingle';
import UpdateBox from '../components/updatenewcomp';
import Footer from '../components/footer'
import Banner from '../components/banner'
import animationData from "../animations/Home_page.json";
import Lottie from "react-lottie";
import { NextSeo } from 'next-seo';
import Head from 'next/head'

const CardDSP = ({ classname, head, title }) => {
    return <div class={`card1-324sa ${classname}`} >
        <h5 class="text-white text-center pt-3 roboto-reg-18">{head}</h5>
        <h6 class="text-white text-center mb-5">{title}</h6>
        <button class="btn text-dark mb-5 pl-3 font-weight-bold dsfheirowri-asdfasd" >Explore Range</button>
    </div>
}
const CardDSP1 = ({ image, head, title, post }) => {
    return <div class="card-sdafdsifhsda" >

        <img class="card-img-top" src={image} alt="Card image cap" />
        {/* <div className="asdfjhi3o423-sfhaosfd">
    <FiArrowRight/>
    </div> */}
        <div class="card-body">
            <p class="roboto-reg-14 text-center">{title}</p>
            <p class="roboto-reg-18 pl-2 pr-2  text-center ">{head}</p>
            <p class="roboto-reg-14 text-center" style={{ textDecoration: 'underline' }}><u>{post}</u></p>
        </div>
    </div>
}
export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    return <div>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo
      title=""
      description=""
    />
      </Head>
        <Banner/>

        <div class="container-fluid header-section-asdfase8-sdasd">
            <NavBar active="2" color="transparent" isScrollable={false}  />
            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 mission">
                        <h1 className="roboto-main-head-cst-asdasd ">

                            Our
                <span> Story:</span>
                        </h1>
                        <div className="asdjwei4930234-sadfds34"></div>
                        <p class="mt-4 asdfji324-p pb-2 mx-wdth512">
                        It all started back in 2017 when Natalie <span className="sadfop390adsf-2as">(founder and the mastermind behind Inspirable)</span> came up with the idea to have a mobile app where parents and children can take an adventurous and fully immersive ride to the world of books.                      </p>
                        <p class="mt-2 asdfji324-p pb-2 mx-wdth512">
                        Natalie, who has worked professionally in Early Years for more than a decade, recognised a need for a place where informative and interesting books combine with modem technology. Natalie wants to inspire young children to be imaginative and explore different professions that seem remote or in other cases unattainable. </p>
                        <p class="mt-2 asdfji324-p pb-2 mx-wdth512">
                        Natalie alongside her tech-savvy husband started Inspirable to provide children with books that would not only nourish their minds but also help expose different and unique career pathways, such as an Astronaut, Computer Scientist or Forensic Scientist as well as others.  </p>

                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 mb-5">

                        <img src="/images/images/mission1.jpg" alt="header section image" class="img-fluid img asdf32sf9-asdnio2382jo" style={{ width: '71%' }} />
                        <img src="/images/dots.png" alt="header section image " class="img-fluid img sadsa-sadasd-12412sadsdsd-sae" />

                    </div>
                </div>

            </div>
        </div>

        <div className="container" style={{marginTop:120}}>
            <div class="row">

                <div class="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                    <img src="/images/images/OurStory.jpeg" alt="header section image" class="img-fluid border-rad-10" />
                </div>

                <div class="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdas-sasdfjoew23-2342">

                    
                    <h1 className="roboto-main-head-cst-asdasd ">

Our
<span> Mission:</span>
</h1>
<div className="asdjwei4930234-sadfds34"></div>

                    <p class="pt-2 roboto-reg-16 mx-wdth512 mt-5" style={{ maxWidth: 461, color: '#A1A1A1' }}>
                    We aim to reform the reading habits of children and increase their interest in books. 
                    As technology takes the newest forms, we wish to leverage technology to inculcate a true love for reading among our children. 
                    Inspirable's mission is to nurture the imagination of children and improve their social, emotional, and personal well-being. 
                    We also aim to bring parents and guardians on the same page with their children to actively engage in fun and learning activities 
                    in order to better develop interest and connection with literature. This will not only help in broadening a child's vocabulary but 
                    also help them think outside the box. 
                    </p>
                </div>
            </div>

        </div>


  
    <div>
    <div class="container-fluid ">

<div class="container pt-5 pb-5">
<div class="reading-heading">
                            <h1 className="roboto-main-head-323hsd text-center">
                            Our
                                <span> Vision </span>
                

                </h1>
                            
                        </div>
                   
    <div class="row">

        <div class="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">


            <p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
            We envision to give direction to children towards the path of bettering themselves and society by reforming their reading interests. 
            We wish to make reading fun and not a struggle in terms of encouraging your children to read. We believe stories don't have to be the 
            same old narratives. That is why we strive to bring the excitement back to reading so that your child will be begging to dive into a story 
            and feed their wildest dreams. 
      </p>

        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 mission mt-5">
            <img src="/images/images/OurVision1.jpeg" alt="header section image" style={{ width: '90%' }} class="img-fluid border-rad-10" />


        </div>
    </div>

    <div class="row lo90-u88gvtd67890gg">

        <div class="col-lg-6 col-md-6 col-sm-12 mission mt-5">
            <img src="/images/images/OurVision2.jpeg" alt="header section image" class="img-fluid border-rad-10" style={{ width: '90%' }} />



        </div>

        <div class="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">


            <p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
                We want to breathe new life into children's education by delivering well-conceptualised stories that are memorable, 
                educational and fun to read. For children who struggle to remain attentive or for those who love finding new joys of reading and learning, 
                Inspirable is the perfect tool. After thorough research and consideration, we have focused our efforts on adding real value to stories that 
                serve to aid in a child's balanced growth and development. By having the main character in each story personalised in some way, is the first 
                step in the transformation of the reading experience for children. That said, we want the reader (your child) to become part of the story so 
                that they can better comprehend the messaging and commit it to memory. 
            </p>
        </div>
    </div>

    <div class="row">

        <div class="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">


            <p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
                Inspirable is an innovative company, driven by our passion to help children see themselves in the stories they read. 
                We believe in harnessing the power of technology to encourage open-minded learning and effective reading. For children 
                ages 2-12, we offer books designed for interactive reading and enjoyment.
            </p>

        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 mission mt-5">
            <img src="/images/images/OurVision3.jpeg" alt="header section image" style={{ width: '90%' }} class="img-fluid border-rad-10" />


        </div>
    </div>

</div>

</div>

    </div>
    <section class="reading-section">
           
           <div class='asdfhas9u02-24y9wad-wrapper-1239as'>
      <div class='firstDiv-24129412732186ys-1239as'>
      <Lottie options={defaultOptions} >
           
   
           </Lottie>
      </div>
      <div class='secondDiv-24129412732186ys-1239as'>
      <div class="container-fluid Cards">
                <div class="container">
                    <div class="row">
                        <div class="reading-heading">
                            
                <div className="dsp-flex-23 sfhu3wr-s34">
                <h1 className="roboto-main--342h4head-323hsd text-center">
                                <span>Helping Parents </span>
                                Through the Milestones
                </h1>
                   <div className="asdjwei4930234-sadfds34"></div>

               </div>
                            <p class="pt-4 mt-3 asdfji324-p pb-2 text-center">
                                We are focused on helping children.                   </p>
                        </div>
                    </div>

                    <div class="row ">

                        <div class="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                                     <img src="/images/images/asd34.png" alt="header section image" class="img-fluid " style={{ width: '70%',borderRadius:15 }} />

                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-  mx-auto asdfjoew23-2342">


                            <h1 className="roboto-main-head-cst-asdasd ">


                                <span> Early Years</span>
                            </h1>
                            <p class=" asdfji324-p ">
                                2-4 years old             </p>
                            <div className="asdjwei4930234-sadfds34"></div>

                            <p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
                                In those early years, it could be getting a toddler into a sleep routine, helping them recognise their name, or learning letters and sounds together.</p>

                        </div>
                    </div>
                    <div class="row mt-asndsfa33 lo90-u88gvtd67890gg">
                        <div class="col-lg-6 col-md-6 col-sm-12 mission asdfjoew23-2342">
                            <div>


                                <h1 className="roboto-main-head-cst-asdasd ">


                                    <span>First Chapter eBooks</span>
                                </h1>
                                <p class=" asdfji324-p ">
                                5-8 years old          </p>
                                <div className="asdjwei4930234-sadfds34"></div>

                                <p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
                                As children start school, the world around them opens up. Stories about friendship, adventure, courage, and kindness help children develop important social skills and grow their imagination.</p>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 mission asdfjoew23-2342">
                      
                                     <img style={{ width: '70%',borderRadius:15 }} src="/images/images/centercsfd.png" alt="header section image jksdfijwe902-asidjs" class="img-fluid "  />

                        </div>


                    </div>

                    <div class="row mt-asndsfa33">

                        <div class="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                        <img src="/images/images/dsfsa344.png" alt="header section image" class="img-fluid " style={{ width: '70%',borderRadius:15 }} />

                           

                        </div>

                        <div class="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">


                            <h1 className="roboto-main-head-cst-asdasd ">


                                <span>Fully Fledged Readers</span>
                            </h1>
                            <p class=" asdfji324-p ">
                            9-12 years old            </p>
                            <div className="asdjwei4930234-sadfds34"></div>

                            <p class="pt-2 roboto-reg-16 mx-wdth512" style={{ maxWidth: 461, color: '#A1A1A1' }}>
                            Children become more independent in their personality and reading habits. Stories help them explore their enormous potential, instill self-belief and build confidence in reading.</p>

                        </div>
                    </div>


                </div>
            </div>
             
              
              
      </div>
   </div>
              
              
              
              
         
         
              
               </section>
         
       
      {/* <div className="container" style={{marginTop:'7%'}}>

      <h1 className="roboto-main-head  text-center">
      Our
                                <span>Why </span>
                                
                </h1>
      <div className="row" style={{marginTop:'10%'}}>
      <div className="col-md-6">
                            <div className="sakdjhiae23-sdaf9sad">

                            </div>

              </div>
              <div className="col-md-6">
            
                  <p className="font-16-open-sans">
                  We are fighting to expand the imaginations of our future generations. In the past, mystery and imagination flooded the mind of our youth’s in the form of other-worldly books that took them to far-away places. These stories are the reason we have made such progress in our world today. But what’s going to come from the generations raised on repetitive storybooks and droning technology? 
                  
                  </p>
               
                  <p className="font-16-open-sans">
               We are on a mission to expand our children’s horizons by combining technology with well-researched, imaginative, exciting stories that push the bounds of our world to further their development past the confines of what is already created. But more than their imagination, we’ll be developing their personal, social, and emotional states without them realising they’re even learning!                
                  </p>
               
                  <p className="font-16-open-sans">
                  We also want to encourage cultural backgrounds by allow children to choose a main character that closely represents them, we do this by personalising the eBooks.</p>
               
                  <p className="font-16-open-sans">
                  Rather than wrestle with the wonders of technology, we’re enlisting it to make reading exciting again! It doesn’t have to be a struggle to force your children to read, and bedtime stories don’t have to be the same narrative over and over. We’re bringing the excitement back to reading so that your child will be begging to dive into a story and feed their wildest dreams.</p>
               
              </div>
              
          </div>
      </div> */}
       {/* <div className="container mt-5">
       <ul className="asdaslk34-safw3">
                <li className="ansdsk4-sad" ><p className="font-18-raleway-bold">Children spend more time on their screens than they do reading. </p>
                </li>
                <li className="ansdsk4-sad" ><p className="font-18-raleway-bold">One in five children in England cannot read well by the age of 11.
 </p>
                </li>
                <li className="ansdsk4-sad" ><p className="font-18-raleway-bold">Similar percentages of 15-year-olds across the UK do not have a minimum level of literacy proficiency: 18% in England and Scotland, 15% in Northern Ireland and 21% in Wales.</p>
                </li>
                <li className="ansdsk4-sad" ><p className="font-18-raleway-bold">Students are less able to learn other curricula if they do not develop sufficient reading skills by the middle of primary school.  </p>
                </li>
                <li className="ansdsk4-sad" ><p className="font-18-raleway-bold">Only 35% of 10-year-olds in England report that they like reading ‘very much’. This lags behind countries like Russia (46%), Ireland (46%), New Zealand (44%), and Australia (43%). </p>
                </li>
                </ul>

                <p class="pt-2 roboto-reg-16 " style={{  color: '#A1A1A1',marginLeft:'7%' }}>
                These are sad statistics. Especially when we know that reading is not only important in our day-to-day society, but also in the development of children. It helps develop language skills. It sparks imagination and creativity. It enhances critical and analytical thinking. It expands knowledge. Reading skills help children get ready for their lives as successful grownups. 
                </p>
                <p class="pt-2 roboto-reg-16" style={{  color: '#A1A1A1',marginLeft:'7%' }}>
                Inspirable wants to help turn screen time into good quality reading time for children in the ages 2 to 12. From the app children´s books can be bought individually and as part of a bundle. The original and illustrated books touch on topics that play in children´s lives and have an educational aspect to them. In the book the child is in the lead as the main character through a personal avatar. Parents can monitor their child´s vocabulary development by checking the Parent dashboard.
                </p>
                <p class="pt-2 roboto-reg-16" style={{  color: '#A1A1A1',marginLeft:'7%' }}>
                The crux of why we decided on their venture is that we saw friends of ours who happen to have children who were reading books that they could not relate to or which represents their background. We also saw that there were books that were not inspiring children or channeling them to certain industries for when they grow up. We decided the create this platform so that we can in a way encourage different industries which at times seem remote to the average child. Our thing is, aspiring children with a different kind of perspective of reading stories and that the moment they put their tablet or their parents mobile phone down they are continually stimulated and dependent on their age they can go further to explore a certain industry or career even at a tender age. Not only this but also where their emotional development is going in the right direction through books that speak on family dynamics.
                </p>

       </div> */}
 <div class="container-fluid  mt-3">

<div class="container pt-5 pb-5">
    <div class="reading-heading">
        <h1 className="roboto-main-head-323hsd text-center">
            <span>Our Core Values</span>

    </h1>
        <p class="pt-4 mt-3 core-val-cs-txt">
        As we are dedicated to improving the future of your children - the change-makers of tomorrow - Inspirable has zero-compromise policies when it comes to core values. 
Our focus is to ensure:        </p>
    </div>
    <div class="row">

        <div class="col-md-4 col-sm-12 mission mt-5">
            <img src="/images/images/asd34.png" alt="header section image" class="img-fluid " style={{ width: '90%',borderRadius:15 }} />



        </div>

        <div class="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">
            <div class="reading-heading-123u9c">
                <h1 className="roboto-main-head-asfdkl93-323hsd-101">
                    <span>Transparency 
</span>

                </h1>
                <p class="pt-4 mt-3 asdfji324-p pb-2" style={{ maxWidth: '100%' }}>
                    The original and illustrated books touch on topics that playa part in children's lives and have an educational aspect to them. Parents can monitor their child's vocabulary development by checking the Parent Dashboard.

       </p>
            </div>

        </div>
    </div>

    <div class="row lo90-u88gvtd67890gg">

        <div class="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">

            <div class="reading-heading-123u9c">
                <h1 className="roboto-main-head-asfdkl93-323hsd-101">
                    <span>Bravery 
                    
</span>

                </h1>
                <p class="pt-4 mt-3 asdfji324-p pb-2" style={{ maxWidth: '100%' }}>
                We are brave enough to take risks and formulate strategies that will give our company a strong competitive edge within the industry. We are always ready to take the big plunge when it comes to the learning and development of young readers. We encourage innovative ideas from our staff and suggestions that come from our customers. 
       </p>
            </div>
        </div>

        <div class="col-md-4 mission mt-5">
            <img src="/images/images/centercsfd.png" alt="header section image" style={{ width: '90%',borderRadius:15 }} class="img-fluid " />


        </div>
    </div>

    <div class="row ">

        <div class="col-md-4  mission mt-5">
            <img src="/images/images/dsfsa344.png" alt="header section image" class="img-fluid " style={{ width: '90%',borderRadius:15 }} />



        </div>

        <div class="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">

            <div class="reading-heading-123u9c">
                <h1 className="roboto-main-head-asfdkl93-323hsd-101">
                    <span>Passion

</span>

                </h1>
                <p class="pt-4 mt-3 asdfji324-p pb-2" style={{ maxWidth: '100%' }}>
                All it requires to bring a change is an idea backed with a true passion to turn it into reality. We make sure to ignite this passion and build a strong community around books. We believe new writers deserve appreciation and a proper platform to showcase their talent. Inspirable is here to keep this passion for writing and reading alive through our mobile app. We also want to see parents take as much of an active role in the development of their children whilst using modern technology. 



       </p>
            </div>
        </div>
    </div>

    <div class="row lo90-u88gvtd67890gg">

<div class="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">

    <div class="reading-heading-123u9c">
        <h1 className="roboto-main-head-asfdkl93-323hsd-101">
            <span>Educational 
            
</span>

        </h1>
        <p class="pt-4 mt-3 asdfji324-p pb-2" style={{ maxWidth: '100%' }}>
         
We share content that increases the knowledge of our young readers. Our wide collection of books covers different subjects and encourages learning with purpose. We wish to prepare children for the future with real-world information. </p>
    </div>
</div>

<div class="col-md-4 mission mt-5">
    <img src="/images/images/centercsfd.png" alt="header section image" style={{ width: '90%',borderRadius:15 }} class="img-fluid " />


</div>
</div>

</div>

</div>
        <div className="mt-5">
            <UpdateBox />
        </div>
        <Footer />
    </div>
}