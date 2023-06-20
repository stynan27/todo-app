import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import { useAuth } from "../security/AuthContext";
import { retrieveTodoApi } from "../api/TodoApiService";


export default function TodoComponent() {
    
    // retrieve passed URL param id from react router
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.username;

    useEffect(
        () => retrieveTodo(),
        [id]
    );

    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    function retrieveTodo() {

        retrieveTodoApi(username, id)
        .then(response => {
            setDescription(response.data.description);
            setTargetDate(response.data.targetDate);
        })
        .catch(error => console.log(error));
    }

    function onSubmit(values) {
        console.log(`SUBMITTTT ${values.description} ${values.targetDate}`);
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                {/* Encompasses JSX form content */}
                <Formik 
                    initialValues={ { description, targetDate } }
                    enableReinitialize={true}
                    onSubmit={ onSubmit }
                >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field 
                                    type='text' 
                                    className='form-control'
                                    name="description"
                                >
                                </Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field 
                                    type='date' 
                                    className='form-control'
                                    name="targetDate"
                                >
                                </Field>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5">
                                    Save
                                </button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>           
        </div>
    )
}