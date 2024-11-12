$(document).ready(function () {
   console.log("select plan is ready");
});
let i = 1;
let selectedPlans = [];
getPlans();
function saveOnLocalStorage(plan) {
   selectedPlans.push(plan);
   localStorage.setItem("selectedPlans", JSON.stringify(selectedPlans));
}

function getPlans() {
   if (localStorage.getItem("selectedPlans") !== null) {
      selectedPlans = JSON.parse(localStorage.getItem("selectedPlans"));
      i = selectedPlans.length + 1;
   } else {
      selectedPlans = [];
   }
   addToCart();
   console.log("got local");
   console.log(selectedPlans);
}

function addToCart() {
   let oldNum = selectedPlans.length - 1;
   /*    oldNum = $(".numSelectedItems").html();
    */

   newNum = oldNum + 1;
   if (newNum) {
      $(".numSelectedItems").html(newNum);
   }
}

$(".selectPlan").click(function (e) {
   e.preventDefault();
   let planName = $(this).siblings(".planName").html();
   let id = i;
   let plan = {
      planName: planName,
      id: id,
   };

   saveOnLocalStorage(plan);
   addToCart();
   i++;
});
