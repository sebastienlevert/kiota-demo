import {Msdyn_decisionruleset} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_decisionrulesetFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_decisionruleset {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_decisionruleset();
}
