import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { fetchAllUserAPI } from '../service/api.service';
import { useEffect, useState } from 'react';


const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    //empty array => run once
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }


    // lift-up state 
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )

}

export default UserPage;
