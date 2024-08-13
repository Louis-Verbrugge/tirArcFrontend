
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ResultatCompetition.module.css';


import { Accordion, Placeholder } from 'rsuite';
import 'rsuite/Accordion/styles/index.css';

// for the Data Grid
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { calendarOnlyProps } from 'rsuite/esm/internals/utils/date';



function ResultatCompetition() {

    const colDefs = [
        { field: "id", flex: 1},
        { field: "nom", flex: 1 },
        { field: "prenom", flex: 1 },
        { field: "classement", flex: 1 },
        { field: "score", flex: 1 },
        { field: "lieu", flex: 1 },
        { field: "dateEvent", flex: 1 },
        { field: "categorie", flex: 1 },
    ];


    const props = useParams();
    let annenDebut = parseInt(props.annee);
    let anneeFin = parseInt(props.annee) + 1;
    const [dataResultat, setDataResultat] = useState([]);
    const startDate = `${annenDebut}-07-01`; // septembre;
    const endDate = `${anneeFin}-09-30`;  // aout;
    const [villeDifferentes, setVilleDifferentes] = useState([]);



    useEffect(() => {
        let url = `http://localhost:5000/api/competition?startDate=${startDate}&endDate=${endDate}`;
        fetch(url) // API pour recuperer les resultats des competitions
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    console.log(data[0]);
                    setDataResultat(data);
                } else {
                    setDataResultat([])
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        
        url = `http://localhost:5000/api/competition/villeDinct?startDate=${startDate}&endDate=${endDate}`;
        fetch(url) // API pour recuperer les resultats des competitions
            .then((response) => response.json())
            .then((data) => {
            if (data && data.length > 0) {
                console.log("sdijdsjjjjjjjjjjjjjjjjjjjjjj");
                console.log(data);
                setVilleDifferentes(data);
            } else {
                setVilleDifferentes([])
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        


    }, []);


    function dataResultatCompetition(lieu) {

        let listeSorteCity = dataResultat.filter((item) => item.lieu === lieu);

        for (let i = 0; i < listeSorteCity.length; i++) {
            listeSorteCity[i].id = i + 1;
        }


        if (dataResultat !== undefined) {
            return (
                <div>
                    <div className="ag-theme-quartz" style={{  height: 400, fontSize: 25}} >
                    <AgGridReact
                    rowData={listeSorteCity}
                    columnDefs={colDefs}
                />
                    </div>

                </div>
            );
            
        } 
    }




    function creationAccordion() {


        if (villeDifferentes !== undefined) {

            const listItem = villeDifferentes.map((item, index) =>
                <Accordion.Panel header={item} >
                    {dataResultatCompetition(item)}
                </Accordion.Panel>
            );
            return (
                <Accordion>
                    {listItem}
                </Accordion>
            );     
        }
    }



    return (

        <div className={styles.resultatCompetition}>
            {creationAccordion()}
        </div>

  );
}

export default ResultatCompetition;
