import {Msdyn_iotprovider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotproviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotprovider {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotprovider();
}
