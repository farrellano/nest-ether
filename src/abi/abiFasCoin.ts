export const tokenAbi = 
    [
       // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",

    "function owner() view returns (address)",
  
    // Get the account balance
    "function balanceOf(address) view returns (uint)",
  
    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
  
    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
    ];

