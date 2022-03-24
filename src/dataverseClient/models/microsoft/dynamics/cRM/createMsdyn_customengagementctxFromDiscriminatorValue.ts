import {Msdyn_customengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_customengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_customengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_customengagementctx();
}
