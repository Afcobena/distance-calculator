function SavedResultsCard() {
  const localData = JSON.parse(
    localStorage.getItem("savedResult")
  ); /* JSON.parse(resultsList) */

  return (
    <div className="saved--results">
      {localData === null ? (
        <p>saved</p>
      ) : (
        <>
          <p>saved</p>

          {localData.map((data) => {
            return (
              <div key={data.id} className="saved--results__card">
                <p>
                  {data.amount} {data.unit} {data.result} {data.unitResult}
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SavedResultsCard;
