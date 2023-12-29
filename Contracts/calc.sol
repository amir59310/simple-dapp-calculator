// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract calc {
    uint public num1;
    uint public num2;
    uint public showResultmultiplication;
    uint public showResultPlus;
    uint public showResultMinus;
    uint public showResultDivision;

    ///partions GetNum

    //@ Get First Number
    function getNum1(uint _num1) public {
        num1 = _num1;
    }

    //@ Get Seconds Number
    function getNum2(uint _num2) public {
        num2 = _num2;
    }


    ///.... Partions Processing ....


            //@ processing multiplication Number ...
            function multiplication() public {
                showResultmultiplication = num1 * num2;
            }

            //@ processing Division Number ...
            function Division() public {
                showResultDivision = num1 / num2;
            }

            //@processing Puls Number...
            function Pluse() public {
                showResultPlus = num1 + num2;
            }

            //@processing Minus Number...
            function Minus() public {
                showResultMinus = num1 - num2;
            }

            //@ Show Result Aditonality
            function resultZarb() public view returns (uint) {
                return showResultmultiplication;
            }



    ///Partions Show Result
    //@ Show Result Plus
    function resultPlus() public view returns (uint) {
        return showResultPlus;
    }

    //@ Show Result Minus
    function resultMinus() public view returns (uint) {
        return showResultMinus;
    }

    //@ Show Result Division
    function resultDivision() public view returns (uint) {
        return showResultDivision;
    }
}
