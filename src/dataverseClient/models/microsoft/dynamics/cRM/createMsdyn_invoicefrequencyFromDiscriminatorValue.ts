import {Msdyn_invoicefrequency} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_invoicefrequencyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_invoicefrequency {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_invoicefrequency();
}
