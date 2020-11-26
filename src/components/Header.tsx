import React, { useState } from "react";
import "../styles/Header.scss";

// [{},{}]
// [filters]
// [{filter:[]}]

const Header: React.FC = () => {
  const [tag, setTag] = useState("");

  return (
    <header className="header">
      <div className="contaner">
        <div className="header__main">
          <input
            type="text"
            value={tag}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setTag(evt.target.value)
            }
            className="header__input"
            placeholder="Введите тег..."
          />
          <button className="header__load-btn">Загрузить</button>
          <button className="header__clear-btn">Очистить</button>
          <button className="header__group-btn">Разгруппировать</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
