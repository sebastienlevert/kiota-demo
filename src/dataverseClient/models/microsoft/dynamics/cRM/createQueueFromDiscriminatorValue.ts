import {Queue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createQueueFromDiscriminatorValue(parseNode: ParseNode | undefined) : Queue {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Queue();
}
