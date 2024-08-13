import React from 'react';
import TextComponent from './text_styles';
import PlaceholderImg from '../../assets/images/empty.jpg'

interface NewsTileProps {
  title: string;
  desc: string;
  url: string;
  imgUrl: string;
  authorName: string;
  date: string;
}

const handleClick = (url: string) => {
  window.open(url, '_blank');
};

const NewsTile: React.FC<NewsTileProps> = ({ title, desc, url, imgUrl, authorName, date }) => {
  return (
    <div className="w-full h-auto dark:bg-custom-gray dark:text-white rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer" onClick={() => handleClick(url)}>
      <img
        src={imgUrl === '' ? PlaceholderImg : imgUrl}
        loading="lazy"
        className="rounded-t-lg w-full h-48 object-cover"
      />
      <div className="rounded-b-xl p-4 overflow-hidden">
        <TextComponent text={title} size="sm" weight="bold" />
        <div className="p-1"></div>
        <TextComponent text={desc} size="xs" />
        <div className="p-2"></div>
        <TextComponent text={authorName === 'n/a' ? '' : authorName} size="xs" weight="bold" />
        <div className="p-2"></div>
        <TextComponent text={date} size="xs" weight="bold" />
      </div>
    </div>
  );
};

export default NewsTile;
