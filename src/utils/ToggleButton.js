import "./ToggleButton.css";

const ToggleButton = ({ theme, toggleTheme }) => {
  return (
    <div className="toggle-wrapper">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "day"}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
