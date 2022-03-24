import {Msdyn_oclanguage} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_oclanguageFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_oclanguage {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_oclanguage();
}
