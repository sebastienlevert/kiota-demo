import {Lead} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLeadFromDiscriminatorValue(parseNode: ParseNode | undefined) : Lead {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Lead();
}
