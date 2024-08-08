import React from 'react';
import TextComponent from './text_styles';

interface NewsTileProps{
    title: string;
    desc: string;
    imgUrl: string;
    authorName: string;
    date: string;
}

const NewsTile: React.FC<NewsTileProps> = ({title, desc, imgUrl, authorName, date}) => {
    return(
        <div className='w-[350px] dark:bg-custom-gray dark:text-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out'>
            <img src='https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/07/Tesla-model-3-vent.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1'
            loading='lazy'
            className='rounded-t-lg'
            />
            <div className='rounded-b-xl p-4'>
                <TextComponent text={title} size='sm' weight='bold'/>
                <div className='p-1'></div>
                <TextComponent text={desc} size='xs' />
            </div>
        </div>
    )
}

export default NewsTile