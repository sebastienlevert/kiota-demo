import {Msdyn_salesassignmentsetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_salesassignmentsettingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_salesassignmentsetting {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_salesassignmentsetting();
}
