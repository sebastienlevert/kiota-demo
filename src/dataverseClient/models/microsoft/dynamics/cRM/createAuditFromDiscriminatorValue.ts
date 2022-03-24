import {Audit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAuditFromDiscriminatorValue(parseNode: ParseNode | undefined) : Audit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Audit();
}
