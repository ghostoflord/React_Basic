
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './service/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './component/context/auth.context';


const App = () => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, [])

  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSeconds)
    })
  }

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(3000)
    if (res.data) {
      //success
      setUser(res.data.user)
      console.log(">>> check user data: ", res.data)
    }
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
