import {Msdyn_solutionhealthrule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_solutionhealthruleFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_solutionhealthrule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_solutionhealthrule();
}
