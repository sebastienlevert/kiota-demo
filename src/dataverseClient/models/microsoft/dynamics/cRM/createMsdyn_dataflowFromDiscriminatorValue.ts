import {Msdyn_dataflow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataflowFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataflow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataflow();
}
