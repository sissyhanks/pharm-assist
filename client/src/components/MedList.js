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

//     const handleInputChange = (e) => {
//     const target = e.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
// }

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
              // await getLoggedIn();
              // history.push("/");
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
        
  
//     const data = [{
//       "title": "Wellbutrin",
//       "id": 1,
//       "morning": true,
//       "afternoon": true,
//       "evening": false,
//       "night": false,
//       "as_needed": false
//   },
//   {
//       "title": "Singulair",
//       "id": 2,
//       "morning": false,
//       "afternoon": false,
//       "evening": true,
//       "night": false,
//       "as_needed": false
//   },
//   {
//       "title": "Vitamin D",
//       "id": 3,
//       "morning": true,
//       "afternoon": false,
//       "evening": false,
//       "night": false,
//       "as_needed": false
//   },
//       {
//       "title": "Montelukast",
//       "id": 4,
//       "morning": false,
//       "afternoon": false,
//       "evening": false,
//       "night": true,
//       "as_needed": false
//   }]

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
            <div >
            <form onSubmit={handlenewMedSubmit} className="row g-3">
                
                <label for="title" className="form-label"></label>
                <input type="text"  className="form-label-inline" id="title" placeholder="Medication Name" onChange={(e) => setTitle(e.target.value)} value={title} />
                
                
                <label for="setMorning" className="form-check-inline"></label>
                <input type="checkbox"  className="form-check-inline" id="setMorning" checked={morning} onChange={(e) => setMorning(e.target.checked)} value={morning} />
                
                <label for="setAfternoon" className="form-check-inline"></label>
                <input type="checkbox"  className="form-check-inline" id="setAfternoon" checked={afternoon} onChange={(e) => setAfternoon(e.target.checked)} value={afternoon} />
                
                <label for="setEvening" className="form-check-inline"></label>
                <input type="checkbox"  className="form-check-inline" id="setEvening" checked={evening} onChange={(e) => setEvening(e.target.checked)} value={evening} />
                
                
                <label for="inputEmail4" className="form-check-inline"></label>
                <input type="checkbox"  className="form-check-inline" id="setNight" checked={night} onChange={(e) => setNight(e.target.checked)} value={night} />
                
                
                <label for="setAsNeeded" className="form-check-inline"></label>
                <input type="checkbox"  className="form-check-inline" id="setAsNeeded" checked={as_needed} onChange={(e) => setAsNeeded(e.target.checked)} value={as_needed} />
                
                  <div className="col-12">
  <button className="btn btn-outline-info" type="submit">
                add med
              </button>

              </div>
            </form>
            </div>
        )}

    const renderBody = () => {
        return medications && medications.map(({ id, title, morning, afternoon, evening, night, as_needed }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td><input type="checkbox" id={`medication_${id}_morning`} checked={morning} aria-label={`Checkbox for ${title} in the morning`} /></td>
                    <td><input type="checkbox" id={`medication_${id}_afternoon`} checked={afternoon} aria-label={`Checkbox for ${title} in the afternoon`} /></td>
                    <td><input type="checkbox" id={`medication_${id}_evening`} checked={evening} aria-label={`Checkbox for ${title} in the evening`} /></td>
                    <td><input type="checkbox" id={`medication_${id}_night`} checked={night} aria-label={`Checkbox for ${title} in the night`} /></td>
                    <td><input type="checkbox" id={`medication_${id}_as_needed`} checked={as_needed} aria-label={`Checkbox for ${title} as needed`} /></td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>Your Medication List</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <div>{renderForm()}</div>
                <tbody>
                    
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}