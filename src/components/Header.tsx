import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { instance } from "../api";
import { addImage } from "../redux/images/actions";
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();

  const onImageAdd = async (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    const tags = tag.split(",");
    // Получить картинки по заданным тегам
    const urls: Array<string> = await Promise.all(
      tags.map(async (tag: string) => {
        const response = await instance.get(tag);
        return response.data.data.url;
      })
    );
    setTag("");
    dispatch(addImage(tags, urls));
  };

  return (
    <header className="header">
      <div className="container">
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
          <button className="header__load-btn" onClick={onImageAdd}>
            Загрузить
          </button>
          <button className="header__clear-btn">Очистить</button>
          <button className="header__group-btn">Разгруппировать</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
