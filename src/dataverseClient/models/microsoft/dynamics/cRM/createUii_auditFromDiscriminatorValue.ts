import {Uii_audit} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_auditFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_audit {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_audit();
}
