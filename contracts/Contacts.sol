// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Contacts {
    uint public count = 0; // state variable

    struct Contact {
        uint id;
        string onnx;
        string model;
        string aasx;
        string pt;
    }

    constructor() {
        createContact(
            'https://ipfs.io/ipfs/QmWwDtubC632R6mdRet5YL4uxMz6NCZuPusaZnyM7aK7wr?filename=GripperAction.onnx',
            'https://ipfs.io/ipfs/QmP2hV9dod9sE4cqHLnzG1RCWainquDGKqNGUtecUnGZu6?filename=DeltaRobot_detection_model.engine',
            'https://ipfs.io/ipfs/QmTVDd8SMw2atDWXPdp4UkpqaxcGk2dWrCeN72FJMmqsCa?filename=DeltaRobotDPP_information.aasx',
            'https://ipfs.io/ipfs/QmRKRnnES4NMmiAZW18Z1tifcVeKp3WBiDQTwxqZyFL8aB?filename=DeltaRobot_Part_Detection.pt'
        );
    }

    mapping(uint => Contact) public contacts;

    function createContact(
        string memory _onnx,
        string memory _model,
        string memory _aasx,
        string memory _pt
    ) public {
        count++;
        contacts[count] = Contact(count, _onnx, _model, _aasx, _pt);
    }
}
