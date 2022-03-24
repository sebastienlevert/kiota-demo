import {Msdyn_teamschannelengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_teamschannelengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_teamschannelengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_teamschannelengagementctx();
}
