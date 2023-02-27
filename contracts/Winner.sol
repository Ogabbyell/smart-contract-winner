// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IContract {
    function attempt() external;
}

contract Winner {
    function emitWinner(address contractAddress) external {
        IContract(contractAddress).attempt();
    }
}


