import {Uii_context} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_contextFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_context {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_context();
}
