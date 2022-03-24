import {Msdyn_orderinvoicingdate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_orderinvoicingdateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_orderinvoicingdate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_orderinvoicingdate();
}
