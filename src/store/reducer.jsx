let reducer = (state, action) => {
    switch (action.type) {
      case "SETALLPR":
        console.log(action.payload)
        //sorting it on the basis of Project_srno
        let normal = [...action.payload]
        normal = normal.sort((a, b) => a.Project_sno - b.Project_sno)
        let allwebsites = normal.filter((project)=>{
          return project.Project_type === 'website'
        })
        let allapps = normal.filter((project)=>{
          return project.Project_type === 'app'
        })
        console.log(normal)
        return { ...state, allworks: normal, allwebsites:allwebsites, allapps:allapps };
  
      default:
        return state;
    }
  };
  
  export { reducer };
  