import {Msdyn_iotproviderinstance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotproviderinstanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotproviderinstance {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotproviderinstance();
}
