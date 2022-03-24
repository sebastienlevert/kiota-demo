import {Msdyn_resourcepaytype} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_resourcepaytypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_resourcepaytype {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_resourcepaytype();
}
