import {Attribute} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Attribute {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Attribute();
}
