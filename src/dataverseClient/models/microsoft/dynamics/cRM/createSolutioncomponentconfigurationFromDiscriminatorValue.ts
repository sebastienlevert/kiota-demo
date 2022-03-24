import {Solutioncomponentconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutioncomponentconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Solutioncomponentconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Solutioncomponentconfiguration();
}
