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