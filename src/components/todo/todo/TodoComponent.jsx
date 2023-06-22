import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment";

import { useAuth } from "../security/AuthContext";
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "../api/TodoApiService";


export default function TodoComponent() {
    
    // retrieve passed URL param id from react router
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.username;

    const navigate = useNavigate();

    useEffect(
        () => retrieveTodo(),
        [id]
    );

    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    function retrieveTodo() {

        if (id !== -1) {
            retrieveTodoApi(username, id)
            .then(response => {
                setDescription(response.data.description);
                setTargetDate(response.data.targetDate);
            })
            .catch(error => console.log(error));
        }
    }

    function onSubmit(values) {
        console.log(`Submit form ${id} ${values.description} ${values.targetDate}`);
        const todo = {
            id: id,
            username: username, 
            description: values.description,
            targetDate: values.targetDate,
            done: false
        };

        console.log(id);

        if (Number(id) === -1) {
            console.log('CREATTE');
            createTodoApi(username, todo)
            .then(response => {
                console.log(response);
            
                // on success, return to /todos
                navigate(`/todos`);
            })
            .catch(error => console.log(error));
        } else {
            updateTodoApi(username, id, todo)
            .then(response => {
                console.log(response);
            
                // on success, return to /todos
                navigate(`/todos`);
            })
            .catch(error => console.log(error));
        }
    }

    function validate(values) {
        let errors = {
            // description: "Enter a valid description.",
            // targetDate: "Enter a valid targetDate."
        };
    
        if (values.description.length < 5) {
            errors.description = "Enter at least 5 characters.";
        }

        if (values.targetDate === null || values.targetDate === '' || moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a targetDate";
        }

        return errors;
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
                    validate={ validate }
                    validateOnChange = { false }
                    validateOnBlur = { false }
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />

                            <ErrorMessage 
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />

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