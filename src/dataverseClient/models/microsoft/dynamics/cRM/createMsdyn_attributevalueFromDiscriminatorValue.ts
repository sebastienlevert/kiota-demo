import {Msdyn_attributevalue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_attributevalueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_attributevalue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_attributevalue();
}
