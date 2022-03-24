import {Solutioncomponentrelationshipconfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSolutioncomponentrelationshipconfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Solutioncomponentrelationshipconfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Solutioncomponentrelationshipconfiguration();
}
