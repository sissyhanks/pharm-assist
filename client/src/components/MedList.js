import React from "react";
import { useState } from "react";
import axios from "axios";


export default function MedList() {

    const [ title, setTitle ] = useState('');
    const [ morning, setMorning ] = useState(false);
    const [ afternoon, setAfternoon ] = useState(false);
    const [ evening, setEvening ] = useState(false);
    const [ night, setNight ] = useState(false);
    const [ as_needed, setAsNeeded] = useState(false);

    const handlenewMedSubmit = async (event) => {
        event.preventDefault();

        try{
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

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setMedications()
    }

    const renderHeader = () => {
        let headerElement = ['id', 'title', 'morning', 'afternoon', 'evening', 'night', 'as needed']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

        const renderForm = () => {
        return(
            <div className="container">
                <h3>Add a Medication to your List</h3>
            <form onSubmit={handlenewMedSubmit} className="row g-3">
                <div className="col-md-3 form-label-inline">
                <label htmlFor="title" className="form-label"></label>
                <input type="text"  className="form-control" id="title" placeholder="Medication Name" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="col-md-1 form-check-inline">
                <label htmlFor="setMorning" className="form-check-label">Morning</label>
                <input type="checkbox"  className="form-check-input" id="setMorning" checked={morning} onChange={(e) => setMorning(e.target.checked)} value={morning} />
                </div>
                <div className="col-md-1 form-check-inline">
                <label htmlFor="setAfternoon" className="form-check-label">Afternoon</label>
                <input type="checkbox"  className="form-check-input" id="setAfternoon" checked={afternoon} onChange={(e) => setAfternoon(e.target.checked)} value={afternoon} />
                </div>
                <div className="col-md-1 form-check-inline">
                <label htmlFor="setEvening" className="form-check-label">Evening</label>
                <input type="checkbox"  className="form-check-input" id="setEvening" checked={evening} onChange={(e) => setEvening(e.target.checked)} value={evening} />
                </div>
                <div className="col-md-1 form-check-inline">
                
                <label htmlFor="inputEmail4" className="form-check-label">Night</label>
                <input type="checkbox"  className="" id="setNight" checked={night} onChange={(e) => setNight(e.target.checked)} value={night} />
                </div>
                <div className="col-md-1 form-check-inline">
                
                <label htmlFor="setAsNeeded" className="form-check-label">As Needed</label>
                <input type="checkbox"  className="" id="setAsNeeded" checked={as_needed} onChange={(e) => setAsNeeded(e.target.checked)} value={as_needed} />
                </div>
                
                  <div className="col-12">
  <button className="btn btn-outline-info" type="submit">
                add med
              </button>

              </div>
            </form>
            </div>
        )}

    const renderBody = () => {
        // return medications && medications.map(({ id, title, morning, afternoon, evening, night, as_needed }) => {
        //     return (
        //         <tr key={id}>
        //             <td>{id}</td>
        //             <td>{title}</td>
        //             <td><input type="checkbox" id={`medication_${id}_morning`} checked={morning} aria-label={`Checkbox for ${title} in the morning`} /></td>
        //             <td><input type="checkbox" id={`medication_${id}_afternoon`} checked={afternoon} aria-label={`Checkbox for ${title} in the afternoon`} /></td>
        //             <td><input type="checkbox" id={`medication_${id}_evening`} checked={evening} aria-label={`Checkbox for ${title} in the evening`} /></td>
        //             <td><input type="checkbox" id={`medication_${id}_night`} checked={night} aria-label={`Checkbox for ${title} in the night`} /></td>
        //             <td><input type="checkbox" id={`medication_${id}_as_needed`} checked={as_needed} aria-label={`Checkbox for ${title} as needed`} /></td>
        //         </tr>
        //     )
        // })
    }

    return (
        <>
        <div>{renderForm()}</div>
            <h1 id='title'>Your Medication List</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}