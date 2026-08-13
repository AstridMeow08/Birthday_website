import re

with open(r'c:\Users\LAKSHMIPATHY\Desktop\Projects\Surp\page-flip\componets\Bokk.tsx', 'r') as f:
    content = f.read()

# Remove the commented out block at the top
content = re.sub(r'// "use client";.*?// export default Book;\n', '', content, flags=re.DOTALL)
content = content.replace('"use client";\n', '')
content = content.replace('import Image from "next/image";', '')

# Replace Book with BookScreen
content = content.replace('export default function Book()', 'export const BookScreen = () =>')

# Convert Next.js Image to standard img
# 1. Replace <Image and </Image>
content = content.replace('<Image', '<img')
content = content.replace('</Image>', '</img>')
# 2. Add 'absolute w-full h-full' in place of 'fill' and combine with existing className
content = re.sub(r'<img([^>]*?)\s+fill\s+([^>]*?)className="(.*?)"([^>]*)>', r'<img\1 \2 className="absolute inset-0 w-full h-full \3"\4>', content)
# 3. For any remaining 'fill' without className (just in case)
content = re.sub(r'<img([^>]*?)\s+fill\s+([^>]*)>', r'<img\1 className="absolute inset-0 w-full h-full"\2>', content)

# 4. Remove priority property
content = content.replace('priority', '')

with open(r'c:\Users\LAKSHMIPATHY\Desktop\Projects\Surp\birthday-website\src\components\BookScreen.tsx', 'w') as f:
    f.write(content)
