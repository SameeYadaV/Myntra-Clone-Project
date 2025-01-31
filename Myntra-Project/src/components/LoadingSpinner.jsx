

export function LoadingSpinner(){
    return(
        <center>
           <div className="d-flex justify-content-center m-4 ">
  <div className="spinner-border"style={{width:"6rem",height:"6rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
        </center>
    )
}