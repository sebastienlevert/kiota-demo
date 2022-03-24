import {Uii_workflow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_workflowFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_workflow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_workflow();
}
