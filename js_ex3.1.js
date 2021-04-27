// Java Script file: js_ex3.1.js
function isBisextil( input_year)
{
    /* - divisible par 4 mais pas par 100 <ou> est divisible par 400 */
    let answer;
    answer = false;
    if ((input_year % 400) == 0)
    {
        answer= true;
    }
    else
    {
        if (((input_year % 4) == 0) && ((input_year % 100) != 0))
        {
            answer= true;
        }
    }
    return answer;
}

let pId,textId;
for (let yearIdx = 2020; yearIdx <= 2030; yearIdx++)
{
    pId= document.createElement("P");
    if (isBisextil(yearIdx) == true)
        {
            pId.classList.add("red-color");
        }
    textId= document.createTextNode(yearIdx);   
    pId.appendChild(textId);
    document.body.appendChild(pId);
}

