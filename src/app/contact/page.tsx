'use client'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useEffect } from 'react'

const ContactForm = () => {

    //validation schema
    const formValidationSchema = yup.object({
        name: yup.string().required().min(10),
        email: yup.string().email('write a valid email address').required('Acha ujinga, andika baruapepe'),
        phone: yup.string().max(13),
        message: yup.string().required('vip, hauna kibod? Mbona sasa huandiki ujumbe?')
    })
    const formHandler = (values: any) => {
        console.log("🚀 ~ formHandler ~ values:", values)

    }
    useEffect(()=>{
        
    },[])
    return (<main className="min-h-screen p-4 bg-white">
        <div className="w-full font-mono text-sm bg-white text-center">
            <div className="w-full flex justify-start items-start mt-8">
                <div className="w-11/12 mx-auto">
                    <h1 className="text-2xl uppercase font-bold text-gray-700 px-4">Contact Us</h1>
                    <p className="text-mutedText p-4">If you need to reach out to us, please fill the form below</p>
                    <Formik validationSchema={formValidationSchema} initialValues={{ name: "", email: "", message: "", phone: "" }} onSubmit={formHandler}>
                        {({handleSubmit, handleChange, values, errors, touched}) => (
                            <div className="w-full md:w-6/12 mx-auto mt-6 p-4">
                                <form className="border text-gray-700 p-4 space-y-4" onSubmit={handleSubmit} method='POST'>
                                    <div className="m-1 py-2 text-start">
                                        <p>Name</p>
                                        <input type="text" value={values.name} onChange={handleChange} placeholder="Enter your name" name="name" id="name" className="form-input" />
                                        {errors.name ? <p className='form-errors'>{errors.name}</p> : null}
                                    </div>
                                    <div className="m-1 py-2 text-start">
                                        <p>Phone</p>
                                        <input type="text" value={values.phone} onChange={handleChange} placeholder="Enter your phone number" name="phone" id="phone" className="form-input" />
                                        {errors.phone ? <p className='form-errors'>{errors.phone}</p> : null}
                                    </div>
                                    <div className="m-1 py-2 text-start">
                                        <p>E-mail Address</p>
                                        <input type="email" value={values.email} onChange={handleChange} placeholder="Enter your email address" name="email" id="email" className="form-input" />
                                        {errors.email ? <p className='form-errors'>{errors.email}</p> : null}
                                    </div>
                                    <div className="m-1 py-2 text-start">
                                        <p>Message</p>
                                        <textarea value={values.message} onChange={handleChange} name="message" id="message" className="form-input"></textarea>
                                        {errors.message ? <p className='form-errors'>{errors.message}</p> : null}
                                    </div>
                                    <div className="m-1 py-2 text-start">

                                        <button type="submit" name="submit" id="submit" className="w-full md:w-4/12 bg-primary rounded-md px-3 py-2 hover:bg-accent hover:text-white">SUBMIT</button>

                                    </div>
                                </form>
                            </div>)
                        }
                    </Formik>
                </div>


            </div>
        </div>
    </main>)
}
export default ContactForm;