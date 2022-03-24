import {Msdyn_dataanalyticsreport_fspredictwhd} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_fspredictwhdFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_fspredictwhd {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_fspredictwhd();
}
