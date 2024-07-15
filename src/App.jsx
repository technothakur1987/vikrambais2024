import React,{useState, useContext, useEffect} from "react";
import { AppContext } from './store/store'
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fireDb } from "./firebase/Firebase";

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Particle from "./component/Particle";
import './App.css';
import Hero from "./component/Hero";
import logo from './assets/V.png'
import AboutUs from "./component/AboutUs";
import LatestWorks from "./component/LatestWorks";
import MyClients from "./component/MyClients";
import  Connect  from "./component/Connect";
import Footer from "./component/Footer";
import Home from "./admin/Home";
import AddProjects from "./admin/AddProjects";
import UpdateProject from "./admin/UpdateProject";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  const { dispatch, allworks} = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const q = query(collection(fireDb, "projects"));
        onSnapshot(q, (querySnapshot) => {
          let projectsArray = [];
          querySnapshot.forEach((doc) => {
            projectsArray.push({ ...doc.data(), id: doc.id });
          });
          dispatch({ type: "SETALLPR", payload: projectsArray });
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getProjects();
  }, [dispatch]);
 
  
  const [showAboutUs, SetShowAboutUs] = useState(false)
  return (

    <BrowserRouter>
    <Routes>
    
      <Route path='/technothakur' element={<Home/>}/>
      <Route path='/add' element={<AddProjects/>}/>
      <Route path='/update/:sno' element={<UpdateProject/>}/>
     
      
    </Routes>
    <>
      
      <Hero showAboutUs={showAboutUs} SetShowAboutUs={SetShowAboutUs}/>
      {
        showAboutUs ? <AboutUs SetShowAboutUs={SetShowAboutUs}/> : null
    }
       <LatestWorks loading={loading}/> 
       <MyClients/>
 
       <Connect/>
       <Footer/>
       <ToastContainer />
     
      
    
 
     
      </>


    
    </BrowserRouter>
    
  );
}

export default App;
