import {Msdyn_cdsentityengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_cdsentityengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_cdsentityengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_cdsentityengagementctx();
}
