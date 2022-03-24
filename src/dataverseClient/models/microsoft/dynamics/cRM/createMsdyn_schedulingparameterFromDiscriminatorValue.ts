import {Msdyn_schedulingparameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_schedulingparameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_schedulingparameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_schedulingparameter();
}
