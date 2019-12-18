let key = "ezN8zgFUOSPkQ4yKuX9yRZ31dct9COw5"
document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("form")
    let input = document.querySelector("#userInput")
    let select = document.querySelector("select")
    let submit = document.querySelector("#submit")
    let content = document.querySelector(".content")
    let limit = 10
    let search = "dogs"

    
    let h1= document.createElement("h1")
    
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        giphySearch(userInput.value,select.value)
    })
    
    select.addEventListener("change", (e)=>{
        select.value = e.target.value
     })
    const giphySearch = async (userInput, userLimit) =>{
        try{
        content.innerHTML=" "
        let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
            //debugger
        showGif(res.data.data)
        }catch(err){
             console.log(err)
        }
    }

    const populateSelect = () =>{
        for(let i = 1; i<=25; i++){
          let option = document.createElement("option")
          option.innerText = i
          option.value = i
          select.appendChild(option)
        }
    }
    const showGif = (gifArr) => {
        gifArr.forEach(gif =>{
            let image = document.createElement("img");
            image.src = gif.images.downsized.url;
            content.appendChild(image);
            // console.log(gif.images.downsized.url);
        })
        
    }
    //showGif(gifArr)
    
    populateSelect()
   // giphySearch()
})