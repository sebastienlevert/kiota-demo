import {Msdyn_urnotificationtemplatemapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_urnotificationtemplatemappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_urnotificationtemplatemapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_urnotificationtemplatemapping();
}
