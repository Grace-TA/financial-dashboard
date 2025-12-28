# Lab 10: Vercel Edition (The Vibe Coding Way) ✨

歡迎來到 **Vibe Coding** 的世界。在原本的 Lab 10 中，我們學習了 "Infrastructure as Code" (Docker + GCP)，這很強大，但也許有點...沈重。

現在，我們將體驗 **Framework-defined Infrastructure**。我們不再管理容器，而是讓 Vercel 直接理解並託管我們的 Next.js 應用。

## 為什麼選擇 Vercel?
*   **Zero Config**: 不需要 Dockerfile，不需要 Nginx，不需要手動設定 Port。
*   **Native Optimization**: 自動處理 Next.js 的 Image Optimization, ISR, Edge Functions。
*   **Git Integration**: 每次 `git push` 自動部署預覽版 (Preview Deployment)。

---

## 🚀 實作步驟 (Step-by-Step)

### 步驟 1: 準備專案 (Preparation)
確保你的 `package.json` 包含標準的 Next.js build scripts (我們已經檢查過了 ✅)。

### 步驟 2: 初始化 Git (Git Init)
我們將程式碼提交到版本控制系統。

```bash
cd financial-dashboard
git init
git add .
git commit -m "Initial commit for Vercel deployment"
```

### 步驟 3: 部署到 Vercel (The Vibe Deploy)
我們使用剛剛安裝的 Vercel CLI 直接部署。

```bash
vercel login
# 選擇你的登入方式 (GitHub/GitLab/Email)
```

登入成功後，直接執行：

```bash
vercel
```

接下來只需一路按 **Enter** (使用預設值)：
1.  Set up and deploy? **[Y]**
2.  Which scope? **[Your Name]**
3.  Link to existing project? **[N]**
4.  Project Name? **[financial-dashboard]**
5.  Directory? **[./]**
6.  Build Settings? **[Default]** (自動偵測 Next.js)

### 步驟 4: 享受成果 (Enjoy)
部署完成後，你會獲得一個 `https://financial-dashboard-xxx.vercel.app` 的網址。
這就是 Vibe Coding 的速度！🚀

---

## 💡 比較 (Comparison)

| 特性 | Google Cloud Run (Docker) | Vercel (Native) |
| :--- | :--- | :--- |
| **配置難度** | 高 (Dockerfile, IAM, Billing) | 低 (0 Config) |
| **可攜性** | 高 (任何支援 Docker 的雲端) | 中 (綁定 Vercel 平台特性) |
| **用途** | 複雜微服務, 企業級架構 | 前端與全端 Next.js 應用 |
| **Vibe** | 🐢 Heavy Engineering | 🐇 Vibe Coding |
