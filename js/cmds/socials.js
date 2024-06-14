export default function(output, _hist, ...args) {
    let social = args[0];
    if (social) output.innerHTML += '<span data-color="orange">Opening ' + social + '...</span>';
    switch (social) {
        case 'GitHub':
            window.open('https://github.com/amanraox');
            break;
        case 'Discord':
            window.open('https://discord.com/users/amanraox');
            break;
        case 'Email':
            window.open('mailto:amanumrao333@gmail.com');
            break;
        case 'LinkedIn':
            window.open('https://linkedin.com/in/amanraox');
            break;
        default:
            output.innerHTML += `\
<span data-color="white">Github: <a href="https://github.com/amanraox">amanraox</a></span>
<span data-color="MediumSlateBlue">Discord: <a href="https://discord.com/users/amanraox">amanraox</a></span>
<span data-color="#00ff99">Email: <a href="mailto:sx-91@outlook.com">amanraox@icloud.com</a></span>;
<span data-color="#00ff99">Linkedin: <a href="https://linkedin.com/in/amanraox">Aman Umrao</a></span>`;
        return;
    }
}
