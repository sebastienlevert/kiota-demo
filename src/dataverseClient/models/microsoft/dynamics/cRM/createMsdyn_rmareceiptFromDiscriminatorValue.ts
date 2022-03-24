import {Msdyn_rmareceipt} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rmareceiptFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rmareceipt {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rmareceipt();
}
