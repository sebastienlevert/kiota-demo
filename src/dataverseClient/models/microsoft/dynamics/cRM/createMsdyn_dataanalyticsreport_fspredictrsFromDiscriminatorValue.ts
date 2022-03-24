import {Msdyn_dataanalyticsreport_fspredictrs} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_fspredictrsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_fspredictrs {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_fspredictrs();
}
