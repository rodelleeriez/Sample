import React, { useState, useEffect } from "react";
import { IEmployee } from "./Employee.type";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (updatedData: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  useEffect(() => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
  }, [data]);

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const onFirstNameChangeHnd = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container ">
      <div>
        <h3>UPDATE EMPLOYEE FORM</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={onLastNameChangeHnd}
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
