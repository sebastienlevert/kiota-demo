import {Msdyn_scheduleboardsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_scheduleboardsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_scheduleboardsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_scheduleboardsetting();
}
