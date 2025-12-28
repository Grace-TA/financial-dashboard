# Deploy Script Explained (deploy.sh) 🎓

這份文件詳細解釋了 `deploy.sh` 腳本中的每一行指令，幫助你理解自動化部署的原理。

## ⚠️ 前置作業 (Prerequisites)

在執行腳本之前，請確保你已完成以下準備：

1.  **安裝 Google Cloud CLI**: 你目前的系統似乎尚未安裝 `gcloud` 指令。
    *   [與 Windows 系統的安裝指南](https://cloud.google.com/sdk/docs/install)
2.  **登入帳號**: 安裝後請執行 `gcloud auth login`。
3.  **設定專案**: 確保已選擇專案 `gcloud config set project [YOUR_PROJECT_ID]`。

## ❓ 常見問題 (Troubleshooting)

**Q: 執行時出現 `gcloud : 找不到這個指令` 或 `CommandNotFoundException`?**
*   **原因**: 你的電腦尚未安裝 Google Cloud CLI，或者安裝後沒有將其加入系統的 PATH 環境變數。
*   **解決方法**:
    1.  下載並安裝 [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)。
    2.  安裝完成後，**必須重啟終端機 (Terminal)** 或 VS Code，讓新的 PATH 生效。
    3.  再次輸入 `gcloud version` 確認安裝成功。

---

## 1. 設定環境變數 (Configuration)

```bash
PROJECT_ID=$(gcloud config get-value project)
APP_NAME="financial-dashboard"
REGION="asia-east1"
```

*   **`PROJECT_ID`**: 這是最重要的 ID。
    *   `$(...)`：這是 **Command Substitution**，會執行括號內的指令並將結果存入變數。
    *   `gcloud config get-value project`：自動抓取你目前 gcloud 登入並選用的專案 ID。這樣腳本就不會寫死 ID，換個專案也能用。
*   **`APP_NAME`**: 為你的應用程式取個名字，這個名字會用在 Docker Image 的標籤和 Cloud Run 的服務名稱。
*   **`REGION`**: 決定你的伺服器要跑在哪個地區。`asia-east1` 是台灣彰化機房，對台灣用戶延遲最低。

---

## 2. 建置映像檔 (Build Image)

```bash
gcloud builds submit --tag gcr.io/$PROJECT_ID/$APP_NAME
```

*   **`gcloud builds submit`**: 這是 Google Cloud Build 的核心指令。它會把你的程式碼（包含 Dockerfile）打包上傳到 Google Cloud。
*   **`--tag gcr.io/$PROJECT_ID/$APP_NAME`**: 為你的 Docker Image 貼上標籤 (Tag)。
    *   `gcr.io`: Google Container Registry 的網址。
    *   這行指令等於告訴 Google：「請依照 Dockerfile 幫我打包，然後把結果存到 `gcr.io` 下面。」

---

## 3. 部署到 Cloud Run (Deploy)

```bash
gcloud run deploy $APP_NAME \
  --image gcr.io/$PROJECT_ID/$APP_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 3000
```

*   **`gcloud run deploy $APP_NAME`**: 告訴 Cloud Run 啟動一個名為 `financial-dashboard` 的服務。
*   **`--image ...`**: 指定要使用剛剛建好的那個 Image。
*   **`--platform managed`**: 使用 Google 全託管模式（Serverless），你不用管底層機器，只管程式碼。
*   **`--allow-unauthenticated`**: **重要！** 這代表允許「未登入」的一般大眾訪問你的網站。如果沒有這行，只有擁有權限的 Google 帳號才能看。
*   **`--port 3000`**: 告訴 Cloud Run 你的容器 (Container) 是在聽哪個 Port。Next.js 預設是 3000。
