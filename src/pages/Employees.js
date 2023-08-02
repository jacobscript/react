import '../index.css'
import Employee from '../components/Employee'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddEmployee from '../components/AddEmployee'
import EditEmployee from '../components/EditEmployee'
import Header from '../components/Header'

function Employees() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'Jackie',
            role: 'Developer',
            img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
        },
        {
            id: 2,
            name: 'Saul',
            role: 'Manager',
            img: 'https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg',
        },
        {
            id: 3,
            name: 'John',
            role: 'Director',
            img: 'https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg',
        },
        {
            id: 4,
            name: 'Melanie',
            role: 'Software Engineer',
            img: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
        },
        {
            id: 5,
            name: 'Jake',
            role: 'Senior Intern',
            img: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg',
        },
        {
            id: 6,
            name: 'Mira',
            role: 'Designer',
            img: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg',
        },
    ])

    function updateEmployee(id, newName, newRole) {
        const updatedEmployees = employees.map((employee) => {
            if (id == employee.id) {
                return { ...employee, name: newName, role: newRole }
            }

            return employee
        })
        setEmployees(updatedEmployees)
    }

    function newEmployee(name, role, img) {
        const newEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img,
        }
        setEmployees([...employees, newEmployee])
    }

    const showEmployees = true
    return (
        <div className='App bg-gray-300 min-h-screen'>
            {showEmployees ? (
                <>

                    <div className='flex flex-wrap justify-center'>
                        {employees.map((employee) => {
                            const editEmployee = (
                                <EditEmployee
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    updateEmployee={updateEmployee}
                                />
                            )
                            return (
                                <Employee
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    key={employee.id}
                                    id={employee.id}
                                    editEmployee={editEmployee}
                                />
                            )
                        })}
                    </div>

                    <AddEmployee newEmployee={newEmployee} />
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    )
}

export default Employees
