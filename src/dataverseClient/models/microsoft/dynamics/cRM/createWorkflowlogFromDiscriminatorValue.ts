import {Workflowlog} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowlogFromDiscriminatorValue(parseNode: ParseNode | undefined) : Workflowlog {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Workflowlog();
}
