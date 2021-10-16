import React from 'react'

export default function medTable(props) {

    // const handleDeleteMed = async (event) => {
    //     event.preventDefault();
    //     try{
    //         await axios.delete('http://localhost:3001/api/users/deleteMed',)
    //     } catch (err){
    //         console.error(err)
    //     }
    // };
    // console.log('THIS IS PROPS')
    const displayMeds = (props) => {
        const {medlist} = props
        
        if (medlist.length>0){
            return(
                medlist.map((med, index) => {
                    console.log(med);
                    return(
                        <table className='table table-striped'>
                            <tr key={med._id}>
                            <td>{med.title}</td>
                            <td><input type="checkbox" id={`medication_${med.id}_morning`} checked={med.morning} aria-label={`Checkbox for ${med.title} in the morning`} /></td>
                            <td><input type="checkbox" id={`medication_${med.id}_afternoon`} checked={med.afternoon} aria-label={`Checkbox for ${med.title} in the afternoon`} /></td>
                            <td><input type="checkbox" id={`medication_${med.id}_evening`} checked={med.evening} aria-label={`Checkbox for ${med.title} in the evening`} /></td>
                            <td><input type="checkbox" id={`medication_${med.id}_night`} checked={med.night} aria-label={`Checkbox for ${med.title} in the night`} /></td>
                            <td><input type="checkbox" id={`medication_${med.id}_as_needed`} checked={med.as_needed} aria-label={`Checkbox for ${med.title} as needed`} /></td>
                            </tr>
                        </table>
                    )
                })
            )
        }else {
            return (<h2>no meds!</h2>)
        }
    }
    return (
        <>
        {displayMeds(props)}
        </>
    )
}