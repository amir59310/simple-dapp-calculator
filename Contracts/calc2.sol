// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract calc2 {
    uint public num1;
    uint public num2;
    uint public showResultmultiplication;
    uint public showResultPlus;
    uint public showResultMinus;
    uint public showResultDivision;

    ///partions GetNum

    //@ Get First Number
    function setNum1(uint _num1) public {
        num1 = _num1;
    }

    //@ Get Seconds Number
    function setNum2(uint _num2) public {
        num2 = _num2;
    }


    ///.... Partions Processing ....


            //@ processing multiplication Number ...
            function multiplication() public returns(uint) {
                showResultmultiplication = num1 * num2;
                return showResultmultiplication;
            }

            //@ processing Division Number ...
            function Division() public returns(uint){
                showResultDivision = num1 / num2;
                return showResultDivision;
                
            }

            //@processing Puls Number...
            function Pluse() public returns(uint) {
                showResultPlus = num1 + num2;
                return showResultPlus;
            }

            //@processing Minus Number...
            function Minus() public returns(uint) {
                showResultMinus = num1 - num2;
                return showResultMinus;
            }

}

