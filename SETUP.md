# Google Drive Setup Guide

This project now uses Google Drive files instead of Firebase. Here's how to set it up:

## 1. Create Google Drive Files

Create these JSON files in your Google Drive:

### quotes.json
```json
{
  "date": "2024-01-01",
  "quote": "Your first quote here"
}
```

### her_password.json
```json
{
  "password": "her_password_here"
}
```

### my_password.json
```json
{
  "password": "my_password_here"
}
```

## 2. Get File IDs

1. Right-click on each file in Google Drive
2. Click "Share" 
3. Click "Copy link"
4. The file ID is the long string between `/d/` and `/view` in the URL
   - Example: `https://drive.google.com/file/d/1ABC123DEF456/view` → File ID is `1ABC123DEF456`

## 3. Set Up Environment Variables

Create a `.env` file in the project root:

```env
VITE_QUOTES_FILE_ID=your_quotes_file_id_here
VITE_HER_PASSWORD_FILE_ID=her_password_file_id_here
VITE_MY_PASSWORD_FILE_ID=my_password_file_id_here
VITE_GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url_here
```

## 4. Set Up Google Apps Script (for writing)

For the writer to save quotes, you need a Google Apps Script:

1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Replace the code with:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const fileId = data.fileId;
    const content = data.data;
    
    const file = DriveApp.getFileById(fileId);
    file.setContent(JSON.stringify(content, null, 2));
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Deploy as web app:
   - Click "Deploy" → "New deployment"
   - Choose "Web app"
   - Set access to "Anyone"
   - Copy the web app URL to your `.env` file

## 5. File Permissions

Make sure all Google Drive files are set to "Anyone with the link can view" for reading.

## 6. Install Dependencies

```bash
npm install
```

## 7. Run the Project

```bash
npm run dev
```

## Notes

- Reading is done via direct file links (no API key needed)
- Writing requires Google Apps Script for security
- The app will fall back to random quotes if the Google Drive files are not accessible 