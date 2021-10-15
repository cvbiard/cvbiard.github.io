$(document).ready(function(){
//Idk why github doesn't update this stuff better
   
    const sect = document.querySelector('section');
    const para = document.createElement('p');
    para.textContent = 'This text is from a JS script, whoa';
    para.id = "test";
    sect.appendChild(para);
    const text = document.createTextNode('-idk');
    const linkPara = document.querySelector('p');
    //append Child????
    linkPara.appendChile(text);
    linkPara.appendChild(text);
    $("#test").hover(function(){
        $(this).css("color", "red");
    });
});

