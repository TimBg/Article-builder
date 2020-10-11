import image from './assets/main_photo.png';
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

export const model = [
    new TitleBlock('Article builder', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, white, grey)',
            color: 'black',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'image'
    }),
    new ColumnsBlock([
        'Create your article',
        '',
    ], {
        styles: {
            background: 'linear-gradient(to right, white, grey)',
            padding: '2rem',
            color: '#',
            'font-weight': 'bold'
        }
    }),
    new TextBlock('With your own styles', {
        styles: {
            background: 'linear-gradient(to right, white, grey)',
            padding: '2rem',
            'font-weight': 'bold'
        }
    })
]