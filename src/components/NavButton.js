import './NavButton.css';

function NavButton(props) {
  return (
    <button
      aria-label={`Navigate to the ${props.buttonType} article`}
      disabled={props.disabled}
      className={`nav-seq-button to-the-${props.buttonType}-nav-button`}
      onClick={props.onClick}
    ></button>
  );
}

export default NavButton;
