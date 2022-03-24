import {Queueitem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueueitemFromDiscriminatorValue(parseNode: ParseNode | undefined) : Queueitem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Queueitem();
}
