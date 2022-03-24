import {Msdyn_facebookengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_facebookengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_facebookengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_facebookengagementctx();
}
