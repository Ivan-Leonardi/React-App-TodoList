import "./Button.css";

const Button = ({ children, onClick }) => {
    return ( 
        <button className="add-task-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;