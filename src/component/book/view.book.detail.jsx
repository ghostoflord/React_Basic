import { Drawer } from "antd";

const ViewBookDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen,
        loadUser
    } = props;
    return (
        <Drawer
            width={"40vw"}
            title="Chi tiết User"
            onClose={() => {
                setDataDetail(null);
                setIsDetailOpen(false);
            }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>Id: {dataDetail._id}</p>
                <br />
                <p>Tiêu Đề: {dataDetail.mainText}</p>
                <br />
                <p>Giá Tiền: {dataDetail.price}</p>
                <br />
                <p>Số Lượng: {dataDetail.quantity}</p>
                <br />
                <p>Tác giả: {dataDetail.author}</p>
                <br />
                <p>Bìa Sách:</p>
                <div style={{
                    marginTop: "10px",
                    height: "100px", width: "150px",
                    border: "1px solid #ccc"
                }}>
                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${dataDetail.thumbnail}`} />
                </div>
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    );

}
export default ViewBookDetail;