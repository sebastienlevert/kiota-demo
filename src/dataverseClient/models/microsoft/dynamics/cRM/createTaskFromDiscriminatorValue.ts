import {Task} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : Task {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Task();
}
