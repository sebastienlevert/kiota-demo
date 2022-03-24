import {Msdyn_timegroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_timegroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_timegroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_timegroup();
}
