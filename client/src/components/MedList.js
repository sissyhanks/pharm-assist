import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Medtable from "./Medtable";


export default function MedList() {

    const [ title, setTitle ] = useState('');
    const [ morning, setMorning ] = useState(false);
    const [ afternoon, setAfternoon ] = useState(false);
    const [ evening, setEvening ] = useState(false);
    const [ night, setNight ] = useState(false);
    const [ as_needed, setAsNeeded] = useState(false);

    const handlenewMedSubmit = async (event) => {
        
        try {
            const medicineData = {
                title,
                morning,
                afternoon,
                evening,
                night,
                as_needed,
            }

            await axios.post(
                "http://localhost:3001/api/users/saveMed",
                medicineData
            );
              
        } catch (err) {
              console.error(err);
            }

        setTitle('');
        setMorning(false);
        setAfternoon(false);
        setEvening(false);
        setNight(false);
        setAsNeeded(false);
    };  

    const handleDeleteMed = async (event) => {
        event.preventDefault();
        try{
            
        } catch (err){
            console.error(err)
        }
    };

    const [medications, setMedications] = React.useState([])
    const [medlist, getMedList] = useState('');

    useEffect(() => {
        getData()
        getUserData();
    }, [])

    const getData = async () => {
        setMedications()
    }
    
        const getUserData = () => {
        axios.get("http://localhost:3001/api/users/getSingleUser")
        .then((response) => {
            const medlist = response.data.medList
            console.log(medlist)
            getMedList(medlist);
        })
        .catch(error => console.log(error));
      }

        const renderForm = () => {
            return (
                    <>
                    <h3 className="mt-4 mb-4">Add a Medication to your List</h3>

                        <form onSubmit={handlenewMedSubmit}>
                            <div className="form-group row">
                                <label htmlFor="title" className="col-sm-2 col-form-label">Medication Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="title" placeholder="Medication Name" onChange={(e) => setTitle(e.target.value)} value={title} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-2">
                                    Schedule
                                </div>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="setMorning" checked={morning} onChange={(e) => setMorning(e.target.checked)} value={morning} />
                                        <label htmlFor="setMorning" className="form-check-label">Morning</label>
                                    </div>
                                    <div className="form-check">   
                                        <input type="checkbox" className="form-check-input" id="setAfternoon" checked={afternoon} onChange={(e) => setAfternoon(e.target.checked)} value={afternoon} />
                                        <label htmlFor="setAfternoon" className="form-check-label">Afternoon</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="setEvening" checked={evening} onChange={(e) => setEvening(e.target.checked)} value={evening} />
                                        <label htmlFor="setEvening" className="form-check-label">Evening</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox"  className="form-check-input" id="setNight" checked={night} onChange={(e) => setNight(e.target.checked)} value={night} />
                                        <label htmlFor="inputEmail4" className="form-check-label">Night</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="setAsNeeded" checked={as_needed} onChange={(e) => setAsNeeded(e.target.checked)} value={as_needed} />
                                        <label htmlFor="setAsNeeded" className="form-check-label">As Needed</label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <button className="mt-3 btn btn-outline-info" type="submit">
                                            Add Medication
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
        )}

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mt-4 mb-4">Your Medication List</h1>
                        <Medtable medlist={medlist} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        {renderForm()}
                    </div>
                </div>
            </div>
        </>
    )
}