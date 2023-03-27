let char_val = "cross";
    let cross = '<img class="btn_img" src="/cross.png" alt="Cross">'
    let circle = '<img class="btn_img" src="/circle.png" alt="Circle">'

    function reset(){
        let boxes = document.getElementsByClassName("btn");
        for(let i=0;i<9;i++){
            boxes[i].innerHTML = "";
        }
    }

    function handleclick(id){

        if(cross){
            document.getElementById(id).innerHTML=cross;
        }
        else{
            document.getElementById(id).innerHTML=circle;
        }
    }