import {Msdyn_property} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_propertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_property {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_property();
}
