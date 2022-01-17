'use strict'

document.addEventListener('DOMContentLoaded', function(){

    const container = document.querySelector('.container');
    const input_src = document.querySelector('.src_input');
    const btn_src = document.querySelector('.src_btn');

    const base_url = "https://www.breakingbadapi.com/api/characters";

    //////////////GET DATA FUNCTIONS/////////////////
    const getAllCharacters = async function(){
    
        const base_res = await fetch(base_url);
        const base_data = await base_res.json();
        console.log(base_data);
        base_data.map(character => renderCharacters(character));
        
    }

    const getCharacter = async function(id){
        const char_url = `${base_url}` + `/${id}`;
        const char_res = await fetch(char_url);
        const char_data = await char_res.json();
        char_data.map(character => console.log(character));

    }

    const searchCharacter = async function(name){
        name = input_src.value;

        const src_url = `${base_url}` + `?name=${name}`;
        const src_res = await fetch(src_url);
        const src_data = await src_res.json();
        
        !name || src_data.length === 0 ? alert('Not Found') :
        src_data.map(character => {
            renderCharacters(character);
        });
        
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
        const details = characterEl.querySelector('.details');
        details.addEventListener('click', function(e){
            e.preventDefault()
            console.log(data.char_id)
        })

    }


    getAllCharacters();

    

    btn_src.addEventListener('click', function(e){
        e.preventDefault()
        container.innerHTML='';
        searchCharacter();

    });

})