import {Msdyn_datainsightsandanalyticsfeature} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_datainsightsandanalyticsfeatureFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_datainsightsandanalyticsfeature {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_datainsightsandanalyticsfeature();
}
