import {Principal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : Principal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Principal();
}
