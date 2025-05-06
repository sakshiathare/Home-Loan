import { LocalAddress } from "./local-address";
import { PermanentAddress } from "./permanent-address";

export class CustomerAddress {
    aid!:number;
    localAddress!:LocalAddress;
    permanentAddress!:PermanentAddress;
}
