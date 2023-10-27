
window.addEventListener('pywebviewready', function() {
    pywebview.api.Start()
})


document.getElementById("record_btn").addEventListener("click",(ev)=>{

    let record_btn = document.getElementById("record_btn")

    if (record_btn.getAttribute("status") == "inactive"){
        let mic_select= document.getElementById('input_devices')
        let file_name = document.getElementById("voice_name")
        const chosen_mic = mic_select.options[mic_select.selectedIndex]

        //eel.Set_Vars(file_name.value,chosen_mic.getAttribute("item_id")) 
        pywebview.api.Set_Vars(file_name.value,chosen_mic.getAttribute("item_id"))   
    }
    
    //eel.Record(record_btn.getAttribute("status"))
    pywebview.api.Record(record_btn.getAttribute("status"))

    
})


document.getElementById("save_btn").addEventListener("click",(evt)=>{
    pywebview.api.Save()
    return
    //eel.Save()
})

function Change_Status(status) {
    let record_btn = document.getElementById("record_btn")
    let sound_waves = document.getElementById("sound_waves")
    record_btn.setAttribute("status",status)
    if (status == "inactive"){
        record_btn.children[0].setAttribute("src","./assets/mic.svg")
        record_btn.classList.remove("bg-gray-300")
        record_btn.classList.add("bg-red-500")
        sound_waves.style.display = "none"
    }
    else if(status == "recording"){
        
        record_btn.children[0].setAttribute("src","./assets/pause.svg")
        record_btn.classList.remove("bg-red-500")
        record_btn.classList.add("bg-gray-300")
        sound_waves.style.removeProperty("display")
        
    }
    else{
        record_btn.children[0].setAttribute("src","./assets/play.svg")
        record_btn.classList.remove("bg-gray-300")
        record_btn.classList.add("bg-red-500")
        sound_waves.style.display = "none"
        
    }
    return record_btn.getAttribute("status")
}

function Check_Status() {
    let record_btn = document.getElementById("record_btn")
    return record_btn.getAttribute("status")
}

function Set_Mics(input_devices){
    console.log(input_devices)
    let mic_select= document.getElementById('input_devices')
    const devices = Object.entries(input_devices)
    devices.forEach(element => {
        let new_el = document.createElement("option")
        new_el.setAttribute("item_id",element[0].toString())
        new_el.classList.add("bg-purple-100")
        new_el.innerHTML = element[1]
        mic_select.appendChild(new_el)
    });
    return devices
}