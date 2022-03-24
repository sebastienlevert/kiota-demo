import {Msdyn_productivityactionoutputparameter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_productivityactionoutputparameterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_productivityactionoutputparameter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_productivityactionoutputparameter();
}
