import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { instance } from "../api";
import { addImage, clearImages } from "../redux/images/actions";
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onImageAdd = async () => {
    // Проверяем поле ввода на пустоту
    if (tag.trim() === "") {
      return alert("Заполните поле тег");
    }
    setLoading(true);
    const tags = tag.split(",");
    // Асинхронно получаем картинки по заданным тегам
    const urls: Array<string> = await Promise.all(
      tags.map(async (tag: string) => {
        try {
          const response = await instance.get(tag);
          const imageURL = response.data.data.image_url;
          if (imageURL) {
            return imageURL;
          } else {
            // Удаляем тег и выводим ошибку
            alert(`По тегу ${tag} ничего не найдено`);
            tags.splice(tags.indexOf(tag), 1);
          }
        } catch (error) {
          alert("Произошла ошибка сети");
        }
      })
    );
    setTag("");
    setLoading(false);
    // Диспатчим картинку/составную картинку в redux
    if (tags.length > 0) dispatch(addImage(tags, urls));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__main">
          <input
            type="text"
            className="header__input"
            placeholder="Введите тег..."
            value={tag}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              setTag(evt.target.value)
            }
            onKeyPress={(evt: React.KeyboardEvent) => {
              if (evt.key === "Enter") {
                onImageAdd();
              }
            }}
          />
          <button
            className="header__load-btn"
            onClick={(evt: React.SyntheticEvent<HTMLButtonElement>) => onImageAdd()}
          >
            {loading ? "Загрузка..." : "Загрузить"}
          </button>
          <button
            className="header__clear-btn"
            onClick={(evt: React.SyntheticEvent<HTMLButtonElement>) => {
              dispatch(clearImages());
            }}
          >
            Очистить
          </button>
          <button className="header__group-btn">Разгруппировать</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
