import {Solutioncomponent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutioncomponentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Solutioncomponent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Solutioncomponent();
}
