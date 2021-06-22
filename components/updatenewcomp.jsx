import React from 'react';
import { Formik, Form } from 'formik';
import {Toast} from 'react-bootstrap'
import * as Yup from 'yup';
import Image from 'next/image'
import { repository } from '../utiles/repository';
import {useDispatch} from 'react-redux';
import {setLoading} from '../redux/actionMethodes/User/index';
import Loading from '../components/LoadingAnimation'
const DisplayingErrorMessagesSchema = Yup.object().shape({
       email: Yup.string()
        .required('Required').email(),
    });
export default () => {
    const [message,setmessage]=React.useState("");
    const [showmessage,setshowmessage]=React.useState(false);
    const [showanimation,setshowanimation]=React.useState(false);
    const dispatch=useDispatch();
    const postCat = async (datapost) => {
        setshowanimation(true)
        const { data, status } = await repository.contacts({ "contact": {
            "email" : datapost.email

        }}).then(x => x).then(x => x)

        console.log(data, status)
        if(status==201)
        {        setshowanimation(true)
                setmessage(data.message);
                setshowmessage(true)
        datapost.email="";

            }
        else
        {
            setmessage(data.message);
            setshowmessage(true)

            setshowanimation(false)
        }
    }
    return<> {showmessage?<Toast style={{
        position: 'fixed',
        top: 10,
        right: 10,
      }}>
    <Toast.Header onClick={()=>setshowmessage(false)}>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Inspirable</strong>
    </Toast.Header>
    <Toast.Body>{message}</Toast.Body>
  </Toast> :<></>}<div className="back-header">
      {showanimation?<Loading/>
:<></>}
        <img src='../images/dots.png' className="dot-img" />

        <div className="container">
            <h1 className="roboto-main-head-1 text-center cst-para-stl-1">
                For more updates and news
            </h1>
            <p className="roboto-reg-14 text-center">
                subscribe now to hear more from us.</p>
                <Formik
                    initialValues={{
                       
                        email: '',
                        
                    }}
                    validationSchema={DisplayingErrorMessagesSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await postCat(values)
                    }}
                >
                    {({ errors, touched, getFieldProps,submitForm }) => {
                        // cstErrors = errors;

                        return (
                            <Form action="#" class="sadasdawe2342 d-flex justify-content-center" style={{alignItems:'center'}}>
                <input {...getFieldProps("email")} class="input-set-32312sf-asdahs"  placeholder="Email address" />

                <button  class="btn bg-dark text-white">Subscribe</button>
            </Form>
                        )

                    }}
                </Formik>

           
        </div>
    <div className="fasdfh3-32423df">
    <img src='../images/dots.png' style={{width:'15%'}} />

    </div>
    </div>
    </>
}