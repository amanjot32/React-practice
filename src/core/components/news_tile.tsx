import React from 'react';
import TextComponent from './text_styles';

interface NewsTileProps{
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

const NewsTile: React.FC<NewsTileProps> = ({title, desc, url, imgUrl, authorName, date}) => {
    return(
        <button onClick={() => handleClick(url)}>
            <div className='w-[300px] h-[400px] dark:bg-custom-gray dark:text-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out'>
            <img src={imgUrl == '' ? 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg' : imgUrl}
            loading='lazy'
            className='rounded-t-lg w-full'
            />                
            <div className='rounded-b-xl p-4'>
                <TextComponent text={title} size='sm' weight='bold'/>
                <div className='p-1'></div>
                <TextComponent text={desc} size='xs' />
                <div className='p-2'></div>
                <TextComponent text={authorName == 'n/a' ? '' : authorName} size='xs' weight='bold'/>
                <div className='p-2'></div>
                <TextComponent text={date} size='xs' weight='bold'/>
            </div>
            </div>
        </button>
    )
}

export default NewsTile