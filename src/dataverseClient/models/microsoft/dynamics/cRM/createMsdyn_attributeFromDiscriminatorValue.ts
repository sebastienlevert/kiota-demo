import {Msdyn_attribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_attributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_attribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_attribute();
}
