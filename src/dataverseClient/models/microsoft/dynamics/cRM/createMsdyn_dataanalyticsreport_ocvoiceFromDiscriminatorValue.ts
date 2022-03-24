import {Msdyn_dataanalyticsreport_ocvoice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_ocvoiceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_ocvoice {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_ocvoice();
}
