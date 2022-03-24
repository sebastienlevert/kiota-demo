import {Msdyn_urnotificationtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_urnotificationtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_urnotificationtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_urnotificationtemplate();
}
