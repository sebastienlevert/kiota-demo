import {Msdyn_timeoffcalendar} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_timeoffcalendarFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_timeoffcalendar {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_timeoffcalendar();
}
