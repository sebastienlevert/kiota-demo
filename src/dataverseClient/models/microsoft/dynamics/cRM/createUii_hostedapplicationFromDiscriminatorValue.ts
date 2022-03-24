import {Uii_hostedapplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_hostedapplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_hostedapplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_hostedapplication();
}
