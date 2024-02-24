const allbtn = document.getElementsByClassName('Button');

for(let btn of allbtn){
    btn.addEventListener('click', function(event){

        // console.log(event.target.parentNode.parentNode.childNodes)
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText


        const playerContainer = document.getElementById('player-container');

        
        
        // One Button Can Not Be Clicked Multiple Times----
        event.target.setAttribute("disabled",false);
        event.target.parentNode.style.backgroundColor = "";

        

        // Can  Not Pick More Than 6 players-----

        const firstCartCount = getConverted("cart");
        if(firstCartCount+1 > 6){
            alert("Sorry You Can Not Pick More Than Six Player");
            return
        }





        // Update Budget---

        const currentBudget = getConverted("budget");
        document.getElementById("budget").innerText=currentBudget-parseInt(price)


        // Update Cart------

        const cartCount = getConverted("cart");
        document.getElementById("cart").innerText=cartCount +1;


        // Update left

        const cartLeft = getConverted("Left");
        document.getElementById("Left").innerText=cartLeft -1;




        const div = document.createElement('div');
        div.classList.add("flex",'justify-around')


        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText=name;
        p2.innerText=price;
        p3.innerText=category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        playerContainer.appendChild(div);

        updateTotalCost(price);
        updateGrandTotal();

    })

}

function updateGrandTotal(status){

    const totalCost = getConverted("Total-Cost");

    if(status == undefined){

        document.getElementById("Grand-Cost").innerText = totalCost;

    }else{
        const couponCode = document.getElementById("coupon-code").value;
        if(couponCode === 'BPL24'){
            const discount = totalCost*0.24;
            document.getElementById('Grand-Cost').innerText=totalCost-discount;
            document.getElementById("coupon-code").value = "";

        }else{
            alert("You Have Entered Wrong Coupon");
            document.getElementById("coupon-code").value = "";


        }
    }
}


function updateTotalCost(value){

    const total = getConverted("Total-Cost");

    const sum = total + parseInt(value);

    document.getElementById("Total-Cost").innerText=sum;

}


function getConverted(id){

    const convertedValue = document.getElementById(id).innerText;
    const realValue = parseInt(convertedValue);
    return realValue
}