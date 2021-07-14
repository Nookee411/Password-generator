import "../styles/About.css";

const About = function () {
  return (
    <ul className="collapsible">
      <li>
        <div className="collapsible-header">
          <i className="material-icons">info</i>
          <span>О безопасности пароля</span>
        </div>
        <div className="collapsible-body">
          <h3>Создание пароля</h3>
          <p>
            Большинство взломов аккаунтов сейчас происходит из-за недостаточной
            защищенности пароля. Обычно пользователи ставят пароли, которые
            легко запомнить, но это подвеграет их большей опасности. Легкие для
            запоминания пароли (дата рождения, имя, кличка питомца) обычно легче
            взломать. Чтобы избежать этого рекомендуется использовать пароли,
            сгенерированные случайным образом, с использованием различных
            специальных символов.
          </p>
          <h3>Хранение пароля</h3>
          <p>
            К хранению пароля также стоит подходить с осторожностью. Записывать
            его в файл или на бумажку - прямой путь в руки к злоумышленникам.
            Можно использовать специальные сервисы, напимер{" "}
            <a href="https://passwords.google.com/">Google Password Manager</a>{" "}
            Они предоставляют защищенное хранилище паролей, а также запоминают
            аккаунты на сайтах и предоставляют автозаполнение формы логина.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default About;
