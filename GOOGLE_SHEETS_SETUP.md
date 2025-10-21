# Google Sheets Contact Form Setup

This guide explains how to connect your contact form to Google Sheets.

## Steps to Set Up

### 1. Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "CTK Empanadas Contact Form"
4. Add these column headers in the first row:
   - `name`
   - `email`
   - `subject`
   - `message`
   - `timestamp`

### 2. Create Google Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;
    
    sheet.appendRow([
      data.name,
      data.email,
      data.subject,
      data.message,
      data.timestamp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Click **Deploy** > **New deployment**
6. Click the gear icon next to "Select type" and choose **Web app**
7. Configure:
   - **Description**: Contact Form
   - **Execute as**: Me
   - **Who has access**: Anyone
8. Click **Deploy**
9. Click **Authorize access** and grant permissions
10. **Copy the Web app URL** - you'll need this!

### 3. Update Your Code
1. Open `src/pages/Contact.tsx`
2. Find line 25: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your copied Web app URL
4. Save the file

## Testing
1. Go to your contact page
2. Fill out and submit the form
3. Check your Google Sheet - the submission should appear as a new row!

## Troubleshooting
- Make sure the Apps Script is deployed as "Anyone" can access
- Check that column headers in your sheet match exactly
- View the Apps Script execution logs if submissions aren't appearing

## Additional Resources
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Form to Google Sheets Tutorial](https://github.com/jamiewilson/form-to-google-sheets)
