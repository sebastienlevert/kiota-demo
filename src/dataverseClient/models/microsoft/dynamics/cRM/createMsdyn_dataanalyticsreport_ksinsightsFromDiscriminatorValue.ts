import {Msdyn_dataanalyticsreport_ksinsights} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_dataanalyticsreport_ksinsightsFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_dataanalyticsreport_ksinsights {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_dataanalyticsreport_ksinsights();
}
