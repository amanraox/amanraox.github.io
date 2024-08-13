window.open('https://amanraox.vercel.app/amanCV.pdf', '_blank');
export default function(output) {
    output.innerHTML += 'Check the tab on the right containg <span data-color="cyan">Resume</span>';
    // window.open('https://amanraox.vercel.app/amanCV.pdf');
    const link = document.createElement('a');
    link.href = 'https://amanraox.vercel.app/amanCV.pdf';
    link.download = 'amanCV.pdf'; // Suggest a filename for the download

    // Trigger a click on the anchor element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
