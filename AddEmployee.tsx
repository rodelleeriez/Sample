import "./EmployeeForm.style.css"
import React, { useState } from 'react';
import { IEmployee } from './Employee.type';

type Props = {
    onBackBtnClickHnd: () => void;
    onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = ({ onBackBtnClickHnd, onSubmitClickHnd }: Props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onFirstNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const onLastNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const onEmailChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onSubmitBtnClickHnd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        onSubmitClickHnd(data);

        setFirstName("");
        setLastName("");
        setEmail("");
    };

    return (
        <div className="add-employee-page">
        <div className="form-container">
            <div>
                <h3 className="addtxt">CRUD OPERATIONS</h3>
                <h3 className="addtxt1">Add Employee</h3>
                <h3 className="addtxt2">Enter your credentials to be an Employee</h3>
                
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="text" value={email} onChange={onEmailChangeHnd} />
                </div>
                <div>
                    <input type="submit" value="Add Employee" />
                    <input type="button" value="View Employee" onClick={onBackBtnClickHnd} />
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddEmployee;
