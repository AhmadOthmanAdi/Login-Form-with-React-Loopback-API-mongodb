import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';


const fields = [
    { name: 'email', elementName: 'input', type: 'email', placeholder: 'your Email' },
    { name: 'password', elementName: 'input', type: 'password', placeholder: 'your Password' }
]

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <form onSubmit={this.props.handleSubmit}>
                                <h1>Login</h1>
                                {fields.map((f, i) => {
                                    return (
                                        <div className="col-md-12">
                                            <Field key={i} {...f}
                                                value={this.props.values[f.name]}
                                                name={f.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[f.name])}
                                                errors={this.props.errors[f.name]} />
                                        </div>
                                    )
                                })}
                                <div className="col-md-12"></div>
                                <button className="btn btn-primary" >Login</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is Invalid').required('you need to Login with Email address'),
        password: Yup.string().required('you need to enter a password')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log("Login Attempt", values);
    }
})(Login);