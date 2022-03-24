import {Workflowbinary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowbinaryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Workflowbinary {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Workflowbinary();
}
