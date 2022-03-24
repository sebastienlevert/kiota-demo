import {Msdyn_dataanalyticsreport_fs} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_fsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_fs {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_fs();
}
