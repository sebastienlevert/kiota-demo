import {Msdyn_decisioncontract} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_decisioncontractFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_decisioncontract {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_decisioncontract();
}
