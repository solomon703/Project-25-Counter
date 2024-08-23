let value = document.getElementById("value");
let count = document.getElementById("coun");
function increment(){
  let UpdatedValue = value.textContent;
  let checkout = parseInt(UpdatedValue) + 1;
  value.textContent = checkout;
  count.textContent = "Positive Values";
  if( checkout > 0){
    value.style.color ="pink"
  }
 else{
    value.style.color = "none"
  }
}
function decrement(){
  let UpdatedValue = value.textContent;
  let checkout = parseInt(UpdatedValue) - 1;
  value.textContent = checkout;
  count.textContent = "Negitive Values";
  if( checkout < 0){
    value.style.color ="red"
  }
 else{
    value.style.color = "none"
  }
}
function reset(){
  value.textContent = "0";
  value.style.color ="yellow"
  count.textContent = "Stable Value";
}