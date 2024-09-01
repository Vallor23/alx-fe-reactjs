import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import './RegistrationForm.css';

const validationSchema = Yup.object({
    username:Yup.string().required('Username is required').min(4, 'Username must be at least 4 characters long'),
    email:Yup.string().required('Email is required').email('Invalide email address'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
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