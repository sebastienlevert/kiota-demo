import {Msdyn_inspectionattachment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inspectionattachmentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inspectionattachment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inspectionattachment();
}
