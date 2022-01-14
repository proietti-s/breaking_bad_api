'use strict'

document.addEventListener('DOMContentLoaded', function(){

    const container = document.querySelector('.container');

    const base_url = "https://www.breakingbadapi.com/api/characters";

    //////////////GET DATA FUNCTIONS/////////////////
    const getAllCharacters = async function(){
    
        const base_res = await fetch(base_url);
        const base_data = await base_res.json();
        console.log(base_data);
        for(const character of base_data)
        renderCharacters(character)
        
    }

    const getCharacter = async function(id){
        const char_url = `${base_url}` + `/${id}`;
        const char_res = await fetch(char_url);
        const char_data = await char_res.json();
        console.log(char_data)
    }

    /////////////RENDER DATA FUNCTIONS///////////////
    const renderCharacters = function(data){
        const characterEl = document.createElement('div');
        characterEl.classList.add('character');

        const characterInnerHTML = 
        `
        <div class="info">
            <img src="${data.img}" alt="" width="250" height="330">
            <div class="details">
                <h3 class="info_name">${data.name}</h3>
                <p class="info_nick">${data.nickname}</p>
            </div>
        </div>
        `
        characterEl.innerHTML = characterInnerHTML;
        container.appendChild(characterEl);
    }

    getAllCharacters()

})