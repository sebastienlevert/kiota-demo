import {Principalentitymap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrincipalentitymapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Principalentitymap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Principalentitymap();
}
