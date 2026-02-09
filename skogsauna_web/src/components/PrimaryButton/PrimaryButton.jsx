import "./PrimaryButton.css";

function PrimaryButton({ text, icon, iconSide = "left", disabled = false }) {
    return (
        <button 
            className="primary-button" 
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

export default PrimaryButton;