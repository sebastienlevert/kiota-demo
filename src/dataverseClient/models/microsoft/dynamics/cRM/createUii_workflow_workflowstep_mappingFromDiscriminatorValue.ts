import {Uii_workflow_workflowstep_mapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_workflow_workflowstep_mappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_workflow_workflowstep_mapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_workflow_workflowstep_mapping();
}
