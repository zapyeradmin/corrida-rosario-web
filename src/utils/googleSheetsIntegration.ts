
interface RegistrationData {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  course: string;
  payment: string;
  tshirtSize: string;
}

export async function submitToGoogleSheets(data: RegistrationData): Promise<boolean> {
  try {
    // Google Sheets script URL - this needs to be replaced with the actual deploy URL from Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';
    
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Form submission successful to Google Sheets');
      return true;
    } else {
      console.error('Error submitting to Google Sheets:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}

export async function getLastRegistrationId(): Promise<string> {
  try {
    // For now, returning a mock ID
    // In production, you would fetch the last ID from Google Sheets
    // through a separate endpoint
    
    // Mock implementation - in real scenario, you would query the last ID
    return "0000";
  } catch (error) {
    console.error('Error getting last ID:', error);
    return "0000";
  }
}

export function generateNextId(lastId: string): string {
  const numericValue = parseInt(lastId, 10);
  const nextNumericValue = numericValue + 1;
  return nextNumericValue.toString().padStart(4, '0');
}
