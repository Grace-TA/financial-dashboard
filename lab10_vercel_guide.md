# Lab 10: Vercel Edition (The Vibe Coding Way) ✨

歡迎來到 **Vibe Coding** 的世界。本指南將帶你體驗最現代化的 "Git Integration" 部署流程。

## 流程總覽
1.  **Git Init**: 在本地端建立儲存庫 (已完成 ✅)。
2.  **GitHub Push**: 將程式碼推送到 GitHub。
3.  **Vercel Import**: 讓 Vercel 連接 GitHub 自動部署。

---

## 🚀 實作步驟 (Step-by-Step)

### 步驟 1: 推送到 GitHub (Push to GitHub)
由於你的電腦未安裝 GitHub CLI (`gh`)，請依照以下步驟手動操作：

1.  開啟瀏覽器，登入 **GitHub**。
2.  點擊右上角 **+** -> **New repository**。
3.  Repository name 輸入: `financial-dashboard`。
4.  設定為 **Public** 或 **Private** (皆可)。
5.  點擊 **Create repository**。
6.  **重要**: 複製 "…or push an existing repository from the command line" 下方的指令。它看起來像這樣：
    ```bash
    git remote add origin https://github.com/[YOUR_USERNAME]/financial-dashboard.git
    git branch -M main
    git push -u origin main
    ```
7.  回到 VS Code Terminal，貼上並執行這些指令。

### 步驟 2: Vercel 導入 (Import Project)
1.  前往 [Vercel Dashboard](https://vercel.com/dashboard)。
2.  點擊 **Add New...** -> **Project**。
3.  在 "Import Git Repository" 列表中，你應該會看到剛剛推送的 `financial-dashboard`。
4.  點擊 **Import**。
5.  所有設定保持預設 (Framework Preset: Next.js)。
6.  點擊 **Deploy**。

### 步驟 3: 享受成果 (Enjoy)
Vercel 會自動建置你的網站，完成後你會獲得一個永久的 `https://....vercel.app` 網址。
以後只要除了 `git push`，Vercel 就會自動更新網站！🚀

---

## 💡 為什麼這樣做? (Why Git Integration?)
*   **CI/CD**: 每次 Commit 都會自動觸發部署。
*   **Preview**: 開新 Branch 時，Vercel 會自動產生預覽網址。
*   **Collaboration**: 團隊成員只需 Push 程式碼，不需要懂部署指令。
