window.onload = function ()
{
    
    // Fetching where will be set the the ripple animation.
    let rippleElements = document.getElementsByClassName("_button_Animation");

    for (var _index = 0; _index < rippleElements.length; _index++)
    {

        rippleElements[_index].onclick = function (_event)
        {

            // Storing the cursor position.
            let _X_Axis = _event.pageX - this.offsetLeft;
            let _Y_Axis = _event.pageY - this.offsetTop;

            // Creating a div and setting _ripple class. 
            let _ripple_Div = document.createElement("div");
            _ripple_Div.classList.add('_ripple');
            
            // On the created element setting the top and left.
            _ripple_Div.setAttribute("style", "top:" + _Y_Axis + "px; left:" + _X_Axis + "px;");

            // Where will be the ripple animation on this div will be append this created div.
            this.appendChild(_ripple_Div);

            // After 500ms will be remove the created div.
            setTimeout(function ()
            {

                _ripple_Div.parentElement.removeChild(_ripple_Div);

            }, 500);

        }
    }
}

// History section visibility toggle.

function _history_Hide()
{
    
    const _history_Section = document.querySelector("#_history_Section");

    if (_history_Section.style.display === "none")
    {
        
        _history_Section.style.display = "block";

    }
    else
    {

        _history_Section.style.display = "none";

    }

}

// When user will click to the buttons, The appropriate character will be appear on the decorated screen.

let _store_Expressions = [];
let _store_Answer = 0;
let _can_Currently_Generated_Any_Result = false;

const _key_Style = document.querySelectorAll("._key_Style");
const _current_Screen = document.querySelector("#_current_Screen span");
const _history_Screen = document.querySelector("#_history_Screen span");

// This function will append data to the current screen.

function _inserter(_which_Key)
{

    let _current_Screen_Text = _current_Screen.innerText;
    _store_Expressions = _current_Screen_Text.split("");

    _history_Screen.innerText = "Ans = " + _store_Answer;

    if (_can_Currently_Generated_Any_Result == true)
    {

        _current_Screen.innerText = "";
        _store_Expressions = [];

        _can_Currently_Generated_Any_Result = false;
        
    }      

    // The current screen number length can't be grater by 16.
    
    if (_store_Expressions.length < 16)
    {
        
        if (_store_Expressions.length == 1 && _store_Expressions[0] == "0")
        {
            
            _current_Screen.innerHTML = "";
            _store_Expressions = [];

        }

        _current_Screen.append(_which_Key);
        
        
    }
    
    // Assign which value currently appended.

    _current_Screen_Text = _current_Screen.innerText;
    _store_Expressions = _current_Screen_Text.split("");

}

// One

const _one = document.querySelector("#_one");

_one.addEventListener("click",  function ()
{
 
    _inserter(1);

});

// Two

const _two = document.querySelector("#_two");

_two.addEventListener("click",  function ()
{
 
    _inserter(2);

});

// Three

const _three = document.querySelector("#_three");

_three.addEventListener("click",  function ()
{
 
    _inserter(3);

});

// Four

const _four = document.querySelector("#_four");

_four.addEventListener("click",  function ()
{
 
    _inserter(4);

});

// Five

const _five = document.querySelector("#_five");

_five.addEventListener("click",  function ()
{
 
    _inserter(5);

});

// Six

const _six = document.querySelector("#_six");

_six.addEventListener("click",  function ()
{
 
    _inserter(6);

});

// Seven

const _seven = document.querySelector("#_seven");

_seven.addEventListener("click",  function ()
{
 
    _inserter(7);

});

// Eight

const _eight = document.querySelector("#_eight");

_eight.addEventListener("click",  function ()
{
 
    _inserter(8);

});

// Nine

const _nine = document.querySelector("#_nine");

_nine.addEventListener("click",  function ()
{
 
    _inserter(9);

});

// Zero

const _zero = document.querySelector("#_zero");

_zero.addEventListener("click",  function ()
{
 
    _inserter(0);

});

// Now, When the user will press keys from the keyboard the should be working the calculator, So for this will be this code.

document.addEventListener("keydown", function (_event)
{
   
    // console.log(_event.key);
    switch (_event.key)
    {
        
        case '1':

            _inserter(1);

            break;

        case '2':

            _inserter(2);

            break;

        case '3':

            _inserter(3);

            break;

        case '4':

            _inserter(4);

            break;

        case '5':

            _inserter(5);

            break;

        case '6':

            _inserter(6);

            break;

        case '7':

            _inserter(7);

            break;

        case '8':

            _inserter(8);

            break;

        case '9':

            _inserter(9);

            break;

        case '0':

            _inserter(0);

            break;

        case '.':

            _decimal_Point();

            break;

        case "Enter":

            _expression_Evaluator();

            break;

        case '+':

            _expression_Handler("_addition");

            break;

        case '-':

            _expression_Handler("_subtraction");

            break;

        case '*':

            _expression_Handler("_multiplication");

            break;

        case '/':

            _expression_Handler("_division");

            break;

        case 'Backspace':

            _backspace();

            break;

        case 'c':

            _clear_Screen();

            break;

    }

});

// Clear functionality.

const _clear = document.querySelector("#_clear");

_clear.addEventListener("click", function ()
{

    _clear_Screen();
    
});

function _clear_Screen()
{

    _current_Screen.innerText = "0";
    _history_Screen.innerText = "";
    _store_Answer = 0;

    _store_Expressions = _current_Screen;

}

// Backspace functionality

function _backspace()
{   


    if (_can_Currently_Generated_Any_Result == true)
    {

        _current_Screen.innerText = "";
        _store_Expressions = [];

        _can_Currently_Generated_Any_Result = false;
        
    }  

    _store_Expressions.pop();

    _history_Screen.innerText = "Ans = " + _store_Answer;
    _current_Screen.innerHTML = "";
    _current_Screen.append(_store_Expressions.join(""));

    if((_store_Expressions.length == 0) || (_store_Expressions.length == 1 && _store_Expressions[0] == '-'))
    {

        _current_Screen.innerHTML = "0";

    }

}

const _backspace_Key = document.querySelector("#_backspace");

_backspace_Key.addEventListener("click", function ()
{

    _backspace();

});

// Plus or minus value

const _plus_Minus = document.querySelector("#_plus_Minus");

_plus_Minus.addEventListener("click", function ()
{

    let _current_Screen_Text = _current_Screen.innerText;
    _store_Expressions = _current_Screen_Text.split("");

    if(!(_store_Expressions.length == 1 && _store_Expressions[0] == '0'))
    {

        if (_store_Expressions[0] == '-')
        {
            
            _store_Expressions.splice(0, 1);
            _current_Screen.innerText = "";
            _current_Screen.innerText = _store_Expressions.join("");

        }
        else
        {

            _store_Expressions.unshift('-');
            _current_Screen.innerText = "";
            _current_Screen.innerText = _store_Expressions.join("");

        }

    }

});

// Decimal point.

const _dot = document.querySelector("#_dot");

_dot.addEventListener("click", function ()
{

    _decimal_Point();

});

function _decimal_Point()
{

    _history_Screen.innerText = "Ans = " + _store_Answer;

    if (_can_Currently_Generated_Any_Result == true)
    {

        _current_Screen.innerText = "";
        _store_Expressions = [];

        _can_Currently_Generated_Any_Result = false;
        
    }

    if (!(_store_Expressions.includes('.', 0)))
    {
        
        let _current_Screen_Text = _current_Screen.innerText;
        _store_Expressions = _current_Screen_Text.split("");

        _store_Expressions.push('.');
        _current_Screen.innerText = _store_Expressions.join("");

    }

}

// Factorial.

const _factorial_Button = document.querySelector("#_factorial")

_factorial_Button.addEventListener("click", function ()
{

    _factorial();

})

function _factorial()
{
    
    let _current_Screen_Number = Math.round(Number(_current_Screen.innerText));
    let _can_Data_Minus;

    if (_current_Screen_Number < 0)
    {
    
        _current_Screen_Number *= -1;
        _can_Data_Minus = true;


    }

    let _store_Factorial = 1;

    for (let _stop = 1; _stop <= _current_Screen_Number; _stop++)
    {
        
        _store_Factorial *= _stop;
        
    }

    // Printing the result.

    if(_can_Data_Minus == true)
    _store_Factorial *= -1

    // Printing the result.

    if(Number.isNaN(_current_Screen_Number))
    {

        _current_Screen.innerText = "Invalid input";
        _history_Screen.innerText = "Invalid input!" + " =";
        _store_Answer =  "Invalid input";

    }
    else
    {

        _current_Screen.innerText = _store_Factorial;
        _history_Screen.innerText = _store_Factorial + "! =";
        _store_Answer =  _store_Factorial;

    }

    _can_Currently_Generated_Any_Result = true;

}

// Square root.

let _square_Root_Button = document.querySelector("#_square_Root");

_square_Root_Button.addEventListener("click", function ()
{
 
    _square_Root();

});

function _square_Root()
{

    let _current_Screen_Number = Number(_current_Screen.innerText);

    // Printing the result.

    let _result = Math.sqrt(_current_Screen_Number);

    if(Number.isNaN(_result))
    {

        _current_Screen.innerText = "Invalid input";
        _history_Screen.innerText = '√' + "Invalid input" + " =";
        _store_Answer =  "Invalid input";

    }
    else
    {

        _current_Screen.innerText = _result;
        _history_Screen.innerText = '√' + _current_Screen_Number + " =";
        _store_Answer =  _result;

    }


    _can_Currently_Generated_Any_Result = true;

}

// X square.

const _x_Square_Button = document.querySelector("#_x_Square");

_x_Square_Button.addEventListener("click", function ()
{

    _x_Square();
        
});

function _x_Square()
{

    let _current_Screen_Number = Math.round(Number(_current_Screen.innerText));

    let _result = _current_Screen_Number * _current_Screen_Number;

    if(Number.isNaN(_result))
    {

        _current_Screen.innerText = "Invalid input";
        _history_Screen.innerHTML = "Invalid input" + "<sup>2</sup>" +" =";
        _store_Answer =  "Invalid input";

    }
    else
    {

        _current_Screen.innerText = _result;
        _history_Screen.innerHTML = _current_Screen_Number + "<sup>2</sup> =";
        _store_Answer =  _result;

    }

    _can_Currently_Generated_Any_Result = true;
    
}

// 1 By x

const _1_By_Button = document.querySelector("#_1_By");

_1_By_Button.addEventListener("click", function ()
{

    _one_By();
        
});

function _one_By()
{

    let _current_Screen_Number = Number(_current_Screen.innerText);

    let _result = 1/_current_Screen_Number;

    if(Number.isNaN(_result) || !Number.isFinite(_result))
    {

        _current_Screen.innerText = "Invalid input";
        _history_Screen.innerHTML = "1/Invalid input" +" =";
        _store_Answer =  "Invalid input";

    }
    else
    {

        _current_Screen.innerText = _result;
        _history_Screen.innerHTML = `1/${_current_Screen_Number} =`;
        _store_Answer =  _result;

    }

    _can_Currently_Generated_Any_Result = true;
    
}

// Expression handler
const _addition = document.querySelector("#_addition");
const _subtraction = document.querySelector("#_subtraction");
const _multiplication = document.querySelector("#_multiplication");
const _division = document.querySelector("#_division");

const _general_Expression_Array = ["#_addition", "#_subtraction", "#_multiplication", "#_division", "#_mod"];

// Adding click event in to all the id's which are contain by _general_Expression_Array;

for(let _index = 0, _store_Elements; _index < _general_Expression_Array.length; _index++)
{

    _store_Elements = document.querySelector(`${_general_Expression_Array[_index]}`);

    _store_Elements.addEventListener("click", function ()
    {
       
        _expression_Handler(this.id);
        // console.log(this.id);
        

    });

}

function _expression_Handler(id)
{

    _symbols = ['+', '-', '*', '/', '%'];
    _store_Expressions = _current_Screen.innerText.split("");
    let _length = _store_Expressions.length - 1;

    if(_store_Expressions.join("").toString().search("Invalid input") < 0)
    if(_length + 1 < 15)
    {

        for(let _index = 0; _index < 5; _index++)
        {
    
            // console.log(_store_Expressions.includes(_symbols[_index]), _symbols[_index]);
            if (_store_Expressions.includes(_symbols[_index], _length))
            {
    
                let _capture = _symbols[_index];
                _store_Expressions.splice(_store_Expressions.indexOf(_capture, _length), 1);
    
    
                break;
                
            }
    
        }
    
        switch (id)
        {
            case "_addition":
    
                _store_Expressions.push(_symbols[0]);
                
                break;
        
            case "_subtraction":
                
                _store_Expressions.push(_symbols[1]);
                
                break;
                
            case "_multiplication":
                    
                _store_Expressions.push(_symbols[2]);
                    
                break;
                    
            case "_division":
    
                _store_Expressions.push(_symbols[3]);
                
                break;

            case "_mod":

                _store_Expressions.push(_symbols[4]);

                break;
            
        }
    
        _current_Screen.innerText = _store_Expressions.join("");
        _can_Currently_Generated_Any_Result = false;

    }


}

// Expression evaluator.

const _result = document.querySelector("#_result");

_result.addEventListener("click", function ()
{

    // To update the value of _store_Expression.

    _store_Expressions = _current_Screen.innerText.split("");

    if(!(_store_Expressions[0] == 0 && _store_Expressions.length == 1))
    _expression_Evaluator();
    
});

function _expression_Evaluator()
{

    // All possible operators.
    
    _symbols = ['+', '-', '*', '/', '%'];

    // Check current's screen data is an expression or a Character's number only.

    {

        let _have_Or_Not;

        for(let _index = 0; _index < 5; _index++)
        {

            if (_store_Expressions.includes(_symbols[_index]))
            {
                
                let _length = _store_Expressions.length - 1;

                /*

                    Checking the expression right or not, How? 1+2+3+ this expression is wrong because the last value is missing
                    So the downward Ternary operator will check at the last have a number or sign only if number == true, if
                    not == false.

                */

                _have_Or_Not = (!(_store_Expressions.includes('N') || _store_Expressions.includes('I') || _store_Expressions.includes('i')) && isFinite(Number(_store_Expressions[_length]))) ? true: false;
                console.log(_have_Or_Not, _store_Expressions);

                if(_have_Or_Not == false)
                {

                    _current_Screen.innerText = "Invalid input";
                    _history_Screen.innerHTML = `${_store_Expressions.join("")} =`;
                    _store_Answer =  "Invalid input";
                    _can_Currently_Generated_Any_Result = true;

                    return -1;

                }

            }
            

        }
    }

    
    // Convert the expression into a string.

    let _string_Expression = _store_Expressions.join("").toString();

    // Evaluate the value of expressions.

    let _evaluate_Result = eval(_string_Expression);

    // Printing sections.

    _current_Screen.innerText = _evaluate_Result;
    _history_Screen.innerHTML = `${_string_Expression} =`;
    _store_Answer =  _evaluate_Result;

    _can_Currently_Generated_Any_Result = true;

}