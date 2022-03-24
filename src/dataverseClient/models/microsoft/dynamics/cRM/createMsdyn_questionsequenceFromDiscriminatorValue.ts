import {Msdyn_questionsequence} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_questionsequenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_questionsequence {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_questionsequence();
}
