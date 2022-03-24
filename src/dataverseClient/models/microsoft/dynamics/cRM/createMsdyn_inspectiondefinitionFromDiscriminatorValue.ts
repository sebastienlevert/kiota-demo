import {Msdyn_inspectiondefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inspectiondefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inspectiondefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inspectiondefinition();
}
