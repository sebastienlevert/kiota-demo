import {Msdyn_inspectioninstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inspectioninstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inspectioninstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inspectioninstance();
}
