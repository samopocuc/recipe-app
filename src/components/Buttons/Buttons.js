import "./_buttons.scss";

function Buttons({ onClickFirst, onClickSecond, firstLabel, secondLabel }) {
    return (
        <div className="buttons">
            <button className="first-btn" onClick={onClickFirst}>
                {firstLabel}
            </button>
            <button className="second-btn" onClick={onClickSecond}>
                {secondLabel}
            </button>
        </div>
    );
}

export default Buttons;
