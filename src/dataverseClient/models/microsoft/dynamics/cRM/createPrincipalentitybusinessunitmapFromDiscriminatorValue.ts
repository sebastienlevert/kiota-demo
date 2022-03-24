import {Principalentitybusinessunitmap} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrincipalentitybusinessunitmapFromDiscriminatorValue(parseNode: ParseNode | undefined) : Principalentitybusinessunitmap {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Principalentitybusinessunitmap();
}
