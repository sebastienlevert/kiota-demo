import {Picklistmapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPicklistmappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Picklistmapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Picklistmapping();
}
