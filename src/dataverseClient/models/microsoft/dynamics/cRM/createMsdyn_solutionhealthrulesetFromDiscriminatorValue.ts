import {Msdyn_solutionhealthruleset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_solutionhealthrulesetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_solutionhealthruleset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_solutionhealthruleset();
}
