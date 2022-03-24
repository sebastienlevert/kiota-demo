import {Leadtoopportunitysalesprocess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeadtoopportunitysalesprocessFromDiscriminatorValue(parseNode: ParseNode | undefined) : Leadtoopportunitysalesprocess {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Leadtoopportunitysalesprocess();
}
