import { getData } from "./getData.js"


export const projects = () => {
    document.querySelector(".p-container").innerHTML = ""
    getData("./assets/data.json", (e) => {
        for (let i = 0; i < 6; i++) {
            const element = e[i];
            console.log(element);
            document.querySelector(".p-container").innerHTML += `
            <div class="bg-[#32363f] rounded-md p-4 flex flex-col gap-2">
                <h3 id="name" class="text-center text-xl font-bold">${element.name}</h3>
                <div class="flex gap-2"><p>Language:</p><p class="font-bold">${element.language}</p></div>
                <div class="flex gap-2"><p>Created:</p><p class="font-bold">${element.created}</p></div>
                <div class="flex justify-between font-bold">
                <a href="${element.webpage_url}" target="_blank" id="webpage_url" class="bg-[#646cff] rounded-md px-2 py-1 cursor-pointer hover:scale-105 transition-all">Page</a>
                <a href="${element.repo_url}" target="_blank" id="reop_url" class="bg-[#646cff] rounded-md px-2 py-1 cursor-pointer hover:scale-105 transition-all">Repo</a>
                </div>
            </div>
            `
            
        }
    })
}