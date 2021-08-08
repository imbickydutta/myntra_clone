// function add() {


//     const form = document.getElementById("addressForm");

//     const name = form.name.value;
//     const mobileNo = form.mobileNo.value;
//     const pincode = form.pincode.value;
//     const address = form.address.value;
//     const location = form.location.value;
//     const city = form.data2.value;
//     const state = form.data1.value;


//     let address1 = {
//         name,
//         mobileNo,
//         pincode,
//         address,
//         location,
//         city,
//         state
//     };

//     let arr;

//     arr = localStorage.getItem("address1");
//     if(arr == null) {
//         arr = [];
//     } else {
//         arr =JSON.parse(localStorage.getItem("address1"));
//     }

//     arr.push(address1);
//     localStorage.setItem("address1", JSON.stringify(arr));


// }

// function appendAddress(el) {
//     el.preventDefault();


//     var data_div = document.getElementById("newContainer");
//     var div = document.createElement("div");

//     let p_name = document.createElement("p_name");
//     p_name.innerHTML = el.name;

//     let p_mobile = document.createElement("p_mobile");
//     p_mobile.innerHTML = el.mobileNo;

//     let p_pincode = document.createElement("p_pincode");
//     p_pincode.innerHTML = el.pincode;

//     let p_address = document.createElement("p_address");
//     p_address.innerHTML = el.address;

//     let p_location = document.createElement("p_location");
//     p_location.innerHTML = el.location;

//     let p_city = document.createElement("p_city");
//     p_city.innerHTML = el.city;

//     let p_state = document.createElement("p_state");
//     p_state.innerHTML = el.state;


//     div.append(p_name, p_mobile, p_pincode, p_address, p_location, p_city, p_state);
//     data_div.append(div);

// }

// function showAddress() {
//     let data = JSON.parse(localStorage.getItem("address1"));

//     data.forEach(function(el) {
//         appendAddress(el)

//     });


// }
// showAddress();

function addAddress() {
    const form = document.getElementById("addressForm");

    const name = form.name.value;
    const mobileNo = form.mobileNo.value;
    const pincode = form.pincode.value;
    const address = form.address.value;
    const location = form.location.value;
    const city = form.data2.value;
    const state = form.data1.value;

    let address1 = {
        name,
        mobileNo,
        pincode,
        address,
        location,
        city,
        state
    };
    for (k in address1) {
        if (address1[k].length === 0) {
            alert("Please fill all feilds")
            return;
        }
    }
    window.location.href = "payment.html"
}








