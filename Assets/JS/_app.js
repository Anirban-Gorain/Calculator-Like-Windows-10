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

const _key_Style = document.querySelectorAll("._key_Style");
const _current_Screen = document.querySelector("#_current_Screen span");
const _history_Screen = document.querySelector("#_history_Screen span");

// This function will append data to the current screen.

function _inserter(_which_Key)
{
   
    _store_Expressions = _current_Screen.innerHTML;

    // The current screen number length can't be grater by 16.
    if (_store_Expressions.length < 16)
    {
        
        if (_store_Expressions.length == 1 && _store_Expressions[0] == "0")
        {
            
            _current_Screen.innerHTML = "";
            _store_Expressions = [];

        }

        _current_Screen.append(_which_Key);
        
         // Assign which value currently appended.
        
        

        

    }

    let _current_Screen_Text = _current_Screen.innerText;
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

            console.log('.');

            break;

        case "Enter":

            console.log('Enter');

            break;

        case '+':

            console.log('+');

            break;

        case '-':

            console.log('-');

            break;

        case '*':

            console.log('*');

            break;

        case '/':

            console.log('/');

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

    _store_Expressions = _current_Screen;

}

// Backspace functionality

function _backspace()
{   

    _store_Expressions.pop();

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