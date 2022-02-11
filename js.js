
let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".bts");

btns.forEach(function(bts){

    bts.addEventListener("click",function(e){

const styles = e.currentTarget.classList;

if(styles.contains("decrease")) {
    count--;
} else if (styles.contains("increase")) {
    count++;

} else { count = 0;

}

if(count > 0){
    value.style.color = "red";

}

if(count < 0){
    value.style.color = "red";
}

if(count === 0){
    value.style.color = "yellow";
}

value.textContent = count;


});

});