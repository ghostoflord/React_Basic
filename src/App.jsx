
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './service/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './component/context/auth.context';
import { Spin } from 'antd';


const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, [])

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      //success
      setUser(res.data.user)
    }
    setIsAppLoading(false);
  }

  return (
    <>
      {isAppLoading === true ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
          <Spin />
        </div>
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
