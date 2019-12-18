let key = "ezN8zgFUOSPkQ4yKuX9yRZ31dct9COw5"
document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("form")
    let input = document.querySelector("#userInput")
    let select = document.querySelector("select")
    let submit = document.querySelector("#submit")
    let content = document.querySelector(".content")
    let limit = 10
    let search = "dogs"

    const giphySearch = async (userInput, userLimit) =>{
        try{
        let res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${userInput}&limit=${userLimit}`)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    let h1= document.createElement("h1")

    form.addEventListener("submit", ()=>{
        giphySearch(search, limit)
    })

    const populateSelect = () =>{
        for(let i = 1; i<=25; i++){
          let option = document.createElement("option")
          option.innerText = i
          option.value = i
          select.appendChild(option)
        }
    }
    populateSelect()
    giphySearch()
})