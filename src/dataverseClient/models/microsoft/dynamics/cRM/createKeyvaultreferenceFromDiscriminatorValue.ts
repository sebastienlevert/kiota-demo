import {Keyvaultreference} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyvaultreferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Keyvaultreference {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Keyvaultreference();
}
