import {Uii_sessiontransfer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_sessiontransferFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_sessiontransfer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_sessiontransfer();
}
