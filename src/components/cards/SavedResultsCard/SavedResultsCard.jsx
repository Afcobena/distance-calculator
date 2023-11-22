import { useEffect } from "react";

function SavedResultsCard({ saveResults, setSaveResults }) {

  useEffect(() => {
    getData();

  }, []);


  console.log("savedRESULTS", saveResults);
  /* console.log("DATA", data); */
  const getData = () => {
    const localData = JSON.parse(localStorage.getItem("savedResult"));
    setSaveResults(localData);
  };

  const handleDeleteData = (id) => {
    const filteredData = saveResults.filter(data => data.id !== id);


    localStorage.setItem("savedResult", JSON.stringify(filteredData));
    setSaveResults(filteredData);


  };


  return (
    <div className="saved--results">
      {saveResults === null ? (
        <p>saved</p>
      ) : (
        <>
          <p>saved</p>

          {saveResults.map((data) => {
            return (
              <div key={data.id} className="saved--results__card">
                <p>
                  {data.amount} {data.unit} {data.result} {data.unitResult}
                </p>
                <button onClick={() => handleDeleteData(data.id)}>Delete</button>

                <div>
                  <p></p>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SavedResultsCard;