import {Msdyn_inspectionresponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_inspectionresponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_inspectionresponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_inspectionresponse();
}
