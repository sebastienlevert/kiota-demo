import {Msdyn_iotpropertydefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_iotpropertydefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_iotpropertydefinition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_iotpropertydefinition();
}
