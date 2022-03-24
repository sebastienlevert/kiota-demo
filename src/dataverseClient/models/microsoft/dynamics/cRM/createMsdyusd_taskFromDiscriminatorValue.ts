import {Msdyusd_task} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyusd_taskFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyusd_task {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyusd_task();
}
