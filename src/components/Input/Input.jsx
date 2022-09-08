export function Input(props){
    return (
        <div className="inputDiv">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" name={props.name} onChange={props.onChange}></input>
        </div>
    )
}