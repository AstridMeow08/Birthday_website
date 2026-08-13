const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/components/BookScreen.tsx');
let content = fs.readFileSync(file, 'utf8');

// 1. Remove imports
content = content.replace(/import Image from "next\/image";?\n?/g, '');
content = content.replace(/import Image from 'next\/image';?\n?/g, '');
content = content.replace(/import Draggable from "react-draggable";?\n?/g, '');
content = content.replace(/import DraggableItem from "\.\/DragItem";?\n?/g, '');

// Fix duplicate styles
// Find: style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#fffbeb', color: '#000' }}
// Followed by: style={{ width: 600, height: 500 }}
// And combine them.
content = content.replace(/style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#fffbeb', color: '#000' }}\s*style={{ width: 600, height: 500 }}/g, "style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#fffbeb', color: '#000', width: 600, height: 500 }}");

fs.writeFileSync(file, content);
console.log('Fixed BookScreen.tsx duplicates');
