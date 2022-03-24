import {Contractdetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContractdetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : Contractdetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Contractdetail();
}
