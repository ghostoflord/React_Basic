import BookTable from "../component/book/book.table";
import { fetchAllBookAPI } from '../service/api.service';
import { useEffect, useState } from 'react';
const BookPage = () => {
    const [dataBooks, setDataBooks] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    //empty array => run once
    useEffect(() => {
        loadBook();
    }, [current, pageSize]); //[] + condition
    const loadBook = async () => {
        const res = await fetchAllBookAPI(current, pageSize);
        if (res.data) {
            setDataBooks(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }

    }
    return (
        <BookTable loadBook={loadBook} />
    )
}

export default BookPage;
