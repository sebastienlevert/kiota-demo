import {Msdyn_propertylog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_propertylogFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_propertylog {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_propertylog();
}
