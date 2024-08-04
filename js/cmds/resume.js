export default async function(){
    const link = document.createElement('a');
    link.href = 'https://amanraox.vercel.app/amanCV.pdf';  // Ensure this path is correct and accessible
    link.download = 'amanraox_Resume.pdf';  // The filename to save as
    document.body.appendChild(link);
    link.style.display = 'none';  // Hide the link
    link.click();
};