fetch(`/person/${1}`).then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    const person = document.getElementById("Ryker-looks-like-an-ugly-fart")
    person.innerHTML = data.smatneeessssssss
})