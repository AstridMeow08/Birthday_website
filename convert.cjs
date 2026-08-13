const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/BookScreen.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Remove next/image import
content = content.replace(/import Image from "next\/image";\n/, '');
content = content.replace(/import Image from 'next\/image';\n/, '');
// also add back import React if not there (it's vite)

// 2. Change Bokk to BookScreen
content = content.replace(/export default function Bokk\(/g, 'export const BookScreen = (');

// 3. Process each <Image ... /> tag
content = content.replace(/<Image/g, '<img');
content = content.replace(/<\/Image>/g, '</img>'); 
content = content.replace(/\sfill\b/g, '');
content = content.replace(/\spriority\b/g, '');

// Convert <img ... ></img> to <img ... />
content = content.replace(/<img([^>]*)><\/img>/g, '<img$1 />');

content = content.replace(/className="([^"]+)"/g, (match, classNames) => {
    let styles = {};
    let transforms = [];

    const classes = classNames.split(/\s+/).filter(Boolean);
    
    if (classes.includes('book-page')) {
        styles.position = 'relative';
        styles.overflow = 'hidden';
        styles.backgroundColor = '#fffbeb';
        styles.color = '#000';
    }

    if (classes.includes('object-contain') || classes.includes('scale-33')) {
        styles.position = 'absolute';
        styles.width = '100%';
        styles.height = '100%';
        styles.left = '0';
        styles.top = '0';
        styles.objectFit = 'contain';
    }

    classes.forEach(cls => {
        if (cls === 'object-contain') styles.objectFit = 'contain';
        else if (cls === 'pointer-events-none') styles.pointerEvents = 'none';
        else if (cls === 'select-none') styles.userSelect = 'none';
        else if (cls === 'shadow-black') styles.filter = 'drop-shadow(2px 4px 6px rgba(0,0,0,0.5))';
        else if (cls.startsWith('z-')) styles.zIndex = parseInt(cls.replace('z-', ''));
        else if (cls.startsWith('scale-')) transforms.push(`scale(${parseInt(cls.replace('scale-', '')) / 100})`);
        else if (cls.startsWith('rotate-')) transforms.push(`rotate(${cls.replace('rotate-', '')}deg)`);
        else if (cls.startsWith('-rotate-')) transforms.push(`rotate(-${cls.replace('-rotate-', '')}deg)`);
        else if (cls.startsWith('translate-x-')) transforms.push(`translateX(${parseInt(cls.replace('translate-x-', '')) * 4}px)`);
        else if (cls.startsWith('-translate-x-')) transforms.push(`translateX(-${parseInt(cls.replace('-translate-x-', '')) * 4}px)`);
        else if (cls.startsWith('translate-y-')) transforms.push(`translateY(${parseInt(cls.replace('translate-y-', '')) * 4}px)`);
        else if (cls.startsWith('-translate-y-')) transforms.push(`translateY(-${parseInt(cls.replace('-translate-y-', '')) * 4}px)`);
    });

    if (transforms.length > 0) {
        styles.transform = transforms.join(' ');
    }

    if (Object.keys(styles).length === 0) return match; 

    const styleString = Object.entries(styles)
        .map(([key, val]) => `${key}: '${val}'`)
        .join(', ');

    return `style={{ ${styleString} }}`;
});

content = content.replace(/import DragItem from "\.\/DragItem";/, 'import DragItem from "./DragItem";');
content = content.replace(/import HTMLFlipBook from "page-flip";/g, 'import HTMLFlipBook from "page-flip";');

fs.writeFileSync(file, content);
console.log('Converted BookScreen.tsx');
