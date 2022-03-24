import {Msdyn_solutionhealthruleargument} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_solutionhealthruleargumentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_solutionhealthruleargument {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_solutionhealthruleargument();
}
