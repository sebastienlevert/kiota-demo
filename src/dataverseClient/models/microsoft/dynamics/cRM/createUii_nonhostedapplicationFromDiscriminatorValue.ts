import {Uii_nonhostedapplication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUii_nonhostedapplicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Uii_nonhostedapplication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Uii_nonhostedapplication();
}
