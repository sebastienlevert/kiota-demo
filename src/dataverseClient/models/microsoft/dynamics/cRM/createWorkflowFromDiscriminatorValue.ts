import {Workflow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkflowFromDiscriminatorValue(parseNode: ParseNode | undefined) : Workflow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Workflow();
}
