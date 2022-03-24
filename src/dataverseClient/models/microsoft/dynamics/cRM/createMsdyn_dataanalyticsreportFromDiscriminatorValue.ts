import {Msdyn_dataanalyticsreport} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreportFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport();
}
