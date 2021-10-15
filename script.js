$(document).ready(function(){

   
    const sect = document.querySelector('section');
    const para = document.createElement('p');
    para.textContent = 'This text is from a JS script, whoa';
    para.id = "test";
    sect.appendChild(para);
    const text = document.createTextNode('-idk');
    const linkPara = document.querySelector('p');

    linkPara.appendChild(text);
    $("#test").hover(function(){
        $(this).css("color", "red");
    });
});

