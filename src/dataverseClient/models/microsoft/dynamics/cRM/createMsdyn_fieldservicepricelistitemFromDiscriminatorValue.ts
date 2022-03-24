import {Msdyn_fieldservicepricelistitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_fieldservicepricelistitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_fieldservicepricelistitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_fieldservicepricelistitem();
}
