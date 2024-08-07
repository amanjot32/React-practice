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
        <div className='p-4 w-[350px]'>
            <img src='https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2020/07/Tesla-model-3-vent.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1'
            loading='lazy'
            />
            <div className='bg-purple rounded p-4'>
                <TextComponent text={title} size='sm' weight='bold'/>
                <TextComponent text={desc} size='xs' />
            </div>
        </div>
    )
}

export default NewsTile