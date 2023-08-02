// q: what does solid stand for in oo programming?
// a: solid stands for single responsibility, open-closed, liskov substitution, interface segregation, and dependency inversion.

// write a program in jsvascript to convert meter to feet
// 1 meter = 3.28084 feet
// 1 feet = 0.3048 meter

// q: write a program in javascript to convert meter to feet
// a:
function meterToFeet(meter) {
    return meter * 3.28084;
    }
    console.log(meterToFeet(1));
    console.log(meterToFeet(2));

    //q: how to run this program?
// q: how to run this program? 
// a: node test.js


// write a program to build a date picker
// q: write a program to build a date picker
// a:       <input type="date" id="datePicker">
//         <script>
//             const datePicker = document.getElementById('datePicker');

//             datePicker.addEventListener('change', (event) => {
//                 const result = document.getElementById('result');
//                 result.textContent = `Date is ${event.target.value}`;    
//             });
//         </script>

