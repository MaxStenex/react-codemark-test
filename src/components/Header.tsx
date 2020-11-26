import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../api";
import { addGroups, clearGroups, toggleGrouped } from "../redux/groups/actions";
import { addImage, clearImages, groupImages } from "../redux/images/actions";
import { Image, ImageGroup } from "../redux/images/reducer";
import { RootStateType } from "../redux/rootReducer";
import "../styles/Header.scss";

const ALLOWED_SYMBOLS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,";

interface Props {
  tagValue: string;
  setTagValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ setTagValue, tagValue }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const allImages = useSelector((state: RootStateType) => state.images.allImages);
  const groupsTags = useSelector((state: RootStateType) => state.groups.groupsTags);
  const isGrouped = useSelector((state: RootStateType) => state.groups.grouped);

  const onImageAdd = async () => {
    // Проверяем поле ввода на пустоту
    if (tagValue.trim() === "") {
      return alert("Заполните поле тег");
    }
    setLoading(true);
    const tags = tagValue.split(",");
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
    setTagValue("");
    setLoading(false);
    // Диспатчим картинку/составную картинку в redux
    if (tags.length > 0) {
      dispatch(addImage(tags, urls));
      dispatch(addGroups(tags));
    }
  };

  const onImageGrouping = () => {
    if (isGrouped === false) {
      const imageGroups: Array<ImageGroup> = [];
      // eslint-disable-next-line array-callback-return
      groupsTags.map((tag: string) => {
        const filteredByTagImages = allImages.filter((image: Image) =>
          image.tags.includes(tag)
        );
        imageGroups.push({ tag, images: filteredByTagImages });
      });
      dispatch(groupImages(imageGroups));
    }
    dispatch(toggleGrouped());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__main">
          <input
            type="text"
            className="header__input"
            placeholder="Введите тег..."
            value={tagValue}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
              // Валидация на латинские буквы и ,
              if (
                evt.target.value
                  .split("")
                  .every((symbol) => ALLOWED_SYMBOLS.includes(symbol))
              ) {
                setTagValue(evt.target.value);
              }
            }}
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
              dispatch(clearGroups());
              setTagValue("");
            }}
          >
            Очистить
          </button>
          <button
            className="header__group-btn"
            onClick={(evt: React.SyntheticEvent<HTMLButtonElement>) => onImageGrouping()}
          >
            {isGrouped ? "Разгруппировать" : "Группировать"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
