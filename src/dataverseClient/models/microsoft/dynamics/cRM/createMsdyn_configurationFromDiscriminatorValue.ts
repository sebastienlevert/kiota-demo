import {Msdyn_configuration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_configurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_configuration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_configuration();
}
