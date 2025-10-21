// import foodItems from "../const/data";
import Item from "./Item";

const ErrorMessage = ({items}) => {
    return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>
}

export default ErrorMessage;