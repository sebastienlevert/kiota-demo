import {Msdyn_dataanalyticsreport_oc} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_ocFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_oc {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_oc();
}
