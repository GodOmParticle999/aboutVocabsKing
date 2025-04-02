function copyUpiId() {
    const upiId = document.getElementById('upiId').textContent;
    const copyButton = document.querySelector('.copy-button');
    const buttonText = copyButton.querySelector('span');
    const originalText = buttonText.textContent;
    
    const textarea = document.createElement('textarea');
    textarea.value = upiId;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        buttonText.textContent = 'Copied!';
        copyButton.classList.add('copied');
        
        setTimeout(() => {
            buttonText.textContent = originalText;
            copyButton.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert('Failed to copy UPI ID');
    } finally {
        document.body.removeChild(textarea);
    }
}

function downloadQR() {
    const link = document.createElement('a');
    link.href = './assets/QR.jpg';
    link.download = 'payment_qr.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function takeScreenshot() {
    try {
        if (!html2canvas) {
            alert('Screenshot functionality not available');
            return;
        }

        const element = document.body;
        const canvas = await html2canvas(element);
        
        const link = document.createElement('a');
        link.download = 'support_page_screenshot.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Screenshot failed:', error);
        alert('Failed to take screenshot');
    }
}