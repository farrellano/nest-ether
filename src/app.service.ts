import { Injectable } from '@nestjs/common';
import { ethers } from "ethers";
import { tokenAbi } from "./abi/abiFasCoin";


@Injectable()
export class AppService {

  private readonly provider = new ethers.providers.JsonRpcProvider("<-api infura->");
  private readonly wallet = new ethers.Wallet("<-wallet->");
  private readonly tokenContract = new ethers.Contract("<-contrato coin->", tokenAbi, this.provider);

  constructor(){
    this.wallet= this.wallet.connect(this.provider)
  }

  async getSymbol(): Promise<string> {
    const symbol = await this.tokenContract.symbol();
    return symbol;
  }

  async getName(): Promise<string> {
    const name = await this.tokenContract.name();
    return name;
  }

  async getOwner(): Promise<string> {
    const owner = await this.tokenContract.owner();
    //const resolver = await provider.lookupAddress("");
    return owner;
  }

  eventTransfer() {
    this.tokenContract.on("Transfer",(from,to,value) => {console.log(from + " " + to + " " + value)})
  }

 async sendTransfer():Promise<string> {
  const tokenWithSigner = this.tokenContract.connect(this.wallet);
  return await tokenWithSigner.transfer("<-wallet transfer->",ethers.utils.parseEther("10.0"))
 }

}