// called from About.js line 47
const getRxcui = (query) => {
    // query contains MedOne
    console.log("Variable Check: " + query);
    return fetch(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${query}`);
};

export default getRxcui

// Sample Data
// {
//     drugGroup: {
//          name: "singulair",
//          conceptGroup: [
//              { // conceptGroup Item 1
//                  tty: "BPCK"
//              }, // end of conceptGroup Item 1

//              { //conceptGroup Item 2
//                  tty: "SBD",
//                  conceptProperties: [
//                       {
//                          rxcui: "153892",
//                          name: "montelukast 10 MG Oral Tablet [Singulair]",
//                          synonym: "Singulair 10 MG Oral Tablet",
//                          tty: "SBD",
//                          language: "ENG",
//                          suppress: "N",
//                          umlscui: ""
//                      },

//                      {
//                          rxcui: "153893",
//                          name: "montelukast 5 MG Chewable Tablet [Singulair]",
//                          synonym: "Singulair 5 MG Chewable Tablet",
//                          tty: "SBD",
//                          language: "ENG",
//                          suppress: "N",
//                          umlscui: ""
//                       },

//                       {
//                          rxcui: "261367",
//                          name: "montelukast 4 MG Chewable Tablet [Singulair]",
//                          synonym: "Singulair 4 MG Chewable Tablet",
//                          tty: "SBD",
//                          language: "ENG",
//                          suppress: "N",
//                          umlscui: ""
//                       },

//                       {
//                          rxcui: "404406",
//                          name: "montelukast 4 MG Oral Granules [Singulair]",
//                          synonym: "Singulair 4 MG Oral Granules",
//                          tty: "SBD",
//                          language: "ENG",
//                          suppress: "N",
//                          umlscui: ""
//                       }
//                  ] // end of conceptProperties
//              }// end of conceptGroup Item 2
//          ]// end of conceptGroup Array
//     }// end of drugGroup object
// } end of object