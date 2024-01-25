// function metryToKilometry(number) {
//     let kilometr = number / 1000;
//
//     function getEnding(num) {
//         if (num === Math.round(num)) {
//             if (num >= 5 && num <= 19) {
//                 return "ів";
//             } else if (num % 10 === 1) {
//                 return "";
//             } else if ((num >= 2 && num <= 4) || (num % 10 >= 2 && num % 10 <= 4)) {
//                 return "и";
//             } else if (num % 10 === 0 || (num % 10 >= 5 && num % 10 <= 9)) {
//                 return "ів";
//             }
//         } else {
//             return "а";
//         }
//     }
//
//     return `${number} метр${getEnding(number)} = ${kilometr} кілометр${getEnding(kilometr)}`;
// }
//
// console.log(metryToKilometry(11));


function metryToKilometry(number) {
    let kilometr = number / 1000;

    function getEnding(num) {
        if (num % 100 >= 11 && num % 100 <= 19) {
            return "ів";
        } else {
            switch (num % 10) {
                case 1:
                    return "";
                case 2:
                    return "и";
                default:
                    return "ів";
            }
        }
    }

    return `${number} метр${getEnding(number)} = ${kilometr} кілометр${getEnding(Math.round(kilometr))}`;
}

console.log(metryToKilometry(1));



    