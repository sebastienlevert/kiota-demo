import {Msdyn_soundnotificationsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_soundnotificationsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_soundnotificationsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_soundnotificationsetting();
}
