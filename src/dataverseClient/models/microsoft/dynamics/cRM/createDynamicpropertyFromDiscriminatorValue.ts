import {Dynamicproperty} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDynamicpropertyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dynamicproperty {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dynamicproperty();
}
