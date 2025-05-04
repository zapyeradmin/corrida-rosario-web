
# Como conectar o formulário com o Google Sheets

Para que o formulário envie dados para a sua planilha do Google Sheets, siga estas instruções:

## 1. Crie um script do Google Apps Script

1. Abra sua planilha no Google Sheets: https://docs.google.com/spreadsheets/d/1N2CdlmI6iXP8dOLVTiLTltXYDcYpDXJPLNo_3jiFdSc/edit
2. Clique em `Extensões > Apps Script`
3. Exclua qualquer código existente e cole o seguinte:

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Inscrições") || ss.getActiveSheet();
    
    // Check if headers exist, if not add them
    const headers = sheet.getRange(1, 1, 1, 8).getValues()[0];
    if (headers.filter(Boolean).length === 0) {
      sheet.getRange(1, 1, 1, 8).setValues([["ID", "Nome Completo", "Email", "Telefone/WhatsApp", "Sexo", "Percurso", "Forma de Pagamento", "Camisa"]]);
    }
    
    // Prepare data for insertion
    const rowData = [
      data.id,
      data.name,
      data.email,
      data.phone,
      data.gender,
      data.course,
      data.payment,
      data.tshirtSize
    ];
    
    // Append data to the sheet
    sheet.appendRow(rowData);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log any errors
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to get the last used ID
function doGet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Inscrições") || ss.getActiveSheet();
    
    // Get all data from the ID column (ignoring the header)
    const dataRange = sheet.getRange(2, 1, sheet.getLastRow(), 1);
    const idValues = dataRange.getValues();
    
    // Filter out empty values and find the max ID
    const ids = idValues.filter(row => row[0] !== "").map(row => row[0]);
    
    if (ids.length === 0) {
      return ContentService
        .createTextOutput(JSON.stringify({ 'lastId': '0000' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Find the max ID
    const lastId = ids.reduce((max, id) => {
      return id > max ? id : max;
    }, '0000');
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'lastId': lastId }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Salve o script clicando em `Arquivo > Salvar`
5. Nomeie o projeto como "FormularioCorridaIntegration"

## 2. Implante o script como Aplicativo da Web

1. Clique em `Implantar > Novo Implantação`
2. Clique em "Engrenagem" ao lado de "Selecione o tipo"
3. Selecione "Aplicativo da Web"
4. Configure os seguintes campos:
   - Descrição: "FormularioCorridaIntegration"
   - Execute como: "Eu (seu-email@gmail.com)"
   - Quem tem acesso: "Qualquer pessoa"
5. Clique em "Implantar"
6. Copie a URL gerada

## 3. Atualize o código no arquivo googleSheetsIntegration.ts

Substitua a linha:
```typescript
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';
```

Pela URL que você copiou no passo anterior.

## 4. Permissões

Na primeira vez que o script for executado, o Google Apps Script solicitará permissões para acessar suas planilhas. Certifique-se de conceder essas permissões para que o script funcione corretamente.
