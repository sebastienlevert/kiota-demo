import {Msdyn_lineengagementctx} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_lineengagementctxFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_lineengagementctx {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_lineengagementctx();
}
