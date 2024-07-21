export default function(output) {
    let quotes = [
'<br> _________________<br>< lets Dance Baby ><br> -----------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> _________________<br><  Call me Daddy  ><br> -----------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> ________________________<br>< aaja mera doodh pee le ><br> ------------------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> _____________________<br>< Umraojaan dekhi kya ><br> ---------------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> ______________________<br>< aao Backchodi krte h ><br> ----------------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> _______________________<br>< Oyee lucky lucky Oyee ><br> -----------------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> ___________________<br>< ghaas khalo guys! ><br> -------------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> ___________<br>< moooooaaa ><br> -----------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
'<br> _____________________________<br>< aaja meri gaadi me baith ja ><br> -----------------------------<br>        \\   ^__^<br>         \\  (oo)\\_______<br>            (__)\\       )\\/\\<br>                ||----w |<br>                ||     ||<br><br>',
];
    output.innerHTML +=quotes[Math.floor(Math.random() * quotes.length + 10) % quotes.length];
}
