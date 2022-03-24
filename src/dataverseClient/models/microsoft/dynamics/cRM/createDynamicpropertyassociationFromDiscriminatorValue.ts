import {Dynamicpropertyassociation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDynamicpropertyassociationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Dynamicpropertyassociation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Dynamicpropertyassociation();
}
