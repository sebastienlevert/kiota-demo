import {Msdyn_dataanalyticsreport_csrmanager} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_csrmanagerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_csrmanager {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_csrmanager();
}
