import {Flowmachine} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFlowmachineFromDiscriminatorValue(parseNode: ParseNode | undefined) : Flowmachine {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Flowmachine();
}
