goto_initie_room.addEventListener("click", async () =>{
    chrome.tabs.create({url:"https://squiz.gg/room/0"})
 })

goto_confirme_room.addEventListener("click", async () =>{
    chrome.tabs.create({url:"https://squiz.gg/room/1"})
})

goto_expert_room.addEventListener("click", async () =>{
    chrome.tabs.create({url:"https://squiz.gg/room/2"})
})

goto_squiz.addEventListener("click", async () =>{
    chrome.tabs.create({url:"https://squiz.gg/"})
})
