import {Msdyn_rolecompetencyrequirement} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_rolecompetencyrequirementFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_rolecompetencyrequirement {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_rolecompetencyrequirement();
}
