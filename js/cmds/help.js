export default function(output) {
    output.innerHTML += `\
Here Is A List Of Commands:
    <b><span data-color="#00ff99">aman               </span> <span data-color="grey">-</span> <span data-color="white">check yourself</span></b>
    <span data-color="#00ff99">help               </span> <span data-color="grey">-</span> <span data-color="white">Displays This.</span>
    <span data-color="#00ff99">gui                </span> <span data-color="grey">-</span> <span data-color="white">Activate Graphical Mode.</span>
    <span data-color="#00ff99">about              </span> <span data-color="grey">-</span> <span data-color="white">know Aman</span>
    <span data-color="#00ff99">quote              </span> <span data-color="grey">-</span> <span data-color="white">Just Some Random Quotes.</span>
    <span data-color="#00ff99">source             </span> <span data-color="grey">-</span> <span data-color="white">Source Code</span>
    <span data-color="#00ff99">projects [name?]   </span> <span data-color="grey">-</span> <span data-color="white">My Github Repos!</span>
    <span data-color="#00ff99">socials [platform?]</span> <span data-color="grey">-</span> <span data-color="white">Contact Me Here!</span>
<span data-color="grey">--------------------------------------------</span>
Extra Commands For Fun:
    <span data-color="#00ff99">clear              </span> <span data-color="grey">-</span> <span data-color="white">Clears Terminal.</span>
    <span data-color="#00ff99">whoami             </span> <span data-color="grey">-</span> <span data-color="white">Aap kon?</span>
    <span data-color="#00ff99">history            </span> <span data-color="grey">-</span> <span data-color="white">cout Command History.</span>
    <span data-color="#00ff99">hostname           </span> <span data-color="grey">-</span> <span data-color="white">What Is This?</span>
    <span data-color="#00ff99">echo [text]        </span> <span data-color="grey">-</span> <span data-color="white">Prints [text].</span>
    <span data-color="#00ff99">eval [code]        </span> <span data-color="grey">-</span> <span data-color="white">Eval [code] As JS.</span>
    <span data-color="#00ff99">search [query]     </span> <span data-color="grey">-</span> <span data-color="white">Google It!</span>
`;
}
