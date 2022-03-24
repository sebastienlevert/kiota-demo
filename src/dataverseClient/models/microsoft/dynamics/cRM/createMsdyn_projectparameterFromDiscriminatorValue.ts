import {Msdyn_projectparameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projectparameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projectparameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projectparameter();
}
