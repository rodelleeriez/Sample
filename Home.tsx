import React, { useEffect, useState } from 'react';
import { IEmployee, PageEnum } from './Employee.type';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';

const Home = () => {
    const [employeeList, setEmployeeListState] = useState([] as IEmployee[]);
    const [shownPage, setShownPage] = useState(PageEnum.add); 
    const [dataToEdit, setDataToEdit] = useState<IEmployee | null>(null); 

    useEffect(() => {
        const listInString = window.localStorage.getItem("EmployeeList");
        if (listInString)
            setEmployeeListState(JSON.parse(listInString));
    }, []);

    const setEmployeeList = (list: IEmployee[]) => { 
        setEmployeeListState(list);
        window.localStorage.setItem("EmployeeList", JSON.stringify(list));
    }
    
    const addEmployee = (data: IEmployee) => {
        const updatedList = [...employeeList, data];
        setEmployeeList(updatedList);
        setShownPage(PageEnum.list); 
    };

    const deleteEmployee = (data: IEmployee) => {
        const updatedList = employeeList.filter(employee => employee.id !== data.id);
        setEmployeeList(updatedList);
    };

    const editEmployeeData = (data: IEmployee) => {
        setDataToEdit(data);
        setShownPage(PageEnum.edit);
    };

    const updateData = (data: IEmployee) => {
        const updatedList = employeeList.map(employee => {
            if (employee.id === data.id) {
                return data;
            }
            return employee;
        });
        setEmployeeList(updatedList);
        setShownPage(PageEnum.list); 
    }

    return (
        <>
            

            <section className="section-content">
                {shownPage === PageEnum.add && (
                    <AddEmployee 
                        onBackBtnClickHnd={() => setShownPage(PageEnum.list)} 
                        onSubmitClickHnd={addEmployee} 
                    />
                )}

                {shownPage === PageEnum.list && (
                    <>
                        <input 
                            type="button" 
                            value="Add Employee"
                            onClick={() => setShownPage(PageEnum.add)}
                            className="add-employee-btn"
                        />

                        <EmployeeList 
                            list={employeeList} 
                            onDeleteClickHnd={deleteEmployee} 
                            onEdit={editEmployeeData}
                        />
                    </>
                )}

                {shownPage === PageEnum.edit && dataToEdit && (
                    <EditEmployee 
                        data={dataToEdit} 
                        onBackBtnClickHnd={() => setShownPage(PageEnum.list)}
                        onUpdateClickHnd={updateData}
                    />
                )}
            </section>
        </>
    );
};

export default Home;
