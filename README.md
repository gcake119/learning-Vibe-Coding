# learning-Vibe-Coding：🐶 妙麗歲數計算機 (Dog-to-Human Age Calculator)

根據 Cell Systems 發表的 DNA 甲基化研究公式，提供科學換算狗狗人類年齡的互動計算器。  
**深色主題友善色弱，iOS風格、適合桌機/平板/手機響應式體驗。**
[Live Demo](https://gcake119.github.io/learning-Vibe-Coding/)

## 功能特色

- 行事曆日期選擇器（支援自動 icon 顯示）
- 狗出生日期輸入自動對齊計算按鈕
- 根據 Cell Systems 公式：  
  `人類年齡 = 16 × ln(狗年齡) + 31`
- 結果自動記錄 localStorage，網頁重整也能自動載入
- 無障礙、高對比、色弱友善主題
- UI/UX 參考 iOS 設計規範
- 完全響應式：手機 (375px)、平板 (768px)、桌機 (>=1024px)

## 檔案結構

```text
├── index.html # 主頁，僅載入 calculator.js, style.css
├── style.css # iOS 樣式、深色主題、響應式、icon美化
├── calculator.js # 計算邏輯、localStorage、事件掛載
└── README.md # 專案說明
```

## 部署方式

1. 將所有檔案放於 GitHub Pages 根目錄
2. index.html 引用 style.css、calculator.js
3. 開啟 Pages 即可直接使用

## 主要技術

- HTML5
- CSS3 (Flexbox, Media Queries, 深色主題)
- 原生 JavaScript (`localStorage`, DOM 操作)
- Airbnb JavaScript Style Guide 檔案命名與撰寫規範

## 參考文獻

- Ideker et al., [Cell Systems (2020)](https://www.cell.com/cell-systems/fulltext/S2405-4712%2820%2930203-9)

## 標準/風格

- JavaScript 根據 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 撰寫，變數命名採 camelCase，避免冗長語法。
- CSS 採用 BEM 結構及自訂變數，響應式設計分段明確。
- HTML 結構語意化，無多餘標籤

## License

MIT
