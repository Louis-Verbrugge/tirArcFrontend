
import styles from './Projects.module.scss';
import { useEffect, useRef } from "react";

import startPage from "../../_helpers/annimation/startPage";

function Projects({ setRefPage, refPage}) {
  
  const pageProjects = useRef(null);

  const projects = [
    {
      title: 'project 1',
      description: 'bla bla bla bla bla bla bla bla bla',
      livePreview: 'https://amazzon.com',
      viewCode: 'https://google.com',
      category: 'C'
    },
    {
      title: 'project 1',
      description: 'bla bla bla bla bla bla bla bla bla',
      livePreview: 'https://amazzon.com',
      viewCode: 'https://google.com',
      category: 'C'
    },    {
      title: 'project 1',
      description: 'bla bla bla bla bla bla bla bla bla',
      livePreview: 'https://amazzon.com',
      viewCode: 'https://google.com',
      category: 'C'
    },    {
      title: 'project 1',
      description: 'bla bla bla bla bla bla bla bla bla',
      livePreview: 'https://amazzon.com',
      viewCode: 'https://google.com',
      category: 'C'
    },
    {
      title: 'project 2',
      description: 'bla bla bla bla bla bla bla bla bla',
      livePreview: 'https://amazzon.com',
      viewCode: 'https://google.com',
      category: 'Cpp'
    },
    {
      title: 'project 1',
      description: 'bla bla bla bla bla bla bla bla bla',
      livePreview: 'https://amazzon.com',
      viewCode: 'https://google.com',
      category: 'C'
    },
    {
      title: 'project 3',
      description: 'bla bla bla bla bla bla bla bla bla',
      livePreview: 'https://amazzon.com',
      viewCode: 'https://google.com',
      category: 'Cpp'
    }
  ]

  

  let category = [];
  projects.forEach((item) => {
    if (!category.includes(item.category)) {
      category.push(item.category);
    }
  });

  console.log(category)
  console.log("category")
  console.log(category)

  useEffect(() => {
    if (pageProjects.current) {
      startPage(pageProjects);
      setRefPage(pageProjects);

    }
  }, [pageProjects, refPage]);




  function displayProject(category) {
    return projects.map((item, index) => {
      if (item.category == category) {
        return (
          <div className={styles.cardProject}>
            <img src="https://media.istockphoto.com/id/1411682102/fr/photo/arri%C3%A8re-plan-color%C3%A9-abstrait-3d-convient-pour-les-couvertures-de-magazines-les-banni%C3%A8res-et.jpg?s=612x612&w=0&k=20&c=yeI3STtZvf_8PNBqteKEt9aLUfbbP18S_kljPVssCtI=" alt="" />
            
            
            <div className={styles.cardMain}>
              <h2 className={styles.cardTitle}>{item.title}</h2>

              <h2 className={styles.cardDescription}>{item.description}</h2>

              <h3 className={styles.cardTechno}>techno utilisé: {item.category}</h3>

              <div className={styles.cardPreview}>
                {item.livePreview ? <a href={item.livePreview}>Live Preview</a>: null}
                {item.viewCode ? <a href={item.viewCode}>View Code</a>: null}
              </div>
            </div>
        </div>
        )
      };
    })
  }


  return (
    <div ref={pageProjects} className={styles.pageProjects} >
      <h1>PAGE projects</h1>


      <div className={styles.blockProject}>
      {
        category.map((category, indexCatefory) => {
          return (
              
              displayProject(category)
            
          )
        })
      }
      </div>

      

    </div>
  )
}

export default Projects;