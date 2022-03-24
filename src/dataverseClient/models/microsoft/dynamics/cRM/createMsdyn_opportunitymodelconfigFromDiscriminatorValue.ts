import {Msdyn_opportunitymodelconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_opportunitymodelconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_opportunitymodelconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_opportunitymodelconfig();
}
