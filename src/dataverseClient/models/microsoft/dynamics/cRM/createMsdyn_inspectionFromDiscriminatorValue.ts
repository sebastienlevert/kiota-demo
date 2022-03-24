import {Msdyn_inspection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inspectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inspection {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inspection();
}
