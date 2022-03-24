import {Msdyn_templateparameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_templateparameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_templateparameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_templateparameter();
}
