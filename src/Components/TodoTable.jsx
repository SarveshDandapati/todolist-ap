import axios from "axios"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"
// import Loading from "./Loading"
import { useNavigate } from "react-router-dom"
const API = 'https://stingray-app-axdpn.ondigitalocean.app/api/todo/find/user'

const TodoTable = () => {
    const navigate = useNavigate()
    const [myTodos, setTodos] = useState(null)
    const todoCondition = myTodos != null && myTodos.length > 0

    const cookies = new Cookies()
    const user_id = cookies.get('user_id')
    useEffect(() => {

        fetchAllTodos()
    },[]);

    const fetchAllTodos = async () => {
        try {
            await axios.post(API, { user_id })
                .then(res => {
                    console.log(res)
                    setTodos(res.data)
                })
        }
        catch (e) {
            console.log(e)
        }z
    }

    return (
        <div className="hero min-h-screen bg-green-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="overflow-x-auto">
                    
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Todo Title </th>
                                <th>Todo Description </th>
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoCondition ? myTodos.map((item, index) => (

                                <tr key={index}>
                                    <th>{item.todo_title}</th>
                                    <td>{item.todo_description}</td>
                                    <td> Edit or Delete </td>
                                </tr>


                            )) : console.log('No todos')}


                        </tbody>
                    </table>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={() => navigate('/newtodo')}>New TODO</button>
                </div>
            </div>
        </div>

    )
}

export default TodoTable


