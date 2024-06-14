import { handle } from "./cmds.js";

const msg = "Logged in to amanraox's server from " + navigator.platform + "!";
const welcome = `<div class="nomobile">
         <span data-color="#00ff99">/\\</span>
        <span data-color="#00ff99">/  \\     _ __ ___     __ _   _ __</span>
       <span data-color="#00ff99">/ <span data-color="#00ff99">/\\</span> \\   |  _   _ \\   / _  | |  _ \\</span>
      <span data-color="#00ff99">/ ____ \\  | | | | | | | (_| | | | | |</span>
     <span data-color="#00ff99">/_/    \\_\\ |_| |_| |_|  \\__,_| |_| |_|</span>
    <span data-color="#00ff99"><~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~> </span>
    
So finally you found this corner of the internet

Heyyoo! I'm <span data-color="cyan"><a href="https://linkedin.com/in/amanraox">Aman Umrao</a></span>, a self-taught <span data-color="#00ff99">Web Developer</span> and hobbyist <span data-color="#00ff99">Competitive Programmer</span> from <span data-color="#00ff99">India</span>🇮🇳️.
<span data-color="#00ff99">Don't like terminal style??</span> Type <span data-color="cyan"><a href="https://amanraox.vercel.app">gui</a></span>
<br>Play around here..<b>Type <span data-color="#00ff99">help</span><br> `;
const sleep = (m) => new Promise((r) => setTimeout(r, m));
const terminal = document.querySelector("pre");
const history = [];
let prompt = document.querySelector("#prompt-template").content.cloneNode(true);

setTimeout(async () => {
  for (let i = 0; i < msg.length; i++) {
    terminal.innerText += msg[i];
    await sleep(100);
  }
  terminal.innerHTML += welcome;
  terminal.appendChild(prompt);
}, 500);

window.addEventListener("DOMContentLoaded", () => {
  document.onclick = () => {
    let prompts = document.querySelectorAll("input");
    if (!window.getSelection().toString()) prompts[prompts.length - 1].focus();
  };
  window.onkeydown = async (e) => {
    let prompts = document.querySelectorAll("input");
    let command = prompts[prompts.length - 1];
    if (e.key === "Enter") {
      command.setAttribute("placeholder", command.value);
      command.setAttribute("readonly", true);
      document
        .querySelectorAll(".about")
        .forEach((el) => el.parentElement.remove());

      if (command.value.includes("&&")) {
        let runs = command.value.split("&&");
        for (let cmds of runs) {
          await handle(cmds, terminal, history);
          terminal.innerHTML += "\n";
        }
      } else {
        await handle(command.value, terminal, history);
      }
      history.push(command.value);

      prompt = document
        .querySelector("#prompt-template")
        .content.cloneNode(true);
      terminal.appendChild(prompt);

      prompts = document.querySelectorAll("input");
      prompts[prompts.length - 1].focus();
      document.body.scrollTop = document.body.scrollHeight;
    } else if (e.key === "ArrowUp") {
      command.value = history[history.length - 1];
    } else if (e.key === "ArrowDown") {
      command.value = "";
    }
  };
});
