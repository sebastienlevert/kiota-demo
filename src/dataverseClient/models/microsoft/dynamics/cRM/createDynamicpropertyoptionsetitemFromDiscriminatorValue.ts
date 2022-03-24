import {Dynamicpropertyoptionsetitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDynamicpropertyoptionsetitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dynamicpropertyoptionsetitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dynamicpropertyoptionsetitem();
}
