import { Space, Table, Tag } from 'antd';


const UserTable = () => {

    const [dataUsers, setDataUsers] = useState([
        { _id: "ghost", fullName: 25, email: "hn" },
        { _id: "vothien", fullName: 25, email: "hcm" }
    ]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }

    ];
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
    }

    loadUser();
    console.log(">>> run render")


    return (
        <Table columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable;