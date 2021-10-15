$(document).ready(function(){

    $("#ASIC").hover(function(){
        $(this).css("color", "red");
    });
    const sect = document.querySelector('section');
    const para = document.createElement('p');
    para.textContent = 'This text is from a JS script, whoa';
    sect.appendChild(para);
    const text = document.createTextNode('-idk');
    const linkPara = document.querySelector('p');
    linkPara.appendChile(text);
});

