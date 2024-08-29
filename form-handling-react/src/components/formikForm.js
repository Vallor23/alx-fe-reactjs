import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import './RegistrationForm.css';

const validationSchema = Yup.object({
    username:Yup.string()
        .min(4, 'Username must be at least 4 characters long')
        .required('Username is required'),
    email:Yup.string().email('Invalide email address').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required')
});

const FormikForm = () => (
    <Formik
        initialValues ={{username: '',email: '', password: ''}}
        validationSchema = {validationSchema}
        onSubmit = {(values) => {
            console.log(values);
        }}
    >
        <Form>
            <Field type = "text" name="username" className="form-input" placeholder="Type your username..." />
            <ErrorMessage name="username" component="div" className="error-message"/>
            <Field type = "email" name="email" className="form-input" placeholder="Type your email..." />
            <ErrorMessage name="email" component="div" className="error-message"/>
            <Field type = "password" name="password" className="form-input" placeholder="Enter your password..."/>
            <ErrorMessage name="password" component="div" className="error-message"/>
            <button type="submit"  className="submit-btn">Submit</button>
        </Form>
    </Formik>
)

export default FormikForm;