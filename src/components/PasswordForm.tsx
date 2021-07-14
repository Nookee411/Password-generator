import "../styles/PasswordForm.css";

interface PasswordProps {
  password: string;
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

function PasswordForm(props: PasswordProps) {
  const { password, clickHandler } = props;
  let passwordField = document.getElementById(
    "password_field"
  ) as HTMLInputElement;

  function copyClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    copyPassword();
    deselect();
  }

  function inputClickHandler(e: React.MouseEvent<HTMLInputElement>) {
    copyPassword();
  }
  function deselect() {
    if (window.getSelection() != null) window.getSelection()?.removeAllRanges();
  }

  function copyPassword() {
    passwordField.focus();
    passwordField.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
  }

  return (
    <div className="password-form z-depth-2">
      <div className="input-field">
        <input
          readOnly
          id="password_field"
          type="text"
          className=""
          value={password}
          onClick={inputClickHandler}
        />
      </div>
      <div className="password-form__container row">
        <button
          type="button"
          className="waves-effect waves-light btn password-form_button hoverable"
          onClick={clickHandler}
        >
          <i className="material-icons">autorenew</i>
        </button>

        <button
          type="button"
          value="copy"
          className="waves-effect waves-light btn password-form_button hoverable"
          onClick={copyClickHandler}
        >
          <i className="material-icons">content_copy</i>
        </button>
      </div>
    </div>
  );
}

export default PasswordForm;
