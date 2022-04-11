function counterActions(props) {
    return (
        <div className="d-flex justify-content-evenly p-3">
            <button onClick={props.increaseCounter} type="button" className="btn btn-outline-primary ">increase</button>
            <button onClick={props.decreaseCounter} type="button" className="btn btn-outline-primary ">decrease</button>

        </div>
    )
}
export default counterActions