import {Msdyn_notificationfield} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_notificationfieldFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_notificationfield {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_notificationfield();
}
