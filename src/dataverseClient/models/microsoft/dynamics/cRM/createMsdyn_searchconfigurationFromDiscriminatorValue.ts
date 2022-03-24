import {Msdyn_searchconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_searchconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_searchconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_searchconfiguration();
}
