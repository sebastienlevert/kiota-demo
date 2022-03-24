import {Msdyn_iotfieldmapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotfieldmappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotfieldmapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotfieldmapping();
}
