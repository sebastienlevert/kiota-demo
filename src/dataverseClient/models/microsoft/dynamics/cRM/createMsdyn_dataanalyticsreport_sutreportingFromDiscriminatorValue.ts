import {Msdyn_dataanalyticsreport_sutreporting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_sutreportingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_sutreporting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_sutreporting();
}
