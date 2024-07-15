import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../store/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addDoc,
  collection,
  getDoc,
  Timestamp,
  setDoc,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { fireDb } from "../firebase/Firebase.jsx";

const UpdateProjects = () => {
  let navigate = useNavigate();
  let { sno } = useParams();
  console.log(typeof sno);
  const { dispatch, allworks } = useContext(AppContext);
  const [project, setProject] = useState({
    Project_sno: "",
    Project_name: "",
    Project_cat: "",
    Project_img: "",
    Project_Link: "",
    Project_tag: "",
    Project_type: "website",
    Project_Content: "",
    Project_Color: "#1788ae",
  });
  useEffect(() => {
    if (allworks) {
      console.log(allworks);
      let filteredProject = allworks.filter((pr) => {
        return pr.Project_sno === sno;
      });
      console.log(filteredProject);
      setProject(filteredProject[0]);
    }
  }, [sno]);

  useEffect(() => {
    console.log(project);
  }, [project]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    console.log(e.target.id);
    setProject({ ...project, [e.target.id]: e.target.value });
  };

  // const editProject = async () => {
  //   try {
  //     await updateDoc(doc(fireDb, "projects", sno), project);
  //     alert("Product updated successfully");
  //     navigate('/technothakur')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const editProject = async () => {
    try {
      const q = query(
        collection(fireDb, "projects"),
        where("Project_sno", "==", sno)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, project);
        toast.success(" Project Updated!")
        navigate("/technothakur");
      } else {
        console.error(`Document with Project_sno ${sno} does not exist`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {
    console.log(project);
    if (
      project.Project_name === "" ||
      project.Project_cat === "" ||
      project.Project_img === "" ||
      project.Project_Link === "" ||
      project.Project_tag === "" ||
      project.Project_Content === "" ||
      project.Project_Color === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      editProject();
    }
  };
  return (
    <div className='md:h-screen flex justify-center items-center font-family-["Nunito", sans-serif ] '>
      <div className="bg-black text-white max-w-[90vw] md:max-w-[50vw] rounded p-5 my-20">
        <div className="mb-5">
          <Link
            to="/technothakur"
            className="border  rounded-full px-1 hover:text-[#1788ae] hover:border-[#1788ae] cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left "></i>
          </Link>
          <span className="ml-5 text-2xl text-[#1788ae] font-bold">
            Update Project
          </span>
        </div>
        <div>
          <form
            className="text-[#585858]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex  flex-col md:flex-row gap-5  mb-5 md:mb-3">
              <div className="basis-full md:basis-1/2 ">
                <label htmlFor="Project_name"></label>
                <input
                  type="text"
                  name="Project_name"
                  id="Project_name"
                  className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none w-full"
                  placeholder=" Project Name"
                  value={project.Project_name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="off"
                  required
                />
              </div>
              <div className=" basis-full  md:basis-1/2">
                <label htmlFor="Project_cat"></label>
                <input
                  type="text"
                  name="Project_cat"
                  id="Project_cat"
                  className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none w-full"
                  placeholder=" Project Category"
                  value={project.Project_cat}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5  mb-5 md:mb-3">
              <div className="basis-full md:basis-1/2 ">
                <label htmlFor="Project_img"></label>
                <input
                  type="text"
                  name="Project_img"
                  id="Project_img"
                  className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none w-full"
                  placeholder=" Project Image Link"
                  value={project.Project_img}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="basis-full md:basis-1/2 ">
                <label htmlFor="Project_Link"></label>
                <input
                  type="text"
                  name="Project_Link"
                  id="Project_Link"
                  className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none w-full"
                  placeholder=" Project Link"
                  value={project.Project_Link}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  gap-5  mb-5 md:mb-3">
              <div className="basis-full md:basis-1/2 ">
                <label htmlFor="Project_tag"></label>
                <input
                  type="text"
                  name="Project_tag"
                  id="Project_tag"
                  className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none w-full"
                  placeholder=" Project Tags"
                  value={project.Project_tag}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="basis-full md:basis-1/2">
                <label htmlFor="Project_type"></label>
                <select
                  name="Project_type"
                  id="Project_type"
                  className="w-[100%] rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none"
                  value={project.Project_type}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="selected">Select Website Type</option>
                  <option value="website">Website</option>
                  <option value="app">App</option>
                </select>
              </div>
            </div>

            <div className="flex gap-5  mb-5 md:mb-3">
              <div className="basis-1/2 ">
                <input
                  type="color"
                  className="rounded px-1 cursor-pointer"
                  name="Project_Color"
                  id="Project_Color"
                  value={project.Project_Color}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span
                  htmlFor="Project_Color "
                  className="ms-5 hover:text-[#1788ae] hidden md:inline-block"
                >
                  Theme Color
                </span>
              </div>
              <div className="basis-1/2">
                <label htmlFor="Project_sno"></label>
                <input
                  type="number"
                  name="Project_sno"
                  id="Project_sno"
                  className="rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none"
                  placeholder=" Project SNo"
                  value={project.Project_sno}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="mb-5 md:mb-3">
              <textarea
                type="text"
                name="Project_Content"
                id="Project_Content"
                className="w-[100%]  rounded border border-1 border-[rgb(88,88,88,0.2)] focus:ring-2 focus:ring-[#1788ae] focus:outline-none focus:shadow-none"
                rows="5"
                value={project.Project_Content}
                onChange={(e) => {
                  handleChange(e);
                }}
                autoComplete="off"
                required
                placeholder=" Project Content"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" w-[100%] rounded py-2 bg-[#1788ae] text-white font-extrabold hover:scale-95 duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              Update Project
            </button>
          </form>
        </div>
        ;
      </div>
    </div>
  );
};

export default UpdateProjects;
