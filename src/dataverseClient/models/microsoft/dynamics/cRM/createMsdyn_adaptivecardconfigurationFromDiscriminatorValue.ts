import {Msdyn_adaptivecardconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_adaptivecardconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_adaptivecardconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_adaptivecardconfiguration();
}
