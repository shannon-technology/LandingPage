import {useState} from 'react'
import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
export const Contact = (props) => {
    const [{name, email, message}, setState] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setState((prevState) => ({...prevState, [name]: value}))
    }
    const clearState = () => setState({...initialState})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    clearState()
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='section-title'>
                                <h2>{props.data.title}</h2>
                                <p>{props.data.description}</p>
                            </div>
                            <form name='sentMessage' validate onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                id='name'
                                                name='name'
                                                className='form-control'
                                                placeholder={props.data.inputs.name}
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                className='form-control'
                                                placeholder={props.data.inputs.email}
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                  <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder={props.data.inputs.message}
                      required
                      onChange={handleChange}
                  ></textarea>
                                    <p className='help-block text-danger'></p>
                                </div>
                                <div id='success'></div>
                                <button type='submit' className='btn btn-custom btn-lg'>
                                    {props.data.inputs.button}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-3 col-md-offset-1 contact-info'>
                        <div className='contact-item'>
                            <h3>{props.data.labels.title}</h3>
                            <p>
                <span>
                  <i className='fa fa-map-marker'></i> {props.data.labels.address}
                </span>
                                {props.data.address}
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                <span>
                  <i className='fa fa-phone'></i> {props.data.labels.phone}
                </span>{' '}
                                {props.data.phone}
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                <span>
                  <i className='fa fa-envelope-o'></i> {props.data.labels.email}
                </span>{' '}
                                {props.data.email}
                            </p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a href={props.data ? props.data.facebook : '/'}>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.twitter : '/'}>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.youtube : '/'}>
                                            <i className='fa fa-youtube'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <div className='container text-center'>
                    <p>
                        地址：陕西省西安市咸宁西路28号 邮编：710049
                        版权所有：香侬科技（陕西）有限公司 站点建设与维护： <a href="https://beian.miit.gov.cn/">陕ICP备2022002137号</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
