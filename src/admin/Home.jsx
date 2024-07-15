import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fireDb } from "../firebase/Firebase";
import { AppContext } from "../store/store";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { dispatch, allworks } = useContext(AppContext);
  console.log(allworks);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // * Delete handle Function
  const deleteProject = async (id) => {
    console.log(typeof id)
    try {
        await deleteDoc(doc(fireDb, "projects", id));
        toast.success("Project Deleted Successfully !")
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center   ">
        <h2 className='  md:border-l-2 md:border-b-2 md:border-r-2 md:border-[#1788ae] rounded-b-lg text-4xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold py-0 pt-4 md:pt-0 md:py-2 px-4 mb-0 cursor-crosshair md:hover:scale-95 duration-500 ease-in-out'>
          Admin Panel
        </h2>
      </div>

      <div className=" px-5 py-5 ">
        <div className="flex justify-center items-center  bg-black    rounded-t-lg">
          <h2 className='   text-3xl text-[#1788ae] font-family-["Nunito", sans-serif ] font-bold py-0 pt-4 md:pt-0 md:py-2 px-4 mb-0 cursor-crosshair md:hover:scale-95 duration-500 ease-in-out'>
            My Projects
          </h2>

          <Link
            to="/add"
            className="relative text-white bg-[#1788ae] px-2 rounded py-1 hover:scale-95  duration-500 ease-in-out font-bold left-[10%] md:left-[40%]"
          >
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>

        <div className="overflow-x-scroll md:overflow-x-hidden">


        {loading ? (
          <h1 className="font-bold text-[#1788ae] text-center py-5">
            Loading...
          </h1>
        ) : (
          <table className='table-auto font-family-["Nunito", sans-serif ] bg-black '>
            <thead>
              <tr className=" font-bold text-[#1788ae] capitalize  ">
                <th className=" p-1">#</th>
                <th className=" p-1">image</th>
                <th className=" p-1">name</th>
                <th className=" p-1">category</th>
                <th className=" p-1">type</th>

                <th className=" p-1 ">content</th>
                <th className=" p-1">tags</th>
                <th className=" p-1">Link</th>
                <th className=" p-1">Action</th>
                <th className=" p-1">Action</th>
              </tr>
            </thead>

            <tbody>
              {allworks.map((project) => {
                console.log(typeof project.Project_Link)
                return (
                  <tr
                    className="text-white text-center border-t hover:bg-[#111] cursor-crosshair"
                    key={project.Project_sno}
                  >
                    <td className=" p-1 text-#1788ae font-black">
                      {project.Project_sno}
                    </td>
                    <td className="p-1 w-[fit-content] ">

                      
                      <img
                        src={project.Project_img}
                        loading="lazy"
                        className={`border-2 rounded-lg border-black mx-auto hover:scale-150 cursor-pointer duration-300 ease-out ${
                          project.Project_type === "app"
                            ? "h-[20vh] md:h-[35vh] w-[10vw] my-5"
                            : "h-[10vh] md:h-[20vh] w-[150vw] md:w-[150vw]"
                        }`}
                        alt={project.Project_name}
                      />
                    </td>

                    <td className=" p-1 ">{project.Project_name}</td>
                    <td className=" p-1">{project.Project_cat}</td>
                    <td className=" p-1">{project.Project_type}</td>
                    <td className=" p-1">{project.Project_Content}</td>
                    <td className=" p-1">{project.Project_tag}</td>
                    <td className=" p-1">{project.Project_Link}</td>
                    <td className=" p-1">
                      <Link
                        className="bg-red-600 p-2 rounded hover:bg-red-500 md:hover:p-3 duration-500 ease-in-out"
                        type="button" onClick={()=>{
                          deleteProject(project.id)
                        }}
                      >
                        <i className="fa-solid fa-trash "></i>
                      </Link>
                    </td>
                    <td className=" p-1">
                      <Link
                        to={`/update/${Number(project.Project_sno)}`}
                        type="button"
                        className="bg-green-600  p-2 rounded hover:bg-green-500 md:hover:p-3 duration-500 ease-in-out"
                      >
                        <i className="fa-solid fa-pen-to-square "></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        </div>

       
      </div>
    </div>
  );
};

export default Home;
