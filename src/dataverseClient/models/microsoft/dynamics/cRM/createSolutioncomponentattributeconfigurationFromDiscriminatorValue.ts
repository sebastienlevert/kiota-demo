import {Solutioncomponentattributeconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutioncomponentattributeconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Solutioncomponentattributeconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Solutioncomponentattributeconfiguration();
}
