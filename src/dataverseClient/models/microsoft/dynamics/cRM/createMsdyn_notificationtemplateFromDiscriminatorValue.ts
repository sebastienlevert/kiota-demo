import {Msdyn_notificationtemplate} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_notificationtemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_notificationtemplate {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_notificationtemplate();
}
