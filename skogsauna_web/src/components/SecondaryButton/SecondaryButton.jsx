import "./SecondaryButton.css";

function SecondaryButton({ text, icon, iconSide = "left", disabled = false, variant = "light" }) {
    const buttonClass = `secondary-button ${variant}`;
    
    return (
        <button 
            className={buttonClass.trim()} 
            disabled={disabled}
        >
            <span className="shine-effect"></span>
            <span className="button-content">
                {icon && iconSide === "left" && (
                    <span className="button-icon">{icon}</span>
                )}
                {text}
                {icon && iconSide === "right" && (
                    <span className="button-icon">{icon}</span>
                )}
            </span>
        </button>
    );
}

export default SecondaryButton;