import {Contactinvoices} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactinvoicesFromDiscriminatorValue(parseNode: ParseNode | undefined) : Contactinvoices {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Contactinvoices();
}
