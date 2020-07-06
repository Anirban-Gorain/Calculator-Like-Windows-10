# Calculator-Like-Windows-10
It is an arithmetic calculator for basic types of arithmetic operations like Add, Diff, Sub, Mul, Radical, Square, etc.

# Development setup:
1. Install and code editor (Like Vs-code, Atom, Sublime, etc).

# Git information:
As soon as having two branches one is "master" second one is "_Develop", To make your version you may make another branch or you should go _Develop branch and starting development.

# Code related information:
> ## _app.js:

**windows.onload:** In the onload event having the button click animation (Ripple effect).

**_history_Hide():** This function's seeing when the blue button on the document will have on history section will visible otherwise history section will not be invisible.

**_inserter(_which_Key):** The main task of this function is to take the numbers 0-9 from the user and display over there [**_which_Key** == 1/2/3/...].

**Line no 226 to 235:** This set of instructions will extract which key user pressing on the keyboard and according to the pressed key will define which argument will get **_inserter(_which_Key)** function.

**Line no 347 to 367:** This block of instructions related to the clear the calculator screen.

**_backspace():** I am explaining to you this function from top to down, First, If currently generated any operation's result then when the user will click on the backspace button then screen and some others elements will be clean. Inversely if didn't generate any result then in an array will do load the new fresh typed data then the last character will be removed from the array then the total array will be print.

**Line no 416 to 447:** This function work is a number +ve/-ve.  When the user clicks in this button first-time first number will be minus if press again the will be plus it works only for first number (Like **-2**+1, 2 is the first number).

**_decimal_Point():** The function contain **decimal-points** matter. First of all, this function will check can currently generate any result if yes then everything will be clean [Like the current-screen, history-screen, etc].
Then will be found from the rightmost side that where have **[+,-,*,/]** signs because in one **[+,-,*,/]** don't possible to mare than one **Decimal [.]** if all the conditions are passed then this decimal point will be added.

**_factorial():**  This function will determine the factorial of the given number, But before determining the factorial it will check some error cases if all the error cases a satisfied like a Bigger-number, Invalid-input, etc.

**_square_Root():** Work process is after fix as much as error cases. The function will find the **X^2** where x can be an integer.

**_one_By():** Work of this function is **One upon a number**, After finding the error cases it will find the value.

**_expression_Handler(id):**  As per the arguments this function will take the **id ** of which button clicked. After handling as much as possibles errors it will put the symbols like '+,-,/,*"

**_expression_Evaluator():**  First this function will work with errors after fix errors as much as possible. Will find the result help of the **eval()** function.

**_history_Manager(_permission = true, _data)** The work of this function is generate the history . The work of the two arguments is  **_permission = true** _permission is true by default when it will be the default/ true it will work with of the calculator's **_cureent_Screen** & **_history_Screen**. When it will be false it will work with sent by the **_data** arguments.

Then when it will be called will be generated three processes of div to contain **One history elements, Expressions, Result**.

Then will set the class names to place their appropriate position.

Then adding the click event over of the **Each history blocks**. Set some conditions to load the history on the calculator, **_all.checked, _only_Result. checked, else case** respectively. finally giving the value of each history block.
 
# Screenshort of this project

![Markdown Logo](https://github.com/Anirban-Gorain/Calculator-Like-Windows-10/blob/master/Assets/Images/_screenshort.png)
