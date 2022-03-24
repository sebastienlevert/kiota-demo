import {Activitymonitor} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivitymonitorFromDiscriminatorValue(parseNode: ParseNode | undefined) : Activitymonitor {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Activitymonitor();
}
