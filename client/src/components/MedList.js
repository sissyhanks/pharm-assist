import React from "react";
import { useState } from "react";
import axios from "axios";


export default function MedList() {

    const [ title, setTitle ] = useState('');
    const [ morning, setMorning ] = useState('false');
    const [ afternoon, setAfternoon ] = useState('false');
    const [ evening, setEvening ] = useState('false');
    const [ night, setNight ] = useState('false');
    const [ as_needed, setAsNeeded] = useState('false');

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
          };
    const handleDeleteMed = async (event) => {
        event.preventDefault();
        try{
            
        } catch (err){
            console.error(err)
        }
    };
        
  
    const data = [{
      "title": "Wellbutrin",
      "id": 1,
      "morning": true,
      "afternoon": true,
      "evening": false,
      "night": false,
      "as_needed": false
  },
  {
      "title": "Singulair",
      "id": 2,
      "morning": false,
      "afternoon": false,
      "evening": true,
      "night": false,
      "as_needed": false
  },
  {
      "title": "Vitamin D",
      "id": 3,
      "morning": true,
      "afternoon": false,
      "evening": false,
      "night": false,
      "as_needed": false
  },
      {
      "title": "Montelukast",
      "id": 4,
      "morning": false,
      "afternoon": false,
      "evening": false,
      "night": true,
      "as_needed": false
  }]

    const [medications, setMedications] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        setMedications(data)
    }

    const renderHeader = () => {
        let headerElement = ['id', 'title', 'morning', 'afternoon', 'evening', 'night', 'as needed']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

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
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}