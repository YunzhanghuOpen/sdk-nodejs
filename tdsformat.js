const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 获取匹配的 .d.ts 文件列表
const files = glob.sync('yzh/services/**/*.d.ts');
// 格式化单个 .d.ts 文件的逻辑
function formatDtsFile(filePath) {
    let sourceCode = fs.readFileSync(filePath, 'utf-8');

    // 在接口的结束大括号 } 与下面的注释 /** 或 export 之间插入多个空行
    sourceCode = sourceCode.replace(/(\}\s*)(\/\*\*|export\s+(?:\*\*\/)?)(?!\*\/)/g, (_, closingBracket, comment) => {
        return `${closingBracket}\n\n\n${comment}`;
    });

    fs.writeFileSync(filePath, sourceCode, 'utf-8');
}

// 遍历匹配的 .d.ts 文件并进行格式化
files.forEach(filePath => {
    formatDtsFile(filePath);
});
